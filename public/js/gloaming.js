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

var header = document.querySelector("#head");
var menuBtn = document.querySelector(".menu-btn");
var menu = document.querySelector(".menu");
var menuNav = document.querySelector(".menu-nav");
var menuBranding = document.querySelector(".menu-branding");
var navLink = document.querySelectorAll(".nav-link");
var navItems = document.querySelectorAll(".nav-item");
var frontLinks = document.querySelector(".links");
var stripper = document.querySelector("#stripper");
var menuList = [{ id: 1, link: 'Home', linkTags: "/" }, { id: 2, link: 'Skills', linkTags: "skills" }, { id: 3, link: 'Projects', linkTags: "projects" }, { id: 4, link: 'Experience', linkTags: "experience" }];

// CSS Spinner
if (window.location.href === 'http://localhost:8000/experience') {
  promise = new Promise(function (resovle) {
    setTimeout(function () {
      resovle();
    }, 3000);
  });

  promise.then(function () {
    return stripper.classList.remove('spinner');
  }).then(function () {
    return stripper.innerHTML = "<h1 class=\"NoWork\">" + 'No Work Experience Found' + "</h1>";
  });
  // Spinner Ends
} else {
  console.log('Don\'t promise anything!');
}

// Header
if (window.location.href === 'http://localhost:8000/') {
  var text1 = '';
  for (var i = 0; i < menuList.length; i++) {
    text1 += "<a key=\"" + menuList[i].id + "\" href=\"" + menuList[i].linkTags + "\">" + menuList[i].link + "</a>";
  }
  frontLinks.innerHTML = text1;
} else {
  console.log('we are here!');
  var text2 = '';
  for (var i = 0; i < menuList.length; i++) {
    text2 += "<li key=\"" + menuList[i].id + "\" class=\"nav-item\"><a href=\"" + menuList[i].linkTags + "\" class=\"nav-link\">" + menuList[i].link + "</a></li>";
  }
  menuNav.innerHTML = text2;
}
// Header Ends

// hamburger menu
if (window.location.href === 'http://localhost:8000/') {
  console.log('no event listener');
} else {
  var showMenu = false;
  menuBtn.addEventListener("click", function () {
    if (!showMenu) {
      menuBtn.classList.add("openIt");
      menu.classList.add('show');
      // menuNav.classList.add('show');
      // menuBranding.classList.add('show');
      // navItems.forEach(item => item.classList.add('show'));
      showMenu = true;
    } else {
      menuBtn.classList.remove("openIt");
      menu.classList.remove('show');
      // menuNav.classList.remove('show');
      // menuBranding.classList.remove('show');
      // navItems.forEach(item => item.classList.remove('show'));
      showMenu = false;
    }
  });
}

// hamburger menu ends

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);