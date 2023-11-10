// Uncaught 未捕获
// ReferenceError 引用错误
// TypeError 类型错误
// SyntaxError 语法错误

// Error 基本类型 所有其他错误类型都派生于它

// throw 抛出错误
// throw new TypeError('我是一个错误')
// 抛出一个错误类型的实例

// 自定义错误类型
// 一定要有name和message
// class customError extends Error {
//     constructor(message) {
//         super()
//         this.message = message
//         this.name = 'bigError'
//     }
// }

// function test() {
//     if (arguments.length < 2) {
//         throw new customError('我需要两个参数')
//     }else{
//         console.log(arguments)
//     }
// }

// test(1, 5, 6)

// ------------------------------------------------------

// 试一试捕获错误

// try中的代码报错，会跳到catch的执行
// finally 一定会运行，可写可不写

// const b = {
//     message: 'ok'
// };

// try {
//     console.log(a)
// } catch (b) { // 错误对象 message
//     console.log(b.message)
// } finally {
//     // console.log(b.message)
// }

