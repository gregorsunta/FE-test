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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --clr-main: hsl(0, 0%, 0%);\n\n  --clr-light: hsl(0, 0%, 100%);\n  --clr-light-hs: 0, 0%;\n  --clr-light-hsl: 0, 0%, 100%;\n\n  --clr-accent-primary-hs: 195, 68%;\n\n  --clr-accent-primary-450: hsl(var(--clr-accent-primary-hs), 45%);\n\n  --clr-accent-secondary-hs: 85, 54%;\n  --clr-accent-secondary-400: hsl(var(--clr-accent-secondary-hs), 40%);\n  --clr-accent-secondary-500: hsl(var(--clr-accent-secondary-hs), 50%);\n  --clr-accent-secondary-600: hsl(var(--clr-accent-secondary-hs), 60%);\n\n  font-family: Arial, sans-serif;\n\n  --size-1: 0.0625rem;\n  --size-2: 0.125rem;\n  --size-3: 0.1875rem;\n  --size-4: 0.25rem;\n  --size-5: 0.3125rem;\n  --size-6: 0.375rem;\n  --size-7: 0.4375rem;\n  --size-8: 0.5rem;\n  --size-9: 0.5625rem;\n  --size-10: 0.625rem;\n  --size-11: 0.6875rem;\n  --size-12: 0.75rem;\n  --size-13: 0.8125rem;\n  --size-14: 0.875rem;\n  --size-15: 0.9375rem;\n  --size-16: 1rem;\n  --size-17: 1.0625rem;\n  --size-18: 1.125rem;\n  --size-19: 1.1875rem;\n  --size-20: 1.25rem;\n  --size-21: 1.3125rem;\n  --size-22: 1.375rem;\n  --size-23: 1.4375rem;\n  --size-24: 1.5rem;\n  --size-25: 1.5625rem;\n  --size-26: 1.625rem;\n  --size-27: 1.6875rem;\n  --size-28: 1.75rem;\n  --size-29: 1.8125rem;\n  --size-30: 1.875rem;\n  --size-31: 1.9375rem;\n  --size-32: 2rem;\n  --size-40: 2.5rem;\n  --size-45: 2.8125rem;\n\n  --size-50: 3.125rem;\n}\n\n/* UTILITY */\n\n.fs-12 {\n  font-size: var(--size-12);\n}\n.fs-14 {\n  font-size: var(--size-14);\n}\n.fs-16 {\n  font-size: var(--size-16);\n}\n.fs-17 {\n  font-size: var(--size-17);\n}\n.el-width-700 {\n  width: var(--size-700);\n}\n.el-width-800 {\n  width: var(--size-800);\n}\n.el-width-900 {\n  width: 4rem;\n}\n.el-width-1000 {\n  width: 5rem;\n}\n.text-light {\n  color: var(--clr-light);\n}\n.text-accent-primary-300 {\n  color: var(--clr-accent-primary-300);\n}\n.text-accent-primary-700 {\n  color: var(--clr-accent-primary-700);\n}\n.text-pass-through-500 {\n  color: hsla(var(--clr-light-hsl), 50%);\n}\n.bg-neutral-200 {\n  background-color: var(--clr-neutral-200);\n}\n.bg-accent-500 {\n  background-color: var(--clr-accent-primary-500);\n}\n.bg-accent-700 {\n  background-color: var(--clr-accent-primary-700);\n}\n.bg-accent-secondary-500 {\n  background-color: var(--clr-accent-secondary-500);\n}\n.padding-block-6 {\n  padding: var(--size-6) var(--size-6);\n}\n.padding-block-7 {\n  padding: var(--size-7) var(--size-7);\n}\n.padding-block-9 {\n  padding: var(--size-9) var(--size-9);\n}\n.padding-block-16 {\n  padding: var(--size-16) var(--size-16);\n}\n.btn-secondary {\n  font-size: var(--size-14);\n  padding: var(--size-6) var(--size-25);\n}\n.btn-secondary:hover {\n  background-color: var(--clr-accent-secondary-600);\n}\n.container {\n  --max-width: 1000px;\n  margin-inline: auto;\n  max-width: min(var(--max-width), (100% - 10rem));\n}\n.inline-block {\n  display: inline-block;\n}\n@media all and (max-width: 800px) {\n  .container {\n    max-width: min(var(--max-width), (100% - 2rem));\n  }\n}\n/* GENERIC ELEMENTS */\n\nbutton {\n  border-radius: var(--size-8);\n  white-space: nowrap;\n}\nbutton:hover {\n  cursor: pointer;\n}\ninput {\n  font-size: var(--size-18);\n  max-width: 100%;\n  padding: var(--size-2);\n  padding-left: 2.3rem;\n\n  border: 1px solid hsl(var(--clr-light-hs), 90%);\n  border-radius: var(--size-8);\n}\n\n/* GENERAL STYLING */\n\n/* PRIMARY HEADER */\n.primary-header {\n  background-color: var(--clr-accent-primary-450);\n  position: relative;\n  z-index: 1;\n  padding: var(--size-9) 0;\n  box-shadow: 0 var(--size-3) var(--size-5) hsl(var(--clr-light-hs), 85%);\n}\n.primary-header_container {\n  display: flex;\n  justify-content: space-between;\n}\n.logo {\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  gap: var(--size-6);\n}\n.filters-container {\n  display: flex;\n  align-items: center;\n  gap: var(--size-12);\n}\n.filters-container_list button {\n  background-color: transparent;\n}\n.filters-container_list button:hover {\n  color: var(--clr-accent-primary-900);\n}\n.filters-container_list .active {\n  color: var(--clr-light);\n  background-color: hsla(var(--clr-light-hsl), 0.1);\n}\n@media all and (max-width: 420px) {\n  .primary-header_container {\n    flex-direction: column;\n    gap: var(--size-18);\n    align-items: center;\n  }\n}\n\n/* CONTENT */\n.content_header {\n  background-color: hsl(var(--clr-light-hs), 97%);\n  padding: var(--size-17) 0;\n}\n.content_header-container {\n  display: flex;\n  justify-content: space-between;\n}\n.search {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: var(--size-15);\n  background-position: var(--size-12) 50%;\n}\n.search::placeholder {\n  font-size: var(--size-12);\n  opacity: 1;\n  color: hsl(var(--clr-light-hs), 75%);\n}\n.content_table-container {\n  padding-top: var(--size-32);\n}\n.content_table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.content_table td,\nth {\n  white-space: nowrap;\n  text-align: left;\n  border-bottom: 1px solid hsl(var(--clr-light-hs), 90%);\n}\n.content_table th {\n  font-weight: 400;\n  color: hsl(var(--clr-light-hs), 70%);\n  padding: var(--size-7) var(--size-16);\n  font-size: var(--size-12);\n}\n.content_table td {\n  padding: var(--size-14) var(--size-16);\n}\n.content_table th:nth-child(1) {\n  width: 8rem;\n}\n.content_table th:nth-child(2) {\n  width: 15rem;\n}\n.content_table td:nth-child(1) {\n  color: hsl(var(--clr-light-hs), 50%);\n  font-size: var(--size-14);\n}\n.content_table td:nth-child(3) {\n  color: hsl(var(--clr-light-hs), 50%);\n  font-size: var(--size-14);\n}\n@media all and (max-width: 520px) {\n  .content_header-container {\n    flex-direction: column;\n    align-items: center;\n    gap: var(--size-8);\n  }\n}\n@media all and (max-width: 700px) {\n  .content_table thead {\n    display: none;\n  }\n  .content_table tbody,\n  .content_table tr,\n  .content_table td {\n    display: block;\n    width: 100%;\n  }\n  .content_table tr {\n    margin-bottom: var(--size-32);\n  }\n  .content_table tr:nth-child(2n) {\n    background-color: hsl(var(--clr-light-hs), 95%);\n  }\n  .content_table td {\n    text-align: right;\n    position: relative;\n  }\n  .content_table td::before {\n    color: hsl(var(--clr-light-hs), 70%);\n    font-size: var(--size-12);\n    content: attr(data-label);\n    position: absolute;\n    left: var(--size-16);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"AAEA;EACE,0BAA0B;;EAE1B,6BAA6B;EAC7B,qBAAqB;EACrB,4BAA4B;;EAE5B,iCAAiC;;EAEjC,gEAAgE;;EAEhE,kCAAkC;EAClC,oEAAoE;EACpE,oEAAoE;EACpE,oEAAoE;;EAEpE,8BAA8B;;EAE9B,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;EACnB,mBAAmB;EACnB,oBAAoB;EACpB,kBAAkB;EAClB,oBAAoB;EACpB,mBAAmB;EACnB,oBAAoB;EACpB,eAAe;EACf,oBAAoB;EACpB,mBAAmB;EACnB,oBAAoB;EACpB,kBAAkB;EAClB,oBAAoB;EACpB,mBAAmB;EACnB,oBAAoB;EACpB,iBAAiB;EACjB,oBAAoB;EACpB,mBAAmB;EACnB,oBAAoB;EACpB,kBAAkB;EAClB,oBAAoB;EACpB,mBAAmB;EACnB,oBAAoB;EACpB,eAAe;EACf,iBAAiB;EACjB,oBAAoB;;EAEpB,mBAAmB;AACrB;;AAEA,YAAY;;AAEZ;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,sBAAsB;AACxB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;AACb;AACA;EACE,uBAAuB;AACzB;AACA;EACE,oCAAoC;AACtC;AACA;EACE,oCAAoC;AACtC;AACA;EACE,sCAAsC;AACxC;AACA;EACE,wCAAwC;AAC1C;AACA;EACE,+CAA+C;AACjD;AACA;EACE,+CAA+C;AACjD;AACA;EACE,iDAAiD;AACnD;AACA;EACE,oCAAoC;AACtC;AACA;EACE,oCAAoC;AACtC;AACA;EACE,oCAAoC;AACtC;AACA;EACE,sCAAsC;AACxC;AACA;EACE,yBAAyB;EACzB,qCAAqC;AACvC;AACA;EACE,iDAAiD;AACnD;AACA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,gDAAgD;AAClD;AACA;EACE,qBAAqB;AACvB;AACA;EACE;IACE,+CAA+C;EACjD;AACF;AACA,qBAAqB;;AAErB;EACE,4BAA4B;EAC5B,mBAAmB;AACrB;AACA;EACE,eAAe;AACjB;AACA;EACE,yBAAyB;EACzB,eAAe;EACf,sBAAsB;EACtB,oBAAoB;;EAEpB,+CAA+C;EAC/C,4BAA4B;AAC9B;;AAEA,oBAAoB;;AAEpB,mBAAmB;AACnB;EACE,+CAA+C;EAC/C,kBAAkB;EAClB,UAAU;EACV,wBAAwB;EACxB,uEAAuE;AACzE;AACA;EACE,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,oCAAoC;AACtC;AACA;EACE,uBAAuB;EACvB,iDAAiD;AACnD;AACA;EACE;IACE,sBAAsB;IACtB,mBAAmB;IACnB,mBAAmB;EACrB;AACF;;AAEA,YAAY;AACZ;EACE,+CAA+C;EAC/C,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,yDAAuD;EACvD,4BAA4B;EAC5B,+BAA+B;EAC/B,uCAAuC;AACzC;AACA;EACE,yBAAyB;EACzB,UAAU;EACV,oCAAoC;AACtC;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,WAAW;EACX,yBAAyB;AAC3B;AACA;;EAEE,mBAAmB;EACnB,gBAAgB;EAChB,sDAAsD;AACxD;AACA;EACE,gBAAgB;EAChB,oCAAoC;EACpC,qCAAqC;EACrC,yBAAyB;AAC3B;AACA;EACE,sCAAsC;AACxC;AACA;EACE,WAAW;AACb;AACA;EACE,YAAY;AACd;AACA;EACE,oCAAoC;EACpC,yBAAyB;AAC3B;AACA;EACE,oCAAoC;EACpC,yBAAyB;AAC3B;AACA;EACE;IACE,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;EACpB;AACF;AACA;EACE;IACE,aAAa;EACf;EACA;;;IAGE,cAAc;IACd,WAAW;EACb;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,+CAA+C;EACjD;EACA;IACE,iBAAiB;IACjB,kBAAkB;EACpB;EACA;IACE,oCAAoC;IACpC,yBAAyB;IACzB,yBAAyB;IACzB,kBAAkB;IAClB,oBAAoB;EACtB;AACF","sourcesContent":["@import url('./reset-styles.css');\n\n:root {\n  --clr-main: hsl(0, 0%, 0%);\n\n  --clr-light: hsl(0, 0%, 100%);\n  --clr-light-hs: 0, 0%;\n  --clr-light-hsl: 0, 0%, 100%;\n\n  --clr-accent-primary-hs: 195, 68%;\n\n  --clr-accent-primary-450: hsl(var(--clr-accent-primary-hs), 45%);\n\n  --clr-accent-secondary-hs: 85, 54%;\n  --clr-accent-secondary-400: hsl(var(--clr-accent-secondary-hs), 40%);\n  --clr-accent-secondary-500: hsl(var(--clr-accent-secondary-hs), 50%);\n  --clr-accent-secondary-600: hsl(var(--clr-accent-secondary-hs), 60%);\n\n  font-family: Arial, sans-serif;\n\n  --size-1: 0.0625rem;\n  --size-2: 0.125rem;\n  --size-3: 0.1875rem;\n  --size-4: 0.25rem;\n  --size-5: 0.3125rem;\n  --size-6: 0.375rem;\n  --size-7: 0.4375rem;\n  --size-8: 0.5rem;\n  --size-9: 0.5625rem;\n  --size-10: 0.625rem;\n  --size-11: 0.6875rem;\n  --size-12: 0.75rem;\n  --size-13: 0.8125rem;\n  --size-14: 0.875rem;\n  --size-15: 0.9375rem;\n  --size-16: 1rem;\n  --size-17: 1.0625rem;\n  --size-18: 1.125rem;\n  --size-19: 1.1875rem;\n  --size-20: 1.25rem;\n  --size-21: 1.3125rem;\n  --size-22: 1.375rem;\n  --size-23: 1.4375rem;\n  --size-24: 1.5rem;\n  --size-25: 1.5625rem;\n  --size-26: 1.625rem;\n  --size-27: 1.6875rem;\n  --size-28: 1.75rem;\n  --size-29: 1.8125rem;\n  --size-30: 1.875rem;\n  --size-31: 1.9375rem;\n  --size-32: 2rem;\n  --size-40: 2.5rem;\n  --size-45: 2.8125rem;\n\n  --size-50: 3.125rem;\n}\n\n/* UTILITY */\n\n.fs-12 {\n  font-size: var(--size-12);\n}\n.fs-14 {\n  font-size: var(--size-14);\n}\n.fs-16 {\n  font-size: var(--size-16);\n}\n.fs-17 {\n  font-size: var(--size-17);\n}\n.el-width-700 {\n  width: var(--size-700);\n}\n.el-width-800 {\n  width: var(--size-800);\n}\n.el-width-900 {\n  width: 4rem;\n}\n.el-width-1000 {\n  width: 5rem;\n}\n.text-light {\n  color: var(--clr-light);\n}\n.text-accent-primary-300 {\n  color: var(--clr-accent-primary-300);\n}\n.text-accent-primary-700 {\n  color: var(--clr-accent-primary-700);\n}\n.text-pass-through-500 {\n  color: hsla(var(--clr-light-hsl), 50%);\n}\n.bg-neutral-200 {\n  background-color: var(--clr-neutral-200);\n}\n.bg-accent-500 {\n  background-color: var(--clr-accent-primary-500);\n}\n.bg-accent-700 {\n  background-color: var(--clr-accent-primary-700);\n}\n.bg-accent-secondary-500 {\n  background-color: var(--clr-accent-secondary-500);\n}\n.padding-block-6 {\n  padding: var(--size-6) var(--size-6);\n}\n.padding-block-7 {\n  padding: var(--size-7) var(--size-7);\n}\n.padding-block-9 {\n  padding: var(--size-9) var(--size-9);\n}\n.padding-block-16 {\n  padding: var(--size-16) var(--size-16);\n}\n.btn-secondary {\n  font-size: var(--size-14);\n  padding: var(--size-6) var(--size-25);\n}\n.btn-secondary:hover {\n  background-color: var(--clr-accent-secondary-600);\n}\n.container {\n  --max-width: 1000px;\n  margin-inline: auto;\n  max-width: min(var(--max-width), (100% - 10rem));\n}\n.inline-block {\n  display: inline-block;\n}\n@media all and (max-width: 800px) {\n  .container {\n    max-width: min(var(--max-width), (100% - 2rem));\n  }\n}\n/* GENERIC ELEMENTS */\n\nbutton {\n  border-radius: var(--size-8);\n  white-space: nowrap;\n}\nbutton:hover {\n  cursor: pointer;\n}\ninput {\n  font-size: var(--size-18);\n  max-width: 100%;\n  padding: var(--size-2);\n  padding-left: 2.3rem;\n\n  border: 1px solid hsl(var(--clr-light-hs), 90%);\n  border-radius: var(--size-8);\n}\n\n/* GENERAL STYLING */\n\n/* PRIMARY HEADER */\n.primary-header {\n  background-color: var(--clr-accent-primary-450);\n  position: relative;\n  z-index: 1;\n  padding: var(--size-9) 0;\n  box-shadow: 0 var(--size-3) var(--size-5) hsl(var(--clr-light-hs), 85%);\n}\n.primary-header_container {\n  display: flex;\n  justify-content: space-between;\n}\n.logo {\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  gap: var(--size-6);\n}\n.filters-container {\n  display: flex;\n  align-items: center;\n  gap: var(--size-12);\n}\n.filters-container_list button {\n  background-color: transparent;\n}\n.filters-container_list button:hover {\n  color: var(--clr-accent-primary-900);\n}\n.filters-container_list .active {\n  color: var(--clr-light);\n  background-color: hsla(var(--clr-light-hsl), 0.1);\n}\n@media all and (max-width: 420px) {\n  .primary-header_container {\n    flex-direction: column;\n    gap: var(--size-18);\n    align-items: center;\n  }\n}\n\n/* CONTENT */\n.content_header {\n  background-color: hsl(var(--clr-light-hs), 97%);\n  padding: var(--size-17) 0;\n}\n.content_header-container {\n  display: flex;\n  justify-content: space-between;\n}\n.search {\n  background-image: url('../assets/magnifying-glass.svg');\n  background-repeat: no-repeat;\n  background-size: var(--size-15);\n  background-position: var(--size-12) 50%;\n}\n.search::placeholder {\n  font-size: var(--size-12);\n  opacity: 1;\n  color: hsl(var(--clr-light-hs), 75%);\n}\n.content_table-container {\n  padding-top: var(--size-32);\n}\n.content_table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.content_table td,\nth {\n  white-space: nowrap;\n  text-align: left;\n  border-bottom: 1px solid hsl(var(--clr-light-hs), 90%);\n}\n.content_table th {\n  font-weight: 400;\n  color: hsl(var(--clr-light-hs), 70%);\n  padding: var(--size-7) var(--size-16);\n  font-size: var(--size-12);\n}\n.content_table td {\n  padding: var(--size-14) var(--size-16);\n}\n.content_table th:nth-child(1) {\n  width: 8rem;\n}\n.content_table th:nth-child(2) {\n  width: 15rem;\n}\n.content_table td:nth-child(1) {\n  color: hsl(var(--clr-light-hs), 50%);\n  font-size: var(--size-14);\n}\n.content_table td:nth-child(3) {\n  color: hsl(var(--clr-light-hs), 50%);\n  font-size: var(--size-14);\n}\n@media all and (max-width: 520px) {\n  .content_header-container {\n    flex-direction: column;\n    align-items: center;\n    gap: var(--size-8);\n  }\n}\n@media all and (max-width: 700px) {\n  .content_table thead {\n    display: none;\n  }\n  .content_table tbody,\n  .content_table tr,\n  .content_table td {\n    display: block;\n    width: 100%;\n  }\n  .content_table tr {\n    margin-bottom: var(--size-32);\n  }\n  .content_table tr:nth-child(2n) {\n    background-color: hsl(var(--clr-light-hs), 95%);\n  }\n  .content_table td {\n    text-align: right;\n    position: relative;\n  }\n  .content_table td::before {\n    color: hsl(var(--clr-light-hs), 70%);\n    font-size: var(--size-12);\n    content: attr(data-label);\n    position: absolute;\n    left: var(--size-16);\n  }\n}\n"],"sourceRoot":""}]);
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
      name.textContent = user.name;
      id.textContent = user.id;
      email.textContent = user.email;
      name.setAttribute('data-label', 'Name');
      id.setAttribute('data-label', 'ID');
      email.setAttribute('data-label', 'Email');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGNBQWMsYUFBYSxPQUFPLFdBQVcsS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLGFBQWEsTUFBTSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGNBQWMsYUFBYSxhQUFhLE9BQU8sYUFBYSxhQUFhLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLFVBQVUsS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sWUFBWSxhQUFh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LENBQUMsRUFBRSxDQUFDOztJQUVkO0lBQ0EsTUFBTTJDLFNBQVMsR0FBR25CLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGFBQWEsQ0FBQztJQUN4RGtCLFNBQVMsQ0FBQ0MsS0FBSyxHQUFHLEVBQUU7SUFDcEIsTUFBTUMsT0FBTyxHQUFHaEMsUUFBUSxDQUFDYixVQUFVLEVBQUVELHFCQUFxQixDQUFDO0lBQzNENEMsU0FBUyxDQUFDRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdDLENBQUMsSUFBSztNQUN6QyxNQUFNMUIsS0FBSyxHQUFHMEIsQ0FBQyxDQUFDQyxNQUFNLENBQUNKLEtBQUs7TUFDNUIsSUFBSXhCLGFBQWEsQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7UUFDeEJ3QixPQUFPLENBQUN4QixLQUFLLENBQUM7TUFDaEIsQ0FBQyxNQUFNO1FBQ0w7UUFDQVYsT0FBTyxDQUFDQyxLQUFLLENBQ1gsMEZBQTBGLENBQzNGO01BQ0g7SUFDRixDQUFDLENBQUM7RUFDSixDQUFDO0VBQ0QsT0FBTztJQUFFOEI7RUFBSyxDQUFDO0FBQ2pCLENBQUMsRUFBRztBQUVKN0MsVUFBVSxDQUFDNkMsSUFBSSxFQUFFLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mZS10ZXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9mZS10ZXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9mZS10ZXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZmUtdGVzdC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzIiwid2VicGFjazovL2ZlLXRlc3QvLi9zcmMvc3R5bGVzL3Jlc2V0LXN0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vZmUtdGVzdC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzPzYzNDkiLCJ3ZWJwYWNrOi8vZmUtdGVzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9mZS10ZXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9mZS10ZXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2ZlLXRlc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZmUtdGVzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2ZlLXRlc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9mZS10ZXN0Ly4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9mZS10ZXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZlLXRlc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZmUtdGVzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmUtdGVzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2ZlLXRlc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mZS10ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmUtdGVzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9mZS10ZXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2ZlLXRlc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2ZlLXRlc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC1zdHlsZXMuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9tYWduaWZ5aW5nLWdsYXNzLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tY2xyLW1haW46IGhzbCgwLCAwJSwgMCUpO1xcblxcbiAgLS1jbHItbGlnaHQ6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICAtLWNsci1saWdodC1oczogMCwgMCU7XFxuICAtLWNsci1saWdodC1oc2w6IDAsIDAlLCAxMDAlO1xcblxcbiAgLS1jbHItYWNjZW50LXByaW1hcnktaHM6IDE5NSwgNjglO1xcblxcbiAgLS1jbHItYWNjZW50LXByaW1hcnktNDUwOiBoc2wodmFyKC0tY2xyLWFjY2VudC1wcmltYXJ5LWhzKSwgNDUlKTtcXG5cXG4gIC0tY2xyLWFjY2VudC1zZWNvbmRhcnktaHM6IDg1LCA1NCU7XFxuICAtLWNsci1hY2NlbnQtc2Vjb25kYXJ5LTQwMDogaHNsKHZhcigtLWNsci1hY2NlbnQtc2Vjb25kYXJ5LWhzKSwgNDAlKTtcXG4gIC0tY2xyLWFjY2VudC1zZWNvbmRhcnktNTAwOiBoc2wodmFyKC0tY2xyLWFjY2VudC1zZWNvbmRhcnktaHMpLCA1MCUpO1xcbiAgLS1jbHItYWNjZW50LXNlY29uZGFyeS02MDA6IGhzbCh2YXIoLS1jbHItYWNjZW50LXNlY29uZGFyeS1ocyksIDYwJSk7XFxuXFxuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFxuICAtLXNpemUtMTogMC4wNjI1cmVtO1xcbiAgLS1zaXplLTI6IDAuMTI1cmVtO1xcbiAgLS1zaXplLTM6IDAuMTg3NXJlbTtcXG4gIC0tc2l6ZS00OiAwLjI1cmVtO1xcbiAgLS1zaXplLTU6IDAuMzEyNXJlbTtcXG4gIC0tc2l6ZS02OiAwLjM3NXJlbTtcXG4gIC0tc2l6ZS03OiAwLjQzNzVyZW07XFxuICAtLXNpemUtODogMC41cmVtO1xcbiAgLS1zaXplLTk6IDAuNTYyNXJlbTtcXG4gIC0tc2l6ZS0xMDogMC42MjVyZW07XFxuICAtLXNpemUtMTE6IDAuNjg3NXJlbTtcXG4gIC0tc2l6ZS0xMjogMC43NXJlbTtcXG4gIC0tc2l6ZS0xMzogMC44MTI1cmVtO1xcbiAgLS1zaXplLTE0OiAwLjg3NXJlbTtcXG4gIC0tc2l6ZS0xNTogMC45Mzc1cmVtO1xcbiAgLS1zaXplLTE2OiAxcmVtO1xcbiAgLS1zaXplLTE3OiAxLjA2MjVyZW07XFxuICAtLXNpemUtMTg6IDEuMTI1cmVtO1xcbiAgLS1zaXplLTE5OiAxLjE4NzVyZW07XFxuICAtLXNpemUtMjA6IDEuMjVyZW07XFxuICAtLXNpemUtMjE6IDEuMzEyNXJlbTtcXG4gIC0tc2l6ZS0yMjogMS4zNzVyZW07XFxuICAtLXNpemUtMjM6IDEuNDM3NXJlbTtcXG4gIC0tc2l6ZS0yNDogMS41cmVtO1xcbiAgLS1zaXplLTI1OiAxLjU2MjVyZW07XFxuICAtLXNpemUtMjY6IDEuNjI1cmVtO1xcbiAgLS1zaXplLTI3OiAxLjY4NzVyZW07XFxuICAtLXNpemUtMjg6IDEuNzVyZW07XFxuICAtLXNpemUtMjk6IDEuODEyNXJlbTtcXG4gIC0tc2l6ZS0zMDogMS44NzVyZW07XFxuICAtLXNpemUtMzE6IDEuOTM3NXJlbTtcXG4gIC0tc2l6ZS0zMjogMnJlbTtcXG4gIC0tc2l6ZS00MDogMi41cmVtO1xcbiAgLS1zaXplLTQ1OiAyLjgxMjVyZW07XFxuXFxuICAtLXNpemUtNTA6IDMuMTI1cmVtO1xcbn1cXG5cXG4vKiBVVElMSVRZICovXFxuXFxuLmZzLTEyIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS0xMik7XFxufVxcbi5mcy0xNCB7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtMTQpO1xcbn1cXG4uZnMtMTYge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTE2KTtcXG59XFxuLmZzLTE3IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS0xNyk7XFxufVxcbi5lbC13aWR0aC03MDAge1xcbiAgd2lkdGg6IHZhcigtLXNpemUtNzAwKTtcXG59XFxuLmVsLXdpZHRoLTgwMCB7XFxuICB3aWR0aDogdmFyKC0tc2l6ZS04MDApO1xcbn1cXG4uZWwtd2lkdGgtOTAwIHtcXG4gIHdpZHRoOiA0cmVtO1xcbn1cXG4uZWwtd2lkdGgtMTAwMCB7XFxuICB3aWR0aDogNXJlbTtcXG59XFxuLnRleHQtbGlnaHQge1xcbiAgY29sb3I6IHZhcigtLWNsci1saWdodCk7XFxufVxcbi50ZXh0LWFjY2VudC1wcmltYXJ5LTMwMCB7XFxuICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudC1wcmltYXJ5LTMwMCk7XFxufVxcbi50ZXh0LWFjY2VudC1wcmltYXJ5LTcwMCB7XFxuICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudC1wcmltYXJ5LTcwMCk7XFxufVxcbi50ZXh0LXBhc3MtdGhyb3VnaC01MDAge1xcbiAgY29sb3I6IGhzbGEodmFyKC0tY2xyLWxpZ2h0LWhzbCksIDUwJSk7XFxufVxcbi5iZy1uZXV0cmFsLTIwMCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItbmV1dHJhbC0yMDApO1xcbn1cXG4uYmctYWNjZW50LTUwMCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50LXByaW1hcnktNTAwKTtcXG59XFxuLmJnLWFjY2VudC03MDAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudC1wcmltYXJ5LTcwMCk7XFxufVxcbi5iZy1hY2NlbnQtc2Vjb25kYXJ5LTUwMCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50LXNlY29uZGFyeS01MDApO1xcbn1cXG4ucGFkZGluZy1ibG9jay02IHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtNikgdmFyKC0tc2l6ZS02KTtcXG59XFxuLnBhZGRpbmctYmxvY2stNyB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTcpIHZhcigtLXNpemUtNyk7XFxufVxcbi5wYWRkaW5nLWJsb2NrLTkge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS05KSB2YXIoLS1zaXplLTkpO1xcbn1cXG4ucGFkZGluZy1ibG9jay0xNiB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTE2KSB2YXIoLS1zaXplLTE2KTtcXG59XFxuLmJ0bi1zZWNvbmRhcnkge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTE0KTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtNikgdmFyKC0tc2l6ZS0yNSk7XFxufVxcbi5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQtc2Vjb25kYXJ5LTYwMCk7XFxufVxcbi5jb250YWluZXIge1xcbiAgLS1tYXgtd2lkdGg6IDEwMDBweDtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBtYXgtd2lkdGg6IG1pbih2YXIoLS1tYXgtd2lkdGgpLCAoMTAwJSAtIDEwcmVtKSk7XFxufVxcbi5pbmxpbmUtYmxvY2sge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogbWluKHZhcigtLW1heC13aWR0aCksICgxMDAlIC0gMnJlbSkpO1xcbiAgfVxcbn1cXG4vKiBHRU5FUklDIEVMRU1FTlRTICovXFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNpemUtOCk7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5pbnB1dCB7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtMTgpO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS0yKTtcXG4gIHBhZGRpbmctbGVmdDogMi4zcmVtO1xcblxcbiAgYm9yZGVyOiAxcHggc29saWQgaHNsKHZhcigtLWNsci1saWdodC1ocyksIDkwJSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zaXplLTgpO1xcbn1cXG5cXG4vKiBHRU5FUkFMIFNUWUxJTkcgKi9cXG5cXG4vKiBQUklNQVJZIEhFQURFUiAqL1xcbi5wcmltYXJ5LWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50LXByaW1hcnktNDUwKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTkpIDA7XFxuICBib3gtc2hhZG93OiAwIHZhcigtLXNpemUtMykgdmFyKC0tc2l6ZS01KSBoc2wodmFyKC0tY2xyLWxpZ2h0LWhzKSwgODUlKTtcXG59XFxuLnByaW1hcnktaGVhZGVyX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubG9nbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBnYXA6IHZhcigtLXNpemUtNik7XFxufVxcbi5maWx0ZXJzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogdmFyKC0tc2l6ZS0xMik7XFxufVxcbi5maWx0ZXJzLWNvbnRhaW5lcl9saXN0IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLmZpbHRlcnMtY29udGFpbmVyX2xpc3QgYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jbHItYWNjZW50LXByaW1hcnktOTAwKTtcXG59XFxuLmZpbHRlcnMtY29udGFpbmVyX2xpc3QgLmFjdGl2ZSB7XFxuICBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEodmFyKC0tY2xyLWxpZ2h0LWhzbCksIDAuMSk7XFxufVxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XFxuICAucHJpbWFyeS1oZWFkZXJfY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiB2YXIoLS1zaXplLTE4KTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuLyogQ09OVEVOVCAqL1xcbi5jb250ZW50X2hlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2wodmFyKC0tY2xyLWxpZ2h0LWhzKSwgOTclKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtMTcpIDA7XFxufVxcbi5jb250ZW50X2hlYWRlci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnNlYXJjaCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogdmFyKC0tc2l6ZS0xNSk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB2YXIoLS1zaXplLTEyKSA1MCU7XFxufVxcbi5zZWFyY2g6OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS0xMik7XFxuICBvcGFjaXR5OiAxO1xcbiAgY29sb3I6IGhzbCh2YXIoLS1jbHItbGlnaHQtaHMpLCA3NSUpO1xcbn1cXG4uY29udGVudF90YWJsZS1jb250YWluZXIge1xcbiAgcGFkZGluZy10b3A6IHZhcigtLXNpemUtMzIpO1xcbn1cXG4uY29udGVudF90YWJsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcbi5jb250ZW50X3RhYmxlIHRkLFxcbnRoIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGhzbCh2YXIoLS1jbHItbGlnaHQtaHMpLCA5MCUpO1xcbn1cXG4uY29udGVudF90YWJsZSB0aCB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6IGhzbCh2YXIoLS1jbHItbGlnaHQtaHMpLCA3MCUpO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS03KSB2YXIoLS1zaXplLTE2KTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS0xMik7XFxufVxcbi5jb250ZW50X3RhYmxlIHRkIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtMTQpIHZhcigtLXNpemUtMTYpO1xcbn1cXG4uY29udGVudF90YWJsZSB0aDpudGgtY2hpbGQoMSkge1xcbiAgd2lkdGg6IDhyZW07XFxufVxcbi5jb250ZW50X3RhYmxlIHRoOm50aC1jaGlsZCgyKSB7XFxuICB3aWR0aDogMTVyZW07XFxufVxcbi5jb250ZW50X3RhYmxlIHRkOm50aC1jaGlsZCgxKSB7XFxuICBjb2xvcjogaHNsKHZhcigtLWNsci1saWdodC1ocyksIDUwJSk7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtMTQpO1xcbn1cXG4uY29udGVudF90YWJsZSB0ZDpudGgtY2hpbGQoMykge1xcbiAgY29sb3I6IGhzbCh2YXIoLS1jbHItbGlnaHQtaHMpLCA1MCUpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTE0KTtcXG59XFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTIwcHgpIHtcXG4gIC5jb250ZW50X2hlYWRlci1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IHZhcigtLXNpemUtOCk7XFxuICB9XFxufVxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAuY29udGVudF90YWJsZSB0aGVhZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAuY29udGVudF90YWJsZSB0Ym9keSxcXG4gIC5jb250ZW50X3RhYmxlIHRyLFxcbiAgLmNvbnRlbnRfdGFibGUgdGQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAuY29udGVudF90YWJsZSB0ciB7XFxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNpemUtMzIpO1xcbiAgfVxcbiAgLmNvbnRlbnRfdGFibGUgdHI6bnRoLWNoaWxkKDJuKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCh2YXIoLS1jbHItbGlnaHQtaHMpLCA5NSUpO1xcbiAgfVxcbiAgLmNvbnRlbnRfdGFibGUgdGQge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcbiAgLmNvbnRlbnRfdGFibGUgdGQ6OmJlZm9yZSB7XFxuICAgIGNvbG9yOiBoc2wodmFyKC0tY2xyLWxpZ2h0LWhzKSwgNzAlKTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1zaXplLTEyKTtcXG4gICAgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiB2YXIoLS1zaXplLTE2KTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSwwQkFBMEI7O0VBRTFCLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsNEJBQTRCOztFQUU1QixpQ0FBaUM7O0VBRWpDLGdFQUFnRTs7RUFFaEUsa0NBQWtDO0VBQ2xDLG9FQUFvRTtFQUNwRSxvRUFBb0U7RUFDcEUsb0VBQW9FOztFQUVwRSw4QkFBOEI7O0VBRTlCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtC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bUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixzREFBc0Q7QUFDeEQ7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixvQ0FBb0M7RUFDcEMscUNBQXFDO0VBQ3JDLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBOzs7SUFHRSxjQUFjO0lBQ2QsV0FBVztFQUNiO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLCtDQUErQztFQUNqRDtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCcuL3Jlc2V0LXN0eWxlcy5jc3MnKTtcXG5cXG46cm9vdCB7XFxuICAtLWNsci1tYWluOiBoc2woMCwgMCUsIDAlKTtcXG5cXG4gIC0tY2xyLWxpZ2h0OiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgLS1jbHItbGlnaHQtaHM6IDAsIDAlO1xcbiAgLS1jbHItbGlnaHQtaHNsOiAwLCAwJSwgMTAwJTtcXG5cXG4gIC0tY2xyLWFjY2VudC1wcmltYXJ5LWhzOiAxOTUsIDY4JTtcXG5cXG4gIC0tY2xyLWFjY2VudC1wcmltYXJ5LTQ1MDogaHNsKHZhcigtLWNsci1hY2NlbnQtcHJpbWFyeS1ocyksIDQ1JSk7XFxuXFxuICAtLWNsci1hY2NlbnQtc2Vjb25kYXJ5LWhzOiA4NSwgNTQlO1xcbiAgLS1jbHItYWNjZW50LXNlY29uZGFyeS00MDA6IGhzbCh2YXIoLS1jbHItYWNjZW50LXNlY29uZGFyeS1ocyksIDQwJSk7XFxuICAtLWNsci1hY2NlbnQtc2Vjb25kYXJ5LTUwMDogaHNsKHZhcigtLWNsci1hY2NlbnQtc2Vjb25kYXJ5LWhzKSwgNTAlKTtcXG4gIC0tY2xyLWFjY2VudC1zZWNvbmRhcnktNjAwOiBoc2wodmFyKC0tY2xyLWFjY2VudC1zZWNvbmRhcnktaHMpLCA2MCUpO1xcblxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcblxcbiAgLS1zaXplLTE6IDAuMDYyNXJlbTtcXG4gIC0tc2l6ZS0yOiAwLjEyNXJlbTtcXG4gIC0tc2l6ZS0zOiAwLjE4NzVyZW07XFxuICAtLXNpemUtNDogMC4yNXJlbTtcXG4gIC0tc2l6ZS01OiAwLjMxMjVyZW07XFxuICAtLXNpemUtNjogMC4zNzVyZW07XFxuICAtLXNpemUtNzogMC40Mzc1cmVtO1xcbiAgLS1zaXplLTg6IDAuNXJlbTtcXG4gIC0tc2l6ZS05OiAwLjU2MjVyZW07XFxuICAtLXNpemUtMTA6IDAuNjI1cmVtO1xcbiAgLS1zaXplLTExOiAwLjY4NzVyZW07XFxuICAtLXNpemUtMTI6IDAuNzVyZW07XFxuICAtLXNpemUtMTM6IDAuODEyNXJlbTtcXG4gIC0tc2l6ZS0xNDogMC44NzVyZW07XFxuICAtLXNpemUtMTU6IDAuOTM3NXJlbTtcXG4gIC0tc2l6ZS0xNjogMXJlbTtcXG4gIC0tc2l6ZS0xNzogMS4wNjI1cmVtO1xcbiAgLS1zaXplLTE4OiAxLjEyNXJlbTtcXG4gIC0tc2l6ZS0xOTogMS4xODc1cmVtO1xcbiAgLS1zaXplLTIwOiAxLjI1cmVtO1xcbiAgLS1zaXplLTIxOiAxLjMxMjVyZW07XFxuICAtLXNpemUtMjI6IDEuMzc1cmVtO1xcbiAgLS1zaXplLTIzOiAxLjQzNzVyZW07XFxuICAtLXNpemUtMjQ6IDEuNXJlbTtcXG4gIC0tc2l6ZS0yNTogMS41NjI1cmVtO1xcbiAgLS1zaXplLTI2OiAxLjYyNXJlbTtcXG4gIC0tc2l6ZS0yNzogMS42ODc1cmVtO1xcbiAgLS1zaXplLTI4OiAxLjc1cmVtO1xcbiAgLS1zaXplLTI5OiAxLjgxMjVyZW07XFxuICAtLXNpemUtMzA6IDEuODc1cmVtO1xcbiAgLS1zaXplLTMxOiAxLjkzNzVyZW07XFxuICAtLXNpemUtMzI6IDJyZW07XFxuICAtLXNpemUtNDA6IDIuNXJlbTtcXG4gIC0tc2l6ZS00NTogMi44MTI1cmVtO1xcblxcbiAgLS1zaXplLTUwOiAzLjEyNXJlbTtcXG59XFxuXFxuLyogVVRJTElUWSAqL1xcblxcbi5mcy0xMiB7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtMTIpO1xcbn1cXG4uZnMtMTQge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTE0KTtcXG59XFxuLmZzLTE2IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS0xNik7XFxufVxcbi5mcy0xNyB7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtMTcpO1xcbn1cXG4uZWwtd2lkdGgtNzAwIHtcXG4gIHdpZHRoOiB2YXIoLS1zaXplLTcwMCk7XFxufVxcbi5lbC13aWR0aC04MDAge1xcbiAgd2lkdGg6IHZhcigtLXNpemUtODAwKTtcXG59XFxuLmVsLXdpZHRoLTkwMCB7XFxuICB3aWR0aDogNHJlbTtcXG59XFxuLmVsLXdpZHRoLTEwMDAge1xcbiAgd2lkdGg6IDVyZW07XFxufVxcbi50ZXh0LWxpZ2h0IHtcXG4gIGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcbn1cXG4udGV4dC1hY2NlbnQtcHJpbWFyeS0zMDAge1xcbiAgY29sb3I6IHZhcigtLWNsci1hY2NlbnQtcHJpbWFyeS0zMDApO1xcbn1cXG4udGV4dC1hY2NlbnQtcHJpbWFyeS03MDAge1xcbiAgY29sb3I6IHZhcigtLWNsci1hY2NlbnQtcHJpbWFyeS03MDApO1xcbn1cXG4udGV4dC1wYXNzLXRocm91Z2gtNTAwIHtcXG4gIGNvbG9yOiBoc2xhKHZhcigtLWNsci1saWdodC1oc2wpLCA1MCUpO1xcbn1cXG4uYmctbmV1dHJhbC0yMDAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLW5ldXRyYWwtMjAwKTtcXG59XFxuLmJnLWFjY2VudC01MDAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudC1wcmltYXJ5LTUwMCk7XFxufVxcbi5iZy1hY2NlbnQtNzAwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQtcHJpbWFyeS03MDApO1xcbn1cXG4uYmctYWNjZW50LXNlY29uZGFyeS01MDAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudC1zZWNvbmRhcnktNTAwKTtcXG59XFxuLnBhZGRpbmctYmxvY2stNiB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTYpIHZhcigtLXNpemUtNik7XFxufVxcbi5wYWRkaW5nLWJsb2NrLTcge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS03KSB2YXIoLS1zaXplLTcpO1xcbn1cXG4ucGFkZGluZy1ibG9jay05IHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtOSkgdmFyKC0tc2l6ZS05KTtcXG59XFxuLnBhZGRpbmctYmxvY2stMTYge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS0xNikgdmFyKC0tc2l6ZS0xNik7XFxufVxcbi5idG4tc2Vjb25kYXJ5IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS0xNCk7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTYpIHZhcigtLXNpemUtMjUpO1xcbn1cXG4uYnRuLXNlY29uZGFyeTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50LXNlY29uZGFyeS02MDApO1xcbn1cXG4uY29udGFpbmVyIHtcXG4gIC0tbWF4LXdpZHRoOiAxMDAwcHg7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiBtaW4odmFyKC0tbWF4LXdpZHRoKSwgKDEwMCUgLSAxMHJlbSkpO1xcbn1cXG4uaW5saW5lLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IG1pbih2YXIoLS1tYXgtd2lkdGgpLCAoMTAwJSAtIDJyZW0pKTtcXG4gIH1cXG59XFxuLyogR0VORVJJQyBFTEVNRU5UUyAqL1xcblxcbmJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zaXplLTgpO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuaW5wdXQge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTE4KTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtMik7XFxuICBwYWRkaW5nLWxlZnQ6IDIuM3JlbTtcXG5cXG4gIGJvcmRlcjogMXB4IHNvbGlkIGhzbCh2YXIoLS1jbHItbGlnaHQtaHMpLCA5MCUpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2l6ZS04KTtcXG59XFxuXFxuLyogR0VORVJBTCBTVFlMSU5HICovXFxuXFxuLyogUFJJTUFSWSBIRUFERVIgKi9cXG4ucHJpbWFyeS1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudC1wcmltYXJ5LTQ1MCk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS05KSAwO1xcbiAgYm94LXNoYWRvdzogMCB2YXIoLS1zaXplLTMpIHZhcigtLXNpemUtNSkgaHNsKHZhcigtLWNsci1saWdodC1ocyksIDg1JSk7XFxufVxcbi5wcmltYXJ5LWhlYWRlcl9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmxvZ28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgZ2FwOiB2YXIoLS1zaXplLTYpO1xcbn1cXG4uZmlsdGVycy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IHZhcigtLXNpemUtMTIpO1xcbn1cXG4uZmlsdGVycy1jb250YWluZXJfbGlzdCBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5maWx0ZXJzLWNvbnRhaW5lcl9saXN0IGJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudC1wcmltYXJ5LTkwMCk7XFxufVxcbi5maWx0ZXJzLWNvbnRhaW5lcl9saXN0IC5hY3RpdmUge1xcbiAgY29sb3I6IHZhcigtLWNsci1saWdodCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLWNsci1saWdodC1oc2wpLCAwLjEpO1xcbn1cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xcbiAgLnByaW1hcnktaGVhZGVyX2NvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogdmFyKC0tc2l6ZS0xOCk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxufVxcblxcbi8qIENPTlRFTlQgKi9cXG4uY29udGVudF9oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKHZhcigtLWNsci1saWdodC1ocyksIDk3JSk7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTE3KSAwO1xcbn1cXG4uY29udGVudF9oZWFkZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5zZWFyY2gge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvbWFnbmlmeWluZy1nbGFzcy5zdmcnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IHZhcigtLXNpemUtMTUpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdmFyKC0tc2l6ZS0xMikgNTAlO1xcbn1cXG4uc2VhcmNoOjpwbGFjZWhvbGRlciB7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtMTIpO1xcbiAgb3BhY2l0eTogMTtcXG4gIGNvbG9yOiBoc2wodmFyKC0tY2xyLWxpZ2h0LWhzKSwgNzUlKTtcXG59XFxuLmNvbnRlbnRfdGFibGUtY29udGFpbmVyIHtcXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1zaXplLTMyKTtcXG59XFxuLmNvbnRlbnRfdGFibGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG4uY29udGVudF90YWJsZSB0ZCxcXG50aCB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBoc2wodmFyKC0tY2xyLWxpZ2h0LWhzKSwgOTAlKTtcXG59XFxuLmNvbnRlbnRfdGFibGUgdGgge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiBoc2wodmFyKC0tY2xyLWxpZ2h0LWhzKSwgNzAlKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtNykgdmFyKC0tc2l6ZS0xNik7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtMTIpO1xcbn1cXG4uY29udGVudF90YWJsZSB0ZCB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTE0KSB2YXIoLS1zaXplLTE2KTtcXG59XFxuLmNvbnRlbnRfdGFibGUgdGg6bnRoLWNoaWxkKDEpIHtcXG4gIHdpZHRoOiA4cmVtO1xcbn1cXG4uY29udGVudF90YWJsZSB0aDpudGgtY2hpbGQoMikge1xcbiAgd2lkdGg6IDE1cmVtO1xcbn1cXG4uY29udGVudF90YWJsZSB0ZDpudGgtY2hpbGQoMSkge1xcbiAgY29sb3I6IGhzbCh2YXIoLS1jbHItbGlnaHQtaHMpLCA1MCUpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTE0KTtcXG59XFxuLmNvbnRlbnRfdGFibGUgdGQ6bnRoLWNoaWxkKDMpIHtcXG4gIGNvbG9yOiBoc2wodmFyKC0tY2xyLWxpZ2h0LWhzKSwgNTAlKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS0xNCk7XFxufVxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDUyMHB4KSB7XFxuICAuY29udGVudF9oZWFkZXItY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiB2YXIoLS1zaXplLTgpO1xcbiAgfVxcbn1cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLmNvbnRlbnRfdGFibGUgdGhlYWQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmNvbnRlbnRfdGFibGUgdGJvZHksXFxuICAuY29udGVudF90YWJsZSB0cixcXG4gIC5jb250ZW50X3RhYmxlIHRkIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLmNvbnRlbnRfdGFibGUgdHIge1xcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zaXplLTMyKTtcXG4gIH1cXG4gIC5jb250ZW50X3RhYmxlIHRyOm50aC1jaGlsZCgybikge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2wodmFyKC0tY2xyLWxpZ2h0LWhzKSwgOTUlKTtcXG4gIH1cXG4gIC5jb250ZW50X3RhYmxlIHRkIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG4gIC5jb250ZW50X3RhYmxlIHRkOjpiZWZvcmUge1xcbiAgICBjb2xvcjogaHNsKHZhcigtLWNsci1saWdodC1ocyksIDcwJSk7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS0xMik7XFxuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogdmFyKC0tc2l6ZS0xNik7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEN1c3RvbSBydWxlcyAqL1xcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qIEJveCBzaXppbmcgcnVsZXMgKi9cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXFxuYm9keSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5wLFxcbmZpZ3VyZSxcXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmRkIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyogUmVtb3ZlIGxpc3Qgc3R5bGVzIG9uIHVsLCBvbCBlbGVtZW50cyB3aXRoIGEgbGlzdCByb2xlLCB3aGljaCBzdWdnZXN0cyBkZWZhdWx0IHN0eWxpbmcgd2lsbCBiZSByZW1vdmVkICovXFxudWxbcm9sZT0nbGlzdCddLFxcbm9sW3JvbGU9J2xpc3QnXSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBTZXQgY29yZSByb290IGRlZmF1bHRzICovXFxuaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xcbmE6bm90KFtjbGFzc10pIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcXG59XFxuXFxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcbmltZyxcXG5waWN0dXJlIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbi8qIFJlbW92ZSBhbGwgYW5pbWF0aW9ucywgdHJhbnNpdGlvbnMgYW5kIHNtb290aCBzY3JvbGwgZm9yIHBlb3BsZSB0aGF0IHByZWZlciBub3QgdG8gc2VlIHRoZW0gKi9cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XFxuICB9XFxuXFxuICAqLFxcbiAgKjo6YmVmb3JlLFxcbiAgKjo6YWZ0ZXIge1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9yZXNldC1zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGlCQUFpQjtBQUNqQjtFQUNFLFlBQVk7QUFDZDs7QUFFQSxxQkFBcUI7QUFDckI7OztFQUdFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBLDBCQUEwQjtBQUMxQjs7Ozs7Ozs7OztFQVVFLFNBQVM7QUFDWDs7QUFFQSwyR0FBMkc7QUFDM0c7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjs7QUFFQSwwREFBMEQ7QUFDMUQ7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUEsb0NBQW9DO0FBQ3BDOztFQUVFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBLHlDQUF5QztBQUN6Qzs7OztFQUlFLGFBQWE7QUFDZjs7QUFFQSxnR0FBZ0c7QUFDaEc7RUFDRTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTs7O0lBR0UscUNBQXFDO0lBQ3JDLHVDQUF1QztJQUN2QyxzQ0FBc0M7SUFDdEMsZ0NBQWdDO0VBQ2xDO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQ3VzdG9tIHJ1bGVzICovXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLyogQm94IHNpemluZyBydWxlcyAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbnAsXFxuZmlndXJlLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBSZW1vdmUgbGlzdCBzdHlsZXMgb24gdWwsIG9sIGVsZW1lbnRzIHdpdGggYSBsaXN0IHJvbGUsIHdoaWNoIHN1Z2dlc3RzIGRlZmF1bHQgc3R5bGluZyB3aWxsIGJlIHJlbW92ZWQgKi9cXG51bFtyb2xlPSdsaXN0J10sXFxub2xbcm9sZT0nbGlzdCddIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIFNldCBjb3JlIHJvb3QgZGVmYXVsdHMgKi9cXG5odG1sOmZvY3VzLXdpdGhpbiB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi8qIEEgZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIGEgY2xhc3MgZ2V0IGRlZmF1bHQgc3R5bGVzICovXFxuYTpub3QoW2NsYXNzXSkge1xcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xcbn1cXG5cXG4vKiBNYWtlIGltYWdlcyBlYXNpZXIgdG8gd29yayB3aXRoICovXFxuaW1nLFxcbnBpY3R1cmUge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIEluaGVyaXQgZm9udHMgZm9yIGlucHV0cyBhbmQgYnV0dG9ucyAqL1xcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuLyogUmVtb3ZlIGFsbCBhbmltYXRpb25zLCB0cmFuc2l0aW9ucyBhbmQgc21vb3RoIHNjcm9sbCBmb3IgcGVvcGxlIHRoYXQgcHJlZmVyIG5vdCB0byBzZWUgdGhlbSAqL1xcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxuICBodG1sOmZvY3VzLXdpdGhpbiB7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcXG4gIH1cXG5cXG4gICosXFxuICAqOjpiZWZvcmUsXFxuICAqOjphZnRlciB7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgQVBJX1VSTCA9ICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20nO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguY3NzJztcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XG5cbmNvbnN0IFVzZXJTZWFyY2ggPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgdXNlckxpc3QgPSBudWxsO1xuICBjb25zdCBTRUFSQ0hfVElNRU9VVF9BTU9VTlQgPSA2MDA7XG5cbiAgY29uc3QgZmV0Y2hVc2VycyA9IGFzeW5jIChzZWFyY2hTdHIpID0+IHtcbiAgICB1c2VyTGlzdCA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgIC8vIFRPRE86IHN0YXJ0IGxvYWRpbmcgaWNvblxuICAgICAgLy8gc2hvdWxkIHBhZ2luYXRlIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vdXNlcnM/bmFtZV9saWtlPSR7c2VhcmNoU3RyfWApO1xuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIGVycm9yIG9jY3VyZWQgKCR7cmVzcG9uc2Uuc3RhdHVzfSlgKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc3BvbnNlSlNPTiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHVzZXJMaXN0ID0gcmVzcG9uc2VKU09OO1xuICAgICAgdXBkYXRlVUkoKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIFRPRE86IHNob3cgdXNlciBlcnJvciBtZXNzYWdlXG5cbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgLy8gVE9ETzogc3RvcCBsb2FkaW5nIGljb25cbiAgICB9XG4gIH07XG4gIGNvbnN0IGRlYm91bmNlID0gKGNhbGxiYWNrLCBkZWxheSA9IDUwMCkgPT4ge1xuICAgIGxldCB0aW1lciA9IG51bGw7XG5cbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjYWxsYmFjayguLi5hcmdzKTtcbiAgICAgIH0sIGRlbGF5KTtcbiAgICB9O1xuICB9O1xuICBjb25zdCB2YWxpZGF0ZUlucHV0ID0gKGlucHV0KSA9PiB7XG4gICAgLy8gYWxwaGFiZXRpYyBjaGFyYWN0ZXJzLCB3aGl0ZXNwYWNlIGFuZCBlbXB0eSBzdHJpbmdcbiAgICBjb25zdCByZWdleCA9IC9eW2EtekEtWlxcc10qJC87XG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QoaW5wdXQpO1xuICB9O1xuICBjb25zdCB1cGRhdGVVSSA9ICgpID0+IHtcbiAgICBjb25zdCB0YWJsZUJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudF90YWJsZS1ib2R5Jyk7XG5cbiAgICBjb25zdCByZXNldExpc3RDb250YWluZXIgPSAoKSA9PiB7XG4gICAgICB3aGlsZSAodGFibGVCb2R5LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGFibGVCb2R5LnJlbW92ZUNoaWxkKHRhYmxlQm9keS5sYXN0Q2hpbGQpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgY3JlYXRlUm93Tm9kZSA9ICh1c2VyKSA9PiB7XG4gICAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG5cbiAgICAgIGNvbnN0IG5hbWUgPSB0ZC5jbG9uZU5vZGUoKTtcbiAgICAgIGNvbnN0IGlkID0gdGQuY2xvbmVOb2RlKCk7XG4gICAgICBjb25zdCBlbWFpbCA9IHRkLmNsb25lTm9kZSgpO1xuXG4gICAgICBuYW1lLnRleHRDb250ZW50ID0gdXNlci5uYW1lO1xuICAgICAgaWQudGV4dENvbnRlbnQgPSB1c2VyLmlkO1xuICAgICAgZW1haWwudGV4dENvbnRlbnQgPSB1c2VyLmVtYWlsO1xuXG4gICAgICBuYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS1sYWJlbCcsICdOYW1lJyk7XG4gICAgICBpZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGFiZWwnLCAnSUQnKTtcbiAgICAgIGVtYWlsLnNldEF0dHJpYnV0ZSgnZGF0YS1sYWJlbCcsICdFbWFpbCcpO1xuXG4gICAgICB0ci5hcHBlbmQoaWQsIG5hbWUsIGVtYWlsKTtcbiAgICAgIHJldHVybiB0cjtcbiAgICB9O1xuICAgIHJlc2V0TGlzdENvbnRhaW5lcigpO1xuICAgIGNvbnN0IHJvd05vZGVzID0gdXNlckxpc3QubWFwKCh1c2VyKSA9PiBjcmVhdGVSb3dOb2RlKHVzZXIpKTtcbiAgICB0YWJsZUJvZHkuYXBwZW5kKC4uLnJvd05vZGVzKTtcbiAgfTtcbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICAvLyBkaXNwbGF5IGFsbCBpdGVtc1xuICAgIGZldGNoVXNlcnMoJycpO1xuXG4gICAgLy8gZW5hYmxlIGl0ZW0gc2VhcmNoXG4gICAgY29uc3Qgc2VhcmNoQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3Qtc2VhcmNoJyk7XG4gICAgc2VhcmNoQm94LnZhbHVlID0gJyc7XG4gICAgY29uc3Qgb25JbnB1dCA9IGRlYm91bmNlKGZldGNoVXNlcnMsIFNFQVJDSF9USU1FT1VUX0FNT1VOVCk7XG4gICAgc2VhcmNoQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgIGNvbnN0IGlucHV0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBpZiAodmFsaWRhdGVJbnB1dChpbnB1dCkpIHtcbiAgICAgICAgb25JbnB1dChpbnB1dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUT0RPOiBzaG93IHVzZXIgZXJyb3IgbWVzc2FnZVxuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICdPbmx5IGFscGhhYmV0aWMgY2hhcmFjdGVycywgd2hpdGVzcGFjZXMgYW5kIGVtcHR5IHN0cmluZ3MgYXJlIGFsbG93ZWQgaW4gdGhlIGlucHV0IGZpZWxkJyxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIHsgaW5pdCB9O1xufSkoKTtcblxuVXNlclNlYXJjaC5pbml0KCk7XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiaWQiLCJfayIsInB1c2giLCJ1cmwiLCJvcHRpb25zIiwiU3RyaW5nIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJ0ZXN0Iiwic2xpY2UiLCJoYXNoIiwibmVlZFF1b3RlcyIsInJlcGxhY2UiLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwiQVBJX1VSTCIsIlVzZXJTZWFyY2giLCJ1c2VyTGlzdCIsIlNFQVJDSF9USU1FT1VUX0FNT1VOVCIsImZldGNoVXNlcnMiLCJzZWFyY2hTdHIiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsInN0YXR1cyIsInJlc3BvbnNlSlNPTiIsImpzb24iLCJ1cGRhdGVVSSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImRlYm91bmNlIiwiY2FsbGJhY2siLCJkZWxheSIsInRpbWVyIiwiYXJncyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJ2YWxpZGF0ZUlucHV0IiwiaW5wdXQiLCJyZWdleCIsInRhYmxlQm9keSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZXNldExpc3RDb250YWluZXIiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJsYXN0Q2hpbGQiLCJjcmVhdGVSb3dOb2RlIiwidXNlciIsInRyIiwiY3JlYXRlRWxlbWVudCIsInRkIiwibmFtZSIsImNsb25lTm9kZSIsImVtYWlsIiwidGV4dENvbnRlbnQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmQiLCJyb3dOb2RlcyIsImluaXQiLCJzZWFyY2hCb3giLCJ2YWx1ZSIsIm9uSW5wdXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=