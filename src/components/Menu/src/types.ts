export type MenuItem = {
  index: string | null
  label?: string
  icon?: string
  iconName?: any
  route?: object
  disabled?: boolean
  children?: MenuItem[]
}