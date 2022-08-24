<template>
  <div>
    <r-menu
      :defaultActive="defaultActive"
      :data="menuData"
      background-color="#fff2a2"
      router>
    </r-menu>
  </div>
</template>

<script lang='ts' setup>
import type { MenuItem } from '@/components/Menu/src/types'
import { ref, shallowRef } from 'vue';
const defaultActive = ref<string>('#abd123')
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
    icon: 'document',
    children: [
      {
        label: '图标选择器',
        index: '/choose-icon',
        icon: 'document',
        children: [
          {
            label: '首页',
            index: '/',
            icon: 'document'
          }
        ]
      }
    ]
  }
])
</script>

<style lang='scss' scoped>

</style>
