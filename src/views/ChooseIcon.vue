<template>
  <div>
    <r-choose-icon :title="title" v-model:visible="visible">点击按钮进行选择</r-choose-icon>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
// import ChooseIcon from '@/components/ChooseIcon/index.vue';
const title = ref<string>('选择图标')
const visible = ref<boolean>(false)
</script>

<style lang='scss' scoped>

</style>
