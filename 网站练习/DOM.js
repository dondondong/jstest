
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

// 创建节点（孤儿）
// document.createElement('div');
// 但是看不见，不在DOM树上
// 使用 appendChild() 或 insertBefore() 方法将孤儿节点插入DOM树中
// document.insertBefore(孤儿节点, 标杆节点)
// 可移动节点
// removeChild() 方法从DOM中删除一个子节点，父节点.removeChild(要删除的子节点)，子节点不能删除自己
// box.removeChild(box.children[1]);
// cloneNode() 克隆节点，克隆出孤儿节点，老节点.cloneNode(true)，是否有true决定是否深度克隆
// var box = document.getElementById('box');
// var box2 = document.getElementById('box2');
// var button = document.getElementById('button');
// function clone(originElement) {
//     const elementLength = originElement.children.length;
//     function innerClone() {
//         for (let i = 0; i < elementLength; i++) {
//             var newChild = originElement.children[i].cloneNode(true);
//             box.appendChild(newChild);
//         }
//     }
//     return innerClone;
// }
// var aaa = clone(box);
// var bbb = clone(box2);
// button.addEventListener('click',
//     function () {
//         bbb();
//     })

// ----------

// DOM事件
// 主要有on和addEventListener两种
// onclick, onblclick, onmousedown, onmouseup, onmousemove,
// onmouseenter, onmouseleave, onmouseenter, onmouseleave
// var box = document.getElementById('box');
// var button = document.getElementById('button');
// var box2 = document.getElementById('box2');
// var p = document.createElement('p');
// button.onmouseenter = function () {
//     p.innerText = 'fuck';
//     box.style.fontSize = '40px';
//     box.insertBefore(p, box.children[2]);
// }
// button.onmouseleave = function () {
//     box.style.fontSize = '20px';
//     box.removeChild(box.children[2]);
// }
// button.onmousedown = function () {
//     p.style.fontSize = '120px';
// }
// button.onmouseup = function () {
//     p.style.fontSize = '40px';
// }
// 键盘事件监听：onkeypress, onkeydown, onkeyup
// 表单事件监听：onchange, onfocus, onblur, onsubmit, onreset

// 监听事件
// 事件传播：先从外到内，再从内到外
// 捕获阶段，冒泡阶段
// DOM0级 onxxx的写法只能监听冒泡阶段
// DOM2级 addEventListner()方法，addEventListner('click', 函数, 是否监听捕获、冒泡)
// DOM2级不会覆盖，会按顺序弹出

// 事件对象
// 鼠标位置：e.clientX, e.clientY（相对浏览器）；pageX, pageY（相对网页）；offsetX, offsetY（相对事件源对象）
// 计算的是最内层的元素
// var box = document.getElementById('box');
// var info = document.getElementById('box2');
// var info1 = info.firstElementChild;
// document.onmousemove =  function (e){
//     info1.innerHTML = e.clientX;
// }
// e.charCode - 字符码
// e.keyCode - 键码
// charCode字符码 - 0-9:48-57 ; A-Z:65-90 ; a-z:97-122
// keyCode键码 - 字母不分大小统一 65-90 ; 方向键左上右下 - 37-40 ; 回车 13 ; 空格 32
// var rect = document.getElementsByClassName('spec')[0];
// var x = rect.style.left;
// var l = 30;
// document.onkeydown = function (e) {
//     if(e.keyCode == '37'){
//         l += 10;
//         rect.style.left = l + 'px';
//         console.log(rect.style.left);
//     }
// }
// e.preventDefault()方法，阻止事件的默认动作
// 案例：只能输入小写字母和数字
// var ofield = document.getElementById('field');
// ofield.onkeypress = function (e) {
//     if (!(e.charCode >= 48 && e.charCode <= 57)) {
//         e.preventDefault();
//     }
// } 
// 鼠标滚轮事件 onmousewheel, 对对象e提供 deltaY，往下滚返回正至，往上返回负值
// var rect = document.getElementsByClassName('spec')[0];
// var box2 = document.getElementById('box2').firstElementChild;
// var a = 0
// rect.onmousewheel = function (e) {
//     e.preventDefault();
//     if (e.deltaY > 0) {
//         a++;
//     } else if (e.deltaY < 0 && a > 16) {
//         a--;
//     }
//     box2.style.fontSize = a + 'px';
//     box2.innerText = a + 'px';
// }
// 批量事件监听的问题
// var obox = document.getElementById('box2');
// var boxp = obox.getElementsByTagName('p');
// for (var i = 0; i < boxp.length; i++) {
//     boxp[i].addEventListener('click', function () {
//         // this 表示点击的这个元素
//         this.style.color = 'red';
//     });
// }
// 以上方法性能消耗大
// 新增元素动态绑定事，同样性能消耗大
// var obtn = document.getElementById('button');
// var obox2 = document.getElementById('box2');
// obtn.addEventListener('click', function () {
//     var newChild = document.createElement('div');
//     newChild.innerHTML = 'fuck';
//     obox2.appendChild(newChild);
//     newChild.onclick = function(){
//         this.style.color = 'red';
//     }
// })
// 怎么解决性能问题？事件委托
// 事件委托：利用事件冒泡机制，将后代元素事件委托给祖先元素
// e.target 和 e.currentTarget
// target：触发此事件的最早元素，事件的源元素；currentTarget：事件处理程序附加到的元素
// var obox2 = document.getElementById('box2');
// obox2.addEventListener('click', function (e){
//     e.target.style.backgroundColor = 'red';
// })
// 当批量事件监听、动态元素上树时，适合事件委托
// onmouseenter 和 onmouseover 的区别：enter不冒泡，over冒泡
// target会target到最内层元素
// var obox2 = document.getElementById('box2');
// var obtn = document.getElementById('button');
// var ofield = document.getElementById('field');
// obox2.addEventListener('click', function (e) {
//     obox2.removeChild(e.target);
// })
// obtn.addEventListener('click', function (e) {
//     var ovalue = ofield.value;
//     if (ovalue !== '') {
//         var newChild = document.createElement('p');
//         newChild.innerHTML = ovalue;
//         obox2.appendChild(newChild);
//     }
// })

// 定时器
// setInterval()函数
// 

// ----------

// 实现动画

// ----------

// 动画效果开发

// ----------
















