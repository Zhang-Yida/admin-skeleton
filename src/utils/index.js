function isArray () {}

function bind (fn, thisArg) {
  return function wrap () {
    let args = new Array(arguments.length)
    for (let i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }
    return fn.apply(thisArg, args)
  }
}
function isObject (value) {
  const type = typeof value
  return value !== null && (type === 'object' || type === 'function')
}

// { a: [{ b: 2 }] } { a: [{ c: 2 }]} -> { a: [{b:2}, {c:2}]}
// merge({o: {a: 3}}, {o: {b:4}}) => {o: {a:3, b:4}}
function merge (source, other) {
  if (!isObject(source) || !isObject(other)) {
    return other === undefined ? source : other
  }
  return Object.keys({
    ...source,
    ...other
  }).reduce(
    (acc, key) => {
      // 递归合并 value
      acc[key] = merge(source[key], other[key])
      return acc
    },
    Array.isArray(source) ? [] : {}
  )
}
export default {
  isArray,
  isObject,
  bind,
  merge
}
