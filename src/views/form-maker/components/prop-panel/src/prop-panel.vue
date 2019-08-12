<template>
  <div>
    {{ widgetConfig }}
    <simple-form
      :model="widgetConfig"
      :widget-list="widgetList"
      :form-layout="{ labelPosition: 'top' }"
      :widget-grid="24"
    />
  </div>
</template>
<script>
import grid from '../../../options/config/gird'
export default {
  name: 'PropPanel',
  props: {
    widgetConfig: { type: Object, required: true }
  },
  data () {
    return {
      widgetList: [
        ...grid
      ]
    }
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>

</style>
