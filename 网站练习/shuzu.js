
// 数组去重
// var arr = [1, 1, 3, 4, 6, 1, 8]
// var arr2 = [];
// for(var i = 0; i < arr.length; i++) {
//     if(arr2.includes(arr[i])) {
//         continue;
//     }else {
//         arr2.push(arr[i]);
//     }
// }
// console.log(arr2);

// 从arr中随机抽取3个数
// var arr = ['don', 'yang', 'mie', 'woo', 'david', 'what']
// var result = [];
// // 0 ~ arr.length - 1
// for(var i = 0; i <= 2; i++){
//     var n = parseInt(Math.random() * arr.length);
//     result.push(arr[n]);
//     arr.splice(n, 1);
// }
// console.log(result);

// 冒泡排序
// var arr = [5, 8, 4, 2, 1, 9];
// 一趟一趟比较，趟数序号为1
// for(var i = 1; i <= arr.length - 1; i++) {
//     // 内层循环两两比较    
// }

// 二维数组
// var matrix = [
//     [1, 2, 2, 3],
//     [2, 4, 3, 4]
// ];
// // 遍历二维数组，循环输出二维数组的每一个项
// for (var i = 0; i < 2; i++) {
//     for (var j = 0; j < 4; j++) {
//         console.log(matrix[i][j]);
//     }
// }

// 遍历二维数组
// var arr = [
//     ["慕", "课", "网"],
//     ["程", "序", "员"],
//     ["梦", "工", "厂"]
// ];

// var str = [];

// arr[0].push(',');
// arr[1].push('的');

// for (var i = 0; i < 3; i++) {
//     for (var j = 0; j < arr[i].length; j++){
//         str.push(arr[i][j]);
//     }
// }

// var str = str.join("");
// console.log(str);

// 不会做
// var arr = [
//     4,
//     3,
//     [2, 5],
//     1,
//     4
// ];

// var arr2 = [];

// for (i = 0; i < arr.length; i++) {
//     for (j = 0; j < arr[i].length; j++){
//         console.log(arr[i][j]);
//     }
//     console.log(arr[i]);
// }