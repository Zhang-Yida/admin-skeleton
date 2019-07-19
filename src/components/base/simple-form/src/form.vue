<template>
  <el-form
    :model="model"
    v-bind="mergedFormLayout"
  >
    <el-row :gutter="6">
      <el-col
        v-for="(widget, index) in widgetList"
        :key="index"
        :span="6"
      >
        <el-form-item :label="widget.label">
          <widget-item
            :model.sync="model[widget.component.prop]"
            :option="widget"
          />
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>
<script>
import { baseFormLayout } from '@/components/base/defaults'
export default {
  name: 'SimpleForm',
  props: {
    /**
     * 设置 form 显示布局及基础属性
     */
    formLayout: { type: Object, default: () => {} },
    widgetList: { type: Array, required: true },
    model: { type: Object, required: true }
  },
  computed: {
    mergedFormLayout () {
      return this.$utils.merge(baseFormLayout, this.formLayout)
    }
  },
  methods: {
    handleTest () {

    }
  }
}
</script>
<style lang="less" scoped>

</style>
