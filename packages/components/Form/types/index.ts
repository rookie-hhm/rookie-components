import { RuleItem } from './rules'
import { DeepPartial } from '../../../types/utils'
// export type FormItem = {
//   // 组件类型
//   type: 'cascader' | 'checkbox' | 'checkbox-group' | 'checkbox-button' | 'color-picker' |
//   'date-picker' | 'input' | 'input-number' | 'radio' | 'radio-group' | 'radio-button' | 'rate' |
//   'select' | 'option' | 'slider' | 'switch' | 'time-picker' | 'time-select' |
//   'transfer' | 'upload' | 'editor'
//   // 自定义插槽名称
//   slotName?: string
//   value?: any
//   prop?: string
//   // 表单组件属性
//   attrs?: {
//     [key: string]: any
//   },
//   // el-form-item 属性
//   itemAttrs?: Partial<{
//     label: string
//     rules: RuleItem | RuleItem[]
//     'label-width': string | number
//     required: boolean
//     error: string
//     'show-message': boolean
//     'inline-message': boolean
//     size: 'large' | 'default' | 'small'
//   }>
//   children?: FormItem[]
// }
export type OriginFormItem = {
  // 组件类型
  type: 'cascader' | 'checkbox' | 'checkbox-group' | 'checkbox-button' | 'color-picker' |
  'date-picker' | 'input' | 'input-number' | 'radio' | 'radio-group' | 'radio-button' | 'rate' |
  'select' | 'option' | 'slider' | 'switch' | 'time-picker' | 'time-select' |
  'transfer' | 'upload' | 'editor'
  // v-model:[modelKey] 默认绑定的值
  modelKey?: string
  // 自定义插槽名称
  slotName: string
  value?: any
  prop: string
  // 组件绑定事件
  on: {
    [key: string]: Function
  }
  // 表单组件属性
  attrs: {
    [key: string]: any
  },
  // el-form-item 属性
  itemAttrs: {
    label: string
    rules: RuleItem | RuleItem[]
    'label-width': string | number
    required: boolean
    error: string
    'show-message': boolean
    'inline-message': boolean
    size: 'large' | 'default' | 'small'
  }
  children?: FormItem[]
}

// export type FormItem = DeepPartial<Omit<OriginFormItem, 'type'>> & Pick<OriginFormItem, 'type'>
export type FormItem = DeepPartial<Omit<OriginFormItem, 'type' | 'value' | 'children'>> & Pick<OriginFormItem, 'type' | 'value' | 'children'>