import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import system from './modules/system'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  /**
   * 无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误
   * 请确保在发布环境下关闭严格模式，以避免性能损失
   */
  strict: process.env.NODE_ENV !== 'production',
  modules: { system, user },
  getters
})
