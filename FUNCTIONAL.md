## 组件详细功能拆分

### **Element 中 Table 组件二次封装**
- 表格分页
- 表格搜索功能集成
- 数据复制粘贴功能
  - 起始单元格如何显示，输入框 or 正常文本
  - 如何触发粘贴功能，快捷键 or 右键 contextmenu
  - 是否对粘贴到单元格的内容做数据校验，如果某数据列为数据字典 or 数字 or other 类型
  - 是否保留数据分页功能，如果不分页，大数据表格集成涉及到兼容性问题


#### 粘贴功能调研

表格粘贴功能需要兼容 IE11 及主流浏览器，具体兼容信息可查看[caniuse paste](https://caniuse.com/#search=paste)

IE 浏览器中，只有在 editable fields 中才可执行 paste，同时获取 paste 数据时，需要通过 window.clipboardData.getData('Text')
