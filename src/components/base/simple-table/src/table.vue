<template>
  <div class="sk-table">
    <div class="sk-search">
      Search Condition Placeholder
    </div>
    <el-table
      :data="tableData"
      v-bind="tableAttrs"
      height="auto"
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
// import defaultAttrs from './default-attrs'
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
  mounted () {
    console.log(this.$scopedSlots)
  },
  methods: {
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
