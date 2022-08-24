<template>
  <r-menu
    class="wrapper"
    router
    :data="menuData"
    :collapse="isCollapse"
  ></r-menu>
</template>

<script lang='ts' setup>
import type { MenuItem } from '@/components/Menu/src/types'
import { withDefaults, shallowRef } from 'vue';
const props = withDefaults(defineProps<{ isCollapse: boolean }>(), {
  isCollapse: true
})
const menuData = shallowRef<MenuItem[]>([
  {
    label: '首页',
    index: '/',
    disabled: true,
    icon: 'document'
  },
  {
    label: '图标选择器',
    index: '/choose-icon',
    icon: 'document'
  },
  {
    label: '地址选择器',
    index: '/choose-area',
    icon: 'document'
  },
  {
    label: '时间选择器',
    index: '/time',
    icon: 'document'
  },
  {
    label: '进度条',
    index: '/progress',
    icon: 'document'
  },
  {
    label: '城市选择器',
    index: '/choose-city',
    icon: 'document'
  },
  {
    label: '菜单',
    index: '/menu',
    icon: 'document'
  },
  {
    label: '表单',
    index: '/form',
    icon: 'document'
  },
  {
    label: '表格',
    index: '/table',
    icon: 'document'
  }
])

</script>

<style lang='scss' scoped>
.wrapper {
  // width: 200px;
}

</style>
