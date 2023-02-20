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

// history
// history.back(); 等于回退
// history.go(-1); 等于back

// location
// 标识当前所在网址，通过给属性赋值，命令浏览器进行页面跳转
// window.loaction.reload(true) 强制刷新

// 特效：返回顶部按钮
// var btn = document.getElementById('buttontop');
// var timer;
// btn.addEventListener('click', function () {
//     clearInterval(timer);
//     var timer = setInterval(
//         function () {
//             document.documentElement.scrollTop -= 200;
//             if (document.documentElement.scrollTop <= 0) {
//                 clearInterval(timer);
//             }
//         }
//         , 20)
// });

// 特效：楼层导航
// offsetTop 此元素到定位祖先元素的垂直距离
// window.onscroll = () => { console.log(document.documentElement.scrollTop) }
// var nav = document.getElementById('nav');
// var timer;
// var lock = true;

// var body = document.getElementsByTagName('body')[0];
// var bodyHeightStr = window.getComputedStyle(body).height;
// var bodyHeight = Number(bodyHeightStr.substring(0, bodyHeightStr.length - 2));

// nav.addEventListener('click',
//     function (e) {
//         if (!lock || bodyHeight - window.innerHeight < 0) {
//             console.log('not ok');
//             return;
//         } else {

//             if (e.target.className.toLowerCase() == 'navigator-item') {
//                 var n = e.target.getAttribute('data-n');
//                 var currentTarget = document.querySelector('.floor[data-n=' + '"' + n + '"' + ']');
//                 var currentTop = currentTarget.offsetTop;
//                 // 滚动：根据滚动距离与元素top的差判断往上还是往下滚动
//                 if (document.documentElement.scrollTop > currentTop) {
//                     clearInterval(timer);
//                     var timer = setInterval(() => {
//                         document.documentElement.scrollTop -= Math.ceil((document.documentElement.scrollTop - currentTop) / 20);
//                         console.log(document.documentElement.scrollTop)
//                         lock = false;

//                         if (document.documentElement.scrollTop <= currentTop || bodyHeight - window.innerHeight === document.documentElement.scrollTop) {
//                             clearInterval(timer);
//                             lock = true;
//                         }
//                     }, 10);
//                 } else if (document.documentElement.scrollTop < currentTop) {
//                     clearInterval(timer);
//                     var timer = setInterval(() => {
//                         document.documentElement.scrollTop += Math.ceil(-(document.documentElement.scrollTop - currentTop) / 20);
//                         console.log(document.documentElement.scrollTop);
//                         lock = false;

//                         if (document.documentElement.scrollTop >= currentTop || bodyHeight - window.innerHeight === document.documentElement.scrollTop) {
//                             clearInterval(timer);
//                             lock = true;
//                         }
//                     }, 10);
//                 }
//             }

//         }

//     })

// console.log(document.getElementById('children').offsetTop);