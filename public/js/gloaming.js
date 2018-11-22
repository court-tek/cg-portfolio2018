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
var menu = document.querySelector("#menu2");
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

// hamburger menu
if (window.location.href === 'http://localhost:8000/') {
  console.log('no event listener');
} else {
  var showMenu = false;
  menuBtn.addEventListener("click", function () {
    if (!showMenu) {
      menuBtn.classList.add("openIt");
      menu.classList.add('show');
      menuBranding.classList.add('show');
      navItems.forEach(function (item) {
        return item.classList.add('show');
      });
      showMenu = true;
      console.log(showMenu);
    } else {
      menuBtn.classList.remove("openIt");
      menu.classList.remove('show');
      menuBranding.classList.remove('show');
      navItems.forEach(function (item) {
        return item.classList.remove('show');
      });
      showMenu = false;
      console.log(showMenu);
    }
  });
}
// hamburger menu ends

// Header
if (window.location.href === 'http://localhost:8000/') {
  var text1 = '';
  for (var i = 0; i < menuList.length; i++) {
    text1 += "<a key=\"" + menuList[i].id + "\" href=\"" + menuList[i].linkTags + "\">" + menuList[i].link + "</a>";
  }
  frontLinks.innerHTML = text1;
} else {
  console.log('this is not the home page:(');
}
// Header Ends

/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: \r\n        @include transform0;\r\n                ^\r\n      No mixin named transform0\r\n      in C:\\xampp\\htdocs\\cg-portfolio2018\\resources\\sass\\_menu.scss (line 106, column 18)\n    at runLoaders (C:\\xampp\\htdocs\\cg-portfolio2018\\node_modules\\webpack\\lib\\NormalModule.js:195:19)\n    at C:\\xampp\\htdocs\\cg-portfolio2018\\node_modules\\loader-runner\\lib\\LoaderRunner.js:364:11\n    at C:\\xampp\\htdocs\\cg-portfolio2018\\node_modules\\loader-runner\\lib\\LoaderRunner.js:230:18\n    at context.callback (C:\\xampp\\htdocs\\cg-portfolio2018\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at Object.asyncSassJobQueue.push [as callback] (C:\\xampp\\htdocs\\cg-portfolio2018\\node_modules\\sass-loader\\lib\\loader.js:55:13)\n    at Object.done [as callback] (C:\\xampp\\htdocs\\cg-portfolio2018\\node_modules\\neo-async\\async.js:8077:18)\n    at options.error (C:\\xampp\\htdocs\\cg-portfolio2018\\node_modules\\node-sass\\lib\\index.js:294:32)");

/***/ })
/******/ ]);