window.onload = function(){
// DOM基本概念
// Document Object Model
// DOM是JS操控HTML文档的接口，使文档操作变得优雅。
// DOM的最大特点是把文档表示为节点树
// 节点的nodeType属性可以显示这个节点具体的类型
// 1-元素节点，3-文字节点，8-注释节点，9-document节点，10-DTD节点
// ----------

// 节点访问和位置关系

// 访问元素节点
// 依靠document对象，几乎所有DOM的功能都封装在了document对象中，document对象表示整个HTML
// 访问方法
// document.getElementById() 通过id得到元素
// document.getElementsByTagName() 通过标签名得到元素数组
// document.getElementsByClassName() 通过类名得到元素数组
// document.querySelector() 通过选择器得到元素
// document.querySelectorAll() 通过选择器得到元素数组
// var box1 = document.getElementById('box1');
// console.log(box1.nodeType);
// console.log(typeof box1);
// console.log(box1);
// 可使用window.onload = function(){}，使页面加载完毕后，再执行指定的代码

// getElementsByTagName() getElementsByClassName()得到节点数组
// 得到子节点
// var box1 = document.getElementById('box1');
// var ps = box1.getElementsByTagName('p');
// console.log(ps);

// ----------

// 节点操作

// ----------

// 节点创建、移除和克隆

// ----------

// DOM事件

// ----------

// 实现动画

// ----------

// 动画效果开发

// ----------
















}