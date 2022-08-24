<template>
  <!-- <div class="choose-city-wrapper"> -->
  <el-popover
    placement="bottom-start"
    :width="400"
    trigger="click"
  >
    <template #reference>
      <el-button style="margin-right: 16px">Click to activate</el-button>
    </template>
    <!-- 内容 -->
    <el-row class="select-wrapper">
      <el-col :span="12">
        <el-radio-group v-model="selectType">
          <el-radio-button label="按城市" />
          <el-radio-button label="按省份" />
        </el-radio-group>
      </el-col>
      <el-col :span="12">
        <el-select 
          v-model="selectedCityValue"
          filterable
          placeholder="Select"
          :filter-method="filterMethod"
        >
          <el-option
            v-for="item in cityOptions"
            :key="item.id"
            :label="item.name"
            :value="item.id"
            @change="handleSelectChange"
          />
        </el-select>
      </el-col>
    </el-row>
    <div class="content-wrapper">
      <!-- 标签 -->
      <div class="tag-list">
        <div class="tag-item" v-for="(tag, index) in tagList" :key="index" @click="handleClick(tag)">{{ tag }}</div>
      </div>
      <el-scrollbar class="scrollbar" max-height="300px">
        <!-- 城市名 -->
        <div class="city-list" v-if="selectType === '按城市'">
          <template v-for="([key, values], index) in Object.entries(cityData)" :key="index">
            <el-row class="item" :id="key">
              <span class="key">{{ key }}</span>
              <ul class="list">
                <li
                  class="city-item"
                  v-for="(cityInfo, cityIndex) in values"
                  :key="cityIndex"
                  @click="handleSelect(cityInfo)">
                  {{ cityInfo.name }}
                </li>
              </ul>
            </el-row>
          </template>
        </div>
      </el-scrollbar>
      <el-scrollbar class="scrollbar" max-height="300px">
        <div class="city-list" v-if="selectType === '按省份'">
          <template v-for="(item, index) in Object.values(provinceData)" :key="index">
            <el-row class="item" :id="provinceInfo.id" v-for="(provinceInfo, provinceIndex) in item" :key="provinceIndex">
              <span class="key">{{ provinceInfo.name }}</span>
              <ul class="list">
                <li
                  class="city-item"
                  v-for="(cityInfo, cityIndex) in provinceInfo.data"
                  :key="cityIndex"
                  @click="handleProvinceSelect(cityInfo)">
                  {{ cityInfo }}
                </li>
              </ul>
            </el-row>
          </template>
        </div>
      </el-scrollbar>
    </div>
    <!-- 按城市选择 -->
    <!-- 按省份选择 -->
  </el-popover>
  <!-- </div> -->
</template>

<script lang='ts' setup>
import { Cities, Provinces, SelectType, CityInfo } from './types';
import cityData from '../lib/city'
import provinceData from '../lib/province.json'
import { ref, computed, watch, onMounted } from 'vue';
import city from '../lib/city';
// 全部的选项
const originCityOptions = Object.values(cityData).flat(2)
const visible = ref<boolean>(false)
const cityList = ref<Cities>(cityData)
const provinceList = ref<Provinces>(provinceData)
const cityValue = ref<string>('')
const selectType = ref<SelectType>('按城市')
const selectedCityValue = ref<string>('')
const cityOptions = ref<CityInfo[]>([])

const emits = defineEmits(['change'])
const tagList = computed<string[]>(() => {
  return selectType.value === '按城市'
    ? Object.keys(cityData)
    : Object.keys(provinceData)
})

const handleClick = (id: string) => {
  const el = document.getElementById(id)
  el && el.scrollIntoView()
}

const handleSelect = (data: CityInfo) => {
  cityValue.value = (data).name
  emits('change', data)
  visible.value = false
}

const handleProvinceSelect = (data: string) => {
  cityValue.value = data as string
  visible.value = false
  emits('change', { name: data })
}

const filterMethod = (value: any) => {
  if (selectType.value === '按城市') {
    cityOptions.value = originCityOptions.filter(item => {
      const { spell, name } = item
      return spell.includes(value) ||  name.includes(value)
    })
  } else {
    cityOptions.value = originCityOptions.filter(item => item.name.includes(value))
  }
}

const handleSelectChange = (value: CityInfo) => {
  cityValue.value = value.name
  visible.value = false
  emits('change', value)
}

onMounted(() => {
  cityOptions.value = originCityOptions
})
watch(
  visible,
  () => {
    console.log('watch visible')
  }
)
</script>

<style lang='scss' scoped>
.select-wrapper {

}

.content-wrapper {
  margin-top: 10px;
  .tag-list {
    display: flex;
    flex-wrap: wrap;
    .tag-item {
      padding: 4px;
      margin-right: 5px;
      margin-bottom: 5px;
      border: 1px solid #eee;
      border-radius: 5px;
      cursor: pointer;
    }
  }
  .scrollbar {
    .city-list {
      .item {
        display: flex;
        justify-content: flex-start;
        &:not(:first-child) {
          margin-top: 5px;
        }
        .key {
          flex: 0 0 50px;
        }
        .list {
          flex: 1;
          display: flex;
          list-style: none;
          flex-wrap: wrap;
          .city-item {
            padding: 4px;
            margin-right: 5px;
            margin-bottom: 5px;
            border: 1px solid #eee;
            border-radius: 5px;
            cursor: pointer;
          }
        }
      }
    }
  }
}

</style>
