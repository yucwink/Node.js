// 一.模块的导入和导出
// const a = 22;
// const b = {name: 'hello'}
// const addFn = (x, y) => {
//   return x + y
// }
// module.exports = {
//   a: a,
//   b: b,
//   addFn: addFn
// }

// console.log('module', module)

// 二 module
// let obj = requite('./m')

// 三。export
// 不能堆exports直接赋值对象
// exports.name = 'hello'  //可以

// 四、同步加载
let name = 'lg'
module.exports = name
console.log('m被加载了')