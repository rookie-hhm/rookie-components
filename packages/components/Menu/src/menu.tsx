import { defineComponent, useAttrs, PropType, getCurrentInstance, type ComponentInternalInstance } from "vue";
import './index.scss'
import type { MenuItem } from './types'
import { toLine } from '../../../utils/format'
export default defineComponent({
  props: {
    data: {
      type: Array as PropType<MenuItem[]>,
      default () {
        return []
      }
    }
  },
  setup (props) {
    const $attrs = useAttrs()
    const app: ComponentInternalInstance | null = getCurrentInstance()
    const renderMenu = (menuList: MenuItem[]) => {
      // 如果有子元素 返回sub-item
      // 如果没有直接返回el-menu-item
      return menuList.map(menu => {
        menu.iconName = menu.icon ? app?.appContext.components[`el-icon${toLine(menu.icon!)}`] : ''
        const slots = {
          title: () => (
            <>
              { menu.iconName ? <menu.iconName /> : null }
              <span>{ menu.label }</span>
            </>
          )
        }
        if (menu.children && menu.children.length) {
          return (
            <el-sub-menu v-slots={ slots } index={menu.index}>
              { renderMenu(menu.children) }
            </el-sub-menu>
          )
        }
        return (
          <el-menu-item index={menu.index}>
            { menu.iconName ? <menu.iconName /> : null }
            <span>{ menu.label }</span>
          </el-menu-item>
        )
      })
    }

    return () => (
      <el-menu
        class="r-el-menu"
        { ...$attrs }
      >
        { renderMenu(props.data) }
      </el-menu>
    )
  }
})