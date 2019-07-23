<template>
  <div class="sk-table">
    <div class="sk-search">
      Search Condition Placeholder
    </div>
    <el-table
      ref="simpleTableWrapper"
      :data="tableData"
      v-bind="tableAttrs"
      height="auto"
      @cell-dblclick="handleCellDblclick"
    >
      <simple-table-column
        v-for="(tableColumnItem, tableColumnIndex) in tableColumns"
        :key="tableColumnIndex"
        :column-attrs="tableColumnItem"
        :slot-list="$scopedSlots"
      />
    </el-table>
    <div
      v-if="withPagination"
      class="sk-pagination"
    >
      <el-pagination
        :page-sizes="[10, 25, 50, 100]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="1000"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'SimpleTable',
  props: {
    tableColumns: { type: Array, required: true },
    tableData: { type: Array, required: true },
    tableAttrs: { type: Object,
      default: () => {
        return {}
      }
    },
    /**
     * 是否带有分页组件
     * true 有
     * false 无
     */
    withPagination: { type: Boolean, default: true }
  },
  computed: {
    simpleTableWrapper () { return this.$refs.simpleTableWrapper }
  },
  mounted () {
    // console.log(this.$scopedSlots)
    // 监听用户粘贴事件
    // window.addEventListener('paste', (event) => {
    //   // 阻止默认粘贴事件
    //   event.preventDefault()
    //   let pasteDataStr = event.clipboardData.getData('Text')
    //   console.log(pasteDataStr)
    //   debugger
    //   // debugger
    // }, false)
  },
  methods: {
    handleCellDblclick (row, column, cell, event) {
      this.$emit('cell-dblclick', arguments)
      console.log(cell)
      this.bindEvents(cell)
    },

    bindEvents (dom) {
      dom.addEventListener('paste', this.pasteData, { passive: false })
    },
    unbindEvents () {
      this.simpleTableWrapper.removeEventListener('paste', this.pasteData, { passive: false })
    },

    pasteData (event) {
      event.preventDefault()
      // 用于兼容 IE
      let clipboardData = event.clipboardData || window.clipboardData
      console.log(clipboardData.getData('Text'))
    }
  }
}
</script>
<style lang="less" scoped>
.sk-table{
  display: flex;
  flex-direction: column;
  height: 100%;

  .sk-search {
    margin-bottom: 10px;
  }

  .el-table{
    flex: 1;
  }

  .sk-pagination{
    margin-top: 10px;
    text-align: right;
  }
}

</style>
