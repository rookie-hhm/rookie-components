<template>
  <div>
    <r-form ref="baseForm" :model="model" :options="options">
      <!-- 上传组件 -->
      <template #upload="{ row }">
        <el-upload
          v-bind="row.attrs"
        >
          <el-button>上传，你懂得</el-button>
        </el-upload>
      </template>
      <!-- 编辑器 -->
    </r-form>
  </div>
</template>

<script lang='ts' setup>

import type { FormInstance, UploadUserFile } from 'element-plus';
import { ref, onMounted, reactive, watch,
ComponentPublicInstance, ExtractPropTypes } from 'vue';
import { FormItem } from '../components/Form/types/index';
const tabsProps = {
  color: String,
  border: Boolean,
  sticky: Boolean,
  shrink: Boolean,
  animated: Boolean,
  swipeable: Boolean,
  scrollspy: Boolean,
  background: String,
  titleActiveColor: String,
  titleInactiveColor: String,
};
type TabsProps = ExtractPropTypes<typeof tabsProps>;
const options = reactive<FormItem[]>([
  {
    type: 'input',
    prop: 'username',
    itemAttrs: {
    },
    attrs: {
      onSelect () {
        console.log('onselect')
      }
    }
  },
  {
    slotName: 'upload',
    type: 'upload',
    prop: 'fileList',
    modelKey: 'fileList',
    attrs: {
      action: "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
      multiple: true,
      limit: 1,
      'on-success' () {
        console.log('onSuccess')
      },
      'on-exceed' () {
        alert('onexecee')
      },
      'before-upload' () {
        alert('beforeUpload')
        console.log('onBeforeUpload')
      },
    }
  },
  {
    type: 'select',
    prop: 'identify',
    // on: {
    //   change (value: string) {
    //     console.log(value, 'value')
    //   }
    // },
    attrs: {
      clearable: true,
      onChange (value: string) {
        console.log(value, 'value')
      }
    },
    itemAttrs: {
      rules: [{ message: '倾诉怎', trigger: 'change', required: true }]
    },
    children: [
      {
        type: 'option',
        value: '1',
        attrs: {
          label: '经理'
        }
      }
    ]
  }
])
const model = reactive({
  username: '123',
  identify: '',
  fileList: ref<UploadUserFile[]>([
    {
      name: 'element-plus-logo.svg',
      url: 'https://element-plus.org/images/element-plus-logo.svg',
    },
    {
      name: 'element-plus-logo2.svg',
      url: 'https://element-plus.org/images/element-plus-logo.svg',
    },
  ])
})
const baseForm = ref<null | { formRef: FormInstance } & ComponentPublicInstance>(null)
onMounted(() => {
  console.log(baseForm.value!.formRef.validate())
})
watch(
  model,
  () => {
    console.log(model.username, 'model')
    console.log(model.fileList, 'filelist')
  },
  {
    deep: true
  }
)
</script>

<style lang='scss' scoped>

</style>
