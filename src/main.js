import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import axios from './axios'
import utils from './utils'

import './mock'

/**
 * ElementUI 自定义主题
 */
import '../theme/index.css'
import ElementUI from 'element-ui'

/**
 * i18n 多语言支持
 */
import i18n from './i18n'

import '@/components'

/**
 * 全局样式引入
 */
import './styles'

Vue.use(ElementUI, { size: 'mini', i18n: (key, value) => i18n.t(key, value) })
Vue.use(axios)

Vue.prototype.$utils = utils

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
