<template>
  <div>
    <r-choose-area v-model:value="result"></r-choose-area>
    {{ result }}
    <!-- <template v-if="result.provinceValue"> -->
      选择地址: {{ result.province }}--{{ result.city }}--{{ result.area }}
    <!-- </template> -->
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import type { AreaResult } from '@/components/ChooseArea/src/types'
const result = ref<AreaResult>({
  // province: '天津市',
  // city: '市辖区',
  // area: '南开区'
  province: '',
  city: '',
  area: ''
})
// const onChange = (result: AreaResult) => {
//   const { province, city, area } = result
//   provinceValue.value = province
//   cityValue.value = city
//   areaValue.value = area
// }
</script>

<style lang='scss' scoped>

</style>
