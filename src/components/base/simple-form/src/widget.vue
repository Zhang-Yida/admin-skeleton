<template>
  <div
    v-clickoutside="handleClickoutside"
    @click="handleWidgetClick"
  >
    <component
      :is="currentOption.type"
      ref="widget"
      v-model="currentModel"
      class="sk-widget"
      v-bind="currentOption.component"
      :option="currentOption.option"
      v-on="currentOption.event"
    >
      <template v-if="hasChildrenComponents">
        <el-option
          v-for="(optionItem, optionIdx) in currentOption.option"
          :key="optionIdx"
          :value="optionItem.value"
          :label="optionItem.label"
        />
      </template>
    </component>
  </div>
</template>

<script>
import Clickoutside from 'element-ui/src/utils/clickoutside'
export default {
  name: 'WidgetItem',
  directives: { Clickoutside },
  props: {
    // 用于渲染组件的组件属性
    option: { type: Object, required: true },
    model: { type: [Array, String, Number, Object] },
    /**
     * 该组件是否为可编辑组件
     * 对于 form 来说，需要判断查看页面还是编辑页面，用于展示本文 or 组件
     * 对于 table 来说，用来设置某一 slot 列是否为组件
     */
    editable: { type: Boolean, default: true },
    /**
     * 初始状态，组件 or sk-label
     * 只有在 table 中设置此属性才生效，因此默认为 true
     */
    editmode: { type: Boolean, default: true }
  },
  data () {
    return {
      isFocus: false
    }
  },
  computed: {
    currentModel: {
      set: function (data) { this.$emit('update:model', data) },
      get: function () { return this.model }
    },

    currentOption () {
      // 判断该组件是否为只读
      if (this.currentEditMode) {
        return this.option
      } else {
        return this.$utils.merge(this.option, { type: 'sk-label' })
      }
    },
    currentEditMode () {
      if (this.editable) {
        return this.editmode ? this.editmode : this.isFocus
      } else {
        return this.editable
      }
    },
    isDepFocus () {
      if (this.editable) {
        if (this.editmode) return false
        else return true
      } else {
        return false
      }
    },
    hasChildrenComponents () {
      return this.option.type === 'el-select'
    }
  },
  watch: {
    isFocus (val) {
      if (val) {
        this.$nextTick(_ => {
          this.$refs.widget.focus()
          this.$refs.widget.$el.addEventListener('paste', this.handlePaste, false)
        })
      } else {
        this.$refs.widget.$el.removeEventListener('paste', this.handlePaste, false)
      }
    }
  },
  methods: {
    handleWidgetClick () {
      if (this.isDepFocus) {
        this.isFocus = true
      }
    },

    handleClickoutside () {
      if (this.isDepFocus && this.isFocus) {
        // 失去焦点
        setTimeout(() => {
          this.isFocus = false
        }, 0)
      }
    },

    handlePaste (event) {
      event.preventDefault()
      if (this.isDepFocus && this.isFocus) {
        this.$emit('paste', event)
      }
    }
  }
}
</script>
<style lang="less" scoped>
.sk-widget {
  width: 100%;
}
</style>
