<template>
  <div class="page-wrapper">
    <div class="widget-wrapper">
      <div class="widget-wrapper__title">
        表单组件
      </div>
      <draggable
        :list="formWidgetList"
        :sort="false"
        :group="{ name: 'widget', pull: 'clone', put: false }"
        :clone="handleCloneToLayout"
      >
        <div
          v-for="formWidgetItem in formWidgetList"
          :key="formWidgetItem.type"
          class="widget-item"
        >
          <span>{{ formWidgetItem.label }}</span>
        </div>
      </draggable>

      <div class="widget-wrapper__title">
        珊格布局
      </div>
      <draggable
        :list="gridWidgetList"
        :sort="false"
        :group="{ name: 'widget', pull: 'clone', put: false }"
        :clone="handleCloneToLayout"
      >
        <div class="widget-item">
          <span>珊格布局</span>
        </div>
      </draggable>
    </div>
    <div class="drawer-wrapper">
      <!-- Form 画板，根据拖拽出的 json 格式数据绘制表单设计器预览图 -->
      <drawer
        class="drawer-canvas"
        :widget-list="formLayout"
        :model="formModel"
      />
    </div>
    <div class="prop-wrapper">
      {{ formLayout }}
    </div>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
// 表单组件
import formWidget from './options/widget/formWidget'
// 栅格布局
import gridWidget from './options/widget/gridWidget'

// 画板组件
import Drawer from './components/drawer'
export default {
  name: 'FormMaker',
  components: { draggable, Drawer },
  data () {
    return {
      formWidgetList: formWidget,
      gridWidgetList: gridWidget,

      formLayout: [],
      formModel: {}
    }
  },
  methods: {
    handleCloneToLayout (val) {
      // val 为拖拽源的数据引用，需进行复制
      let cloneWidgetOption = JSON.parse(JSON.stringify(val))

      if (cloneWidgetOption.type === 'grid') return cloneWidgetOption

      cloneWidgetOption.prop = `${cloneWidgetOption.label}_${parseInt(Math.random() * 10000)}`
      // 为复制出的组件配置添加 formItem、prop 等属性
      cloneWidgetOption.formItem = { label: cloneWidgetOption.label }
      delete cloneWidgetOption.label
      return cloneWidgetOption
    }
  }
}
</script>
<style lang="less" scoped>
.page-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 10px;

  .widget-wrapper {
    width: 250px;
    padding-right: 10px;

    &__title {
      font-size: 14px;
      margin-left: 5px;
      font-weight: 700;
    }

    .widget-item {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: #ddd;
      width: 110px;
      height: 30px;
      margin: 5px;
      cursor: pointer;
      border: 1px solid #ddd;

      &:hover {
        border: 1px dashed #409eff;
      }

      span {
        font-size: 12px;
      }
    }
  }

  .drawer-wrapper {
    padding: 10px;
    flex: 1;
    background: #eee;

    .drawer-canvas {
      height: 100%;
    }

    /deep/ .sortable-ghost {
      // display: inline-block;
      width: 100%;
      height: 0 !important;
      // height: 40px;
      border: 2px solid #f56c6c !important;
margin-bottom: 4px;
      // 隐藏被拖动的组件
      * {
        display: none;
      }
    }
  }

  .prop-wrapper {
    width: 200px;
    background: gainsboro;
  }
}
</style>
