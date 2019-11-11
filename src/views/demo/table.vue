<template>
  <sk-table
    :table-columns="tableColumns"
    :table-data="tableData"
    :table-attrs="tableAttrs"
  >
    <template
      slot="hello"
      slot-scope="scope"
    >
      <el-link type="primary">
        {{ scope.row.label }}
      </el-link>
    </template>
    <template
      slot="testchild1"
      slot-scope="scope"
    >
      <el-link type="primary">
        {{ scope.row.label }}
      </el-link>
    </template>
  </sk-table>
</template>
<script>
export default {
  name: 'Table',
  data () {
    return {
      tableColumns: [
        {
          type: 'selection',
          align: 'center'
        },
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
          label: 'test',
          children: [
            {
              label: 'test-1',
              prop: 'test1'
            },
            {
              label: 'test-2',
              children: [
                {
                  label: 'test-2-child-1',
                  prop: 'testchild1',
                  slotname: 'testchild1'
                },
                {
                  label: 'test-2-child-2',
                  prop: 'testChild',
                  formatter: () => {
                    return 'el.error'
                  }
                }
              ]
            }
          ]
        }
      ],
      tableData: [
        {
          label: '1123',
          test: 'test',
          testchild1: '----',
          testChild: '___'
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
        // border: true
      }
    }
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>

</style>
