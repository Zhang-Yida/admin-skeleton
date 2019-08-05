<template>
  <el-container class="sk-container">
    <el-aside width="200px">
      <sidebar :menu-list="menuList" />
    </el-aside>
    <el-container>
      <el-header
        height="40px"
        class="sk-header"
      >
        <div class="sk-header__menuhandler">
          <i
            class="iconfont icon-menu-colspan"
            style="color: #909399;"
          />
        </div>
        <el-dropdown
          class="sk-header__profile"
          size="small"
        >
          <span class="el-dropdown-link">
            下拉菜单
            <i class="el-icon-arrow-down el-icon--right" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>{{ $t('framework.profile') }}</el-dropdown-item>
            <el-dropdown-item divided>
              {{ $t('framework.logout') }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
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
  beforeRouteEnter (to, from, next) {
    // next({
    //   name: 'Login'
    // })
    console.log(`[home.vue beforeRouteEnter]`)

    next()
  }
}
</script>
<style lang="less" scoped>
.sk-container {
  height: 100%;
  .sk-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #eee;

    &__menuhandler {
      i {
        font-size: 20px;
        cursor: pointer;
      }
    }

    &__profile {
    }
  }
}
</style>
