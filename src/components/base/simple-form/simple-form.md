# simple-form 使用文档

>simple-form 组件简化表单的配置，使用 json 格式的强规约配置生成表单，进而适用于业务开发。

## 一、介绍

该组件基于 [Element Form](https://element.eleme.cn/#/zh-CN/component/form) 进行二次开发。具体的配置可移步官网进行解读，本文仅介绍封装后的属性及方法的介绍。

## 二、使用说明

#### Prop

> formLayout

```javascript
props: {
  formLayout: { type: Object, default: () => {} },
}
```
此 prop 用于设置 el-form 的基础显示样式，此项配置可参考 [Element Form Attributes](https://element.eleme.cn/#/zh-CN/component/form#form-attributes)。用户可以以对象的形式将  Form Attributes 中的属性传递给 simple-form 设置表单展现。用例如下。
```html
<simple-form
  :model="searchModel"
  :widget-list="widgetList"
  :form-layout="{ labelPosition: 'right', labelWidth: '60px' }"
/>
```

> model 表单数据对象
```javascript
props: {
  model: { type: Object, required: true }
}
```
与 el-form 的 model 属性一致，用于传递表单数据对象，该属性为**必填属性**。

> widgetGrid 表单布局配置
```javascript
props: {
  widgetGrid: { type: [Number, String], default: 6 },
}
```
在此，介绍一下 simple-form 中表单组件的基础布局。在 simple-form 中，使用了 [Element Layout](https://element.eleme.cn/#/zh-CN/component/layout) 的布局方法，采用一行 4 列布局，由该属性定义中的 **default: 6** 可看出。但是，这并不能满足我们的需求，比如我们向一行显示两个组件，一个 **span: 16**，另外一个为 **span: 8**，这种均分的配置就限制了我们的布局样式，因此这种个性化的布局配置并不能满足常规的需求。如何解决此问题，我们会在之后的 widgetList 属性中详细介绍。

> widgetList 表单内组件配置
```javascript
props: {
  widgetList: { type: Array, required: true }
}
```
widgetList 是展示表单内组件的根本配置。通过传递组件数组进而展示表单。对于 widgetList 中的每个元素的配置规则，需要参考 widget 组件的设计，在此以某几个组件为 demo 进行讲解，后续文档会补充。

```javascript
widgetList: [
  {
    // 绑定到该组件上的 prop，同时用于 model 中的双向绑定
    prop: 'label',
    // 组件名称，可以是 Element Form 类别中的官方组件，也可以是自定义的表单类型的组件
    type: 'el-input',
    // 组件属性，传递给组件，影响组件显示和功能的属性
    component: { clearable: true },
    // 配置到 el-form-item 上的属性，可参考 [Element Form-Item Attributes](https://element.eleme.cn/#/zh-CN/component/form#form-item-attributes)
    formItem: {
      label: 'label'
    }
  },
]
```
以上同时也介绍了 widget 的使用，目前 widget 正在开发中，未来会更好的兼容 Element Form 中的所有组件，同时，在开发自定义组件过程中，也要考虑是否能被 widget 组件更好的集成。

#### Methods

以下只是官方提供的方法向外暴露，具体介绍请参考 [官方文档](https://element.eleme.cn/#/zh-CN/component/form#form-methods)。
> resetFields

> validate