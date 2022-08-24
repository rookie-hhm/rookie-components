<template>
  <div>
    <r-choose-city @change="handleChange"></r-choose-city>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { CityInfo } from '@/components/ChooseCity/src/types';
const value = ref<string>('')
const handleChange = (data: CityInfo) => {
  console.log(data.name, 'name')
}
</script>

<style lang='scss' scoped>

</style>
