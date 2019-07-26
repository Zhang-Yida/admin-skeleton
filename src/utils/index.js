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

function baseSlice (array, start, end) {
  var index = -1
  var length = array.length

  if (start < 0) {
    start = -start > length ? 0 : (length + start)
  }
  end = end > length ? length : end
  if (end < 0) {
    end += length
  }
  length = start > end ? 0 : ((end - start) >>> 0)
  start >>>= 0

  var result = Array(length)
  while (++index < length) {
    result[index] = array[index + start]
  }
  return result
}

function drop (array, n) {
  var length = array ? array.length : 0
  if (!length) {
    return []
  }
  n = (n === undefined) ? 1 : n
  return baseSlice(array, n < 0 ? 0 : n, length)
}

// 对于 excel 中 copy 出的数据进行 matrix 转换
function matrix (str) {
  let rowMatrix = str.split(/\r\n/ig)
  if (rowMatrix.length === 0) return

  let matrix = rowMatrix.map(item => item.split(/\t/ig))
  return matrix
}

export default {
  isArray,
  isObject,
  bind,
  merge,
  drop,
  matrix
}
