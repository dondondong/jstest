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

let person = {
    name: '11',
    age: '22',
    talk() {
        console.log('talk')
    }
}

const arr = []

const add = () => {
    for (let key in person) {
        arr[i] = person[key]
    }
}
