<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200">
        <nav-slide :isCollapse="isCollapse"></nav-slide>
      </el-aside>
      <el-container>
        <el-header>
          <nav-header v-model:isCollapse="isCollapse"></nav-header>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts' setup>
import NavHeader from './header/index.vue'
import NavSlide from './aside/index.vue'
import { ref } from 'vue'
const isCollapse = ref(false)

</script>

<style lang='scss' scoped>
.common-layout {
  height: 100%;
}
.el-container {
  height: 100%;
  .el-header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid bisque;
  }
}
</style>
