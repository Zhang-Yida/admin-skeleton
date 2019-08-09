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
        :class="{ 'widget-active': widget.__isActived }"
        @click="handleWidgetCellClick(widget)"
      >
        <!-- 判断是否为栅格布局 widget -->
        <template v-if="widget.type === 'grid'">
          <el-row :gutter="20">
            <el-col
              v-for="(widgetChild, widgetChildIndex) in widget.children"
              :key="widgetChildIndex"
              :span="widgetChild.span"
            >
              <div
                class="widget-form-item"
                @click="handleWidgetCellClick(widgetChild.widget, $event)"
              >
                <!-- 设置某个栅格布局中的一格中只包含一个组件 -->
                <draggable
                  :group="{ name: 'widget', put: widgetChild.widget.length === 0, pull: true }"
                  class="widget-grid-cell"
                  :class="{ 'without-border': widgetChild.widget.length > 0 }"
                  :list="widgetChild.widget"
                  @add="handleGridWidgetAdd(widgetIndex, widgetChildIndex, $event)"
                >
                  <div
                    v-for="(widgetCell, widgetCellIndex) in widgetChild.widget"
                    :key="widgetCellIndex"
                    class="cell"
                    :class="{ 'widget-active': widgetCell.__isActived }"
                  >
                    <el-form-item
                      v-bind="widgetCell.formItem"
                      :prop="widgetCell.prop"
                    >
                      <widget-item
                        :model.sync="model[widgetCell.prop]"
                        :option="widgetCell"
                      />
                    </el-form-item>
                  </div>
                </draggable>
              </div>
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
  data () {
    return {
      activedWidget: null
    }
  },
  computed: {
    mergedFormLayout () {
      return this.$utils.merge(baseFormLayout, this.formLayout)
    }
  },
  methods: {
    handleGridWidgetAdd (targetWidgetIndex, targetGridCellIndex, event) {
      // console.log(targetWidgetIndex, targetGridCellIndex)
    },

    /**
     * 点击某个 widget，获取到被点击组件的属性
     */
    handleWidgetCellClick (widget, event) {
      let activedWidget = null

      if (Array.isArray(widget)) {
        if (widget.length > 0) {
          // 目前每个栅格中只能展示一个组件 widget
          activedWidget = widget[0]
          event.stopPropagation()
        } else {
          // 点击空白的 Grid Cell，则事件冒泡至顶层的 click 事件中，展示整个 Grid 组件
          return
        }
      } else {
        activedWidget = widget
      }
      // 设置当前选中组件，通过 __isActived 属性进行控制
      if (this.activedWidget) {
        delete this.activedWidget.__isActived
      }
      this.$set(activedWidget, '__isActived', true)
      this.activedWidget = activedWidget
    }
  }
}
</script>
<style lang="less" scoped>
.widget-container {
  border: 1px dashed;
  margin-bottom: 4px;
  &.widget-active {
    border: 2px solid #67c23a !important;
  }

  &:hover {
    border: 1px solid #409eff;
  }

  .widget-form-item {
    height: 50px;
    margin: 3px 0;
    // border: 1px dashed #409eff;
  }

  .widget-grid-cell {
    position: relative;
    height: 100%;

    border: 1px dashed;
    &:hover {
      border: 1px solid #409eff;
    }

    &.without-border {
      border: none;
    }

    .cell {
      height: 100%;
      border: 1px dashed;

      &:hover {
        border-color: #409eff;
      }
      &.widget-active {
        border: 2px solid #67c23a !important;
      }
    }

    .el-form-item {
      position: relative;
      height: 100%;
      margin-bottom: 0;
      // border: 1px dashed;
    }
  }
}
</style>
