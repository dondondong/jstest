
// ------------------------
// 构造函数与原型
// 多个构造函数，调用一个函数，函数共享，数组的方法也是这种
// 这就是 prototype
// 
// function bark(a) {
//     a = a + 1
//     return a
// }
// function dog(name) {
//     this.bark = bark;
//     this.name = name
// }

// dog.prototype.swim = function () {
//     console.log(this.name, 'swimming')
// }

// const dog1 = new dog('dog')
// const dog2 = new dog()

// dog1.swim()
// console.log(dog1.__proto__ === dog2.prototype) // [[Prototype]] // false
// console.log(dog1.__proto__ === dog.prototype) // true


// length 定义参数的个数
// name 标识符
// prototype（箭头函数没有）
// 任何一个对象天生都有[[Prototype]]

// 用new配合执行函数
// 1. 会在内存创建一个新的对象（字面量）{}
// 2. 会把新对象的[[Prototype]]指向该构造函数的prototype指向的对象
// 3. 会把新对象赋值给this关键字

// 实例本身有的，不会找构造函数的
// 每个函数都有prototype属性，这个属性指向的对象有一个constructor属性，指向函数本身

// ------------------------

// class 类

// 类声明的写法
// 不会有作用域提升效果
// 受块级作用域限制的

// class Dog {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     swim() {
//         console.log('swimming')
//     }
//     static test() {
//         console.log('test')
//     }
//     static type = ['一些固定的类的数据']
// }

// const dog = new Dog('name', 'age')
// console.log(dog)


// ---------------------------

// extends 类的继承

// class Cat {
//     constructor(name, age, fn) {
//         this.name = name;
//         this.age = age;
//         this.action = fn;
//     }

//     miao() {
//         console.log('miao')
//     }

//     static species = ['china', 'japan']
//     static run() {
//         console.log('running')
//     }
// }
// // 子类仅求同
// class ChinaCat extends Cat {

// }
// // 子类求同存异
// class JpanCat extends Cat {
//     constructor(name, age, fn, type) {
//         super(name, age, fn)
//         this.type = type
//     }
//     // 子类定义自己的原型方法
//     wow() {
//         // 也访问父类原型方法
//         super.miao()
//         console.log('wow')
//     }

// }
// 子类，派生
// 父类，基类，超类
// 子类如果不写construct方法，就继承父类的constructor
// super()
// super()就是手动调用父类的constructor的方法
// 一旦在子类写了constructor，一定要调用supeer()，如果有参数，需要手动设置，并传入super()
// 子类的实例可以访问调用到父类的原型方法

// 练习：

// class Dog {
//     constructor(name, age, type) {
//         this.name = name
//         this.age = age
//         this.type = type
//     }

//     callname() {
//         console.log(this.name)
//     }
//     callage() {
//         console.log(this.age)
//     }
//     static calldog() {
//         console.log('dog')
//     }
// }

// class ChinaDog extends Dog {
//     constructor(name, age, type, gender, nickname) {
//         super(name, age, type)
//         this.gender = gender
//         this.nickname = nickname
//     }
//     static callgender() {
//         console.log('male')
//     }
//     static contry = 'china'
// }
// const mydog = new ChinaDog('timmy', 12, '贵宾', 'male', 'tim')
// ChinaDog.callgender()



// 练习：

// class A {
//     constructor(a, b) {
//         this.a = a
//         this.b = b
//     }
// }

// class B extends A {
//     constructor(a, b, c) {
//         super(a, b)
//         this.c = c
//     }
// }

// class C extends B {
//     constructor(a, b, c, d) {
//         super(a, b, c)
//         this.d = d
//     }
// }

// ---------------------------------

// Object 的方法
// Object.is()方法：判断两个对象是不是同一个值
// Object.keys()
// Object.entries()
// Object.create(null) // 创建一个没有任何原型的对象
// Object.freeze() // 不能改属性

// 原型上的方法
// Object.prototype.hasOwnProperty() // 检测某个方法、属性是否其实例本身上的
// Object.isPrototypeOf() // 检测某个对象是否在另一个对象的原型链上
// Object.toString()

// -------------------------

// 包装类型
// Number String Boolean
// 可以直接转换数据类型
// console.log(Number('111'))
// console.log('32好'.length)

// 原型方法
// toFixed() 保留几位小数

// String
// length
// split() 通过xx把字符串分开并返回数组
// includes()
// trim() 切割空白字符
// toUpperCase()
// toLowerCase()
// slice()
// substring()
// indexOf()
// laseIndexOf()
// concat()
// repeat()
// startWith()
// endsWith()
// fromCharCode()
// charCodeAt()
// codePointAt()
// charAt()
// padStart()
// padEnd()

// ----------------------

// 对象使用的小技巧

// 简写赋值
// let n = 'matt'
// let person = {
//     n // 相当于 n:n
//     abc // 相当于赋值外部的abc函数
// }

// 可计算属性
// let nameKey = 'name'
// let person = {
//     [nameKey + 'abc']: 'Matt', // 对象属性、对象方法名字可以用变量、表达式
//     [nameKey](x){ console.log(x) }
// }

// 对象解构
// 快速把对象中的数据赋值到当前环境的变量中
// let person = {
//     name: 'Matt',
//     age: 27
// }
// let { name: personName, age: personAge } = person // 类似反向的字面量对象的生成，personName是‘Matt’，personAge是’27‘
// let { name, age } = person // 属性同名变量名

// 数字和字符串也可以被结构
// let { length } = 'Matt'
// console.log(length) // 4

// 嵌套也可以取值
// let person = {
//     job: {
//         title: 'designer'
//     }
// }
// let { job: { title: abc } } = person
// console.log(abc)