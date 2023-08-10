// 构造函数数组
// const a = new Array(22)
// console.log(a)


// 新增的索引位，是length
// 数组最后一个元素的索引位，是length - 1

// 数组可理解为是一种默认使用数字作为key的一种对象

// 通过length修改数组长度

// const arr = [1, 1, 1]
// arr.length = 1
// console.log(arr)

// let person = {
//     name: '11',
//     age: '22',
//     talk() {
//         console.log('talk')
//     }
// }

// const arr = []

// const add = () => {
//     for (let key in person) {
//         arr[i] = person[key]
//     }
// }

// push
// pop
// shift
// unshift

// splice
// splice(start, deletecount, item)
// 可删除可添加
// 传一个参数，start开始全删
// 传两个参数，start开始删除deletecount数据
// 传三个参数，删掉并替换
// 纯插入，deletecount输入0
// 会返回删除的数据

// slice
// slice(begin, end)
// 左闭右开（左边包含，右边不包含）
// 不修改原数组

// 参数都必须是函数

// forEach
// 数组有几个数据，传入的函数就会执行几次
// 每次执行被传入的匿名函数时，数组中的数据会被作为实参传入
// callback cb 回调，一般都是用来称呼传入到某个方法中的函数，
// callback，三个，数据，索引位，数组
// 箭头函数中没有this，所以要改this，就要改成function
// 不返回任何东西，不修改数组本身
// const arr = [1, 3]
// arr.forEach(function (ele, index, arr) {
//     console.log(ele, index, arr, this)
// }, {})

// map（映射，你给我什么我放什么）
// 返回一个新数组
// 回调函数每次执行的返回数据，会被加入到一个要返回的新数组中
// const arr = [1, 3]
// const arr2 = arr.map(x => x * 2)
// console.log(arr2)

// some
// 数组中是否至少有一个数据满足cb测试
// 一个个数据进行cb的测试，返回boolean
// cb执行后如果返回真值，some方法立即结束，整体结果返回true
// 如果迭代完一个都没有真，整体返回false
// const arr = [1, 3, 5, 7]
// const test = arr.some(x => x === 1)
// console.log(test)

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

// let arr1 = [1, 2, 3, 4, 5, '33', true, '224', 1, '33', '33']
// let arr2 = []

// function func(arr, type) {
//     arr.forEach((ele, index) => {
//         if(typeof ele === type){
//             arr2.push(index)
//         }
//     });
// }

// func(arr1, 'string')
// console.log(arr2)

// 练习
// function func(arr, type) {
//     let eletype = arr.findIndex((ele) => {
//         return typeof ele === type
//     })
//     if (eletype !== arr.length - 1 && eletype !== -1) {
//         let result = ''
//         arr.forEach((ele) => result += ele)
//         return result
//     }
// }

// console.log(func(arr1, 'string'))

// 练习：定义函数，传入数组和一个数据，把数组中相同的数据的索引位返回，组成新数组，没有的话返回空数组
// function func(arr, ele1) {
//     let arr2 = []
//     let idx = arr.indexOf(ele1)
//     while (idx !== -1) {
//         arr2.push(idx)
//         idx = arr.indexOf(ele1, idx + 1)
//     }
//     return arr2
// }


// console.log(func(arr1, 1))

// -----------

// find 返回符合cb函数的第一个数据的值

// includes 数组中是否包含某个数据

// concat 合并成一个新数组，不改变现有，返回新数组
// const arr3 = arr1.concat(1,2,3,4,5)
// const arr3 = arr1.concat(arr2)
// 可以传数组，也可以传单个数据

// fill 填充
// 左闭右开，不包括end
// fill(填充元素，start，end)

// copyWithin 用数据自己的某些数据，覆盖自己数组中特定索引位开始的数据
// copyWithin(被覆盖的索引位，star，end)
// 左闭右开

// join 把数组连接成字符串
// 不传参数，默认用逗号连接
// join('')

// ----------

// for of 遍历数组
// for in 遍历对象
// 对象有可能迭代顺序不确定，如果要按顺序，一定要用数组迭代
// for of 可迭代 可迭代对象，如数组、字符串（字面量对象不是可迭代对象，是普通对象）
// const arr = [1, 2, 3]
// for (let item of arr) {
//     console.log(item)
// }

// -----------
// keys 键
// value 值
// entries 对

// const arr = [1, 2, 3, 4, 5, 6, 7]
// // keys让arr变成可迭代对象
// const result = arr.keys()
// // const result = arr.values()
// // const result = arr.entries()
// // for遍历出索引值、值、键值对数组
// for (let i of result) {
//     console.log(i)
// }

// ----------------

// 练习：构造函数，数组数据成为实例
// let arr = [2, 6, 3, 33, 12, 34, 52, 9]
//     // 构造函数
// function item(age) {
//     this.age = age
// }
//     // 新数组
// let arr2 = []
//     // 让新数组接收旧数组每一个数据的map，map把每个数据赋予给构造函数的新的实例
// arr2 = arr.map(function (ele) {
//     let ele2 = new item(ele)
//     // 返回这个实例
//     return ele2
// })

// function compare(a,b){ return a.age-b.age }
// arr2.sort(compare)

// console.log(arr2)


// 练习：对比两个数组是否有相同数据，有的话返回true，否则返回false

// let arr1 = [1, 2, 3]
// let arr2 = [7, 3, 5, 8, 4]

// function func(ele1, ele2) {
//     // map数组ele1，cb检测ele2中是否包含，结果以temparr接收，并形成一个由true、false组成的数组
//     let temparr = ele1.map((ele1) => {
//         return ele2.includes(ele1)
//     })
//     // 判断temparr中是否包含true，是的话即🈶有相同数据，false即无
//     if (temparr.includes(true)) {
//         return true
//     } else { return false }
// }

// console.log(func(arr1, arr2))

let arr = [
    { name: 'a', score: 99 },
    { name: 'b', score: 50 },
    { name: 'c', score: 82 },
    { name: 'd', score: 23 }
]
let arr2 = []

function func(arr, label) {
    arr2 = arr.filter(ele => ele.score < 80)
    arr2.forEach((ele) => ele.label = label)

}

func(arr, 'age')