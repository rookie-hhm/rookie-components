<template>
  <span class="collapse-btn" @click="toggle">
    <el-icon :size="20">
      <el-icon-expand v-if="!props.isCollapse"></el-icon-expand>
      <el-icon-fold v-else></el-icon-fold>
    </el-icon>
  </span>
</template>

<script lang='ts' setup>
import { withDefaults } from 'vue';
const props = withDefaults(defineProps<{ isCollapse: boolean }>(), {
  isCollapse: true
})
const emits = defineEmits(['update:isCollapse'])
const toggle = () => {
  emits('update:isCollapse', !props.isCollapse)
}
</script>

<style lang='scss' scoped>
.collapse-btn {
  cursor: pointer;
}
</style>
