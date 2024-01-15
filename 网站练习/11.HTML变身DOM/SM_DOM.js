
// HTML的数据转换成对象来表现
// const obj = {
//     tagName: 'html',
//     attributes: [{ lang: 'en' }],
//     childrenTags: [
//         {
//             tagName: 'head',
//             childrenTags: [{
//                 tagName: 'title',
//                 text: 'DOM练习'
//             }]
//         },
//         {
//             tagName: 'body',
//             childrenTags: [
//                 { tagName: 'div' },
//                 { tagName: 'div', attributes: [{ id: 'tag' }], text: 'test' },
//                 {
//                     tagName: 'ul', childrenTags: [
//                         { tagName: 'li', text: '1' },
//                         { tagName: 'li', text: '2' },
//                         { tagName: 'li', text: '3' }
//                     ]
//                 },
//                 { tagName: 'img' },
//                 { tagName: 'script' },
//             ]
//         }
//     ]
// }













// -------------------

// 深入了解DOM

// DOM定义了标准：HTML XML SVG

// XML Extensible Markup Language
// 写法自定义，用来保存或传输数据用的
// HTML用来显示信息，XML用来存储和传输信息

// Interface 接口
// UI User Interface 用户界面
// API Application Programming Interface 应用程序接口
// 本质上是代表连接、相互联系、相互交流，本质上是方法、函数（访问API就是访问相应的函数和方法）

// ------------------

// DOM 类型层级与结构

// document.doctype
// document.documentElement
// document.body 
// document.title 
// document.URL 整个链接
// document.domain 域名
// document.referer 通过哪个网址跳转过来的
// childNode 子节点

// -------------------

// DOM 元素的获取一

// Document
// document.getElementById id属性值

// document.getElementsByClassName
// 传css类名，可以多个
// 返回HTMLCollection，类数组

// document.getElementsByName
// 传name属性值
// 返回一个NodeList类型的类数组

// document.getElementsByTagName
// 传标签名
// 返回 HTMLCollection

// document.querySelector
// 传id传class都可以
// 返回元素，获取第一个匹配的

// document.querySelectorAll
// 返回NodeList，获取所有匹配的

// Element
// 没有通过id获取的方式
// Element.getElementsByClassName
// Element.getElementsByTagName
// Element.querySelector
// Element.querySelectorAll

// const body = document.body
// const ul = body.getElementsByTagName('ul')
// console.log(body.innerHTML)
// console.log(ul[0].innerHTML)

// Node 类型
// Node.nodeName 大写的标签名
// Node.nodeValue 
// 文档节点，Node返回null
// text，comment，返回该节点的文本
// att，返回属性值
// nodeType node的静态属性，type，返回一个数字

// Node.parentNode 父节点
// Node.previousSibling 前一个子节点
// Node.nextSibling 后一个子节点
// Node.firstChild 第一个子节点
// Node.lastChild 最后一个子节点
// Node.childNodes

// Node.hasChildNodes() 是否包含有子节点
// Node.contains() 是否包含某个节点

// Element 类型上的方法
// Element.tagName 标签名
// Element.attributes 返回属性
// Element.children 只反应Element类型及子类型的实例，不包含文本节点
// Element.childElementCount 子元素的数量
// Element.firstElementChild
// Element.lastElementChild

// ---------------------

// 练习：函数传入一个元素，如果有子元素，就依次输出所有子节点的nodeValue(第一层子节点就可以)

// const x = document.getElementsByTagName('ul')
// const y = document.querySelector('#body')

// function test(n) {
//     if (n.hasChildNodes()) {
//         for (i = 0; i < n.childNodes.length; i++) {
//             console.log(n.childNodes[i].nodeValue)
//         }
//     };
// }

// test(y)
// console.log(y.childNodes)

// 看看老师做的：

// function loopOout(n) {
//     if (n.hasChildNodes()) {
//         const allChilds = [...n.childNodes] // "..."可以将类数组转换为数组
//         allChilds.forEach(ele => { console.log(ele.nodeValue) })
//     };
// }

// loopOout(x[0])

// ------------------------------

// 练习：函数能够找到最后一个子元素并返回

// function loop(n){
//     if(n.childElementCount > 0){
//         return loop(n.lastElementChild)
//     }else{
//         return n
//     }
// }

// console.log(loop(y))
// // console.log(y.lastElementChild.childElementCount)

// ----------------------



// DOM 元素的修改

// HTMLElement.style
// const h1 = document.getElementById('tag2')
// h1.style.backgroundColor = 'red' //修改对象属性，而不是给style赋值，小驼峰
// h1.style.fontSize = '60px'
// console.log(h1.style)

// Element.classList   DOMTokenList 类数组 
// 修改class：add remove toggle contains
// h1.classList.add('bgred')
// h1.classList.remove('bgred')
// h1.classList.toggle('bgred') // 有就删除，没有就删掉
// contains // 是否有某个类
// console.log(h1)

// Element.className DOM元素属性时，用className写法
// h1.className = 'bgred'
// console.log(h1.className)

// 改变元素的属性

/*
Element.getAttribute
Element.setAttribute
Element.removeAttribute
Element.hasAttribute
*/

// h1.setAttribute('style', 'background-color: #222;')
// console.log(h1.getAttribute('id'))


// 改变元素的子元素

/*

HTMLElement.innerText  
    元素中所有文本内容
    读取时，按照深度优先，将子树所有文本节点的值拼接起来
    写入时，会移除所有后代并插入写入的文本
    innerText会移除元素所有的后代节点，完全改变子树
Element.innerHTML  
    读取时，返回所有后代的html元素
    写入时，会替代子节点，特殊字符会转换成实体符号
Element.outerHTML  
    包含元素本身
*/

// HTMLElement.innerText
// h1.innerText = '1111'
// console.log(h1.innerText)
// h1.innerText = h1.innerText // 把元素中的所有数据，变为纯文本

// Element.innerHtml
// console.log(h1.innerHTML)

/*
Element.id
HTMLElement.title
HTMLElement.hidden 元素是否隐藏
*/

// ---------------------------

// 练习：定义一个函数，可以找到所有span元素，并让span中的文字一开始显示为0，然后让元素中显示的数字，每隔一秒加1

// function test() {
//     spanArr = [...document.getElementsByTagName('span')]
//     spanArr.forEach(ele => {
//         let num = 0
//         ele.innerText = num
//         setInterval(() => {
//             num += 1
//             ele.innerText = num
//             // ele.innerText += 1
//         }, 1000);
//     });
//     console.log(spanArr)
// }

// test()

// 练习：定一个函数，可以自动切换某个元素的字体颜色，在三种颜色中每隔一秒依次切换

// function test() {
//     const ulEle = document.getElementById('tag2')
//     const colorArr = ['blue', 'red', 'black']
//     ulEle.style.color = colorArr[0]
//     let i = 1;
//     setInterval(() => {
//         if (i < colorArr.length) {
//             ulEle.style.color = colorArr[i]
//             i++
//         } else {
//             i = 0
//             ulEle.style.color = colorArr[i]
//             i++
//         }
//     }, 1000);
// }

// test()

// -------------------------------------

// DOM创建 添加与删除

/*
document.createElement() 创造元素节点
document.createTextNode() 创造文字节点
document.createAttribute() 创造属性节点

Element.setAttributeNode() 传入的节点设置为该元素的属性
Element.getAttributeNode() 获取属性名的节点
与没有Node的不同是，这个是整个节点，那个只是值

*/

// Node.appendChild 把某个元素创建为某个元素的子节点

// const div = document.createElement('div')
// const textnode = document.createTextNode('new')
// const textnode2 = document.createTextNode('22')
// div.appendChild(textnode)
// div.appendChild(textnode2)
// console.log(div)
// h1.outerHTML += div.outerHTML

// 插入到body里
// document.body.appendChild(div)

// Node.insertBefore 添加到某个元素之前 
// 用某个元素的父元素来调用，第一个是插入的元素，第二个是插入的元素位置
// h1.parentNode.insertBefore(div, h1)

/*
Node.removeChild() 删除子节点
Node.replaceChild() 替换子节点
*/

// 同一个元素只能添加到 DOM tree 上某一个地方，不能重复添加



// 用节点添加的方式，添加元素到DOM，以下：
// 制作一个小DOM tree
// 先创建最外面元素，然后依次添加内部元素，并appendChild到外面元素上
// 最后只要插入最外层的元素到DOM上，就好了
/*
<div>
    <span> abc </span>
    <div>
        <span> 888 </span>
    </div>
</div>

const div1 = document.createElement('div')
const span1 = document.createElement('span')
const span1Text = document.createTextNode('abc')
const div2 = document.createElement('div')
const span2 = document.createElement('span')
const span2Text = document.createTextNode('888')

div1.appendChild(span1)
div1.appendChild(div2)
span1.appendChild(span1Text)
div2.appendChild(span2)
span2.appendChild(span2Text)

document.body.appendChild(div1)

*/

// Text.splitText()
// Node.normalise()

// --------------------------------------------------

// 练习：创建一个方法，可以实现把某个元素插入到某个元素的后面，insertAfter(ele)

// Node.prototype.insertAfter = function (ele) {

//     // 判断是否父元素里的最后一个节点，如果是，就添加到父元素的最后一个节点，如果不是，就添加到this的下一个节点的前面
//     if (this.nextElementSibling === 'null') {
//         this.parentNode.appendChild(ele)
//     } else {
//         this.parentNode.insertBefore(ele, this.nextElementSibling)
//     }
// }

// const b = document.createElement('div')
// b.innerText = '插入的节点'
// document.getElementById('tag2').insertAfter(b)


// --------------------------------------------------

// DOM的一些补充

// HTMLElement.dataset
// 访问或写入元素上的data-xxx方式定义的自定义数据
// const a = document.getElementsByTagName('ul')
// a[0].dataset.abc = '222'
// console.log(a[0].dataset.abc)
/* 
data-my-name，要用myName来访问
*/

// DocumentFragment 文档片段，会把文档片段的内容添加到DOM，虚拟的一个DOM节点
// DocumentFragment实例
// document.createDocumentFragment()
// 所有Node的子节点方法都可以使用

// const script = document.createElement('script')
// script.text = `console.log('1111')`
// document.body.appendChild(script)

// Element.insertAdjacentHTML(position, content)   插入到元素的相应位置
// Element.insertAdjacentText(position, content)

// Node.isEqualNode() 是否完全相等
// Node.cloneNode() 克隆节点
// CharaterData 方法
// length
// appendData
// deleteDate(offset, count)
// insertData(offset, text)
// replaceData(offset, count, text)
// Text.splitText(offset)
// substringData(offset, count)
// CharaterData.data

// --------------------------------------------------

// 练习：动态创建style元素，添加到head元素中

/*
const style = document.createElement('style')
const head = document.getElementsByTagName('head')[0]
style.innerHTML =
    `
.title{
    font-size: 24px;
    font-weight: 800;
}

`
head.appendChild(style)
*/



// --------------------------------------------------


// DOM 的总结

// 类型 实例 & 原型 继承的意义

// 命名空间 NS NameSpace
// 命名空间存在的意义是为了防止冲突
// 比如 getElementsByTagNameNS(namespace, name)就可以在某个namespace的分区里面找，子元素会继承父元素的命名空间

/*
DOM类型，都有自己对应的方法f
NameNodeMap, Element.attributes
DOMTokenList, Element.classList
NodeList, querySelectorAll
HtmlCollection, ClassName
CSSStyleDeclaration, HTMLElement.style
*/

// DOM不是JS语言标准中的东西，其他语言中也可以使用DOM

// DOM的接口标准的level问题
// DOM4


// ------------------------------------------------------------------------  

// DOM 事件

// DOM中的事件 - 行为 行为背后对应着某些执行函数












// ------------------------------------------------------------------------

// 滚动变字体大小尝试

// var title = document.getElementById('num')
// // var titleFontSizePX = getComputedStyle(title).fontSize
// var titleFontSizePX = '70px'
// var titleFontSizePXInt = parseFloat(titleFontSizePX, 10)

// var titleFontSizeVWInt = titleFontSizePXInt * (100 / window.innerWidth)
// var titleFontSizeVW = titleFontSizeVWInt + 'vw'
// title.style.fontSize = titleFontSizeVW

// var lastScroll = 0

// function updateFontSize(event) {
//     if (lastScroll != window.scrollY) {
//         var titleSizeMax = titleFontSizeVWInt - 0.02 * window.scrollY
//         var titleSizeMin = titleFontSizeVWInt * 2 / 5
//         title.style.fontSize = Math.max(10, titleSizeMax) + 'vw'
//     }
//     lastScroll = window.scrollY
// }

// var events = ['scroll', 'touchmove']
// events.forEach(event => document.addEventListener(event, updateFontSize))


