import Vue from 'vue'
import VueI18n from 'vue-i18n'

import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

/**
 * 自定义 i18n language
 */
import enLang from './lang/en'
import zhCNLang from './lang/zh-CN'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLang,
    ...enLocale
  },
  zhCN: {
    ...zhCNLang,
    ...zhLocale
  }
}
const i18n = new VueI18n({
  locale: 'zhCN',
  messages
})

export default i18n
