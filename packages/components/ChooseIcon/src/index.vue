<template>
  <div class="choose-icon-wrapper">
    <el-button @click="handleClick">
      <slot></slot>
    </el-button>
    <el-dialog v-model="dialogVisible" :title="title" append-to-body>
      <div class="icons-wrapper">
        <div class="item" v-for="key in keys" :key="key" @click="copy(key)">
          <el-icon :size="14">
            <component :is="`el-icon${toLine(key)}`"></component>
          </el-icon>
          <span class="name">{{ key }}</span>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script lang='ts' setup>
import { toLine } from '../../../utils/format'
import { withDefaults, watch, ref } from 'vue';
import useCopy from '../../../hooks/useCopy'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const keys = ref<string[]>(Object.keys(ElementPlusIconsVue))
const props = withDefaults(defineProps<{
  visible: boolean
  title: string
}>(), {
  visible: false,
  title: ''
})
const copy = (key: string) => {
  useCopy(`el-icon${toLine(key)}`)
}

const dialogVisible = ref<boolean>(false)
const emits = defineEmits(['update:visible'])
watch(
  () => props.visible,
  // value => emits('update:visible', value)
  (value) => dialogVisible.value = value
)

watch(
  () => dialogVisible.value,
  (val) => emits('update:visible', val)
)
const handleClick = () => {
  emits('update:visible', !props.visible)
}
</script>

<style lang='scss' scoped>
:deep(.el-dialog) {
  .el-dialog__body {
    overflow-y: auto;
    max-height: 500px;
  }
}
.icons-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  overflow-y: auto;
  max-height: 500px;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    .name {
      margin-top: 10px;
    }
  }
}
</style>
