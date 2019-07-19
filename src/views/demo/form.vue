<template>
  <simple-form :widget-list="widgetList" />
</template>
<script>
export default {
  data () {
    return {
      widgetList: [
        {
          label: 'Input',
          component: {
            prop: 'inputVal',
            type: 'el-input'
          }
        },
        {
          label: 'Select',
          component: {
            prop: 'selectVal',
            type: 'el-select',
            option: []
          }
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>

</style>
