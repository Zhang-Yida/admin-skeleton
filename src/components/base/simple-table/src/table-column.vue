<script>
export default {
  name: 'SimpleTableColumn',
  props: {
    columnAttrs: { type: Object, required: true }
  },
  data () {
    return {}
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
        return <el-table-column attrs={columnAttrs} />
      }
    }
  },
  render () {
    let { columnAttrs, getColumn } = this
    return getColumn(columnAttrs)
  }
}
</script>
