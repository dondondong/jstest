//  什么是函数
// 封装语句，方便复用

// 函数的定义和调用
// function 函数名字 (形参列表) { 函数体语句 }
// var 名字 = function () {}
// 调用函数
// 名字()
// 函数表达式不能被提升

// 函数的返回值
// function fun(a, b) {
//     return a + b;
// }
// var result = fun(12, 46);
// console.log(result);
// 遇见 return 就会退出函数

// if与return
// function fun(n){
//     if (n % 2 == 0) return 'yes';
//     return 'no';
// }
// var result = fun(11);
// console.log(result);

// 排序方法.sort
// 当需要交换位置，return正数，否则负数
// var arr = [22, 33, 55, 12, 67];
// arr.sort(function (a, b) {
//     if (a > b) {
//         return a - b;
// })
// console.log(arr);
// 也可以 b - a

// 根据用户输入的数字排序
// var input;
// var arr = [];
// while (input != "-1") {
//     input = Number(prompt("请输入您想排序的数字"));
//     //补充代码
//     arr.push(input);
// }
// //补充代码
// arr.sort(function (a, b) {
//     if (a > b) {
//         return b - a;
//     }
// }); //在括号中补充代码
// document.write(arr);

// 递归
// 边界条件
// 递归模式：递归体
// 书写一个函数，这个函数自己会调用自己，形成递归
// function factorial(n) {
//     // 函数的功能是计算n的阶乘，即 n*（n-1）的阶乘
//     // 递归出口
//     // if (n == 1) { return 1; } else { return n*(n-1); }
//     // 如果不是1的阶乘，就返回n*(n-1)
//     return n == 1 ? 1 : n * (factorial(n - 1));
// }
// var result = factorial(4);
// document.write(result);

// 通过递归，计算1-100的和
// function sum(n){
//     return n == 1 ? 1 : n + (sum(n-1));
// }
// var result = sum(Number(prompt('1111')));
// document.write(result);

// function quickSort(arr) {
//     //如果数组长度<=1,则直接返回
//     if (arr.length <= 1) {
//         return arr;
//     }
//     // 将数组的长度除2向下取整得到的一个数值（获取pivot的基准索引）
//     var pivotIndex = Math.floor(arr.length / 2);
//     //利用splice方法从数组里获取一个基数（找基准值），并把基准从原数组删除
//     var pivot = arr.splice(pivotIndex, 1)[0];
//     //定义左、右数组
//     var left = [];
//     var right = [];

//     //比基准小的放在left数组，比基准大的放在right数组
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] <= pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }
//     //递归，合并数组
//     return quickSort(left).concat([pivot], quickSort(right));
// }
// var a = quickSort([1, 5, 6, 3, 8, 9, 41, 24, 35]);
// console.log(a);

// ---

// 浅克隆
// var arr1 = [33, 44, 323, 45];
// var result = [];

// for (var i = 0; i < arr1.length; i++) {
//     result.push(arr1[i]);
// }


// // 深克隆
// var arr1 = [11, 33, 55, [22, 33, 55]];
// // 函数会被递归
// function deepClone(arr) {
//     // 结果数组，每一层都有一个结果数组
//     var result = [];
//     // 遍历数组每一项
//     for (var i = 0; i < arr.length; i++) {
//         // 类型判断
//         if (Array.isArray(arr[i])) {
//             // 递归
//             result.push(deepClone(arr[i]));
//         } else {
//             // 如果不是数组，是基本类型值
//             // 递归的出口
//             result.push(arr[i]);
//         }
//     }
//     // 返回结果数组
//     return result;
// }
// var arr2 = deepClone(arr1);
// console.log(arr2);

// --------

// 全局变量与局部变量
// 局部变量
// 变量作用域：JS是函数作用域编程语言，变量只在其定义时所在的funcition内部有意义
// 全局变量：不在函数内部
// 遮蔽效应：同名，函数内会访问局部变量，内外井水不犯河水
// 形参也是局部变量
// 作用域链：函数嵌套中，一层层往外寻找
// 局部函数
// function fun(){
//     function inner(){
//         console.log('nihao');
//     }
//     inner();
// }
// fun();

// 闭包
// JS中函数会产生闭包（closure）。闭包是函数本身和该函数声明时所处的环境状态的组合。
// 函数能够‘记住’其定义时所处的环境，即使函数不在其定义的环境中被调用，也能访问定义时所处环境的变量。
// 每次创建函数都会创建闭包
// 但是，闭包特性往往需要将函数“换一个地方”执行，才能被观察出来。
// 闭包很有用，因为它允许我们将数据与操作该数据的函数关联起来。这与“面向对象编程”有少许相似之处。
// 闭包的功能：记忆性、模拟私有变量
// function fun() {
//     // 定义局部变量
//     var name = 'nihao';
//     // 返回一个局部函数
//     function innerFun() {
//         alert(name);
//     }
//     return innerFun;
// }
// // 调用外部函数，就能得到内部函数，用变量来inn接收
// var inn = fun();
// // 执行函数inn，就相当于在fun函数的外部，执行了内部函数
// inn();

// 闭包用途1，记忆性：闭包产生时，函数所处环境的状态会始终保持在内存中，不会在外层函数调用后被自动清除。
// function createCheckTemp(standardTemp) {
//     function checkTemp(n) {
//         if (n <= standardTemp) {
//             alert('体温正常');
//         } else {
//             alert('体温过高');
//         }
//     }
//     return checkTemp; // 返回的是“函数”，而非“函数的执行”
// }
// 创建一个函数，以37.1为标准线
// var checkTemp_A = createCheckTemp(37.1);
// 创建一个函数，以37.5为标准线
// var checkTemp_B = createCheckTemp(37.5);
// checkTemp_A(37.2);
// checkTemp_B(37.8);

// 什么是IIFE(Immediately Invoked Function Expression)
// IIFE是一种特殊的JS函数写法，一旦被定义，就会立即被调用
// (function(){
//     statements;
// })();
// 函数不能直接加（）来调用，必须转为“函数表达式”
// var age = 12;
// var gender = 'male';
// var title = (function () {
//     if (age < 12) {
//         return '小男孩';
//     } else if (gender === 'male') {
//         return '先生';
//     } else {
//         return '女士';
//     }
// })();
// console.log(title);
// 全局变量，arr[2]()始终等于5
// var arr = [];
// for (var i = 0; i < 5; i++) {
//     arr.push(function () {
//         alert(i);
//     })
// }
// arr[2]();
// IIFE将全局变量变为局部变量，arr[2]()等于2
// var arr = [];
// for (var i = 0; i < 5; i++) {
//     (function (i) {
//         arr.push(function () {
//             alert(i);
//         });
//     })(i);
// }
// arr[2]();

// function fn1(){
//     var num1 = 1;
//     var num2 = 100;
//     numadd = function(){
//         num2 += 100;
//         alert(num2);
//     }
//     function fn2() {
//         num1 += 1;
//         alert(num1);
//     }
//     return fn2;
// }
// var result = fn1();
// result();
// numadd();
// result();

// function fn1(){
//     var a = 1;
//     function fn2(){
//         a += 2;
//         console.log(a);
//     }
//     console.log(a);
//     return fn2;
// }

// var result = fn1();
// result();
// fn1();
// fn1();
// fn1();
// result();
// result();