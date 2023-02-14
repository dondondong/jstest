// BOM

// window
// 全局变量会成为window的属性，多个js可以共用
// window可以管理所有js
// 窗口尺寸属性：innerHeight, innerWidth, outerHeight, outerWidth
// 不包含滚动条：document.documentElement.clientWidth（根元素clientWidth）
// console.log(window.innerHeight); 内容区域
// console.log(window.innerWidth); 内容区域
// console.log(window.outerWidth); 窗口外部
// console.log(window.outerHeight); 窗口外部
// 窗口改变尺寸会触发resize事件，使用window.onresize或window.addEventListener('resize')
// window.onresize = function () {
//     var root = document.documentElement;
//     console.log(root.clientWidth);
// }
// 窗口已滚动的距离: window.scrollY（只读）
// document.documentElement.scrollTop 不只读，可以改变浏览器滚动位置
// 滚动事件监听：window.onscroll 或 window.addEventListener('scroll')
// window.onscroll = () => { console.log(document.documentElement.scrollTop) }

// Navigator
// navigator 可以检索用户浏览器相关属性和标识
// navigator.platform 操作系统
// navigator.appVersion 浏览器版本
// navigator.userAgent 用户代理
