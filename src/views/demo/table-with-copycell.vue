<template>
  <sk-table
    :table-columns="tableColumns"
    :table-data="tableData"
    :table-attrs="tableAttrs"
  >
    <template>
      <sk-form
        :model="searchModel"
        :widget-list="widgetList"
        :form-layout="{ labelPosition: 'right', labelWidth: '60px' }"
      >
        <template #operation="slotProps">
          <el-button
            native-type="submit"
            @click="handleDataSearch"
          >
            Search
          </el-button>
          <el-button type="primary">
            Create
          </el-button>
        </template>
      </sk-form>
    </template>
    <template #name="slotProps">
      <widget-item
        :model.sync="slotProps.row.name"
        :option="{ type: 'el-input' }"
        :editable="true"
        :editmode="false"
        @paste="handleDataPaste(slotProps.$index, slotProps.column, $event)"
      />
    </template>
    <template #hello="slotProps">
      <widget-item
        :model.sync="slotProps.row.hello"
        :option="{ type: 'el-select', option: selectOption, component: { automaticDropdown: true } }"
        :editable="true"
        :editmode="false"
        @paste="handleDataPaste(slotProps.$index, slotProps.column, $event)"
      />
    </template>
  </sk-table>
</template>
<script>

export default {
  name: 'Table',
  data () {
    return {
      searchModel: { },

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
      },

      selectOption: [
        {
          value: 'base',
          label: 'Base Select'
        },
        {
          value: 'advance',
          label: 'Adv Select'
        }
      ],

      widgetList: [
        {
          prop: 'label',
          type: 'el-input',
          component: { clearable: true },
          formItem: {
            label: 'label'
          }
        },
        {
          prop: 'name',
          type: 'el-input',
          component: { clearable: true },
          formItem: {
            label: 'name'
          }
        },
        {
          prop: 'age',
          type: 'el-input',
          component: { clearable: true },
          formItem: {
            label: 'age'
          }
        },
        {
          span: 6,
          slotname: 'operation',
          formItem: {
            labelWidth: '0px'
          }
        }
      ]
    }
  },
  computed: {
    tableColumns () {
      return [
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
          width: '500',
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
      ]
    }
  },
  methods: {
    handleDataSearch () {
      console.log(this.searchModel)
    },
    /**
     * 粘贴操作
     */
    handleDataPaste (rowIndex, column, event) {
      let clipboardData = event.clipboardData || window.clipboardData
      let clipboardDataText = clipboardData.getData('Text')
      let dataMatrix = this.$utils.matrix(clipboardDataText)

      let columnName = column.property
      // TODO: 需要去除 fixed 列
      let columnIndex = this.tableColumns.findIndex(item => item.prop === columnName)
      let insertColumns = this.$utils.drop(this.tableColumns, columnIndex)
      let insertColumnsNameList = insertColumns.map(item => item.prop)

      for (let index = 0; index < dataMatrix.length; index++) {
        // 获取指定行数据
        let currentRowData = JSON.parse(JSON.stringify(this.tableData[index + rowIndex] || {}))

        let rowData = dataMatrix[index]

        for (let colIndex = 0; colIndex < rowData.length; colIndex++) {
          const cellValue = rowData[colIndex]
          if (!insertColumnsNameList[colIndex]) continue
          currentRowData[insertColumnsNameList[colIndex]] = cellValue
        }

        this.tableData.splice(index + rowIndex, 1, currentRowData)
      }
    }

  }
}
</script>
<style lang="less" scoped>

</style>
