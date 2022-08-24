<template>
  <div>
    <r-progress :percentage="percentage" :isAnimation="true"></r-progress>
    <div @click="change">change</div>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
const percentage = ref<number>(100)
const change = () => {
  percentage.value = 40
}
</script>

<style lang='scss' scoped>

</style>
