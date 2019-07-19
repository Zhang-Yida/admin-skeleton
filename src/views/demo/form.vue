<template>
  <simple-form :widget-list="widgetList" />
</template>
<script>
export default {
  data () {
    return {
      widgetList: [
        // 普通输入框
        {
          label: 'normal',
          type: 'el-input',
          component: {
            prop: 'baseInput'
          }
        },
        // with disabled
        {
          label: 'with disabled',
          type: 'el-input',
          component: {
            prop: 'disabledInput',
            disabled: true
          }
        },
        // with clearable
        {
          label: 'with disabled',
          type: 'el-input',
          component: {
            prop: 'clearableInput',
            clearable: true
          }
        },
        // with show-password
        {
          label: 'with disabled',
          type: 'el-input',
          component: {
            prop: 'passwordInput',
            showPassword: true
          }
        },
        // with suffix-icon
        {
          label: 'with suffix-icon',
          type: 'el-input',
          component: {
            prop: 'iconInput',
            suffixIcon: 'el-icon-date',
            prefixIcon: 'el-icon-search'
          }
        },
        // textarea type
        {
          label: 'textarea',
          type: 'el-input',
          component: {
            prop: 'textareaInput',
            type: 'textarea',
            rows: 5
          }
        },
        // textarea with autosize
        {
          label: 'textarea (with autosize)',
          type: 'el-input',
          component: {
            prop: 'textareaInput',
            type: 'textarea',
            autosize: { minRows: 2, maxRows: 4 }
          }
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>

</style>
