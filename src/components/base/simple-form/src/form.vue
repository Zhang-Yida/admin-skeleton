<template>
  <el-form>
    <el-row>
      <el-col
        v-for="(widget, index) in widgetList"
        :key="index"
        :span="6"
      >
        <el-form-item :label="widget.label">
          <widget-item :option="widget.component" />
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>
<script>
export default {
  name: 'SimpleForm',
  props: {
    widgetList: { type: Array, required: true }
  },
  computed: {
    widgetLen () {
      return this.widgetList.length
    }
  }
}
</script>
<style lang="less" scoped>

</style>
