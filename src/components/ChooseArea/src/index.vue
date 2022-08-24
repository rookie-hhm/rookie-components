<template>
  <div>
    <el-select v-model="province" clearable>
      <el-option :value="item.name" v-for="item in provinceDataList" :key="item.code" :label="item.name"></el-option>
    </el-select>
    <el-select v-model="city" :disabled="!province" clearable>
      <el-option :value="item.name" v-for="item in cityDataList" :key="item.code" :label="item.name"></el-option>
    </el-select>
    <el-select v-model="area" :disabled="!province || !city" clearable>
      <el-option :value="item.name" v-for="item in areasDataList" :key="item.code" :label="item.name"></el-option>
    </el-select>
  </div>
</template>

<script lang='ts' setup>
import { ref, watch, PropType, onMounted } from 'vue'
import type { AreaItem, AreaResult } from './types'
import AllAreas from './data.json'

const props = defineProps({
  value: {
    type: Object as PropType<AreaResult>,
    default () {
      return {}
    }
  }
})

const provinceDataList = ref<AreaItem[]>(AllAreas)
const cityDataList = ref<AreaItem[]>([])
const areasDataList = ref<AreaItem[]>([])
const province = ref<string>('')
const city = ref<string>('')
const area = ref<string>('')
const emits = defineEmits(['update:value'])
const setDefaultValue = () => {
  const { province: originProvince, city: originCity, area: originArea } = props.value
  province.value = originProvince
  city.value = originCity
  area.value = originArea
  if (province.value) {
    setDefaultSelectList()
  }
}

const setDefaultSelectList = () => {
  const cityList = provinceDataList.value.find(item => item.name === province.value)!.children!
  cityDataList.value = cityList
  const areaList = cityDataList.value.find(item => item.name === city.value)!.children!
  areasDataList.value = areaList
}

onMounted(() => {
  // setDefaultValue()
})

watch(
  () => props.value,
  (newVal) => {
    setDefaultValue()
  },
  {
    immediate: true
  }
)

/* 监听 province */
watch(
  () => province.value,
  (newVal) => {
    if (newVal) {
      const cityList = provinceDataList.value.find(item => item.name === province.value)!.children!
      cityDataList.value = cityList
    }
    city.value = ''
    area.value = ''
  }
)

/** 监听city */
watch(
  () => city.value,
  (newVal) => {
    if (newVal) {
      const areaList = cityDataList.value.find(item => item.name === city.value)!.children!
      areasDataList.value = areaList
    }
    area.value = ''
  }
)

watch(
  () => area.value,
  (value) => {
    if (!value) return
    emits('update:value', { province: province.value, city: city.value, area: area.value })
  }
)


</script>

<style lang='scss' scoped>

</style>
