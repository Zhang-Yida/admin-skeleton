<script>
export default {
  name: 'SimpleTableColumn',
  props: {
    columnAttrs: { type: Object, required: true },
    // 用于接收父组件提供的 slot 对象列表
    slotList: { type: Object, default: () => { return {} } }
  },
  methods: {
    getColumn (columnAttrs) {
      if (columnAttrs.children && columnAttrs.children.length > 0) {
        return (
          <el-table-column label={columnAttrs.label}>
            {
              columnAttrs.children.map(columnChildItemAttrs => {
                return this.getColumn(columnChildItemAttrs)
              })
            }
          </el-table-column>
        )
      } else {
        if (columnAttrs.slotname) {
          return (
            <el-table-column props={columnAttrs}>
              {
                this.slotList[columnAttrs.slotname]
              }
            </el-table-column>
          )
        } else {
          return <el-table-column props={columnAttrs} />
        }
      }
    }
  },
  render () {
    let { columnAttrs, getColumn } = this
    return getColumn(columnAttrs)
  }
}
</script>
