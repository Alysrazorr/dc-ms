const __idKey = 'p_code'
const __pIdKey = 'p_parentCode'
const __nameKey = 'p_name'

export default {
  a2t: function(array, idKey = __idKey, pIdKey = __pIdKey, nameKey = __nameKey) {
    array.sort(function(a, b) {
      return a[idKey] - b[idKey]
    })
    var children = {}
    var obj
    for (var l = array.length - 1; l > -1; l--) {
      obj = array[l]
      obj.name = obj[nameKey]
      if (children[obj[idKey]]) {
        obj.children = children[obj[idKey]]
      }
      if (obj[pIdKey]) {
        if (!children[obj[pIdKey]]) {
          children[obj[pIdKey]] = []
        }
        children[obj[pIdKey]].push(JSON.parse(JSON.stringify(obj)))
        array.splice(l, 1)
      }
    }
    return array
  }
}
