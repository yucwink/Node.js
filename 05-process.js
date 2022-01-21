// 1.资源 cpu 内存
const fs = require('fs')
Buffer.alloc(1000) //分配1k字节
console.log(process.memoryUsage())
// {
//   rss: 20701184, //长住内存
//   heapTotal: 4481024, //堆区
//   heapUsed: 2692024, //当前脚本使用的内存大小
//   external: 893780, //扩展内存
//   arrayBuffers: 9898 //缓冲区大小
// }
console.log(process.cpuUsage())
// { user: 31000, system: 15000 } //用户和系统所占用的内存

// 2.运行环境，运行目录，cpu目录，cpu架构，用户环境，系统平台
console.log(process.cwd()) // current word dir 返回运行目录
console.log(process.version) // 返回node的版本
console.log(process.versions) // 包含node版本，v8，zlib，brotli版本
console.log(process.arch) // cpu架构
console.log(process.env.NODE_ENV) // vue框架回设置
console.log(process.env.PATH) //系统环境变量
console.log(process.env.USERPROFILE) // 本机管理员目录。mac平台使用home
console.log(process.platform) // win32 系统的平台

// 3 运行状态：启动参数，PID，运行时间
console.log(process.argv) // node启动程序的完成路径 启动文件所在的完整路径 ...运行时候的参数
console.log(process.argv0) // 第一个参数
console.log(process.pid) // ppid
setTimeout(()=>{
  console.log(process.uptime())
},1000)
console.log(process.uptime()) //文件从运行开始到运行结束的时间