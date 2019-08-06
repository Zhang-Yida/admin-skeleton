<template>
  <el-form
    ref="simpleForm"
    class="drawer-wrapper"
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
          <!--  -->
          <el-row
            :gutter="20"
            type="flex"
          >
            <el-col
              v-for="i in 4"
              :key="i"
              :span="6"
            >
              <!-- <draggable
                :group="{ name: 'widget', pull: false }"
                :sort="false"
              > -->
              <div class="widget-gridcell" />
              <!-- </draggable> -->
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
      <!-- <el-row :gutter="6">
        <el-col
          v-for="(widget, index) in widgetList"
          :key="index"
          :span="widget.span ? widget.span : widgetGrid"
        >
          <el-form-item
            v-bind="widget.formItem"
            :prop="widget.prop"
            :rules="widget.validate"
            class="widget-formitem"
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
      </el-row> -->
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
.drawer-wrapper {
  .widget-container {
    border: 1px dashed ;
    margin-bottom: 4px;

      &:hover {
        border: 1px solid #409eff;
      }
    // .widget-cell {
    //   &:hover {
    //     border: 1px solid #409eff;
    //   }
    // }

    .el-row {
      height: 47px;

      .el-col {
        height: 100%;

        .widget-gridcell {
          height: 40px;
          border: 1px dashed;
        }
      }
    }
  }
}
</style>
