function isArray () {

}

function bind (fn, thisArg) {
  return function wrap () {
    let args = new Array(arguments.length)
    for (let i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }
    return fn.apply(thisArg, args)
  }
}

// function Util (conf) {
//   this.conf = conf
// }

// Util.prototype.request = function request () {
//   console.log('property test')
// }

// function createInstance (defaultConf) {
//   let context = new Util(defaultConf)
//   let instance = bind(Util.prototype.request, context)
//   return instance
// }

// let init = function init () {
//   return createInstance({ name: 'zm' })
// }

// let axios = init()
// axios()
// let a = [function caseA () {
//   console.log('case a')
// }, function caseB () {
//   console.log('case b')
// }]
// // Promise Testing Case
// let promise = Promise.resolve({ name: 'zm' })
// promise.then(a.shift(), rej => {
//   console.log(rej)
// })
// console.log(a)

export default {
  isArray,
  bind
}
