<template>
  <span class="sk-label">{{ value }}</span>
</template>
<script>
export default {
  name: 'SkLabel',
  props: {
    value: { type: [Array, String, Number, Object] }
  }
}
</script>
<style lang="less" scoped>
.sk-label{
  display: inline-block;
  line-height: 28px;
}
</style>
