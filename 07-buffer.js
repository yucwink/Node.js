const b1 = Buffer.alloc(10) // 内存空间中无数据，一般使用alloc
const b2 = Buffer.allocUnsafe(10) // 内存空间中存在数据。在内存空间只要存在空闲空间就会拿来使用
// from接受数据源创建已有大小的数据空间
const b3 = Buffer.from('中')
// 参数1：数据（字符串/数组/buffer类型） 参数2：编码类型（默认utf-8） 
console.log(b3) // <Buffer 31> 31是十六进制
console.log(Buffer.from('汉字')) //<Buffer e6 b1 89 e5 ad 97>
console.log(Buffer.from([1,2,3,'中'], 'utf-8')) //<Buffer 01 02 03> 传入中文时需要先转换成16位
console.log(b3.toString())

const b4 = Buffer.alloc(3)
const b5 = Buffer.from(b4)
console.log('b4', b4)
console.log('b5', b5)
b4[0] = 1
console.log('b4', b4)
console.log('b5', b5)