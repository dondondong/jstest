import ColorThief from './NIO Gradient Generator/node_modules/colorthief/dist/color-thief.mjs'

// figma.showUI(__html__)

const colorThief = new ColorThief();
const img = document.querySelector('img');
img.crossOrigin = "Anonymous";

if (img.complete) {
  console.log(colorThief.getColor(img));
} else {
  img.addEventListener('load', function() {
    console.log(colorThief.getColor(img));
  });
}

