<template>
  <el-table
    ref="tableRef"
    v-bind="$attrs"
    :data="data"
  >
    <template v-for="column in props.columns" :key="column.prop">
      <el-table-column v-bind="column">
        <template #default="scope">
          <!-- 插槽 -->
          <slot :name="column.slotName" :row="scope.row" :index="scope.$index" v-if="column.slotName" />
          <!-- 表单组件 -->
          <template v-else-if="column.component">
            <!-- 当表格中字段很多且多数为表单元素的时候，不推荐使用slot，使用component选项能大大减少template代码量，可以配合在common-table外层套上el-form使用 -->
            <el-form-item :prop="dataKey + '.' + scope.$index + '.' + column.prop" v-bind="column.component.itemAttrs">
              <component
                :is="`el-${column.component.type}`"
                v-model="scope.row[column.prop || column.component.prop!]"
                v-bind="column.component.attrs"
              ></component>
            </el-form-item>
          </template>
          <!-- 默认情况下 -->
          <template v-else>{{ scope.row[column.prop!] }}</template>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script lang='ts' setup>
import { PropType, ref, onMounted } from 'vue';
import { TableColumn, TableInstance } from '../types/index'
import { cloneDeep } from 'lodash-es'
import Sortable from 'sortablejs';
const props = defineProps({
  columns: Array as PropType<TableColumn[]>,
  default () {
    return []
  },
  data: {
    type: Array
  },
  dataKey: { // 表格嵌套表单传入的key值
    type: String,
    default: 'list'
  },
  sortable: {
    type: Boolean
  },
  sortOptions: {
    type: Object as PropType<Sortable.Options>,
    default () {
      return {}
    }
  }
})

const tableRef = ref<null | TableInstance>(null)
const cloneData = cloneDeep(props.data)
const sortableRef= ref<Sortable | null>(null)
const initSortable = () => {
  const el = tableRef.value!.$el.querySelector(
    '.el-table__body-wrapper  table > tbody'
  )
  sortableRef.value = Sortable.create(el, props.sortOptions)
}
onMounted(() => {
  props.sortable && initSortable()
})
defineExpose({
  tableRef: tableRef,
  sortableRef: sortableRef
})
</script>

<style lang='scss' scoped>

</style>
