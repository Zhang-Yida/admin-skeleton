<template>
  <component
    :is="option.type"
    v-model="currentModel"
    class="sk-widget"
    v-bind="option.component"
  >
    <template v-if="hasChildrenComponents">
      <el-option
        v-for="(optionItem, optionIdx) in option.option"
        :key="optionIdx"
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
    model: { type: [Array, String, Number, Object], required: true }
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
