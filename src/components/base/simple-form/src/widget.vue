<template>
  <component
    :is="option.type"
    v-model="option.prop"
  >
    <el-option
      v-for="(optionItem, optionIdx) in option.option"
      :key="optionIdx"
    />
  </component>
</template>

<script>
export default {
  name: 'WidgetItem',
  props: {
    option: { type: Object, required: true }
  }
}
</script>
<style lang="less" scoped>

</style>
