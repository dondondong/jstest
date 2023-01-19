
// DOM的基本概念
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

// querySelector()通过选择器得到元素，只能得到第一个元素
// const aa = document.querySelector('#box .spec');
// console.log(aa);
// querySelectorAll()通过选择器得到元素数组
// const l = document.querySelectorAll('#box p');
// console.log(l);

// 节点的关系
// childNodes, parentNodes, firstChild, lastChild
// 兄弟节点 nextSibling, previousSibling
// 文本节点也属于节点
// 只考虑元素节点：children, parentNode, firstElementChild, lastElementChild, previousElementSibling, nextElementSibling
// console.log(document.getElementById('box').children.spec)
// console.log(document.getElementById('box').firstElementChild)
// console.log(document.getElementById('spec').parentNode)
// console.log(document.getElementById('spec').previousElementSibling)

// ----------

// 节点操作

// 改变元素节点中的内容
// 两个属性：innerHTML, innerText
// innerHTML 使用 HTML 语法，innerText 使用纯文本
// var oBox = document.getElementById('box');
// oBox.innerHTML = 'fuck';
// oBox.innerText = 'fu';

// 改变元素节点的CSS样式
// var oBox = document.querySelector('#box');
// oBox.style.backgroundImage = 'url(imgage/1.jpg)';
// oBox.style.backgroundColor = '#222';
// oBox.style.fontSize = '120px';
// oBox.style.color = '#fff';
// oBox.style.className = 'aaa';
// var button = document.getElementById('button');
// function getRandomNumber() {
//     return ((Math.random() * 10) * 10).toString();
// }
// var loop = setInterval(
//     function () {
//         oBox.style.fontSize = getRandomNumber() + 'px';
//     }, 500);
// button.addEventListener('click', function () {
//     clearInterval(loop)
// })

// // src、href等可以直接打点，如 oImg.src = 'images/2.jpg';
// // 不符合W3C标准的属性，要使用 setArribute() 和 getAttribute() 来设置和读取
// oBox.setAttribute('data-n', 1)
// console.log(oBox.getAttribute('data-n'))

// 增加 className
// const box = document.getElementsByClassName('spec')[0];
// console.log(box);
// function addClassName(element, value) {
//     var newClassName = "";
//     if (!element.className){
//         element.className = value;
//     } else {
//         newClassName = element.className;
//         newClassName += " ";
//         newClassName += value;
//         element.className = newClassName;
//     }
// }
// addClassName(box, 'fuck');


    // ----------

    // 节点创建、移除和克隆

    // ----------

    // DOM事件

    // ----------

    // 实现动画

    // ----------

    // 动画效果开发

    // ----------
















