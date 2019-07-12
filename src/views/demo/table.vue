<template>
  <simple-table
    :table-columns="tableColumns"
    :table-data="tableData"
    :table-attrs="tableAttrs"
  />
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
            return cellValue
          }
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
                  prop: 'testchild1'
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
