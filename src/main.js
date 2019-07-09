import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

/**
 * ElementUI 自定义主题
 */
import '../theme/index.css'
import ElementUI from 'element-ui'

/**
 * i18n 多语言支持
 */
import i18n from './i18n'

import './styles'

Vue.use(ElementUI, { size: 'mini', i18n: (key, value) => i18n.t(key, value) })
Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
