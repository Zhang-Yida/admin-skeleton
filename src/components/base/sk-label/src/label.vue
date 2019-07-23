<template>
  <span>{{ value }}</span>
</template>
<script>
export default {
  name: 'SkLabel',
  props: {
    value: { type: [Array, String, Number, Object] }
  }
}
</script>
