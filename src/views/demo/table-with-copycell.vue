<template>
  <simple-table
    :table-columns="tableColumns"
    :table-data="tableData"
    :table-attrs="tableAttrs"
    @cell-dblclick="handleCellDblclick"
  >
    <template
      slot="name"
      slot-scope="scope"
    >
      <widget-item
        :model.sync="scope.row.name"
        :option="{
          type: 'el-input',
          editable: false
        }"
      />
    </template>
    <template
      slot="hello"
      slot-scope="scope"
    >
      <el-link type="primary">
        {{ scope.row.label }}
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
      console.log(arguments)
    },
    handelCellClickoutside () {
      console.log('click outside')
    }
  }
}
</script>
<style lang="less" scoped>

</style>
