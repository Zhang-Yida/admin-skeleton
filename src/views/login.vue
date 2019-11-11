<template>
  <div class="sk-login">
    <simple-form
      ref="loginForm"
      :model="formModel"
      :form-layout="{ labelWidth: '0px' }"
      :widget-list="widgetList"
      :widget-grid="24"
      class="sk-login__form"
    >
      <template #title="slotProps">
        <div class="sk-login__title">
          Admin Skeleton
        </div>
      </template>
      <template #operation="slotProps">
        <el-button
          type="primary"
          size="small"
          style="width: 100%;"
          @click="handleUserLogin"
        >
          {{ $t('framework.login') }}
        </el-button>
      </template>
    </simple-form>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      loading: false,
      formModel: { username: '', password: '' },

      widgetList: [
        {
          slotname: 'title'
        },
        {
          prop: 'username',
          type: 'el-input',
          component: {
            clearable: true,
            prefixIcon: 'iconfont icon-user',
            size: 'small'
          },
          validate: {
            required: true,
            message: this.$t('validation.mustInput'),
            trigger: 'blur'
          }
        },
        {
          prop: 'password',
          type: 'el-input',
          component: {
            prefixIcon: 'iconfont icon-password',
            size: 'small',
            showPassword: true
          },
          validate: {
            required: true,
            message: this.$t('validation.mustInput'),
            trigger: 'blur'
          }
        },
        {
          slotname: 'operation'
        }
      ]
    }
  },
  created () {},
  methods: {
    handleUserLogin () {
      this.$refs.loginForm
        .validate()
        .then(_ => {
          this.loading = true
          this.$axios
            .post('/api/system/login', this.formModel)
            .then(resp => {
              let respdata = resp.data
              localStorage.token = respdata.token
              this.$refs.loginForm.resetFields()
              this.$router.push('/')
            })
            .finally(_ => {
              this.loading = false
            })
        })
        .catch(_ => {})
    }
  }
}
</script>
<style lang="less" scoped>
.sk-login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  &__title {
    font-size: 20px;
    // font-weight: bold;
    text-align: center;
    color: #333;
  }
  &__form {
    width: 300px;
  }
}
</style>
