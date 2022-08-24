export interface AreaResult {
  province: string
  city: string
  area: string
}

export type AreaItem = {
  code: string
  name: string
  children?: AreaItem[]
}