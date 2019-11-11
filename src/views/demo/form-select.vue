<template>
  <sk-form
    :model="model"
    :widget-list="widgetList"
  />
</template>
<script>
const optionList = [
  {
    value: 'base',
    label: 'Base Select'
  },
  {
    value: 'advance',
    label: 'Adv Select'
  }
]
export default {
  data () {
    return {
      model: {
        baseSelect: 'base',
        baseMulSelect: ['base']
      },
      widgetList: [
        // 普通 select
        {
          label: 'normal',
          type: 'el-select',
          prop: 'baseSelect',
          option: optionList
        },
        // 可清空单选
        {
          label: 'normal',
          type: 'el-select',
          prop: 'baseSelect',
          formItem: {
            label: '基础',
            labelWidth: '120px'
          },
          component: {
            clearable: true
          },
          option: optionList
        },
        // 基础多选
        {
          type: 'el-select',
          prop: 'baseMulSelect',
          component: {
            multiple: true
          },
          formItem: {
            label: '基础多选',
            labelWidth: '50px'
          },
          option: optionList
        },
        {
          label: '基础多选 with collapse-tags',
          type: 'el-select',
          prop: 'baseMulSelect',
          component: {
            multiple: true,
            collapseTags: true
          },
          option: optionList
        }
      ]
    }
  }
}
</script>
