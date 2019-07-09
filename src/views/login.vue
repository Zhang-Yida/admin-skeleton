<template>
  <div class="sk-login">
    <el-form class="sk-login__form">
      <el-form-item class="animated faster fadeInUp">
        <el-input v-model="username" />
      </el-form-item>
      <el-form-item class="animated faster fadeInUp delay-dot2s">
        <el-input v-model="password" />
      </el-form-item>
      <el-button
        type="primary"
        class="animated fadeInUp faster delay-dot4s"
      >
        Submit
      </el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>
<style lang="less" scoped>
.sk-login{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  &__form {
    width: 350px;
  }
}
</style>
