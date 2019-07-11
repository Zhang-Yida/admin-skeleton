import Vue from 'vue'
const requireComp = require.context('./', true, /index\.js$/)
requireComp.keys().forEach(filename => {
  if (filename === './index.js') return
  const compModule = requireComp(filename)
  const compConfig = compModule.default || compModule
  Vue.component(compConfig.name, compConfig)
})
