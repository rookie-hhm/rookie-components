<template>
  <div>
    <el-form ref="form" :model="originData">
      <r-table
        ref="myTable"
        :data="originData.list"
        :columns="columns"
        v-loading="isLoading"
        element-loading-text="假的"
        sortable
        :sortOptions="sortOptions"
      ></r-table>
    </el-form>
    <el-button @click="validate">validate</el-button>
  </div>
</template>

<script lang='ts' setup>
import { reactive, ref, computed, onMounted } from 'vue';
import { TableColumn } from '@/components/Table/types'
import type { FormInstance } from 'element-plus';
import { TableInstance } from '../components/Table/types/index';
import Sortable from 'sortablejs';
const data = ref([
  { name: '11', sex: 'man', number: 1 },
  { name: '123', sex: 'female', number: 2 }
])
const form = ref<FormInstance>()
const originData = computed<{ list: any }>(() => ({ list: data.value }))
const columns = reactive<TableColumn[]>([
  {
    prop: 'name',
    label: '名称'
  },
  {
    prop: 'sex',
    label: "性别"
  },
  {
    component: {
      type: 'input',
      prop: 'number',
      itemAttrs: {
        'show-message': false,
        rules: [
          { required: true, trigger: 'change' }
        ]
      }
    }
  }
])
const sortOptions: Sortable.Options = {
  onEnd (event) {
    const { oldIndex, newIndex } = event
    console.log(oldIndex, newIndex)
  }
}
type Scope = {
  tableRef: TableInstance
  sortableRef: Sortable
}
const myTable = ref<null | Scope>(null)
onMounted(() => {
  console.log('parent mounted')
  console.log(myTable.value!.tableRef.clearSelection)
  console.log(myTable.value!.sortableRef)
})
const validate = () => {
  form.value?.validate()
}
const isLoading = ref<boolean>(false)
</script>

<style lang='scss' scoped>
.style {
  
}

</style>
