const requireComp = require.context('./', false, /\.js$/)

let configMapping = {}
requireComp.keys().forEach(filename => {
  if (filename === './index.js') return
  const compModule = requireComp(filename)
  const compConfig = compModule.default || compModule

  let name = filename.replace(/(\.\/)|(\.js)/ig, '')
  configMapping[name] = compConfig
})

export default configMapping
