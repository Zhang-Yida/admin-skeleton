<template>
  <component
    :is="currentOption.type"
    v-model="currentModel"
    class="sk-widget"
    v-bind="currentOption.component"
    v-on="currentOption.event"
  >
    <template v-if="hasChildrenComponents">
      <el-option
        v-for="(optionItem, optionIdx) in currentOption.option"
        :key="optionIdx"
        :value="optionItem.value"
        :label="optionItem.label"
      />
    </template>
  </component>
</template>

<script>
export default {
  name: 'WidgetItem',
  props: {
    // 用于渲染组件的组件属性
    option: { type: Object, required: true },
    model: { type: [Array, String, Number, Object] }
  },
  computed: {
    currentModel: {
      set: function (data) {
        this.$emit('update:model', data)
      },
      get: function () {
        return this.model
      }
    },

    currentOption () {
      console.log(this.option)
      // 判断该组件是否为只读
      if ((typeof (this.option.editable) === 'boolean') && !this.option.editable) {
        return this.$utils.merge(this.option, { type: 'sk-label' })
      } else {
        return this.option
      }
    },

    hasChildrenComponents () {
      return this.option.type === 'el-select'
    }
  }
}
</script>
<style lang="less" scoped>
.sk-widget {
  width: 100%;
}
</style>
