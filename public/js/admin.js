/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// window.onload=function(){
var header = document.querySelector("#head");
var menuBtn = document.querySelector(".menu-btn");
var menu = document.querySelector("#menu2");
var menuBranding = document.querySelector(".menu-branding");
var navLink = document.querySelectorAll(".nav-link");
var navItems = document.querySelectorAll(".nav-item");
var frontLinks = document.querySelector(".links");
var stripper = document.querySelector("#stripper");
var container = document.querySelector(".container");
var icon1 = document.querySelector(".icon1");
var icon2 = document.querySelector(".icon2");

// Menu toggle
var showMenu = false;
menuBtn.addEventListener("click", function () {
  if (!showMenu) {
    menuBtn.classList.add("openIt");
    menu.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(function (item) {
      return item.classList.add("show");
    });
    showMenu = true;
    console.log(showMenu);
  } else {
    menuBtn.classList.remove("openIt");
    menu.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(function (item) {
      return item.classList.remove("show");
    });
    showMenu = false;
    console.log(showMenu);
  }
});
// Menu toggle ends


/// project page display starts ///

// variable for containing page info inside of an object
var htmlEmail = void 0;

// pathArray retrieves window location id to match the objects in swithc statement
var pathArray = window.location.pathname.split('/');
switch (pathArray[3]) {
  case '1':
    htmlEmail = {
      gif: 'https://raw.githubusercontent.com/court-tek/myWebFiles/master/testImage6.0.gif',
      projectName: 'Smart Watch Project',
      github: 'https://github.com/court-tek/outbackAd',
      test: 'this is email 1'
    };
    console.log("" + htmlEmail.test);
    break;
  case '2':
    htmlEmail = {
      gif: 'https://raw.githubusercontent.com/court-tek/myWebFiles/master/testImage6.0.gif',
      projectName: 'Outback Ad Project',
      github: "https://github.com/court-tek/outbackAd",
      test: 'this is email 2'
    };
    console.log("" + htmlEmail.test);
    break;
  case '3':
    htmlEmail = {
      gif: 'https://raw.githubusercontent.com/court-tek/myWebFiles/master/testImage6.0.gif',
      projectName: 'Outback Ad Project',
      github: "https://github.com/court-tek/outbackAd",
      test: 'this is email 2'
    };
    console.log("" + htmlEmail.test);
    break;
  default:
}

var markup = "\n          <div class=\"project-image\">\n            <div class=\"img\" style=\"border: 5px #fff solid; background: url(" + htmlEmail.gif + ")\"></div>\n          </div>\n          <h1 class=\"project-name\">" + htmlEmail.projectName + "</h1>\n          <div class=\"info\">\n            <div class=\"buttons\">\n              <a href=\"" + htmlEmail.github + "\"><i class=\"fas fa-code\"></i>View Code</a>\n            </div>\n          </div>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n          <div class=\"technologies\">\n            <h3>Technologies</h3>\n            <div class=\"icons\">\n                <div class=\"icon icon1\">\n\n                </div>\n                <div class=\"icon icon2\">\n\n                </div>\n                <div class=\"icon icon3\">\n\n                </div>\n                <div class=\"icon icon4\">\n\n                </div>\n            </div>\n          </div>\n      ";
container.innerHTML = markup;
// Project page display ends
// }

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);