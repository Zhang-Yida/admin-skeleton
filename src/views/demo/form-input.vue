<template>
  <simple-form
    :widget-list="widgetList"
    :model="model"
  />
</template>
<script>
export default {
  data () {
    return {
      model: {
        baseInput: 'zhangmeng',
        disabledInput: 'disabled',
        clearableInput: 'clearable',
        passwordInput: 'password',
        iconInput: '',
        textareaInput: ''
      },
      widgetList: [
        // 普通输入框
        {
          label: 'normal',
          type: 'el-input',
          prop: 'baseInput'
          // component: {}
        },
        // with disabled
        {
          label: 'with disabled',
          type: 'el-input',
          prop: 'disabledInput',
          component: {
            disabled: true
          }
        },
        // with clearable
        {
          label: 'with clearable',
          type: 'el-input',
          prop: 'clearableInput',
          component: {
            clearable: true
          }
        },
        // with clearable and clear event
        {
          label: 'with clearable and clear event',
          type: 'el-input',
          prop: 'clearableInput',
          component: {
            clearable: true
          },
          event: {
            clear: () => {
              console.log(`clear event trigger!`)
            }
          }
        },
        // with show-password
        {
          label: 'with disabled',
          type: 'el-input',
          prop: 'passwordInput',
          component: {
            showPassword: true
          }
        },
        // with suffix-icon
        {
          label: 'with suffix-icon',
          type: 'el-input',
          prop: 'iconInput',
          component: {
            suffixIcon: 'el-icon-date',
            prefixIcon: 'el-icon-search'
          }
        },
        // textarea type
        {
          label: 'textarea',
          type: 'el-input',
          prop: 'textareaInput',
          component: {
            type: 'textarea',
            rows: 5
          }
        },
        // textarea with autosize
        {
          label: 'textarea (with autosize)',
          type: 'el-input',
          prop: 'textareaInput',
          component: {
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
