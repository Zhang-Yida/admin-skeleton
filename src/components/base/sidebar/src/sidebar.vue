<script>
export default {
  name: 'Sidebar',
  props: {
    menuList: { type: Array, required: true }
  },
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    getItem (menuItem) {
      if (menuItem.children && menuItem.children.length > 0) {
        return this.getSubMenu(menuItem)
      } else {
        return this.getMenuItem(menuItem)
      }
    },

    /**
     * 多级菜单递归调用，实现无层级限制菜单
     */
    getSubMenu (menuItem) {
      let { getItem } = this
      return (
        <el-submenu index={menuItem.path}>
          <template slot="title">
            {menuItem.icon && <i class={menuItem.icon}></i>}
            {this.getMenuTitle(menuItem.title)}
          </template>
          {menuItem.children.map(item => {
            return getItem(item)
          })}
        </el-submenu>
      )
    },

    getMenuItem (menuItem) {
      return (
        <el-menu-item index={menuItem.path}>
          {menuItem.icon && <i class={menuItem.icon}></i>}
          {this.getMenuTitle(menuItem.title)}
        </el-menu-item>
      )
    },

    getMenuTitle (title) {
      return <span> {title} </span>
    }
  },
  // 通过 render 函数，实现组件
  render (h) {
    let { menuList, isCollapse, getItem } = this
    return (
      <el-menu
        class="sk-menu"
        unique-opened
        collapse={isCollapse}
        router={true}
      >
        {menuList.map(menuItem => {
          return getItem(menuItem)
        })}
      </el-menu>
    )
  }
}
</script>
<style lang="less" scoped>
.sk-menu {
  height: 100%;
}
</style>
