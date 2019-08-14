const input = {
  base: [{
    // base 基础属性，即 prop
    prop: 'prop',
    type: 'el-input',
    component: { },
    formItem: {
      label: '字段属性名称'
    }
  }],
  form: [{
    // form 上的属性，即 label
    prop: 'label',
    type: 'el-input',
    component: { },
    formItem: {
      label: '中文名称'
    }
  }],
  component: [{
    // 组件官方文档中的组件
    prop: 'placeholder',
    type: 'el-input',
    component: { clearable: true },
    formItem: {
      label: '输入框占位文本'
    }
  }]
}

export default input
