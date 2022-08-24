<template>
  <el-menu
    v-bind="$attrs"
  >
    <template v-for="item in data" :key="item.index">
      <el-menu-item :index="item.index">
        <component v-if="item.icon" :is="`el-icon${toLine(item.icon)}`"></component>
        <template #title>{{ item.label }}</template>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang='ts' setup>
import { toLine } from '@/utils/format'
import { PropType, useAttrs } from 'vue';
import type { MenuItem } from './types'
const props = defineProps({
  data: {
    type: Array as  PropType<MenuItem[]>,
    default () {
      return []
    }
  }
})
console.log(props, 'props', useAttrs(), 'useAttrs()')
</script>

<style lang='scss' scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
