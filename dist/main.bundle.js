/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n    background-color: #76949F;\\r\\n    color: #533747;\\r\\n    font-size: 20px;\\r\\n}\\r\\n\\r\\nheader {\\r\\n    display: flex;\\r\\n    text-align: center;\\r\\n    background-color: #86BBBD;\\r\\n    margin:0;\\r\\n    padding:0;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\n\\r\\n#title {\\r\\n    color: #CEFDFF;\\r\\n}\\r\\n\\r\\n\\r\\nnav {\\r\\n    flex-direction: column;\\r\\n    margin: 0 auto;\\r\\n    padding: 0 auto;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n    border-bottom: 2px solid white;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n    margin: 0 auto;\\r\\n    padding: 0 auto;\\r\\n    margin-bottom: 20px;\\r\\n    text-align: center;\\r\\n  }\\r\\n\\r\\nul {\\r\\n    display: flex;\\r\\n    position: center;\\r\\n    list-style-type: none;\\r\\n}\\r\\n\\r\\nli {\\r\\n    padding: 7px;\\r\\n}\\r\\n\\r\\n#content {\\r\\n    text-align: center;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    \\r\\n}\\r\\n\\r\\n.text-box {\\r\\n    border: 1px solid black;\\r\\n    border-radius: 5px;\\r\\n    margin: 0 auto;\\r\\n    margin-top: 10px;\\r\\n    margin-bottom: 10px;\\r\\n    padding-top: 8px;\\r\\n    width: 40%;\\r\\n    font-size: 30px;\\r\\n}\\r\\n\\r\\n.home-img {\\r\\n    width: 40%;\\r\\n    padding-top: 10px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/getTarget.js */ \"./node_modules/style-loader/dist/runtime/getTarget.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = function(css, style){\n      if (style.styleSheet) {\n        style.styleSheet.cssText = css;\n      } else {\n      while (style.firstChild) {\n        style.removeChild(style.firstChild);\n      }\n\n      style.appendChild(document.createTextNode(css));\n    }\n  };\noptions.setAttributes = function(style) {\n        var nonce =\n           true ? __webpack_require__.nc : 0;\n\n        if (nonce) {\n          style.setAttribute(\"nonce\", nonce);\n        }\n      };\noptions.insert = function(style){\n    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()(\"head\");\n\n    if (!target) {\n      throw new Error(\n        \"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\"\n      );\n    }\n\n    target.appendChild(style);\n  };\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n\nmodule.exports = getTarget;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/getTarget.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContactPage (){\r\n    const content = loadContactPage()\r\n\r\n    function loadContactPage() {\r\n        const content = document.createElement('div')\r\n        content.setAttribute('id', 'content')\r\n\r\n        createOpeningHoursDiv(content)\r\n        createLocationDiv(content)\r\n        \r\n        return content\r\n        }\r\n\r\n\r\n        function createOpeningHoursDiv(content) {\r\n            \r\n            const openingHoursDiv = document.createElement('div')\r\n            openingHoursDiv.setAttribute('id', 'opening-hours')\r\n            openingHoursDiv.classList.add('text-box')\r\n    \r\n            const openingHoursH3 = document.createElement('h3')\r\n            openingHoursH3.innerText = 'Opening Hours'\r\n\r\n            const openingHoursText = document.createElement('p')\r\n            openingHoursText.classList.add('text')\r\n            openingHoursText.innerText = 'Sunday: 7:30am–7:30pm' + '\\n'\r\n            + 'Monday: 7:30am–7:30pm' + '\\n'\r\n            + 'Tuesday: 7:30am–7:30pm' + '\\n'\r\n            + 'Wednesday: 7:30am–7:30pm' + '\\n'\r\n            + 'Thursday: 7:30am–7:30pm' + '\\n'\r\n            + 'Friday: 7:30am–3pm' + '\\n'\r\n            + 'Saturday: Closed' + '\\n'\r\n\r\n            openingHoursDiv.appendChild(openingHoursH3)\r\n            openingHoursDiv.appendChild(openingHoursText)\r\n            content.appendChild(openingHoursDiv)\r\n        }\r\n\r\n        function createLocationDiv(content) {\r\n\r\n            const locationDiv = document.createElement('div')\r\n            locationDiv.setAttribute('id', 'lcation')\r\n            locationDiv.classList.add('text-box')\r\n    \r\n            const locationH3 = document.createElement('h3')\r\n            locationH3.innerText = 'Location'\r\n    \r\n            const locationText = document.createElement('p')\r\n            locationText.classList.add('text')\r\n            locationText.innerText = '49 Levinsky Street, Levinsky Market Tel Aviv '+ '\\n' + '03-6824614'\r\n    \r\n    \r\n            locationDiv.appendChild(locationH3)\r\n            locationDiv.appendChild(locationText)\r\n            content.appendChild(locationDiv)\r\n    \r\n        }\r\n          \r\n\r\n   return content\r\n\r\n} \r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactPage);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_atlas2_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/atlas2.jpg */ \"./src/images/atlas2.jpg\");\n\r\n\r\nfunction createHomePage (){\r\n    const content = loadHomePage()\r\n\r\n    function loadHomePage() {\r\n        const content = document.createElement('div')\r\n        content.setAttribute('id', 'content')\r\n\r\n        addImage(content)\r\n        createAboutDiv(content)\r\n\r\n\r\n        return content\r\n\r\n        }\r\n\r\n        function createAboutDiv(content) {\r\n            \r\n            const aboutDiv = document.createElement('div')\r\n            aboutDiv.setAttribute('id', 'about')\r\n            aboutDiv.classList.add('text-box')\r\n            \r\n            const aboutH3 = document.createElement('h3')\r\n            aboutH3.innerText = 'About Us'\r\n\r\n            const aboutText = document.createElement('p')\r\n            aboutText.classList.add('text')\r\n            aboutText.innerText = 'The place has been operating since 1924 and ' +\r\n            'was established by immigrants from Thessaloniki. 30 years ' + \r\n            'ago by David and Juliette Refaeli started running the place and have kept on doing so ever since. Apart from dozens of types ' + \r\n            'of spices like black mustard seeds and organic flax there are also herbs and even ' + \r\n            'amber that is made from whales and is beneficial according to the belief in male potency.'\r\n\r\n            aboutDiv.appendChild(aboutH3)\r\n            aboutDiv.appendChild(aboutText)\r\n            content.appendChild(aboutDiv)\r\n        }     \r\n\r\n        function addImage(content) {\r\n            const imageDiv = document.createElement('div')\r\n            imageDiv.classList.add('img-div')\r\n\r\n            const img = document.createElement('img')\r\n            img.setAttribute('id', 'home-img')\r\n            img.src = _images_atlas2_jpg__WEBPACK_IMPORTED_MODULE_0__\r\n\r\n            imageDiv.appendChild(img)\r\n            content.appendChild(imageDiv)\r\n        }\r\n\r\n\r\n   return content\r\n} \r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/images/atlas2.jpg":
/*!*******************************!*\
  !*** ./src/images/atlas2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9fdf7128f69dc095bb50.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/atlas2.jpg?");

/***/ }),

/***/ "./src/images/coffeebeans.jpg":
/*!************************************!*\
  !*** ./src/images/coffeebeans.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"02b5b8ad2d667502c7c8.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/coffeebeans.jpg?");

/***/ }),

/***/ "./src/images/spices.jpg":
/*!*******************************!*\
  !*** ./src/images/spices.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c9abab7c3f41b29db005.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/spices.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website.js */ \"./src/website.js\");\n\r\n\r\n\r\n\r\n(0,_website_js__WEBPACK_IMPORTED_MODULE_0__.default)()\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/products.js":
/*!*************************!*\
  !*** ./src/products.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_coffeebeans_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/coffeebeans.jpg */ \"./src/images/coffeebeans.jpg\");\n/* harmony import */ var _images_spices_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/spices.jpg */ \"./src/images/spices.jpg\");\n\r\n\r\n\r\n\r\nfunction createProductsPage (){\r\n    const content = loadProductsPage()\r\n\r\n    function loadProductsPage() {\r\n        const content = document.createElement('div')\r\n        content.setAttribute('id', 'content')\r\n\r\n        coffeImage(content)\r\n        spicesImage(content)\r\n\r\n        return content\r\n\r\n        }\r\n          \r\n\r\n    \r\n    function coffeImage(content) {\r\n        const imageDiv = document.createElement('div')\r\n        imageDiv.setAttribute('id', 'coffee-img')\r\n        imageDiv.classList.add('img-div')\r\n\r\n        const img = document.createElement('img')\r\n        img.src = _images_coffeebeans_jpg__WEBPACK_IMPORTED_MODULE_0__\r\n\r\n        imageDiv.appendChild(img)\r\n        content.appendChild(imageDiv)\r\n    }\r\n\r\n    function spicesImage(content) {\r\n        const imageDiv = document.createElement('div')\r\n        imageDiv.setAttribute('id', 'spices-img')\r\n        imageDiv.classList.add('img-div')\r\n\r\n        const img = document.createElement('img')\r\n        img.src = _images_spices_jpg__WEBPACK_IMPORTED_MODULE_1__\r\n\r\n        imageDiv.appendChild(img)\r\n        content.appendChild(imageDiv)\r\n    }\r\n\r\n   return content\r\n} \r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProductsPage);\n\n//# sourceURL=webpack://restaurant-page/./src/products.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _products_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.js */ \"./src/products.js\");\n\r\n\r\n\r\n\r\n__webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\r\n\r\nfunction buildWebsite(){\r\n    const header = createHeader()\r\n    createNavBar(header)\r\n\r\n    function createNavBar (header) {\r\n        const nav = createNav()\r\n        const tabList = createTabList()\r\n\r\n        nav.appendChild(tabList)\r\n        header.appendChild(nav)\r\n        document.body.appendChild(header)\r\n        document.body.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.default)())\r\n    }\r\n    \r\n    function createHeader(){\r\n        const header = document.createElement('header')\r\n        const atlasCoffee = document.createElement('h1')\r\n        atlasCoffee.innerText = 'Atlas'\r\n        atlasCoffee.setAttribute('id', 'title')\r\n        header.appendChild(atlasCoffee)\r\n\r\n        return header\r\n    }\r\n\r\n    function createNav(){\r\n        const nav = document.createElement('nav')\r\n        return nav\r\n    }\r\n\r\n    function createTabList(){\r\n        const tabList = document.createElement('ul')\r\n        const home = document.createElement('li')\r\n        const products = document.createElement('li')\r\n        const contact = document.createElement('li')\r\n\r\n        setHeaderLiItems(home, products, contact)\r\n\r\n        tabList.classList.add('tab-list')\r\n        tabList.appendChild(home)\r\n        tabList.appendChild(products)\r\n        tabList.appendChild(contact)\r\n        \r\n        return tabList\r\n    }\r\n\r\n    function setHeaderLiItems(home, products, contact) {\r\n        home.innerText = 'Home'\r\n        products.innerText = 'Products'\r\n        contact.innerText = 'Contact'\r\n\r\n        home.setAttribute('id', 'home')\r\n        home.classList.add('hidden')\r\n        products.setAttribute('id', 'products')\r\n        contact.setAttribute('id', 'contact')\r\n\r\n        addListeners(home,products,contact) \r\n\r\n    }   \r\n    \r\n\r\n    function addListeners(home,products,contact) {\r\n        home.addEventListener('click', () => {\r\n            content.parentNode.removeChild(content)\r\n            document.body.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.default)())\r\n            setHidden([home,products,contact], home)\r\n        })\r\n\r\n        products.addEventListener('click', () => {\r\n            content.parentNode.removeChild(content)\r\n            document.body.appendChild((0,_products_js__WEBPACK_IMPORTED_MODULE_2__.default)())\r\n            setHidden([home,products,contact], products)\r\n\r\n        })\r\n        \r\n        contact.addEventListener('click', () => {\r\n            content.parentNode.removeChild(content)\r\n            document.body.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_1__.default)())\r\n            setHidden([home,products,contact], contact)\r\n        })\r\n    }\r\n    \r\n\r\n    function setHidden(tabList, tab) {\r\n        \r\n        tabList.forEach(element => {\r\n            if (element == tab) {\r\n                tab.classList.add('hidden')\r\n            }\r\n            else {\r\n                element.classList.remove('hidden');\r\n            }\r\n        });\r\n    }\r\n\r\n//     function createFooter() {\r\n//         const footer = document.createElement('footer')\r\n//         footerList = document.createElement('ul')\r\n// }\r\n//     function build(){\r\n        \r\n//     }\r\n\r\n\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildWebsite);\n\n//# sourceURL=webpack://restaurant-page/./src/website.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;