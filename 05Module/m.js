// 一.模块的导入和导出
const a = 22;
const b = {name: 'hello'}
const addFn = (x, y) => {
  return x + y
}
module.exports = {
  a: a,
  b: b,
  addFn: addFn
}

console.log(module)