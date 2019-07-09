<template>
  <div>
    <el-input v-model="username" />
    <el-input v-model="password" />
    <el-date-picker />
    <el-button type="primary">
      Submit
    </el-button>
    {{ $t('message') }}
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

</style>
