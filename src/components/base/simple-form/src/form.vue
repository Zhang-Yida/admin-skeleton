<template>
  <el-form
    ref="simpleForm"
    :model="model"
    v-bind="mergedFormLayout"
    @submit.native.prevent
  >
    <el-row :gutter="6">
      <el-col
        v-for="(widget, index) in widgetList"
        :key="index"
        :span="widget.span ? widget.span : widgetGrid"
      >
        <el-form-item
          v-bind="widget.formItem"
          :prop="widget.prop"
          :rules="widget.validate"
        >
          <template v-if="widget.slotname">
            <slot :name="widget.slotname" />
          </template>
          <widget-item
            v-else
            :model.sync="model[widget.prop]"
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
    /**
     * 设置表单一行显示多少组件
     */
    widgetGrid: { type: [Number, String], default: 6 },
    model: { type: Object, required: true }
  },
  computed: {
    mergedFormLayout () {
      return this.$utils.merge(baseFormLayout, this.formLayout)
    }
  },
  methods: {
    /**
     * 暴露给外部方法
     */
    resetFields () {
      this.$refs.simpleForm.resetFields()
    },
    validate () {
      return this.$refs.simpleForm.validate()
    }
  }
}
</script>
<style lang="less" scoped>

</style>
