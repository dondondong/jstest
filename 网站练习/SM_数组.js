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

<<<<<<< HEAD

=======
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
const arr = [1, 3, 5, 7]
const test = arr.some(x => x === 1)
console.log(test)
>>>>>>> 773fdb5037a54243a020f4c907aafa7ac371679b
