<template>
  <el-form 
    ref="formRef"
    :model="model"
    v-bind="$attrs"
  >
    <el-form-item
      v-bind="item.itemAttrs"
      :prop="item.prop"
      v-for="(item, index) in options"
      :key="index"
    >
      <template v-if="item.slotName">
        {{ item.slotName }}
        <slot :name="item.slotName" :row="item"></slot>
      </template>
      <template v-else>
        <component
          :is="`el-${item.type}`"
          v-bind="item.attrs"
          v-model:[generateModelKey(item.modelKey)]="model[item.prop!]"
        >
          <template
            v-if="item.children && item.children.length"
            v-for="(child, childIndex) in item.children"
            :key="childIndex"
          >
            <component
              v-if="item.children && item.children.length"
              :is="`el-${child.type}`"
              v-bind="child.attrs"
              :value="child.value"
            >
            </component>
          </template>
        </component>
      </template>
    </el-form-item>
  </el-form>
</template>

<script lang='ts' setup>
import { PropType, onMounted, ref, nextTick } from 'vue';
import { FormItem } from '../types/index'
import type { FormInstance } from 'element-plus'
const props = defineProps({
  options: {
    type: Array as PropType<FormItem[]>
  },
  model: {
    type: Object,
    default () {
      return {}
    }
  }
})
const generateModelKey = (modelKey?: string) => {
  return modelKey || 'modelValue'
}
const formRef = ref<FormInstance | null>(null)
defineExpose({
  formRef
})
onMounted(() => {
  console.log(formRef.value?.$options, 'form.value')
  nextTick(() => {
    
  })
})

</script>

<style lang='scss' scoped>

</style>
