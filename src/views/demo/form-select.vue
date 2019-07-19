<template>
  <simple-form
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
          component: {
            prop: 'baseSelect'
          },
          option: optionList
        },
        // 可清空单选
        {
          label: 'normal',
          type: 'el-select',
          component: {
            prop: 'baseSelect',
            clearable: true
          },
          option: optionList
        },
        // 基础多选
        {
          label: '基础多选',
          type: 'el-select',
          component: {
            prop: 'baseMulSelect',
            multiple: true
          },
          option: optionList
        },
        {
          label: '基础多选 with collapse-tags',
          type: 'el-select',
          component: {
            prop: 'baseMulSelect',
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
