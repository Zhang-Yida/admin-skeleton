<template>
  <simple-table
    :table-columns="tableColumns"
    :table-data="tableData"
    :table-attrs="tableAttrs"
    @cell-dblclick="handleCellDblclick"
  >
    <template #name="slotProps">
      <widget-item
        :model.sync="slotProps.row.name"
        :option="{
          type: 'el-input',
          editable: !!slotProps.row.__editable
        }"
      />
    </template>
    <template #hello="slotProps">
      <el-link type="primary">
        {{ slotProps.row.label }}
      </el-link>
    </template>
  </simple-table>
</template>
<script>

export default {
  name: 'Table',
  data () {
    return {
      tableColumns: [
        {
          type: 'index',
          align: 'right'
        },
        {
          label: 'label',
          prop: 'label',
          width: '200',
          formatter: (row, column, cellValue, index) => {
            // 字典翻译或其它对值的处理
            return cellValue
          },
          slotname: 'label'
        },
        {
          label: 'hello',
          prop: 'hello',
          width: '200',
          slotname: 'hello'
        },
        {
          label: 'name',
          prop: 'name',
          width: '200',
          slotname: 'name'
        },
        {
          label: 'age',
          prop: 'age',
          width: '200'
        },
        {
          label: 'country',
          prop: 'country',
          width: '200'
        },
        {
          label: 'city',
          prop: 'city',
          width: '200'
        }
      ],
      tableData: [
        {
          label: '1123',
          test: 'test',
          testchild1: '----',
          testChild: '___',
          name: '123'
        },
        {
          label: '2222',
          test: 'test',
          testchild1: '----',
          testChild: '___'
        },
        {
          label: '2222',
          test: 'test',
          testchild1: '----',
          testChild: '___'
        }
      ],
      tableAttrs: {
        border: true
      }
    }
  },
  methods: {
    handleCellDblclick (row, column, cell, event) {
      // row.__editable = true
      this.$set(row, '__editable', !row.__editable)
    },
    handelCellClickoutside () {
      console.log('click outside')
    }
  }
}
</script>
<style lang="less" scoped>

</style>
