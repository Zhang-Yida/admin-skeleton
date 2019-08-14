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
        <div class="widget-active--operation">
          <i
            class="el-icon-copy-document"
            @click.stop="handleWidgetCopy(widget, widgetIndex)"
          />
          <i
            class="el-icon-delete"
            @click.stop="handleWidgetDelete(widgetList, widget, widgetIndex)"
          />
        </div>
        <!-- 判断是否为栅格布局 widget -->
        <template v-if="widget.type === 'grid'">
          <el-row :gutter="widget.gutter">
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
                >
                  <div
                    v-for="(widgetCell, widgetCellIndex) in widgetChild.widget"
                    :key="widgetCellIndex"
                    class="cell"
                    :class="{ 'widget-active': widgetCell.__isActived }"
                  >
                    <div class="widget-active--operation">
                      <i
                        class="el-icon-delete"
                        @click.stop="handleWidgetDelete(widgetChild.widget, widgetCell, widgetCellIndex)"
                      />
                    </div>
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

      /** 将选中的 widget 传递给父组件 */
      this.$emit('selection-change', activedWidget)
    },

    /**
     * 复制 widget
     * 需要将 widget 的 prop 属性重新赋值，防止对象重复引用
     */
    handleWidgetCopy (widget, widgetIndex) {
      let copyWidget = JSON.parse(JSON.stringify(widget))
      console.log(copyWidget)

      // 处理 prop
      if (copyWidget.type === 'grid') {
      } else {
        copyWidget.prop = `${copyWidget.type.replace(
          /(el-)|(-)/gi,
          ''
        )}_${parseInt(Math.random() * 10000)}`
      }

      // 删除被选中组件的活动状态
      delete widget.__isActived
      this.$nextTick(_ => {
        // 设置当前活动组件
        this.activedWidget = copyWidget
        this.$emit('selection-change', copyWidget)
        this.widgetList.splice(widgetIndex + 1, 0, copyWidget)
      })
    },

    /**
     * 移除组件画板中某个组件
     */
    handleWidgetDelete (widgetList, widget, widgetIndex) {
      // TODO:对于 grid，删除选中的组件，活动焦点移动至前一个 col 中的组件上，如果没有，则移动至后一个 col 中的组件上，如果都没有，在外层组件中同理
      if (widgetIndex > 0) {
        let currentWidget = widgetList[widgetIndex - 1]
        currentWidget.__isActived = true
        this.activedWidget = currentWidget
        this.$emit('selection-change', currentWidget)
      } else if (widgetIndex === 0) {
        if (widgetList[widgetIndex + 1]) {
          let currentWidget = widgetList[widgetIndex + 1]
          currentWidget.__isActived = true
          this.activedWidget = currentWidget
          this.$emit('selection-change', currentWidget)
        }
      }
      widgetList.splice(widgetIndex, 1)
    }
  }
}
</script>
<style lang="less" scoped>
.widget-container {
  position: relative;
  border: 1px dashed;
  margin-bottom: 4px;
  &.widget-active {
    border: 2px solid #409eff !important;

    > .widget-active--operation {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: space-around;
      right: 0;
      bottom: 0;
      width: 40px;
      height: 20px;
      background: #409eff;
      z-index: 999;

      i {
        font-size: 14px;
        color: white;
        cursor: pointer;
      }
    }
  }

  .widget-active--operation {
    display: none;
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
        border: 2px solid #409eff !important;

        .widget-active--operation {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: space-around;
          right: 0;
          bottom: 0;
          width: 20px;
          height: 20px;
          background: #409eff;
          z-index: 999;

          i {
            font-size: 14px;
            color: white;
            cursor: pointer;
          }
        }
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
