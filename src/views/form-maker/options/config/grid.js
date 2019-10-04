const grid = {
  base: [{
    prop: 'gutter',
    type: 'el-input-number',
    component: { min: 0 },
    formItem: {
      label: '栅格间隔'
    }
  },
  {
    // 布局
    slotname: 'grid',
    formItem: {
      label: '栅格分配'
    }
  }]
}

export default grid
