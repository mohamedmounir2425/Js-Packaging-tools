/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/second.js


function sayHelo() {
    console.log("Hello Mano")
}
/* harmony default export */ const second = (sayHelo);
;// CONCATENATED MODULE: ./src/images/slide4.jpg
const slide4_namespaceObject = __webpack_require__.p + "images/slide4.jpg";
;// CONCATENATED MODULE: ./src/components/header/header.js

const header_element = document.createElement("header");

header_element.innerHTML = "this is webpack demo";
header_element.classList.add('info')
document.body.appendChild(header_element);

// nooo


const img = document.createElement("img");
img.src=slide4_namespaceObject;
img.style.width="50px"
img.style.height="50px"
header_element.appendChild(img);



;// CONCATENATED MODULE: ./src/components/cover/cover.js

const header = document.getElementsByTagName("header")[0]
const div = document.createElement("div");
div.classList.add("cover")
header.after(div);
;// CONCATENATED MODULE: ./src/components/bio/bio.js

function component() {
    const element = document.createElement("div");
//   
    element.innerHTML = "It is cool";
    element.classList.add('myDiv')
    return element;
};

document.body.appendChild(component());
;// CONCATENATED MODULE: ./src/first.js


second()
// import './components/header/header'
// document.getElementsByTagName('button')[0].addEventListener('click',mano)



;






/******/ })()
;