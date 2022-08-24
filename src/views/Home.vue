<template>
  <div>
    <el-header>无限嵌套复选</el-header>
    <el-table
      ref="tableRef"
      :data="tableData"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      :row-style="rowStyle"
      border
      default-expand-all
      @select="handleSelectionChange"
      @row-click="handleRowClick"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column prop="date" label="date" sortable width="180" />
      <el-table-column prop="name" label="Name" sortable width="180" />
    </el-table>

    <el-table
      :data="tableData1"
      style="width: 100%"
      row-key="id"
      border
      lazy
      :load="load"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
    </el-table>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue'
import type { ElTable } from 'element-plus'
interface User {
  id: number
  date: string
  name: string
  hasChildren?: boolean
  children?: User[]
}
const selectedRow = ref<any[]>([])
onMounted(() => {
  nextTick(() => {
    selectedRow.value = tableRef.value?.getSelectionRows()
  })
})
const tableRef = ref<InstanceType<typeof ElTable>>()
const toggleAll = (row: any, isSelected: boolean) => {
  if(row.children) {
    row.children.forEach((item: any) => {
      toggleAll(item, isSelected)
    })
  }
  tableRef.value?.toggleRowSelection(row, isSelected)
}

const handleSelectionChange = (selection: any, row: any) => {
  const isSelected = selectedRow && selectedRow.value.indexOf(row) !== -1
  toggleAll(row, !isSelected)
  selectedRow.value = tableRef.value?.getSelectionRows()
}
const handleRowClick = (row: any) => {
  debugger
}
const rowStyle = (row: any, rowIndex: number) => {
  row.selected = false
}
const load = (
  row: User,
  treeNode: unknown,
  resolve: (date: User[]) => void
) => {
  setTimeout(() => {
    resolve([
      {
        id: 31,
        date: '2016-05-01',
        name: 'wangxiaohu',
      },
      {
        id: 32,
        date: '2016-05-01',
        name: 'wangxiaohu',
      },
    ])
  }, 1000)
}

const tableData: User[] = [
  {
    id: 1,
    date: '2016-05-02',
    name: 'wangxiaohu',
    children: [
      {
        id: 1-1,
        date: '2016-05-01',
        name: 'wangxiaohu',
        children: [
          {
            id: 1-1-1,
            date: '2016-05-01',
            name: 'wangxiaohu',
          },
          {
            id: 1-1-2,
            date: '2016-05-01',
            name: 'wangxiaohu',
          },
        ]
      },
      {
        id: 32,
        date: '2016-05-01',
        name: 'wangxiaohu',
      },
    ],
  },
  {
    id: 2,
    date: '2016-05-04',
    name: 'wangxiaohu',
  },
  {
    id: 3,
    date: '2016-05-01',
    name: 'wangxiaohu',
    children: [
      {
        id: 31,
        date: '2016-05-01',
        name: 'wangxiaohu',
        children: [
          {
            id: 31-1,
            date: '2016-05-01',
            name: 'wangxiaohu',
          },
          {
            id: 31-2,
            date: '2016-05-01',
            name: 'wangxiaohu',
          },
        ]
      },
      {
        id: 32,
        date: '2016-05-01',
        name: 'wangxiaohu',
      },
    ],
  },
  {
    id: 4,
    date: '2016-05-03',
    name: 'wangxiaohu',
  },
]

const tableData1: User[] = [
  {
    id: 1,
    date: '2016-05-02',
    name: 'wangxiaohu',
  },
  {
    id: 2,
    date: '2016-05-04',
    name: 'wangxiaohu',
  },
  {
    id: 3,
    date: '2016-05-01',
    name: 'wangxiaohu',
    hasChildren: true,
  },
  {
    id: 4,
    date: '2016-05-03',
    name: 'wangxiaohu',
  },
]
</script>
