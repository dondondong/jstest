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



// -----

// const a = [1, 2, '222', '333', 3]
// let b = []

// function x(y) {
//     b = y.filter((c) => typeof c === 'string')
// }
// x(a)
// console.log(b)

// forEach遍历检验并执行
// function x(y) {
//     y.forEach(ele => {
//         return typeof ele === 'string' ? b.push(ele) : null;
//     });
// }

// x(a)
// console.log(a)
// console.log(b)

// map
// function x(y) {
//     y.map(ele => {
//         typeof ele === 'string' ? b.push(ele) : null;
//     });
// }

// x(a)
// console.log(a)
// console.log(b)

// -------

// reduce 加总（并不是只能加总）
// reduce(cb(累计器，当前元素), 第一个参数的值)
// 每次cb的返回值，都作为下一次“累计器”的值
// const func = (accumulator, currentvalue) => accumulator + currentvalue
// const c = a.reduce(func)
// console.log(c)
// 第二个参数决定了accumulator第一次执行时的值，也决定了从哪个开始遍历
// 如果传了第二个参数，它就会作为cb第一次执行的accumulator，currentvalue就是数组的第一个元素
// 如果没传，数组第一个元素就作为accumulator，currentvalue就是第二个元素
// reduceRight是从右到左

// 练习：age全部加总
// const family = [
//     { mom: { age: 45 } },
//     { dad: { age: 45 } },
//     { son: { age: 45 } },
//     { daughter: { age: 45 } }
// ]
// const reducer = (accumulator, currentvalue) => {
//     for (let key in currentvalue) {
//         return accumulator + currentvalue[key].age
//     }
// }
// const all = family.reduce(reducer, 0)
// console.log(all)

// 练习：数组的数字类型全部加总
// const arr = [[1, 2], [2, 4], [3, 5, 4]]
// const all = arr.reduceRight((ac1, cv1) => {
//     const cv1reduced = cv1.reduceRight((ac2, cv2) => {
//         return ac2 + cv2
//     }, 0)
//     return ac1 + cv1reduced
// }, 0)
// console.log(all)


// ----------

// reverse 数组反向

// sort
// function compare(a,b){ a-b }
// arr.sort(compare)
// 首先确定升序还是降序
// 假设a b已经被排好，a在前，b在后
// 要负数，升序，a-b
// 要正数，降序，b-a

// const family = [{ age: 6 }, { age: 2 }, { age: 4 }]
// family.sort((a, b) => { return b.age - a.age })
// console.log(family)

// 练习：排序后，把人名传入一个新数组
// let arr = [
//     { name: 'tim', score: 60 },
//     { name: 'hua', score: 120 },
//     { name: 'diao', score: 89 },
//     { name: 'ma', score: 23 },
// ]

// function scoreSort(arr) {
//     arr.sort((a, b) =>  b.score - a.score )
//     return arr.map((ele) => ele.name )
// }

// console.log(scoreSort(arr))

// ----------

// findIndex 返回数据的索引值
// cb执行返回true，findIndex会把这次执行cb的元素的索引值返回
// 没有满足的话，返回-1
// 不会修改原数组

// -----------

// indexOf 直接返回元素的索引值
// indexOf(元素, 从哪个索引位开始找)

// const arr1 = ['1', 'a', '33', 'a', 'a', 'bb', 'aaa', 'a']
// let ele = 'a'
// let arr2 = []
// let idx = arr1.indexOf(ele)

// while (idx != -1) {
//     arr2.push(idx)
//     idx = arr1.indexOf(ele, idx + 1)
// }

// console.log(arr2)

// -----------

// lastIndexOf 指定元素的最后一个索引，从右往左找
// lastIndexOf(元素，指定索引位开始往前找)

// 练习：函数传入两个参数，第一个是数组，第二个是类型，函数能把数组中所有符合类型的索引位都找出来，组成新数组

let arr1 = [1, 2, 3, 4, 5, '33', true, '224', 1]
let arr2 = []

function func(arr, type) {
    let typeofele = (ele) => typeof ele === type;
    let idx = arr.findIndex(typeofele)
    // while (idx != -1) {
    //     arr2.push(idx)
    //     idx = arr.findIndex(typeofele, idx + 1)
    // }
}

func(arr1, 'string')
console.log(arr2)