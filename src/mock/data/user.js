export default [
  {
    url: '/api/system/login',
    method: 'post',
    response () {
      return {
        code: 200,
        message: 'ok',
        data: { token: '2d6f78174b934e99b568de4852dd0774' }
      }
    }
  },
  {
    url: '/api/system/getUserinfo',
    method: 'post',
    response (config) {
      console.log(typeof config.body)

      return {
        code: 200,
        message: 'ok',
        data: {}
      }
    }
  },
  {
    url: '/api/system/logout'
  }
]
