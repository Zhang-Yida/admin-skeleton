<template>
  <span class="sk-label">{{ handledVal }}</span>
</template>
<script>
export default {
  name: 'SkLabel',
  props: {
    value: { type: [Array, String, Number, Object] },
    option: { type: Array }
  },
  computed: {
    handledVal () {
      if (Array.isArray(this.option)) {
        let result = this.option.find(item => item.value === this.value) || {}
        return result.label
      } return this.value
    }
  }
}
</script>
<style lang="less" scoped>
.sk-label{
  display: inline-block;
  line-height: 28px;
}
</style>
