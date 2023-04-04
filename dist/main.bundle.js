/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./reset-styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset-styles.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/magnifying-glass.svg */ "./src/assets/magnifying-glass.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_reset_styles_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --clr-main: black;\n  --clr-light: white;\n  --clr-accent-primary-300: #80c4da;\n  --clr-accent-primary-500: #259bc1;\n  --clr-accent-primary-700: #055e92;\n  --clr-accent-secondary-300: #9ddc45;\n  --clr-accent-secondary-400: #8dc63f;\n  --clr-accent-primary-900: #23282d;\n  --clr-neutral-200: #f2f2f2;\n  --clr-neutral-300: #c9c8c8;\n  /* --clr-neutral-400: #f2f2f2; */\n  --clr-neutral-500: #8e929b;\n  --clr-neutral-600: #82878f;\n\n  --size-70: 0.075rem;\n  --size-80: 0.1rem;\n  --size-90: 0.125rem;\n  --size-100: 0.25rem;\n  --size-200: 0.5rem;\n  --size-250: 0.675rem;\n  --size-300: 0.75rem;\n  --size-350: 0.875rem;\n  --size-400: 1rem;\n  --size-450: 1.125rem;\n  --size-500: 1.25rem;\n  --size-600: 2rem;\n  --size-700: 2.5rem;\n  --size-800: 3rem;\n  --size-900: 4rem;\n  --size-1000: 5rem;\n  --size-1100: 6rem;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n/* UTILITY */\n.fs-250 {\n  font-size: var(--size-250);\n}\n.fs-300 {\n  font-size: var(--size-300);\n}\n.fs-350 {\n  font-size: var(--size-350);\n}\n.fs-400 {\n  font-size: var(--size-400);\n}\n.fs-450 {\n  font-size: var(--size-450);\n}\n.fs-500 {\n  font-size: var(--size-500);\n}\n.fs-600 {\n  font-size: var(--size-600);\n}\n.fs-700 {\n  font-size: var(--size-700);\n}\n.el-width-700 {\n  width: var(--size-700);\n}\n.el-width-800 {\n  width: var(--size-800);\n}\n.el-width-900 {\n  width: 4rem;\n}\n.el-width-1000 {\n  width: 5rem;\n}\n.text-light {\n  color: var(--clr-light);\n}\n.text-neutral-300 {\n  color: var(--clr-neutral-300);\n}\n.text-neutral-500 {\n  color: var(--clr-neutral-500);\n}\n.text-accent-primary-300 {\n  color: var(--clr-accent-primary-300);\n}\n.text-accent-primary-700 {\n  color: var(--clr-accent-primary-700);\n}\n.bg-neutral-200 {\n  background-color: var(--clr-neutral-200);\n}\n.bg-accent-500 {\n  background-color: var(--clr-accent-primary-500);\n}\n.bg-accent-700 {\n  background-color: var(--clr-accent-primary-700);\n}\n.bg-accent-secondary-400 {\n  background-color: var(--clr-accent-secondary-400);\n}\n.padding-block-100 {\n  padding: var(--size-100);\n}\n.padding-block-200 {\n  padding: var(--size-200);\n}\n.padding-block-300 {\n  padding: var(--size-300);\n}\n.padding-block-400 {\n  padding: var(--size-400);\n}\n.padding-block-500 {\n  padding: var(--size-500);\n}\n.padding-block-600 {\n  padding: var(--size-600);\n}\n.font-weight-400 {\n  font-weight: 400;\n}\n.btn-secondary {\n  padding: var(--size-250) var(--size-600);\n  font-size: var(--size-500);\n}\n.btn-secondary:hover {\n  /* TODO: SHOULD ADD HLS white transparency */\n  background-color: var(--clr-accent-secondary-300);\n}\n.container {\n  --max-width: 97rem;\n  margin-inline: auto;\n  max-width: min(var(--max-width), (100% - var(--size-500)));\n}\n.inline-block {\n  display: inline-block;\n}\n/* GENERIC ELEMENTS */\n\nbutton {\n  border-radius: var(--size-200);\n  white-space: nowrap;\n}\nbutton:hover {\n  cursor: pointer;\n}\ninput {\n  font-size: var(--size-450);\n  max-width: 100%;\n  padding: var(--size-200) var(--size-800);\n\n  border: 1.5px solid var(--clr-neutral-300);\n  border-radius: var(--size-200);\n}\n\n/* GENERAL STYLING */\n\n/* PRIMARY HEADER */\n.primary-header {\n  background-color: var(--clr-accent-primary-500);\n  box-shadow: 0 0 8px 8px var(--clr-neutral-600);\n  position: relative;\n  z-index: 1;\n\n  padding-top: var(--size-300);\n  padding-bottom: var(--size-300);\n}\n.primary-header_container {\n  display: flex;\n  justify-content: space-between;\n}\n.logo {\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  gap: var(--size-300);\n}\n.filters-container {\n  display: flex;\n  align-items: center;\n  gap: var(--size-300);\n}\n.filters-container_list button {\n  letter-spacing: var(--size-70);\n  background-color: transparent;\n}\n.filters-container_list button:hover {\n  color: var(--clr-accent-primary-900);\n}\n.filters-container_list .active {\n  color: var(--clr-light);\n  background-color: hsl(0, 100%, 100%, 0.2);\n}\n@media all and (max-width: 550px) {\n  .primary-header_container {\n    flex-direction: column;\n    gap: var(--size-500);\n    align-items: center;\n  }\n}\n\n/* CONTENT */\n.content_header-container {\n  display: flex;\n  justify-content: space-between;\n\n  padding-top: var(--size-400);\n  padding-bottom: var(--size-400);\n}\n.search {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: var(--size-500);\n  background-position: var(--size-300) 50%;\n\n  width: 22rem;\n}\n.search::placeholder {\n  opacity: 1;\n  color: var(--clr-neutral-500);\n}\n.content_table-container {\n  padding: var(--size-800) 0;\n  overflow-x: scroll;\n}\n.content_table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.content_table td,\nth {\n  white-space: nowrap;\n  text-align: left;\n  border-bottom: 1px solid var(--clr-neutral-300);\n  padding-left: var(--size-500);\n  padding-right: var(--size-500);\n  padding-bottom: var(--size-200);\n}\n.content_table th {\n  padding: var(--size-400) var(--size-700);\n}\n.content_table td {\n  padding: var(--size-500) var(--size-700);\n}\n.content_table th {\n  letter-spacing: var(--size-70);\n}\n.content_table thead tr th:nth-child(1) {\n  width: 9rem;\n}\n.content_table th:nth-child(2) {\n  width: 21rem;\n}\n\n@media all and (max-width: 620px) {\n  .content_header-container {\n    flex-direction: column;\n    align-items: center;\n    gap: var(--size-200);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url('./reset-styles.css');\n\n:root {\n  --clr-main: black;\n  --clr-light: white;\n  --clr-accent-primary-300: #80c4da;\n  --clr-accent-primary-500: #259bc1;\n  --clr-accent-primary-700: #055e92;\n  --clr-accent-secondary-300: #9ddc45;\n  --clr-accent-secondary-400: #8dc63f;\n  --clr-accent-primary-900: #23282d;\n  --clr-neutral-200: #f2f2f2;\n  --clr-neutral-300: #c9c8c8;\n  /* --clr-neutral-400: #f2f2f2; */\n  --clr-neutral-500: #8e929b;\n  --clr-neutral-600: #82878f;\n\n  --size-70: 0.075rem;\n  --size-80: 0.1rem;\n  --size-90: 0.125rem;\n  --size-100: 0.25rem;\n  --size-200: 0.5rem;\n  --size-250: 0.675rem;\n  --size-300: 0.75rem;\n  --size-350: 0.875rem;\n  --size-400: 1rem;\n  --size-450: 1.125rem;\n  --size-500: 1.25rem;\n  --size-600: 2rem;\n  --size-700: 2.5rem;\n  --size-800: 3rem;\n  --size-900: 4rem;\n  --size-1000: 5rem;\n  --size-1100: 6rem;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n/* UTILITY */\n.fs-250 {\n  font-size: var(--size-250);\n}\n.fs-300 {\n  font-size: var(--size-300);\n}\n.fs-350 {\n  font-size: var(--size-350);\n}\n.fs-400 {\n  font-size: var(--size-400);\n}\n.fs-450 {\n  font-size: var(--size-450);\n}\n.fs-500 {\n  font-size: var(--size-500);\n}\n.fs-600 {\n  font-size: var(--size-600);\n}\n.fs-700 {\n  font-size: var(--size-700);\n}\n.el-width-700 {\n  width: var(--size-700);\n}\n.el-width-800 {\n  width: var(--size-800);\n}\n.el-width-900 {\n  width: 4rem;\n}\n.el-width-1000 {\n  width: 5rem;\n}\n.text-light {\n  color: var(--clr-light);\n}\n.text-neutral-300 {\n  color: var(--clr-neutral-300);\n}\n.text-neutral-500 {\n  color: var(--clr-neutral-500);\n}\n.text-accent-primary-300 {\n  color: var(--clr-accent-primary-300);\n}\n.text-accent-primary-700 {\n  color: var(--clr-accent-primary-700);\n}\n.bg-neutral-200 {\n  background-color: var(--clr-neutral-200);\n}\n.bg-accent-500 {\n  background-color: var(--clr-accent-primary-500);\n}\n.bg-accent-700 {\n  background-color: var(--clr-accent-primary-700);\n}\n.bg-accent-secondary-400 {\n  background-color: var(--clr-accent-secondary-400);\n}\n.padding-block-100 {\n  padding: var(--size-100);\n}\n.padding-block-200 {\n  padding: var(--size-200);\n}\n.padding-block-300 {\n  padding: var(--size-300);\n}\n.padding-block-400 {\n  padding: var(--size-400);\n}\n.padding-block-500 {\n  padding: var(--size-500);\n}\n.padding-block-600 {\n  padding: var(--size-600);\n}\n.font-weight-400 {\n  font-weight: 400;\n}\n.btn-secondary {\n  padding: var(--size-250) var(--size-600);\n  font-size: var(--size-500);\n}\n.btn-secondary:hover {\n  /* TODO: SHOULD ADD HLS white transparency */\n  background-color: var(--clr-accent-secondary-300);\n}\n.container {\n  --max-width: 97rem;\n  margin-inline: auto;\n  max-width: min(var(--max-width), (100% - var(--size-500)));\n}\n.inline-block {\n  display: inline-block;\n}\n/* GENERIC ELEMENTS */\n\nbutton {\n  border-radius: var(--size-200);\n  white-space: nowrap;\n}\nbutton:hover {\n  cursor: pointer;\n}\ninput {\n  font-size: var(--size-450);\n  max-width: 100%;\n  padding: var(--size-200) var(--size-800);\n\n  border: 1.5px solid var(--clr-neutral-300);\n  border-radius: var(--size-200);\n}\n\n/* GENERAL STYLING */\n\n/* PRIMARY HEADER */\n.primary-header {\n  background-color: var(--clr-accent-primary-500);\n  box-shadow: 0 0 8px 8px var(--clr-neutral-600);\n  position: relative;\n  z-index: 1;\n\n  padding-top: var(--size-300);\n  padding-bottom: var(--size-300);\n}\n.primary-header_container {\n  display: flex;\n  justify-content: space-between;\n}\n.logo {\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  gap: var(--size-300);\n}\n.filters-container {\n  display: flex;\n  align-items: center;\n  gap: var(--size-300);\n}\n.filters-container_list button {\n  letter-spacing: var(--size-70);\n  background-color: transparent;\n}\n.filters-container_list button:hover {\n  color: var(--clr-accent-primary-900);\n}\n.filters-container_list .active {\n  color: var(--clr-light);\n  background-color: hsl(0, 100%, 100%, 0.2);\n}\n@media all and (max-width: 550px) {\n  .primary-header_container {\n    flex-direction: column;\n    gap: var(--size-500);\n    align-items: center;\n  }\n}\n\n/* CONTENT */\n.content_header-container {\n  display: flex;\n  justify-content: space-between;\n\n  padding-top: var(--size-400);\n  padding-bottom: var(--size-400);\n}\n.search {\n  background-image: url('../assets/magnifying-glass.svg');\n  background-repeat: no-repeat;\n  background-size: var(--size-500);\n  background-position: var(--size-300) 50%;\n\n  width: 22rem;\n}\n.search::placeholder {\n  opacity: 1;\n  color: var(--clr-neutral-500);\n}\n.content_table-container {\n  padding: var(--size-800) 0;\n  overflow-x: scroll;\n}\n.content_table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.content_table td,\nth {\n  white-space: nowrap;\n  text-align: left;\n  border-bottom: 1px solid var(--clr-neutral-300);\n  padding-left: var(--size-500);\n  padding-right: var(--size-500);\n  padding-bottom: var(--size-200);\n}\n.content_table th {\n  padding: var(--size-400) var(--size-700);\n}\n.content_table td {\n  padding: var(--size-500) var(--size-700);\n}\n.content_table th {\n  letter-spacing: var(--size-70);\n}\n.content_table thead tr th:nth-child(1) {\n  width: 9rem;\n}\n.content_table th:nth-child(2) {\n  width: 21rem;\n}\n\n@media all and (max-width: 620px) {\n  .content_header-container {\n    flex-direction: column;\n    align-items: center;\n    gap: var(--size-200);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset-styles.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset-styles.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Custom rules */\nbutton {\n  border: none;\n}\n\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role='list'],\nol[role='list'] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/reset-styles.css"],"names":[],"mappings":"AAAA,iBAAiB;AACjB;EACE,YAAY;AACd;;AAEA,qBAAqB;AACrB;;;EAGE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA,0BAA0B;AAC1B;;;;;;;;;;EAUE,SAAS;AACX;;AAEA,2GAA2G;AAC3G;;EAEE,gBAAgB;AAClB;;AAEA,2BAA2B;AAC3B;EACE,uBAAuB;AACzB;;AAEA,2BAA2B;AAC3B;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA,0DAA0D;AAC1D;EACE,8BAA8B;AAChC;;AAEA,oCAAoC;AACpC;;EAEE,eAAe;EACf,cAAc;AAChB;;AAEA,yCAAyC;AACzC;;;;EAIE,aAAa;AACf;;AAEA,gGAAgG;AAChG;EACE;IACE,qBAAqB;EACvB;;EAEA;;;IAGE,qCAAqC;IACrC,uCAAuC;IACvC,sCAAsC;IACtC,gCAAgC;EAClC;AACF","sourcesContent":["/* Custom rules */\nbutton {\n  border: none;\n}\n\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role='list'],\nol[role='list'] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/magnifying-glass.svg":
/*!*****************************************!*\
  !*** ./src/assets/magnifying-glass.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7111b880cc81bd768715.svg";

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": () => (/* binding */ API_URL)
/* harmony export */ });
const API_URL = 'https://jsonplaceholder.typicode.com';

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./src/constants.js");




const UserSearch = function () {
  let userList = null;
  const SEARCH_TIMEOUT_AMOUNT = 600;
  const fetchUsers = async searchStr => {
    userList = null;
    try {
      // TODO: start loading icon
      // should paginate for better performance
      const response = await fetch(`${_constants_js__WEBPACK_IMPORTED_MODULE_1__.API_URL}/users?name_like=${searchStr}`);
      if (!response.ok) {
        throw new Error(`An error occured (${response.status})`);
      }
      const responseJSON = await response.json();
      userList = responseJSON;
      updateUI();
    } catch (err) {
      // TODO: show user error message

      console.error(err);
    } finally {
      // TODO: stop loading icon
    }
  };
  const debounce = (callback, delay = 500) => {
    let timer = null;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };
  const validateInput = input => {
    // alphabetic characters, whitespace and empty string
    const regex = /^[a-zA-Z\s]*$/;
    return regex.test(input);
  };
  const updateUI = () => {
    const tableBody = document.getElementById('content_table-body');
    const resetListContainer = () => {
      while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.lastChild);
      }
    };
    const createRowNode = user => {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      const name = td.cloneNode();
      const id = td.cloneNode();
      const email = td.cloneNode();
      id.classList.add('text-neutral-500', 'fs-450');
      name.classList.add('fs-500');
      email.classList.add('text-neutral-500', 'fs-450');
      name.textContent = user.name;
      id.textContent = user.id;
      email.textContent = user.email;
      tr.append(id, name, email);
      return tr;
    };
    resetListContainer();
    const rowNodes = userList.map(user => createRowNode(user));
    tableBody.append(...rowNodes);
  };
  const init = () => {
    // display all items
    fetchUsers('');

    // enable item search
    const searchBox = document.getElementById('list-search');
    searchBox.value = '';
    const onInput = debounce(fetchUsers, SEARCH_TIMEOUT_AMOUNT);
    searchBox.addEventListener('input', e => {
      const input = e.target.value;
      if (validateInput(input)) {
        onInput(input);
      } else {
        // TODO: show user error message
        console.error('Only alphabetic characters, whitespaces and empty strings are allowed in the input field');
      }
    });
  };
  return {
    init
  };
}();
UserSearch.init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sYUFBYSxNQUFNLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsWUFBWSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxVQUFVLEtBQUssVUFBVSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsY0FBYyxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLDJEQUEyRCxXQUFXLHNCQUFzQix1QkFBdUIsc0NBQXNDLHND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QUFVLENBQUM4QyxJQUFJLEVBQUUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZlLXRlc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2ZlLXRlc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2ZlLXRlc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9mZS10ZXN0Ly4vc3JjL3N0eWxlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vZmUtdGVzdC8uL3NyYy9zdHlsZXMvcmVzZXQtc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9mZS10ZXN0Ly4vc3JjL3N0eWxlcy9pbmRleC5jc3M/NjM0OSIsIndlYnBhY2s6Ly9mZS10ZXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2ZlLXRlc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2ZlLXRlc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZmUtdGVzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9mZS10ZXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZmUtdGVzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2ZlLXRlc3QvLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2ZlLXRlc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmUtdGVzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9mZS10ZXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mZS10ZXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZmUtdGVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZlLXRlc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mZS10ZXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2ZlLXRlc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZmUtdGVzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZmUtdGVzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LXN0eWxlcy5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL21hZ25pZnlpbmctZ2xhc3Muc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1jbHItbWFpbjogYmxhY2s7XFxuICAtLWNsci1saWdodDogd2hpdGU7XFxuICAtLWNsci1hY2NlbnQtcHJpbWFyeS0zMDA6ICM4MGM0ZGE7XFxuICAtLWNsci1hY2NlbnQtcHJpbWFyeS01MDA6ICMyNTliYzE7XFxuICAtLWNsci1hY2NlbnQtcHJpbWFyeS03MDA6ICMwNTVlOTI7XFxuICAtLWNsci1hY2NlbnQtc2Vjb25kYXJ5LTMwMDogIzlkZGM0NTtcXG4gIC0tY2xyLWFjY2VudC1zZWNvbmRhcnktNDAwOiAjOGRjNjNmO1xcbiAgLS1jbHItYWNjZW50LXByaW1hcnktOTAwOiAjMjMyODJkO1xcbiAgLS1jbHItbmV1dHJhbC0yMDA6ICNmMmYyZjI7XFxuICAtLWNsci1uZXV0cmFsLTMwMDogI2M5YzhjODtcXG4gIC8qIC0tY2xyLW5ldXRyYWwtNDAwOiAjZjJmMmYyOyAqL1xcbiAgLS1jbHItbmV1dHJhbC01MDA6ICM4ZTkyOWI7XFxuICAtLWNsci1uZXV0cmFsLTYwMDogIzgyODc4ZjtcXG5cXG4gIC0tc2l6ZS03MDogMC4wNzVyZW07XFxuICAtLXNpemUtODA6IDAuMXJlbTtcXG4gIC0tc2l6ZS05MDogMC4xMjVyZW07XFxuICAtLXNpemUtMTAwOiAwLjI1cmVtO1xcbiAgLS1zaXplLTIwMDogMC41cmVtO1xcbiAgLS1zaXplLTI1MDogMC42NzVyZW07XFxuICAtLXNpemUtMzAwOiAwLjc1cmVtO1xcbiAgLS1zaXplLTM1MDogMC44NzVyZW07XFxuICAtLXNpemUtNDAwOiAxcmVtO1xcbiAgLS1zaXplLTQ1MDogMS4xMjVyZW07XFxuICAtLXNpemUtNTAwOiAxLjI1cmVtO1xcbiAgLS1zaXplLTYwMDogMnJlbTtcXG4gIC0tc2l6ZS03MDA6IDIuNXJlbTtcXG4gIC0tc2l6ZS04MDA6IDNyZW07XFxuICAtLXNpemUtOTAwOiA0cmVtO1xcbiAgLS1zaXplLTEwMDA6IDVyZW07XFxuICAtLXNpemUtMTEwMDogNnJlbTtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4vKiBVVElMSVRZICovXFxuLmZzLTI1MCB7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtMjUwKTtcXG59XFxuLmZzLTMwMCB7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtMzAwKTtcXG59XFxuLmZzLTM1MCB7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtMzUwKTtcXG59XFxuLmZzLTQwMCB7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtNDAwKTtcXG59XFxuLmZzLTQ1MCB7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtNDUwKTtcXG59XFxuLmZzLTUwMCB7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtNTAwKTtcXG59XFxuLmZzLTYwMCB7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtNjAwKTtcXG59XFxuLmZzLTcwMCB7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtNzAwKTtcXG59XFxuLmVsLXdpZHRoLTcwMCB7XFxuICB3aWR0aDogdmFyKC0tc2l6ZS03MDApO1xcbn1cXG4uZWwtd2lkdGgtODAwIHtcXG4gIHdpZHRoOiB2YXIoLS1zaXplLTgwMCk7XFxufVxcbi5lbC13aWR0aC05MDAge1xcbiAgd2lkdGg6IDRyZW07XFxufVxcbi5lbC13aWR0aC0xMDAwIHtcXG4gIHdpZHRoOiA1cmVtO1xcbn1cXG4udGV4dC1saWdodCB7XFxuICBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXG59XFxuLnRleHQtbmV1dHJhbC0zMDAge1xcbiAgY29sb3I6IHZhcigtLWNsci1uZXV0cmFsLTMwMCk7XFxufVxcbi50ZXh0LW5ldXRyYWwtNTAwIHtcXG4gIGNvbG9yOiB2YXIoLS1jbHItbmV1dHJhbC01MDApO1xcbn1cXG4udGV4dC1hY2NlbnQtcHJpbWFyeS0zMDAge1xcbiAgY29sb3I6IHZhcigtLWNsci1hY2NlbnQtcHJpbWFyeS0zMDApO1xcbn1cXG4udGV4dC1hY2NlbnQtcHJpbWFyeS03MDAge1xcbiAgY29sb3I6IHZhcigtLWNsci1hY2NlbnQtcHJpbWFyeS03MDApO1xcbn1cXG4uYmctbmV1dHJhbC0yMDAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLW5ldXRyYWwtMjAwKTtcXG59XFxuLmJnLWFjY2VudC01MDAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudC1wcmltYXJ5LTUwMCk7XFxufVxcbi5iZy1hY2NlbnQtNzAwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQtcHJpbWFyeS03MDApO1xcbn1cXG4uYmctYWNjZW50LXNlY29uZGFyeS00MDAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudC1zZWNvbmRhcnktNDAwKTtcXG59XFxuLnBhZGRpbmctYmxvY2stMTAwIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtMTAwKTtcXG59XFxuLnBhZGRpbmctYmxvY2stMjAwIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtMjAwKTtcXG59XFxuLnBhZGRpbmctYmxvY2stMzAwIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtMzAwKTtcXG59XFxuLnBhZGRpbmctYmxvY2stNDAwIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtNDAwKTtcXG59XFxuLnBhZGRpbmctYmxvY2stNTAwIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtNTAwKTtcXG59XFxuLnBhZGRpbmctYmxvY2stNjAwIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtNjAwKTtcXG59XFxuLmZvbnQtd2VpZ2h0LTQwMCB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4uYnRuLXNlY29uZGFyeSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTI1MCkgdmFyKC0tc2l6ZS02MDApO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTUwMCk7XFxufVxcbi5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcXG4gIC8qIFRPRE86IFNIT1VMRCBBREQgSExTIHdoaXRlIHRyYW5zcGFyZW5jeSAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudC1zZWNvbmRhcnktMzAwKTtcXG59XFxuLmNvbnRhaW5lciB7XFxuICAtLW1heC13aWR0aDogOTdyZW07XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiBtaW4odmFyKC0tbWF4LXdpZHRoKSwgKDEwMCUgLSB2YXIoLS1zaXplLTUwMCkpKTtcXG59XFxuLmlubGluZS1ibG9jayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi8qIEdFTkVSSUMgRUxFTUVOVFMgKi9cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2l6ZS0yMDApO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuaW5wdXQge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTQ1MCk7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTIwMCkgdmFyKC0tc2l6ZS04MDApO1xcblxcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1jbHItbmV1dHJhbC0zMDApO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2l6ZS0yMDApO1xcbn1cXG5cXG4vKiBHRU5FUkFMIFNUWUxJTkcgKi9cXG5cXG4vKiBQUklNQVJZIEhFQURFUiAqL1xcbi5wcmltYXJ5LWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50LXByaW1hcnktNTAwKTtcXG4gIGJveC1zaGFkb3c6IDAgMCA4cHggOHB4IHZhcigtLWNsci1uZXV0cmFsLTYwMCk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcblxcbiAgcGFkZGluZy10b3A6IHZhcigtLXNpemUtMzAwKTtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zaXplLTMwMCk7XFxufVxcbi5wcmltYXJ5LWhlYWRlcl9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmxvZ28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgZ2FwOiB2YXIoLS1zaXplLTMwMCk7XFxufVxcbi5maWx0ZXJzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogdmFyKC0tc2l6ZS0zMDApO1xcbn1cXG4uZmlsdGVycy1jb250YWluZXJfbGlzdCBidXR0b24ge1xcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLXNpemUtNzApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5maWx0ZXJzLWNvbnRhaW5lcl9saXN0IGJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudC1wcmltYXJ5LTkwMCk7XFxufVxcbi5maWx0ZXJzLWNvbnRhaW5lcl9saXN0IC5hY3RpdmUge1xcbiAgY29sb3I6IHZhcigtLWNsci1saWdodCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMTAwJSwgMTAwJSwgMC4yKTtcXG59XFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gIC5wcmltYXJ5LWhlYWRlcl9jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IHZhcigtLXNpemUtNTAwKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuLyogQ09OVEVOVCAqL1xcbi5jb250ZW50X2hlYWRlci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1zaXplLTQwMCk7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc2l6ZS00MDApO1xcbn1cXG4uc2VhcmNoIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiB2YXIoLS1zaXplLTUwMCk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB2YXIoLS1zaXplLTMwMCkgNTAlO1xcblxcbiAgd2lkdGg6IDIycmVtO1xcbn1cXG4uc2VhcmNoOjpwbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgY29sb3I6IHZhcigtLWNsci1uZXV0cmFsLTUwMCk7XFxufVxcbi5jb250ZW50X3RhYmxlLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTgwMCkgMDtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG59XFxuLmNvbnRlbnRfdGFibGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG4uY29udGVudF90YWJsZSB0ZCxcXG50aCB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jbHItbmV1dHJhbC0zMDApO1xcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaXplLTUwMCk7XFxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zaXplLTUwMCk7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc2l6ZS0yMDApO1xcbn1cXG4uY29udGVudF90YWJsZSB0aCB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTQwMCkgdmFyKC0tc2l6ZS03MDApO1xcbn1cXG4uY29udGVudF90YWJsZSB0ZCB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTUwMCkgdmFyKC0tc2l6ZS03MDApO1xcbn1cXG4uY29udGVudF90YWJsZSB0aCB7XFxuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tc2l6ZS03MCk7XFxufVxcbi5jb250ZW50X3RhYmxlIHRoZWFkIHRyIHRoOm50aC1jaGlsZCgxKSB7XFxuICB3aWR0aDogOXJlbTtcXG59XFxuLmNvbnRlbnRfdGFibGUgdGg6bnRoLWNoaWxkKDIpIHtcXG4gIHdpZHRoOiAyMXJlbTtcXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcXG4gIC5jb250ZW50X2hlYWRlci1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IHZhcigtLXNpemUtMjAwKTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxpQ0FBaUM7RUFDakMsaUNBQWlDO0VBQ2pDLG1DQUFtQztFQUNuQyxtQ0FBbUM7RUFDbkMsaUNBQWlDO0VBQ2pDLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsZ0NBQWdDO0VBQ2hDLDBCQUEwQjtFQUMxQiwwQkFBMEI7O0VBRTFCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIseUNBQXlDO0FBQzNDOztBQUVBLFlBQVk7QUFDWjtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSx3Q0FBd0M7QUFDMUM7QUFDQTtFQUNFLCtDQUErQztBQUNqRDtBQUNBO0VBQ0UsK0NBQStDO0FBQ2pEO0FBQ0E7RUFDRSxpREFBaUQ7QUFDbkQ7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usd0NBQXdDO0VBQ3hDLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsNENBQTRDO0VBQzVDLGlEQUFpRDtBQUNuRDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiwwREFBMEQ7QUFDNUQ7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBLHFCQUFxQjs7QUFFckI7RUFDRSw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLHdDQUF3Qzs7RUFFeEMsMENBQTBDO0VBQzFDLDhCQUE4QjtBQUNoQzs7QUFFQSxvQkFBb0I7O0FBRXBCLG1CQUFtQjtBQUNuQjtFQUNFLCtDQUErQztFQUMvQyw4Q0FBOEM7RUFDOUMsa0JBQWtCO0VBQ2xCLFVBQVU7O0VBRVYsNEJBQTRCO0VBQzVCLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIseUNBQXlDO0FBQzNDO0FBQ0E7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUEsWUFBWTtBQUNaO0VBQ0UsYUFBYTtFQUNiLDhCQUE4Qjs7RUFFOUIsNEJBQTRCO0VBQzVCLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UseURBQXVEO0VBQ3ZELDRCQUE0QjtFQUM1QixnQ0FBZ0M7RUFDaEMsd0NBQXdDOztFQUV4QyxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFVBQVU7RUFDViw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7QUFDQTs7RUFFRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLCtDQUErQztFQUMvQyw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLCtCQUErQjtBQUNqQztBQUNBO0VBQ0Usd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRSx3Q0FBd0M7QUFDMUM7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsb0JBQW9CO0VBQ3RCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJy4vcmVzZXQtc3R5bGVzLmNzcycpO1xcblxcbjpyb290IHtcXG4gIC0tY2xyLW1haW46IGJsYWNrO1xcbiAgLS1jbHItbGlnaHQ6IHdoaXRlO1xcbiAgLS1jbHItYWNjZW50LXByaW1hcnktMzAwOiAjODBjNGRhO1xcbiAgLS1jbHItYWNjZW50LXByaW1hcnktNTAwOiAjMjU5YmMxO1xcbiAgLS1jbHItYWNjZW50LXByaW1hcnktNzAwOiAjMDU1ZTkyO1xcbiAgLS1jbHItYWNjZW50LXNlY29uZGFyeS0zMDA6ICM5ZGRjNDU7XFxuICAtLWNsci1hY2NlbnQtc2Vjb25kYXJ5LTQwMDogIzhkYzYzZjtcXG4gIC0tY2xyLWFjY2VudC1wcmltYXJ5LTkwMDogIzIzMjgyZDtcXG4gIC0tY2xyLW5ldXRyYWwtMjAwOiAjZjJmMmYyO1xcbiAgLS1jbHItbmV1dHJhbC0zMDA6ICNjOWM4Yzg7XFxuICAvKiAtLWNsci1uZXV0cmFsLTQwMDogI2YyZjJmMjsgKi9cXG4gIC0tY2xyLW5ldXRyYWwtNTAwOiAjOGU5MjliO1xcbiAgLS1jbHItbmV1dHJhbC02MDA6ICM4Mjg3OGY7XFxuXFxuICAtLXNpemUtNzA6IDAuMDc1cmVtO1xcbiAgLS1zaXplLTgwOiAwLjFyZW07XFxuICAtLXNpemUtOTA6IDAuMTI1cmVtO1xcbiAgLS1zaXplLTEwMDogMC4yNXJlbTtcXG4gIC0tc2l6ZS0yMDA6IDAuNXJlbTtcXG4gIC0tc2l6ZS0yNTA6IDAuNjc1cmVtO1xcbiAgLS1zaXplLTMwMDogMC43NXJlbTtcXG4gIC0tc2l6ZS0zNTA6IDAuODc1cmVtO1xcbiAgLS1zaXplLTQwMDogMXJlbTtcXG4gIC0tc2l6ZS00NTA6IDEuMTI1cmVtO1xcbiAgLS1zaXplLTUwMDogMS4yNXJlbTtcXG4gIC0tc2l6ZS02MDA6IDJyZW07XFxuICAtLXNpemUtNzAwOiAyLjVyZW07XFxuICAtLXNpemUtODAwOiAzcmVtO1xcbiAgLS1zaXplLTkwMDogNHJlbTtcXG4gIC0tc2l6ZS0xMDAwOiA1cmVtO1xcbiAgLS1zaXplLTExMDA6IDZyZW07XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLyogVVRJTElUWSAqL1xcbi5mcy0yNTAge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTI1MCk7XFxufVxcbi5mcy0zMDAge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTMwMCk7XFxufVxcbi5mcy0zNTAge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTM1MCk7XFxufVxcbi5mcy00MDAge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTQwMCk7XFxufVxcbi5mcy00NTAge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTQ1MCk7XFxufVxcbi5mcy01MDAge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTUwMCk7XFxufVxcbi5mcy02MDAge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTYwMCk7XFxufVxcbi5mcy03MDAge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTcwMCk7XFxufVxcbi5lbC13aWR0aC03MDAge1xcbiAgd2lkdGg6IHZhcigtLXNpemUtNzAwKTtcXG59XFxuLmVsLXdpZHRoLTgwMCB7XFxuICB3aWR0aDogdmFyKC0tc2l6ZS04MDApO1xcbn1cXG4uZWwtd2lkdGgtOTAwIHtcXG4gIHdpZHRoOiA0cmVtO1xcbn1cXG4uZWwtd2lkdGgtMTAwMCB7XFxuICB3aWR0aDogNXJlbTtcXG59XFxuLnRleHQtbGlnaHQge1xcbiAgY29sb3I6IHZhcigtLWNsci1saWdodCk7XFxufVxcbi50ZXh0LW5ldXRyYWwtMzAwIHtcXG4gIGNvbG9yOiB2YXIoLS1jbHItbmV1dHJhbC0zMDApO1xcbn1cXG4udGV4dC1uZXV0cmFsLTUwMCB7XFxuICBjb2xvcjogdmFyKC0tY2xyLW5ldXRyYWwtNTAwKTtcXG59XFxuLnRleHQtYWNjZW50LXByaW1hcnktMzAwIHtcXG4gIGNvbG9yOiB2YXIoLS1jbHItYWNjZW50LXByaW1hcnktMzAwKTtcXG59XFxuLnRleHQtYWNjZW50LXByaW1hcnktNzAwIHtcXG4gIGNvbG9yOiB2YXIoLS1jbHItYWNjZW50LXByaW1hcnktNzAwKTtcXG59XFxuLmJnLW5ldXRyYWwtMjAwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1uZXV0cmFsLTIwMCk7XFxufVxcbi5iZy1hY2NlbnQtNTAwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQtcHJpbWFyeS01MDApO1xcbn1cXG4uYmctYWNjZW50LTcwMCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50LXByaW1hcnktNzAwKTtcXG59XFxuLmJnLWFjY2VudC1zZWNvbmRhcnktNDAwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQtc2Vjb25kYXJ5LTQwMCk7XFxufVxcbi5wYWRkaW5nLWJsb2NrLTEwMCB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTEwMCk7XFxufVxcbi5wYWRkaW5nLWJsb2NrLTIwMCB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTIwMCk7XFxufVxcbi5wYWRkaW5nLWJsb2NrLTMwMCB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTMwMCk7XFxufVxcbi5wYWRkaW5nLWJsb2NrLTQwMCB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTQwMCk7XFxufVxcbi5wYWRkaW5nLWJsb2NrLTUwMCB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTUwMCk7XFxufVxcbi5wYWRkaW5nLWJsb2NrLTYwMCB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTYwMCk7XFxufVxcbi5mb250LXdlaWdodC00MDAge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLmJ0bi1zZWNvbmRhcnkge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS0yNTApIHZhcigtLXNpemUtNjAwKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS01MDApO1xcbn1cXG4uYnRuLXNlY29uZGFyeTpob3ZlciB7XFxuICAvKiBUT0RPOiBTSE9VTEQgQUREIEhMUyB3aGl0ZSB0cmFuc3BhcmVuY3kgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQtc2Vjb25kYXJ5LTMwMCk7XFxufVxcbi5jb250YWluZXIge1xcbiAgLS1tYXgtd2lkdGg6IDk3cmVtO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIG1heC13aWR0aDogbWluKHZhcigtLW1heC13aWR0aCksICgxMDAlIC0gdmFyKC0tc2l6ZS01MDApKSk7XFxufVxcbi5pbmxpbmUtYmxvY2sge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4vKiBHRU5FUklDIEVMRU1FTlRTICovXFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNpemUtMjAwKTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbmJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmlucHV0IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS00NTApO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS0yMDApIHZhcigtLXNpemUtODAwKTtcXG5cXG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tY2xyLW5ldXRyYWwtMzAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNpemUtMjAwKTtcXG59XFxuXFxuLyogR0VORVJBTCBTVFlMSU5HICovXFxuXFxuLyogUFJJTUFSWSBIRUFERVIgKi9cXG4ucHJpbWFyeS1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudC1wcmltYXJ5LTUwMCk7XFxuICBib3gtc2hhZG93OiAwIDAgOHB4IDhweCB2YXIoLS1jbHItbmV1dHJhbC02MDApO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG5cXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1zaXplLTMwMCk7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc2l6ZS0zMDApO1xcbn1cXG4ucHJpbWFyeS1oZWFkZXJfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5sb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGdhcDogdmFyKC0tc2l6ZS0zMDApO1xcbn1cXG4uZmlsdGVycy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IHZhcigtLXNpemUtMzAwKTtcXG59XFxuLmZpbHRlcnMtY29udGFpbmVyX2xpc3QgYnV0dG9uIHtcXG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1zaXplLTcwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uZmlsdGVycy1jb250YWluZXJfbGlzdCBidXR0b246aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWNsci1hY2NlbnQtcHJpbWFyeS05MDApO1xcbn1cXG4uZmlsdGVycy1jb250YWluZXJfbGlzdCAuYWN0aXZlIHtcXG4gIGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDEwMCUsIDEwMCUsIDAuMik7XFxufVxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICAucHJpbWFyeS1oZWFkZXJfY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiB2YXIoLS1zaXplLTUwMCk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxufVxcblxcbi8qIENPTlRFTlQgKi9cXG4uY29udGVudF9oZWFkZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICBwYWRkaW5nLXRvcDogdmFyKC0tc2l6ZS00MDApO1xcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXNpemUtNDAwKTtcXG59XFxuLnNlYXJjaCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9tYWduaWZ5aW5nLWdsYXNzLnN2ZycpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogdmFyKC0tc2l6ZS01MDApO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdmFyKC0tc2l6ZS0zMDApIDUwJTtcXG5cXG4gIHdpZHRoOiAyMnJlbTtcXG59XFxuLnNlYXJjaDo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItbmV1dHJhbC01MDApO1xcbn1cXG4uY29udGVudF90YWJsZS1jb250YWluZXIge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS04MDApIDA7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxufVxcbi5jb250ZW50X3RhYmxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuLmNvbnRlbnRfdGFibGUgdGQsXFxudGgge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY2xyLW5ldXRyYWwtMzAwKTtcXG4gIHBhZGRpbmctbGVmdDogdmFyKC0tc2l6ZS01MDApO1xcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tc2l6ZS01MDApO1xcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXNpemUtMjAwKTtcXG59XFxuLmNvbnRlbnRfdGFibGUgdGgge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS00MDApIHZhcigtLXNpemUtNzAwKTtcXG59XFxuLmNvbnRlbnRfdGFibGUgdGQge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS01MDApIHZhcigtLXNpemUtNzAwKTtcXG59XFxuLmNvbnRlbnRfdGFibGUgdGgge1xcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLXNpemUtNzApO1xcbn1cXG4uY29udGVudF90YWJsZSB0aGVhZCB0ciB0aDpudGgtY2hpbGQoMSkge1xcbiAgd2lkdGg6IDlyZW07XFxufVxcbi5jb250ZW50X3RhYmxlIHRoOm50aC1jaGlsZCgyKSB7XFxuICB3aWR0aDogMjFyZW07XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XFxuICAuY29udGVudF9oZWFkZXItY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiB2YXIoLS1zaXplLTIwMCk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEN1c3RvbSBydWxlcyAqL1xcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qIEJveCBzaXppbmcgcnVsZXMgKi9cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXFxuYm9keSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5wLFxcbmZpZ3VyZSxcXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmRkIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyogUmVtb3ZlIGxpc3Qgc3R5bGVzIG9uIHVsLCBvbCBlbGVtZW50cyB3aXRoIGEgbGlzdCByb2xlLCB3aGljaCBzdWdnZXN0cyBkZWZhdWx0IHN0eWxpbmcgd2lsbCBiZSByZW1vdmVkICovXFxudWxbcm9sZT0nbGlzdCddLFxcbm9sW3JvbGU9J2xpc3QnXSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBTZXQgY29yZSByb290IGRlZmF1bHRzICovXFxuaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xcbmE6bm90KFtjbGFzc10pIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcXG59XFxuXFxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcbmltZyxcXG5waWN0dXJlIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbi8qIFJlbW92ZSBhbGwgYW5pbWF0aW9ucywgdHJhbnNpdGlvbnMgYW5kIHNtb290aCBzY3JvbGwgZm9yIHBlb3BsZSB0aGF0IHByZWZlciBub3QgdG8gc2VlIHRoZW0gKi9cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XFxuICB9XFxuXFxuICAqLFxcbiAgKjo6YmVmb3JlLFxcbiAgKjo6YWZ0ZXIge1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9yZXNldC1zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGlCQUFpQjtBQUNqQjtFQUNFLFlBQVk7QUFDZDs7QUFFQSxxQkFBcUI7QUFDckI7OztFQUdFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBLDBCQUEwQjtBQUMxQjs7Ozs7Ozs7OztFQVVFLFNBQVM7QUFDWDs7QUFFQSwyR0FBMkc7QUFDM0c7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjs7QUFFQSwwREFBMEQ7QUFDMUQ7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUEsb0NBQW9DO0FBQ3BDOztFQUVFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBLHlDQUF5QztBQUN6Qzs7OztFQUlFLGFBQWE7QUFDZjs7QUFFQSxnR0FBZ0c7QUFDaEc7RUFDRTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTs7O0lBR0UscUNBQXFDO0lBQ3JDLHVDQUF1QztJQUN2QyxzQ0FBc0M7SUFDdEMsZ0NBQWdDO0VBQ2xDO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQ3VzdG9tIHJ1bGVzICovXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLyogQm94IHNpemluZyBydWxlcyAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbnAsXFxuZmlndXJlLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBSZW1vdmUgbGlzdCBzdHlsZXMgb24gdWwsIG9sIGVsZW1lbnRzIHdpdGggYSBsaXN0IHJvbGUsIHdoaWNoIHN1Z2dlc3RzIGRlZmF1bHQgc3R5bGluZyB3aWxsIGJlIHJlbW92ZWQgKi9cXG51bFtyb2xlPSdsaXN0J10sXFxub2xbcm9sZT0nbGlzdCddIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIFNldCBjb3JlIHJvb3QgZGVmYXVsdHMgKi9cXG5odG1sOmZvY3VzLXdpdGhpbiB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi8qIEEgZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIGEgY2xhc3MgZ2V0IGRlZmF1bHQgc3R5bGVzICovXFxuYTpub3QoW2NsYXNzXSkge1xcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xcbn1cXG5cXG4vKiBNYWtlIGltYWdlcyBlYXNpZXIgdG8gd29yayB3aXRoICovXFxuaW1nLFxcbnBpY3R1cmUge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIEluaGVyaXQgZm9udHMgZm9yIGlucHV0cyBhbmQgYnV0dG9ucyAqL1xcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuLyogUmVtb3ZlIGFsbCBhbmltYXRpb25zLCB0cmFuc2l0aW9ucyBhbmQgc21vb3RoIHNjcm9sbCBmb3IgcGVvcGxlIHRoYXQgcHJlZmVyIG5vdCB0byBzZWUgdGhlbSAqL1xcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxuICBodG1sOmZvY3VzLXdpdGhpbiB7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcXG4gIH1cXG5cXG4gICosXFxuICAqOjpiZWZvcmUsXFxuICAqOjphZnRlciB7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgQVBJX1VSTCA9ICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20nO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguY3NzJztcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XG5cbmNvbnN0IFVzZXJTZWFyY2ggPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgdXNlckxpc3QgPSBudWxsO1xuICBjb25zdCBTRUFSQ0hfVElNRU9VVF9BTU9VTlQgPSA2MDA7XG5cbiAgY29uc3QgZmV0Y2hVc2VycyA9IGFzeW5jIChzZWFyY2hTdHIpID0+IHtcbiAgICB1c2VyTGlzdCA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgIC8vIFRPRE86IHN0YXJ0IGxvYWRpbmcgaWNvblxuICAgICAgLy8gc2hvdWxkIHBhZ2luYXRlIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vdXNlcnM/bmFtZV9saWtlPSR7c2VhcmNoU3RyfWApO1xuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIGVycm9yIG9jY3VyZWQgKCR7cmVzcG9uc2Uuc3RhdHVzfSlgKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc3BvbnNlSlNPTiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHVzZXJMaXN0ID0gcmVzcG9uc2VKU09OO1xuICAgICAgdXBkYXRlVUkoKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIFRPRE86IHNob3cgdXNlciBlcnJvciBtZXNzYWdlXG5cbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgLy8gVE9ETzogc3RvcCBsb2FkaW5nIGljb25cbiAgICB9XG4gIH07XG4gIGNvbnN0IGRlYm91bmNlID0gKGNhbGxiYWNrLCBkZWxheSA9IDUwMCkgPT4ge1xuICAgIGxldCB0aW1lciA9IG51bGw7XG5cbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjYWxsYmFjayguLi5hcmdzKTtcbiAgICAgIH0sIGRlbGF5KTtcbiAgICB9O1xuICB9O1xuICBjb25zdCB2YWxpZGF0ZUlucHV0ID0gKGlucHV0KSA9PiB7XG4gICAgLy8gYWxwaGFiZXRpYyBjaGFyYWN0ZXJzLCB3aGl0ZXNwYWNlIGFuZCBlbXB0eSBzdHJpbmdcbiAgICBjb25zdCByZWdleCA9IC9eW2EtekEtWlxcc10qJC87XG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QoaW5wdXQpO1xuICB9O1xuICBjb25zdCB1cGRhdGVVSSA9ICgpID0+IHtcbiAgICBjb25zdCB0YWJsZUJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudF90YWJsZS1ib2R5Jyk7XG5cbiAgICBjb25zdCByZXNldExpc3RDb250YWluZXIgPSAoKSA9PiB7XG4gICAgICB3aGlsZSAodGFibGVCb2R5LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGFibGVCb2R5LnJlbW92ZUNoaWxkKHRhYmxlQm9keS5sYXN0Q2hpbGQpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgY3JlYXRlUm93Tm9kZSA9ICh1c2VyKSA9PiB7XG4gICAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG5cbiAgICAgIGNvbnN0IG5hbWUgPSB0ZC5jbG9uZU5vZGUoKTtcbiAgICAgIGNvbnN0IGlkID0gdGQuY2xvbmVOb2RlKCk7XG4gICAgICBjb25zdCBlbWFpbCA9IHRkLmNsb25lTm9kZSgpO1xuXG4gICAgICBpZC5jbGFzc0xpc3QuYWRkKCd0ZXh0LW5ldXRyYWwtNTAwJywgJ2ZzLTQ1MCcpO1xuICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdmcy01MDAnKTtcbiAgICAgIGVtYWlsLmNsYXNzTGlzdC5hZGQoJ3RleHQtbmV1dHJhbC01MDAnLCAnZnMtNDUwJyk7XG5cbiAgICAgIG5hbWUudGV4dENvbnRlbnQgPSB1c2VyLm5hbWU7XG4gICAgICBpZC50ZXh0Q29udGVudCA9IHVzZXIuaWQ7XG4gICAgICBlbWFpbC50ZXh0Q29udGVudCA9IHVzZXIuZW1haWw7XG5cbiAgICAgIHRyLmFwcGVuZChpZCwgbmFtZSwgZW1haWwpO1xuICAgICAgcmV0dXJuIHRyO1xuICAgIH07XG4gICAgcmVzZXRMaXN0Q29udGFpbmVyKCk7XG4gICAgY29uc3Qgcm93Tm9kZXMgPSB1c2VyTGlzdC5tYXAoKHVzZXIpID0+IGNyZWF0ZVJvd05vZGUodXNlcikpO1xuICAgIHRhYmxlQm9keS5hcHBlbmQoLi4ucm93Tm9kZXMpO1xuICB9O1xuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIC8vIGRpc3BsYXkgYWxsIGl0ZW1zXG4gICAgZmV0Y2hVc2VycygnJyk7XG5cbiAgICAvLyBlbmFibGUgaXRlbSBzZWFyY2hcbiAgICBjb25zdCBzZWFyY2hCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdC1zZWFyY2gnKTtcbiAgICBzZWFyY2hCb3gudmFsdWUgPSAnJztcbiAgICBjb25zdCBvbklucHV0ID0gZGVib3VuY2UoZmV0Y2hVc2VycywgU0VBUkNIX1RJTUVPVVRfQU1PVU5UKTtcbiAgICBzZWFyY2hCb3guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgY29uc3QgaW5wdXQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIGlmICh2YWxpZGF0ZUlucHV0KGlucHV0KSkge1xuICAgICAgICBvbklucHV0KGlucHV0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFRPRE86IHNob3cgdXNlciBlcnJvciBtZXNzYWdlXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgJ09ubHkgYWxwaGFiZXRpYyBjaGFyYWN0ZXJzLCB3aGl0ZXNwYWNlcyBhbmQgZW1wdHkgc3RyaW5ncyBhcmUgYWxsb3dlZCBpbiB0aGUgaW5wdXQgZmllbGQnLFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICByZXR1cm4geyBpbml0IH07XG59KSgpO1xuXG5Vc2VyU2VhcmNoLmluaXQoKTtcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJpZCIsIl9rIiwicHVzaCIsInVybCIsIm9wdGlvbnMiLCJTdHJpbmciLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsInRlc3QiLCJzbGljZSIsImhhc2giLCJuZWVkUXVvdGVzIiwicmVwbGFjZSIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJBUElfVVJMIiwiVXNlclNlYXJjaCIsInVzZXJMaXN0IiwiU0VBUkNIX1RJTUVPVVRfQU1PVU5UIiwiZmV0Y2hVc2VycyIsInNlYXJjaFN0ciIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwic3RhdHVzIiwicmVzcG9uc2VKU09OIiwianNvbiIsInVwZGF0ZVVJIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiZGVib3VuY2UiLCJjYWxsYmFjayIsImRlbGF5IiwidGltZXIiLCJhcmdzIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInZhbGlkYXRlSW5wdXQiLCJpbnB1dCIsInJlZ2V4IiwidGFibGVCb2R5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlc2V0TGlzdENvbnRhaW5lciIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsImNyZWF0ZVJvd05vZGUiLCJ1c2VyIiwidHIiLCJjcmVhdGVFbGVtZW50IiwidGQiLCJuYW1lIiwiY2xvbmVOb2RlIiwiZW1haWwiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0Q29udGVudCIsImFwcGVuZCIsInJvd05vZGVzIiwiaW5pdCIsInNlYXJjaEJveCIsInZhbHVlIiwib25JbnB1dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==