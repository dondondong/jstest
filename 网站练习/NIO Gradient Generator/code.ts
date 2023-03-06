// import ColorThief from './node_modules/colorthief/dist/color-thief.mjs'

 
figma.showUI(__html__);

// figma接收message
figma.ui.onmessage = msg => {

  // const colorThief = new ColorThief();
  // const img = document.querySelector('img');
  // img.crossOrigin = "Anonymous";

  // if (img.complete) {
  //   console.log(colorThief.getColor(img));
  // } else {
  //   img.addEventListener('load', function () {
  //     console.log(colorThief.getColor(img));
  //   });
  // }

  // 输出fill
  if (msg.type === 'create-frame') {
    for (const currentNode of figma.currentPage.selection) {
      if ("fills" in currentNode) {
        var fills = deepClone(currentNode.fills);
        // fills = [{
        //   type: 'GRADIENT_LINEAR',
        //   opacity: 1,
        //   visible: true,
        //   gradientTransform: [
        //     {'0': -0.1073433980345726, '1': 1, '2': 0.0536716990172863},
        //     {'0': -1.6547945737838745, '1': 6.1, '2': 1}
        //   ],
        //   gradientStops: [
        //     {color: { r: 1, g: 0.5, b: 0, a: 1 }, position: 0},
        //     {color: { r: 1, g: 1, b: 1, a: 1 }, position: 1},
        //   ]
        // }];
        const gradient_1 = {
          type: 'GRADIENT_LINEAR',
          opacity: 0.5,
          visible: true,
          gradientTransform: [
            { '0': 1.0029940605163574, '1': 1.0029940605163574, '2': -1.942890293094024e-16 },
            { '0': -1.0029940605163574, '1': 1.0029940605163574, '2': 0.5 }
          ],
          gradientStops: [
            { color: { r: 0, g: 0, b: 0, a: 1 }, position: 0 },
            { color: { r: 0, g: 0, b: 0, a: 0 }, position: 1 },
          ]
        };
        const gradient_2 = {
          type: 'GRADIENT_LINEAR',
          opacity: 0.25,
          visible: true,
          gradientTransform: [
            { '0': 0.6332703232765198, '1': 0.6332703232765198, '2': -1.2267019662734436e-16 },
            { '0': -0.6332703232765198, '1': 0.6332703232765198, '2': 0.5 }
          ],
          gradientStops: [
            { color: { r: 0, g: 0, b: 0, a: 1 }, position: 0 },
            { color: { r: 0, g: 0, b: 0, a: 0 }, position: 1 },
          ]
        };
        fills.push(gradient_1);
        // fills.push(gradient_2);
        console.log(currentNode)
        currentNode.fills = fills;
      }
    }
  }



  // 关闭插件
  if (msg.type === 'cancel') {
    figma.closePlugin();
  }
};


// 克隆函数


function deepClone(obj) {
  let newObj = Array.isArray(obj) ? [] : {}
  if (obj && typeof obj === "object") {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = (obj && typeof obj[key] === 'object') ? deepClone(obj[key]) : obj[key];
      }
    }
  }
  return newObj
}

