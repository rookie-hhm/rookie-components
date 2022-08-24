<template>
  <div>
    <el-progress v-bind="$attrs" :percentage="currentPercentage"></el-progress>
  </div>
</template>

<script lang='ts' setup>
import { onMounted, ref, watch } from 'vue';
type TimeStamp = number | null | undefined
const props = defineProps({
  percentage: {
    type: Number,
    default: 0
  },
  isAnimation: {
    type: Boolean
  },
  animationDuration: {
    type: Number,
    default: 1000
  }
})
let startTime: TimeStamp = undefined, diff: number = 0, symbol: -1 | 1 = 1
let preValue: number = 0
const step = (timestamp: number) => {
  if (!startTime) {
    startTime = timestamp
  }
  const elapsed = timestamp - startTime
  const value = Math.abs(Math.floor((elapsed / props.animationDuration) * diff))
  let newVal = value
  if (preValue) {
    newVal = value - preValue
  }
  preValue = value
  currentPercentage.value += Math.floor(newVal) * symbol
  if (elapsed < props.animationDuration) {
    requestAnimationFrame(step)
  } else {
    currentPercentage.value = props.percentage
    cancelAnimationFrame(raf as number)
  }
}
let raf: TimeStamp = null
const updatePercentage = (end: number | undefined) => {
  if (end) {
    diff = props.percentage - currentPercentage.value
    symbol = diff >= 0 ? 1 : -1
    raf = requestAnimationFrame(step)
  }
}
const resetPercentage = () => {
  raf && cancelAnimationFrame(raf)
  preValue = 0
  startTime = 0
  raf = null
}
// 监听
const currentPercentage = ref(0)
onMounted(() => {
  if (props.isAnimation) {
    updatePercentage(props.percentage)
  }
})

watch(
  () => props.percentage,
  (newVal) => {
    resetPercentage()
    props.isAnimation && updatePercentage(newVal)
  }
)


</script>

<style lang='scss' scoped>

</style>
