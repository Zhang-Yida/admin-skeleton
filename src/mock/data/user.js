export default [
  {
    url: '/api/system/login'
  },
  {
    url: '/api/system/getUserinfo',
    method: 'post',
    response (config) {
      console.log(typeof config.body)

      return {
        code: 200,
        message: 'ok',
        data: {

        }
      }
    }
  },
  {
    url: '/api/system/logout'
  }
]
