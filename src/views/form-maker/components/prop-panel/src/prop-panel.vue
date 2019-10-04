<template>
  <div>
    <div class="prop-title">
      Base Attributes
    </div>
    <simple-form
      :model="widgetConfig"
      :widget-list="bastAttrList"
      :form-layout="{ labelPosition: 'top' }"
      :widget-grid="24"
    >
      <!-- 栅格布局中的栅格分配 -->
      <template #grid="slotProps">
        <el-input-number
          v-for="(widgetChild, widgetChildIndex) in widgetConfig.children"
          :key="widgetChildIndex"
          v-model="widgetChild.span"
          style="width: 50%;"
          :min="0"
          :max="24"
        />
      </template>
    </simple-form>
    <simple-form
      v-if="formAttrList.length > 0"
      :model="widgetConfig.formItem"
      :widget-list="formAttrList"
      :form-layout="{ labelPosition: 'top' }"
      :widget-grid="24"
    />
    <template v-if="compAttrList.length > 0">
      <div class="prop-title">
        Component Attributes
      </div>
      <simple-form
        :model="widgetConfig.component"
        :widget-list="compAttrList"
        :form-layout="{ labelPosition: 'top' }"
        :widget-grid="24"
      />
    </template>
  </div>
</template>
<script>
import configMapping from '../../../options/config'
export default {
  name: 'PropPanel',
  props: {
    widgetConfig: { type: Object, required: true }
  },
  data () {
    return {}
  },
  computed: {
    bastAttrList () {
      return (configMapping[this.widgetConfig.type] || []).base || []
    },
    formAttrList () {
      return (configMapping[this.widgetConfig.type] || []).form || []
    },
    compAttrList () {
      return (configMapping[this.widgetConfig.type] || []).component || []
    }
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
.prop-title {
  font-size: 12px;
  font-weight: 700;
}
</style>
