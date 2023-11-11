// 练习：生成随机数，并且是偶数





// function test() {
//     const randomNum = Math.floor(Math.random() * 100) //四舍五入

//     if (randomNum % 2 ===0){
//         return console.log(randomNum)    
//     }else{
//         return test()
//     }

// }

// test()

// -----------------------

// 练习：立即执行函数，传入参数，如果不是函数报错，如果小于一个参数报错，如果传入函数则推入闭包的cache里，如果没有传入任何东西则依次执行cache里的函数

// const ok = (function () {
//     const cache = []
//     return function (fn) {

//         if (arguments.length === 0) {
//             cache.forEach(fn => fn())
//             return
//         }

//         if (arguments.length > 1) {
//             throw new Error('必须传入小于1个参数')
//         }

//         if (typeof fn !== 'function') {
//             throw new Error('必须传入函数')
//         } else {
//             cache.push(fn)
//         }
//     }
// })()

// // ok(6765)
// // ok(6765,344)
// ok(()=>console.log(2232))
// ok(()=>console.log(2232))
// ok()

// -------------------------

// 练习：this和function的练习，设置一个原型方法after，让一个test函数调用它，然后after方法会先执行test函数，再执行after自己的函数

// this失效案例：
// Function.prototype.after = function (fn) {
//     console.log(this) //被test调用，指向test
//     return function () { 
//         console.log(this) //被独立调用，指向Window，因为是用function，所以独立就生成了，如果用箭头函数，就是被调用时才生成。function自己就有this，不会通过闭包的方式把调用的获取到
//         this()
//         fn()
//     }
// }

// this生效办法一：
// Function.prototype.after = function (fn) {
//     return () => {
//         console.log(this) //用箭头函数，就是被调用时才生成，箭头函数没有自己的独立this。会在作用域上找，取过来放到自己的闭包对象中的this属性上
//         this()
//         fn()
//     }
// }

// this生效办法二(通过存入this)：
// Function.prototype.after = function (fn) {
//     const self = this
//     return () => {
//         console.log(self)
//         self()
//         fn()
//     }
// }

// function test() {
//     console.log(1111)
// }

// const resultFn = test.after(() => console.log(222))
// resultFn()

