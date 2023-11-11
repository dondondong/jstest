// // 函数给变量赋值
// function fine(){
//     console.log('111')
// }











// // var a = fine;
// // a()


// 对象属性 -> 数据 -> 方法 -> 函数
// var person = {}
// person.hello = fine
// person.hello()

// 块级作用域
// {let a = 100;}
// console.log(a);
// 声明常量 const，不能改变数据（不能改变指向的地址），但是对象的属性可以改变（实际没有改变地址）

// let const var 的区别
// let const 不能在声明前访问或使用，会放进“暂时性死区”（TDZ），比 var 安全
// let const 不能重复声明
// 多用 let 和 const

// let和const要点
// 共同点：都会被块级作用域锁定；外部无法访问块级中的let和const的标识符；声明的变量要在声明代码后才能使用
// 不同点：const必须赋值；let可以先声明再赋值；

// this
// 只在函数中有，除箭头函数外
// 可理解成是一个变量、标识符
// 默认声明的

// this最重要的是调用方式
// 当箭头函数中的this通过某个对象的方式来调用，其指向就是对象本身
// 如果不是通过对象调用，this指向window

// 箭头函数没有this

// 构造函数
// 以函数方式为对象的属性传参
// 不能用箭头函数的写法
// function CatConstructor(name, age){
//     this.name = name
//     this.age = age
//     this.miao = () => console.log('miao')
// }

// const cat1 = new CatConstructor('gulu',1)
// const cat2 = new CatConstructor('huahua',1)
// const cat3 = {
//     miao:  () => console.log('miao')
// }

// console.log(cat1)
// console.log(cat2)
// console.log(cat3)

// new
// 配合构造函数使用
// 1. 在内存创建新对象
// 2. 构造函数内部的this指向新对象
// 3. 执行函数内部的代码（给新对象添加属性和方法）
// 4. 如果构造函数返回非空对象，则返回该对象，否则默认返回刚创建的对象，也就是返回this

// 一个函数在调用的时候有没有用 new 是该函数是否作为构造函数来执行的关键

// new.target 指向函数本身

// 练习
// function tell(name) {
//     this.name = name
//     this.tellMyName = function () {
//         console.log(this.name)
//     }
// }

// const a = new tell('don');
// const b = new tell('yang');
// a.tellMyName()
// b.tellMyName()
// 
// function tell(name, type) {
//     this.name = name
//     this.type = type
//     console.log(this)
// }

// tell()
// new tell()
// console.log(new tell())

// 函数也是对象
// 默认三个属性 length prototype name
// function test() {

// }
// test.go = () => console.log('aaaa')
// test.go()
// console.log(test.length)
// console.log(test.prototype)
// console.log(test.name)

// 弹窗输入东西，在浏览器中显示
// function myName(name) {
//     this.showname = () => document.write(name)
// }
// new myName(window.prompt()).showname()

// 静态方法：构造函数上的方法
// Object.is // 验证是否同一个对象

// 类型
// 类型的实例 or 构造函数的实例
// String
// Number
// Boolean
// Object
// Function
// Window
// const str = new String(1)
// console.log(str)
// const num = new Number(1)
// console.log(num)
// const boolean = new Boolean(1)
// console.log(boolean)
// const sum = new Function(1)
// console.log(sum)

// instanceof 验证某实例是否对应某构造函数


// ----------------------------------------以下为练习----------------------------------------

// function func(x, y) {
//     this.a = x
//     this.b = y
// }


// function test(e, f) {
//     if (typeof e !== 'object' || typeof f !== 'object') {
//         console.log('我需要对象')
//     } else if (typeof e === 'object' && typeof f === 'object') {
//         const xx = new func(e, f)
//         console.log(xx)
//     }

// }

// let one = {
//     name: 'name'

// }
// let two = {
//     name: 'name',
//     miao: () => console.log('miao')
// }

// test(one, two)


// const x = (a, b) => {
//     for (let i = 0; i <= a; i++) {
//         for (let j = 0; j <= b; j++)
//             console.log(i + '-' + j)
//     }
// }

// x(3, 3)

// const x = (a, b, isReverse) => {
//     if (isReverse === true) {
//         for (let i = a; i >= 0; i--) {
//             for (let j = b; j >= 0; j--) {
//                 console.log(i + '-' + j)
//             }
//         }
//     } else {
//         for (let i = 0; i <= a; i++) {
//             for (let j = 0; j <= b; j++) {
//                 console.log(i + '-' + j)
//             }
//         }
//     }
// }

// x(6, 8, true)

// const x = (a, b, isReverse) => {
//     for (let i = isReverse ? 0 : a; isReverse ? i <= a : i>=0 ; isReverse ? i++ : i--) {
//         for (let j = isReverse ? 0 : b; isReverse ? j <= b : j>=0 ; isReverse ? j++ : j--) {
//             console.log(i + '-' + j)
//         }
//     }
// }

// x(6, 8, true)


// -------important!!!!!!!!!!!!!!!!!!!!!!!!!
// function LoopObj(name, age) {
//     this.name = name
//     this.age = age
//     this.loop = function (func) {
//         for (let key in this) {
//             if (typeof this[key] !== 'function') {
//                 func(this[key])
//             }
//         }
//     }
// }

// const loopObj2 = new LoopObj('11111', '22222')
// const loopObj3 = new LoopObj('100', '200')
// loopObj2.loop(function (x) {
//     console.log(x)
// })
// loopObj3.loop(function (x) {
//     console.log(x)
// })





