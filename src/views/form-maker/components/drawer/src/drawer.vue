<template>
  <el-form
    ref="simpleForm"
    :model="model"
    v-bind="mergedFormLayout"
    @submit.native.prevent
  >
    <draggable
      :group="{ name: 'widget' }"
      :list="widgetList"
      style="height: 100%;"
    >
      <div
        v-for="(widget, widgetIndex) in widgetList"
        :key="widgetIndex"
        class="widget-container"
      >
        <!-- 判断是否为栅格布局 widget -->
        <template v-if="widget.type === 'grid'">
          <el-row :gutter="20">
            <el-col
              v-for="(widgetChild, widgetChildIndex) in widget.children"
              :key="widgetChildIndex"
              :span="widgetChild.span"
            >
              <div class="widget-form-item" />
            </el-col>
          </el-row>
        </template>
        <!-- 普通组件 -->
        <el-form-item
          v-else
          v-bind="widget.formItem"
          :prop="widget.prop"
          :rules="widget.validate"
          class="widget-cell"
        >
          <widget-item
            :model.sync="model[widget.prop]"
            :option="widget"
          />
        </el-form-item>
      </div>
    </draggable>
  </el-form>
</template>
<script>
import draggable from 'vuedraggable'

import { baseFormLayout } from '@/components/base/defaults'
export default {
  name: 'Drawer',
  components: { draggable },
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
    handleGridWidgetAdd (widgetChild) {
      console.log(arguments)
    }
  }
}
</script>
<style lang="less" scoped>
.widget-container {
  border: 1px dashed;
  margin-bottom: 4px;

  &:hover {
    border: 1px solid #409eff;
  }

  .widget-form-item {
    height: 40px;
    margin: 3px 0;
    border: 1px dashed #409eff;
  }
}
</style>
