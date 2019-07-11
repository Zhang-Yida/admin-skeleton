<template>
  <el-container class="sk-container">
    <el-aside width="200px">
      <sidebar :menu-list="menuList" />
    </el-aside>
    <el-container>
      <el-header
        height="40px"
        class="sk-header"
      />
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import menuList from '@/mock/sidebar'
export default {
  name: 'Home',
  data () {
    return {
      menuList: menuList
    }
  },
  created () {
    console.log('Home Created')
  },
  mounted () {
    console.log('Home Mounted')
    this.$axios.post('/', { name: 'zm' })
  }
}
</script>
<style lang="less" scoped>
.sk-container{
  height: 100%;
  .sk-header{
  background: #eee;
  }
}
</style>
