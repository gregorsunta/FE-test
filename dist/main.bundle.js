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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --clr-main: hsl(0, 0%, 0%);\n\n  --clr-light: hsl(0, 0%, 100%);\n  --clr-light-hs: 0, 0%;\n  --clr-light-hsl: 0, 0%, 100%;\n\n  --clr-accent-primary-hs: 195, 68%;\n\n  --clr-accent-primary-450: hsl(var(--clr-accent-primary-hs), 45%);\n\n  --clr-accent-secondary-hs: 85, 54%;\n  --clr-accent-secondary-400: hsl(var(--clr-accent-secondary-hs), 40%);\n  --clr-accent-secondary-500: hsl(var(--clr-accent-secondary-hs), 50%);\n  --clr-accent-secondary-600: hsl(var(--clr-accent-secondary-hs), 60%);\n\n  font-family: Arial, sans-serif;\n\n  --size-1: 0.0625rem;\n  --size-2: 0.125rem;\n  --size-3: 0.1875rem;\n  --size-4: 0.25rem;\n  --size-5: 0.3125rem;\n  --size-6: 0.375rem;\n  --size-7: 0.4375rem;\n  --size-8: 0.5rem;\n  --size-9: 0.5625rem;\n  --size-10: 0.625rem;\n  --size-11: 0.6875rem;\n  --size-12: 0.75rem;\n  --size-13: 0.8125rem;\n  --size-14: 0.875rem;\n  --size-15: 0.9375rem;\n  --size-16: 1rem;\n  --size-17: 1.0625rem;\n  --size-18: 1.125rem;\n  --size-19: 1.1875rem;\n  --size-20: 1.25rem;\n  --size-21: 1.3125rem;\n  --size-22: 1.375rem;\n  --size-23: 1.4375rem;\n  --size-24: 1.5rem;\n  --size-25: 1.5625rem;\n  --size-26: 1.625rem;\n  --size-27: 1.6875rem;\n  --size-28: 1.75rem;\n  --size-29: 1.8125rem;\n  --size-30: 1.875rem;\n  --size-31: 1.9375rem;\n  --size-32: 2rem;\n  --size-40: 2.5rem;\n  --size-45: 2.8125rem;\n\n  --size-50: 3.125rem;\n}\n\n/* UTILITY */\n\n.fs-12 {\n  font-size: var(--size-12);\n}\n.fs-14 {\n  font-size: var(--size-14);\n}\n.fs-16 {\n  font-size: var(--size-16);\n}\n.fs-17 {\n  font-size: var(--size-17);\n}\n.el-width-700 {\n  width: var(--size-700);\n}\n.el-width-800 {\n  width: var(--size-800);\n}\n.el-width-900 {\n  width: 4rem;\n}\n.el-width-1000 {\n  width: 5rem;\n}\n.text-light {\n  color: var(--clr-light);\n}\n.text-accent-primary-300 {\n  color: var(--clr-accent-primary-300);\n}\n.text-accent-primary-700 {\n  color: var(--clr-accent-primary-700);\n}\n.text-pass-through-500 {\n  color: hsla(var(--clr-light-hsl), 50%);\n}\n.bg-neutral-200 {\n  background-color: var(--clr-neutral-200);\n}\n.bg-accent-500 {\n  background-color: var(--clr-accent-primary-500);\n}\n.bg-accent-700 {\n  background-color: var(--clr-accent-primary-700);\n}\n.bg-accent-secondary-500 {\n  background-color: var(--clr-accent-secondary-500);\n}\n.padding-block-6 {\n  padding: var(--size-6) var(--size-6);\n}\n.padding-block-7 {\n  padding: var(--size-7) var(--size-7);\n}\n.padding-block-9 {\n  padding: var(--size-9) var(--size-9);\n}\n.padding-block-16 {\n  padding: var(--size-16) var(--size-16);\n}\n.btn-secondary {\n  font-size: var(--size-14);\n  padding: var(--size-6) var(--size-25);\n}\n.btn-secondary:hover {\n  background-color: var(--clr-accent-secondary-600);\n}\n.container {\n  --max-width: 1000px;\n  margin-inline: auto;\n  max-width: min(var(--max-width), (100% - 10rem));\n}\n.inline-block {\n  display: inline-block;\n}\n@media all and (max-width: 800px) {\n  .container {\n    max-width: min(var(--max-width), (100% - 2rem));\n  }\n}\n/* GENERIC ELEMENTS */\n\nbutton {\n  border-radius: var(--size-8);\n  white-space: nowrap;\n}\nbutton:hover {\n  cursor: pointer;\n}\ninput {\n  font-size: var(--size-18);\n  max-width: 100%;\n  padding: var(--size-2);\n  padding-left: 2.3rem;\n\n  border: 1px solid hsl(var(--clr-light-hs), 90%);\n  border-radius: var(--size-8);\n}\n\n/* GENERAL STYLING */\n\n/* PRIMARY HEADER */\n.primary-header {\n  background-color: var(--clr-accent-primary-450);\n  position: relative;\n  z-index: 1;\n}\n.primary-header_container {\n  display: flex;\n  justify-content: space-between;\n}\n.logo {\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  gap: var(--size-6);\n}\n.filters-container {\n  display: flex;\n  align-items: center;\n  gap: var(--size-12);\n}\n.filters-container_list button {\n  background-color: transparent;\n}\n.filters-container_list button:hover {\n  color: var(--clr-accent-primary-900);\n}\n.filters-container_list .active {\n  color: var(--clr-light);\n  background-color: hsla(var(--clr-light-hsl), 0.1);\n}\n@media all and (max-width: 420px) {\n  .primary-header_container {\n    flex-direction: column;\n    gap: var(--size-18);\n    align-items: center;\n  }\n}\n\n/* CONTENT */\n.content_header {\n  background-color: hsl(var(--clr-light-hs), 97%);\n}\n.content_header-container {\n  display: flex;\n  justify-content: space-between;\n  padding: var(--size-17) 0;\n}\n.search {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: var(--size-15);\n  background-position: var(--size-12) 50%;\n}\n.search::placeholder {\n  font-size: var(--size-12);\n  opacity: 1;\n  color: hsl(var(--clr-light-hs), 75%);\n}\n.content_table-container {\n  padding-top: var(--size-32);\n  overflow-x: scroll;\n}\n.content_table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.content_table td,\nth {\n  white-space: nowrap;\n  text-align: left;\n  border-bottom: 1px solid hsl(var(--clr-light-hs), 90%);\n}\n.content_table th {\n  font-weight: 400;\n  color: hsl(var(--clr-light-hs), 70%);\n  padding: var(--size-7) var(--size-16);\n  font-size: var(--size-12);\n}\n.content_table td {\n  padding: var(--size-14) var(--size-16);\n}\n.content_table th:nth-child(1) {\n  width: 8rem;\n}\n.content_table th:nth-child(2) {\n  width: 15rem;\n}\n.content_table td:nth-child(1) {\n  color: hsl(var(--clr-light-hs), 50%);\n  font-size: var(--size-14);\n}\n.content_table td:nth-child(3) {\n  color: hsl(var(--clr-light-hs), 50%);\n  font-size: var(--size-14);\n}\n@media all and (max-width: 520px) {\n  .content_header-container {\n    flex-direction: column;\n    align-items: center;\n    gap: var(--size-8);\n  }\n}\n@media all and (max-width: 700px) {\n  .content_table thead {\n    display: none;\n  }\n  .content_table tbody,\n  .content_table tr,\n  .content_table td {\n    display: block;\n    width: 100%;\n  }\n  .content_table tr {\n    margin-bottom: var(--size-20);\n  }\n  .content_table tr:nth-child(2n) {\n    background-color: hsl(var(--clr-light-hs), 95%);\n  }\n  .content_table td {\n    text-align: right;\n    position: relative;\n  }\n  .content_table td::before {\n    content: attr(data-label);\n    position: absolute;\n    left: var(--size-16);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"AAEA;EACE,0BAA0B;;EAE1B,6BAA6B;EAC7B,qBAAqB;EACrB,4BAA4B;;EAE5B,iCAAiC;;EAEjC,gEAAgE;;EAEhE,kCAAkC;EAClC,oEAAoE;EACpE,oEAAoE;EACpE,oEAAoE;;EAEpE,8BAA8B;;EAE9B,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;EACnB,mBAAmB;EACnB,oBAAoB;EACpB,kBAAkB;EAClB,oBAAoB;EACpB,mBAAmB;EACnB,oBAAoB;EACpB,eAAe;EACf,oBAAoB;EACpB,mBAAmB;EACnB,oBAAoB;EACpB,kBAAkB;EAClB,oBAAoB;EACpB,mBAAmB;EACnB,oBAAoB;EACpB,iBAAiB;EACjB,oBAAoB;EACpB,mBAAmB;EACnB,oBAAoB;EACpB,kBAAkB;EAClB,oBAAoB;EACpB,mBAAmB;EACnB,oBAAoB;EACpB,eAAe;EACf,iBAAiB;EACjB,oBAAoB;;EAEpB,mBAAmB;AACrB;;AAEA,YAAY;;AAEZ;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,sBAAsB;AACxB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;AACb;AACA;EACE,uBAAuB;AACzB;AACA;EACE,oCAAoC;AACtC;AACA;EACE,oCAAoC;AACtC;AACA;EACE,sCAAsC;AACxC;AACA;EACE,wCAAwC;AAC1C;AACA;EACE,+CAA+C;AACjD;AACA;EACE,+CAA+C;AACjD;AACA;EACE,iDAAiD;AACnD;AACA;EACE,oCAAoC;AACtC;AACA;EACE,oCAAoC;AACtC;AACA;EACE,oCAAoC;AACtC;AACA;EACE,sCAAsC;AACxC;AACA;EACE,yBAAyB;EACzB,qCAAqC;AACvC;AACA;EACE,iDAAiD;AACnD;AACA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,gDAAgD;AAClD;AACA;EACE,qBAAqB;AACvB;AACA;EACE;IACE,+CAA+C;EACjD;AACF;AACA,qBAAqB;;AAErB;EACE,4BAA4B;EAC5B,mBAAmB;AACrB;AACA;EACE,eAAe;AACjB;AACA;EACE,yBAAyB;EACzB,eAAe;EACf,sBAAsB;EACtB,oBAAoB;;EAEpB,+CAA+C;EAC/C,4BAA4B;AAC9B;;AAEA,oBAAoB;;AAEpB,mBAAmB;AACnB;EACE,+CAA+C;EAC/C,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,oCAAoC;AACtC;AACA;EACE,uBAAuB;EACvB,iDAAiD;AACnD;AACA;EACE;IACE,sBAAsB;IACtB,mBAAmB;IACnB,mBAAmB;EACrB;AACF;;AAEA,YAAY;AACZ;EACE,+CAA+C;AACjD;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,yBAAyB;AAC3B;AACA;EACE,yDAAuD;EACvD,4BAA4B;EAC5B,+BAA+B;EAC/B,uCAAuC;AACzC;AACA;EACE,yBAAyB;EACzB,UAAU;EACV,oCAAoC;AACtC;AACA;EACE,2BAA2B;EAC3B,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,yBAAyB;AAC3B;AACA;;EAEE,mBAAmB;EACnB,gBAAgB;EAChB,sDAAsD;AACxD;AACA;EACE,gBAAgB;EAChB,oCAAoC;EACpC,qCAAqC;EACrC,yBAAyB;AAC3B;AACA;EACE,sCAAsC;AACxC;AACA;EACE,WAAW;AACb;AACA;EACE,YAAY;AACd;AACA;EACE,oCAAoC;EACpC,yBAAyB;AAC3B;AACA;EACE,oCAAoC;EACpC,yBAAyB;AAC3B;AACA;EACE;IACE,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;EACpB;AACF;AACA;EACE;IACE,aAAa;EACf;EACA;;;IAGE,cAAc;IACd,WAAW;EACb;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,+CAA+C;EACjD;EACA;IACE,iBAAiB;IACjB,kBAAkB;EACpB;EACA;IACE,yBAAyB;IACzB,kBAAkB;IAClB,oBAAoB;EACtB;AACF","sourcesContent":["@import url('./reset-styles.css');\n\n:root {\n  --clr-main: hsl(0, 0%, 0%);\n\n  --clr-light: hsl(0, 0%, 100%);\n  --clr-light-hs: 0, 0%;\n  --clr-light-hsl: 0, 0%, 100%;\n\n  --clr-accent-primary-hs: 195, 68%;\n\n  --clr-accent-primary-450: hsl(var(--clr-accent-primary-hs), 45%);\n\n  --clr-accent-secondary-hs: 85, 54%;\n  --clr-accent-secondary-400: hsl(var(--clr-accent-secondary-hs), 40%);\n  --clr-accent-secondary-500: hsl(var(--clr-accent-secondary-hs), 50%);\n  --clr-accent-secondary-600: hsl(var(--clr-accent-secondary-hs), 60%);\n\n  font-family: Arial, sans-serif;\n\n  --size-1: 0.0625rem;\n  --size-2: 0.125rem;\n  --size-3: 0.1875rem;\n  --size-4: 0.25rem;\n  --size-5: 0.3125rem;\n  --size-6: 0.375rem;\n  --size-7: 0.4375rem;\n  --size-8: 0.5rem;\n  --size-9: 0.5625rem;\n  --size-10: 0.625rem;\n  --size-11: 0.6875rem;\n  --size-12: 0.75rem;\n  --size-13: 0.8125rem;\n  --size-14: 0.875rem;\n  --size-15: 0.9375rem;\n  --size-16: 1rem;\n  --size-17: 1.0625rem;\n  --size-18: 1.125rem;\n  --size-19: 1.1875rem;\n  --size-20: 1.25rem;\n  --size-21: 1.3125rem;\n  --size-22: 1.375rem;\n  --size-23: 1.4375rem;\n  --size-24: 1.5rem;\n  --size-25: 1.5625rem;\n  --size-26: 1.625rem;\n  --size-27: 1.6875rem;\n  --size-28: 1.75rem;\n  --size-29: 1.8125rem;\n  --size-30: 1.875rem;\n  --size-31: 1.9375rem;\n  --size-32: 2rem;\n  --size-40: 2.5rem;\n  --size-45: 2.8125rem;\n\n  --size-50: 3.125rem;\n}\n\n/* UTILITY */\n\n.fs-12 {\n  font-size: var(--size-12);\n}\n.fs-14 {\n  font-size: var(--size-14);\n}\n.fs-16 {\n  font-size: var(--size-16);\n}\n.fs-17 {\n  font-size: var(--size-17);\n}\n.el-width-700 {\n  width: var(--size-700);\n}\n.el-width-800 {\n  width: var(--size-800);\n}\n.el-width-900 {\n  width: 4rem;\n}\n.el-width-1000 {\n  width: 5rem;\n}\n.text-light {\n  color: var(--clr-light);\n}\n.text-accent-primary-300 {\n  color: var(--clr-accent-primary-300);\n}\n.text-accent-primary-700 {\n  color: var(--clr-accent-primary-700);\n}\n.text-pass-through-500 {\n  color: hsla(var(--clr-light-hsl), 50%);\n}\n.bg-neutral-200 {\n  background-color: var(--clr-neutral-200);\n}\n.bg-accent-500 {\n  background-color: var(--clr-accent-primary-500);\n}\n.bg-accent-700 {\n  background-color: var(--clr-accent-primary-700);\n}\n.bg-accent-secondary-500 {\n  background-color: var(--clr-accent-secondary-500);\n}\n.padding-block-6 {\n  padding: var(--size-6) var(--size-6);\n}\n.padding-block-7 {\n  padding: var(--size-7) var(--size-7);\n}\n.padding-block-9 {\n  padding: var(--size-9) var(--size-9);\n}\n.padding-block-16 {\n  padding: var(--size-16) var(--size-16);\n}\n.btn-secondary {\n  font-size: var(--size-14);\n  padding: var(--size-6) var(--size-25);\n}\n.btn-secondary:hover {\n  background-color: var(--clr-accent-secondary-600);\n}\n.container {\n  --max-width: 1000px;\n  margin-inline: auto;\n  max-width: min(var(--max-width), (100% - 10rem));\n}\n.inline-block {\n  display: inline-block;\n}\n@media all and (max-width: 800px) {\n  .container {\n    max-width: min(var(--max-width), (100% - 2rem));\n  }\n}\n/* GENERIC ELEMENTS */\n\nbutton {\n  border-radius: var(--size-8);\n  white-space: nowrap;\n}\nbutton:hover {\n  cursor: pointer;\n}\ninput {\n  font-size: var(--size-18);\n  max-width: 100%;\n  padding: var(--size-2);\n  padding-left: 2.3rem;\n\n  border: 1px solid hsl(var(--clr-light-hs), 90%);\n  border-radius: var(--size-8);\n}\n\n/* GENERAL STYLING */\n\n/* PRIMARY HEADER */\n.primary-header {\n  background-color: var(--clr-accent-primary-450);\n  position: relative;\n  z-index: 1;\n}\n.primary-header_container {\n  display: flex;\n  justify-content: space-between;\n}\n.logo {\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  gap: var(--size-6);\n}\n.filters-container {\n  display: flex;\n  align-items: center;\n  gap: var(--size-12);\n}\n.filters-container_list button {\n  background-color: transparent;\n}\n.filters-container_list button:hover {\n  color: var(--clr-accent-primary-900);\n}\n.filters-container_list .active {\n  color: var(--clr-light);\n  background-color: hsla(var(--clr-light-hsl), 0.1);\n}\n@media all and (max-width: 420px) {\n  .primary-header_container {\n    flex-direction: column;\n    gap: var(--size-18);\n    align-items: center;\n  }\n}\n\n/* CONTENT */\n.content_header {\n  background-color: hsl(var(--clr-light-hs), 97%);\n}\n.content_header-container {\n  display: flex;\n  justify-content: space-between;\n  padding: var(--size-17) 0;\n}\n.search {\n  background-image: url('../assets/magnifying-glass.svg');\n  background-repeat: no-repeat;\n  background-size: var(--size-15);\n  background-position: var(--size-12) 50%;\n}\n.search::placeholder {\n  font-size: var(--size-12);\n  opacity: 1;\n  color: hsl(var(--clr-light-hs), 75%);\n}\n.content_table-container {\n  padding-top: var(--size-32);\n  overflow-x: scroll;\n}\n.content_table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.content_table td,\nth {\n  white-space: nowrap;\n  text-align: left;\n  border-bottom: 1px solid hsl(var(--clr-light-hs), 90%);\n}\n.content_table th {\n  font-weight: 400;\n  color: hsl(var(--clr-light-hs), 70%);\n  padding: var(--size-7) var(--size-16);\n  font-size: var(--size-12);\n}\n.content_table td {\n  padding: var(--size-14) var(--size-16);\n}\n.content_table th:nth-child(1) {\n  width: 8rem;\n}\n.content_table th:nth-child(2) {\n  width: 15rem;\n}\n.content_table td:nth-child(1) {\n  color: hsl(var(--clr-light-hs), 50%);\n  font-size: var(--size-14);\n}\n.content_table td:nth-child(3) {\n  color: hsl(var(--clr-light-hs), 50%);\n  font-size: var(--size-14);\n}\n@media all and (max-width: 520px) {\n  .content_header-container {\n    flex-direction: column;\n    align-items: center;\n    gap: var(--size-8);\n  }\n}\n@media all and (max-width: 700px) {\n  .content_table thead {\n    display: none;\n  }\n  .content_table tbody,\n  .content_table tr,\n  .content_table td {\n    display: block;\n    width: 100%;\n  }\n  .content_table tr {\n    margin-bottom: var(--size-20);\n  }\n  .content_table tr:nth-child(2n) {\n    background-color: hsl(var(--clr-light-hs), 95%);\n  }\n  .content_table td {\n    text-align: right;\n    position: relative;\n  }\n  .content_table td::before {\n    content: attr(data-label);\n    position: absolute;\n    left: var(--size-16);\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGNBQWMsYUFBYSxPQUFPLFdBQVcsS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLGFBQWEsTUFBTSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGNBQWMsYUFBYSxhQUFhLE9BQU8sYUFBYSxhQUFhLE1BQU0sWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sVUFBVSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEs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Y0FBYyxDQUFDLGFBQWEsQ0FBQztJQUN4RGtCLFNBQVMsQ0FBQ0MsS0FBSyxHQUFHLEVBQUU7SUFDcEIsTUFBTUMsT0FBTyxHQUFHaEMsUUFBUSxDQUFDYixVQUFVLEVBQUVELHFCQUFxQixDQUFDO0lBQzNENEMsU0FBUyxDQUFDRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdDLENBQUMsSUFBSztNQUN6QyxNQUFNMUIsS0FBSyxHQUFHMEIsQ0FBQyxDQUFDQyxNQUFNLENBQUNKLEtBQUs7TUFDNUIsSUFBSXhCLGFBQWEsQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7UUFDeEJ3QixPQUFPLENBQUN4QixLQUFLLENBQUM7TUFDaEIsQ0FBQyxNQUFNO1FBQ0w7UUFDQVYsT0FBTyxDQUFDQyxLQUFLLENBQ1gsMEZBQTBGLENBQzNGO01BQ0g7SUFDRixDQUFDLENBQUM7RUFDSixDQUFDO0VBQ0QsT0FBTztJQUFFOEI7RUFBSyxDQUFDO0FBQ2pCLENBQUMsRUFBRztBQUVKN0MsVUFBVSxDQUFDNkMsSUFBSSxFQUFFLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mZS10ZXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9mZS10ZXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9mZS10ZXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZmUtdGVzdC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzIiwid2VicGFjazovL2ZlLXRlc3QvLi9zcmMvc3R5bGVzL3Jlc2V0LXN0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vZmUtdGVzdC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzPzYzNDkiLCJ3ZWJwYWNrOi8vZmUtdGVzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9mZS10ZXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9mZS10ZXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2ZlLXRlc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZmUtdGVzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2ZlLXRlc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9mZS10ZXN0Ly4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9mZS10ZXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZlLXRlc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZmUtdGVzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmUtdGVzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2ZlLXRlc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mZS10ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmUtdGVzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9mZS10ZXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2ZlLXRlc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2ZlLXRlc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC1zdHlsZXMuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9tYWduaWZ5aW5nLWdsYXNzLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tY2xyLW1haW46IGhzbCgwLCAwJSwgMCUpO1xcblxcbiAgLS1jbHItbGlnaHQ6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICAtLWNsci1saWdodC1oczogMCwgMCU7XFxuICAtLWNsci1saWdodC1oc2w6IDAsIDAlLCAxMDAlO1xcblxcbiAgLS1jbHItYWNjZW50LXByaW1hcnktaHM6IDE5NSwgNjglO1xcblxcbiAgLS1jbHItYWNjZW50LXByaW1hcnktNDUwOiBoc2wodmFyKC0tY2xyLWFjY2VudC1wcmltYXJ5LWhzKSwgNDUlKTtcXG5cXG4gIC0tY2xyLWFjY2VudC1zZWNvbmRhcnktaHM6IDg1LCA1NCU7XFxuICAtLWNsci1hY2NlbnQtc2Vjb25kYXJ5LTQwMDogaHNsKHZhcigtLWNsci1hY2NlbnQtc2Vjb25kYXJ5LWhzKSwgNDAlKTtcXG4gIC0tY2xyLWFjY2VudC1zZWNvbmRhcnktNTAwOiBoc2wodmFyKC0tY2xyLWFjY2VudC1zZWNvbmRhcnktaHMpLCA1MCUpO1xcbiAgLS1jbHItYWNjZW50LXNlY29uZGFyeS02MDA6IGhzbCh2YXIoLS1jbHItYWNjZW50LXNlY29uZGFyeS1ocyksIDYwJSk7XFxuXFxuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFxuICAtLXNpemUtMTogMC4wNjI1cmVtO1xcbiAgLS1zaXplLTI6IDAuMTI1cmVtO1xcbiAgLS1zaXplLTM6IDAuMTg3NXJlbTtcXG4gIC0tc2l6ZS00OiAwLjI1cmVtO1xcbiAgLS1zaXplLTU6IDAuMzEyNXJlbTtcXG4gIC0tc2l6ZS02OiAwLjM3NXJlbTtcXG4gIC0tc2l6ZS03OiAwLjQzNzVyZW07XFxuICAtLXNpemUtODogMC41cmVtO1xcbiAgLS1zaXplLTk6IDAuNTYyNXJlbTtcXG4gIC0tc2l6ZS0xMDogMC42MjVyZW07XFxuICAtLXNpemUtMTE6IDAuNjg3NXJlbTtcXG4gIC0tc2l6ZS0xMjogMC43NXJlbTtcXG4gIC0tc2l6ZS0xMzogMC44MTI1cmVtO1xcbiAgLS1zaXplLTE0OiAwLjg3NXJlbTtcXG4gIC0tc2l6ZS0xNTogMC45Mzc1cmVtO1xcbiAgLS1zaXplLTE2OiAxcmVtO1xcbiAgLS1zaXplLTE3OiAxLjA2MjVyZW07XFxuICAtLXNpemUtMTg6IDEuMTI1cmVtO1xcbiAgLS1zaXplLTE5OiAxLjE4NzVyZW07XFxuICAtLXNpemUtMjA6IDEuMjVyZW07XFxuICAtLXNpemUtMjE6IDEuMzEyNXJlbTtcXG4gIC0tc2l6ZS0yMjogMS4zNzVyZW07XFxuICAtLXNpemUtMjM6IDEuNDM3NXJlbTtcXG4gIC0tc2l6ZS0yNDogMS41cmVtO1xcbiAgLS1zaXplLTI1OiAxLjU2MjVyZW07XFxuICAtLXNpemUtMjY6IDEuNjI1cmVtO1xcbiAgLS1zaXplLTI3OiAxLjY4NzVyZW07XFxuICAtLXNpemUtMjg6IDEuNzVyZW07XFxuICAtLXNpemUtMjk6IDEuODEyNXJlbTtcXG4gIC0tc2l6ZS0zMDogMS44NzVyZW07XFxuICAtLXNpemUtMzE6IDEuOTM3NXJlbTtcXG4gIC0tc2l6ZS0zMjogMnJlbTtcXG4gIC0tc2l6ZS00MDogMi41cmVtO1xcbiAgLS1zaXplLTQ1OiAyLjgxMjVyZW07XFxuXFxuICAtLXNpemUtNTA6IDMuMTI1cmVtO1xcbn1cXG5cXG4vKiBVVElMSVRZICovXFxuXFxuLmZzLTEyIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS0xMik7XFxufVxcbi5mcy0xNCB7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtMTQpO1xcbn1cXG4uZnMtMTYge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTE2KTtcXG59XFxuLmZzLTE3IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS0xNyk7XFxufVxcbi5lbC13aWR0aC03MDAge1xcbiAgd2lkdGg6IHZhcigtLXNpemUtNzAwKTtcXG59XFxuLmVsLXdpZHRoLTgwMCB7XFxuICB3aWR0aDogdmFyKC0tc2l6ZS04MDApO1xcbn1cXG4uZWwtd2lkdGgtOTAwIHtcXG4gIHdpZHRoOiA0cmVtO1xcbn1cXG4uZWwtd2lkdGgtMTAwMCB7XFxuICB3aWR0aDogNXJlbTtcXG59XFxuLnRleHQtbGlnaHQge1xcbiAgY29sb3I6IHZhcigtLWNsci1saWdodCk7XFxufVxcbi50ZXh0LWFjY2VudC1wcmltYXJ5LTMwMCB7XFxuICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudC1wcmltYXJ5LTMwMCk7XFxufVxcbi50ZXh0LWFjY2VudC1wcmltYXJ5LTcwMCB7XFxuICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudC1wcmltYXJ5LTcwMCk7XFxufVxcbi50ZXh0LXBhc3MtdGhyb3VnaC01MDAge1xcbiAgY29sb3I6IGhzbGEodmFyKC0tY2xyLWxpZ2h0LWhzbCksIDUwJSk7XFxufVxcbi5iZy1uZXV0cmFsLTIwMCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItbmV1dHJhbC0yMDApO1xcbn1cXG4uYmctYWNjZW50LTUwMCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50LXByaW1hcnktNTAwKTtcXG59XFxuLmJnLWFjY2VudC03MDAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudC1wcmltYXJ5LTcwMCk7XFxufVxcbi5iZy1hY2NlbnQtc2Vjb25kYXJ5LTUwMCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50LXNlY29uZGFyeS01MDApO1xcbn1cXG4ucGFkZGluZy1ibG9jay02IHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtNikgdmFyKC0tc2l6ZS02KTtcXG59XFxuLnBhZGRpbmctYmxvY2stNyB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTcpIHZhcigtLXNpemUtNyk7XFxufVxcbi5wYWRkaW5nLWJsb2NrLTkge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS05KSB2YXIoLS1zaXplLTkpO1xcbn1cXG4ucGFkZGluZy1ibG9jay0xNiB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTE2KSB2YXIoLS1zaXplLTE2KTtcXG59XFxuLmJ0bi1zZWNvbmRhcnkge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTE0KTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtNikgdmFyKC0tc2l6ZS0yNSk7XFxufVxcbi5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQtc2Vjb25kYXJ5LTYwMCk7XFxufVxcbi5jb250YWluZXIge1xcbiAgLS1tYXgtd2lkdGg6IDEwMDBweDtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBtYXgtd2lkdGg6IG1pbih2YXIoLS1tYXgtd2lkdGgpLCAoMTAwJSAtIDEwcmVtKSk7XFxufVxcbi5pbmxpbmUtYmxvY2sge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogbWluKHZhcigtLW1heC13aWR0aCksICgxMDAlIC0gMnJlbSkpO1xcbiAgfVxcbn1cXG4vKiBHRU5FUklDIEVMRU1FTlRTICovXFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNpemUtOCk7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5pbnB1dCB7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtMTgpO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS0yKTtcXG4gIHBhZGRpbmctbGVmdDogMi4zcmVtO1xcblxcbiAgYm9yZGVyOiAxcHggc29saWQgaHNsKHZhcigtLWNsci1saWdodC1ocyksIDkwJSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zaXplLTgpO1xcbn1cXG5cXG4vKiBHRU5FUkFMIFNUWUxJTkcgKi9cXG5cXG4vKiBQUklNQVJZIEhFQURFUiAqL1xcbi5wcmltYXJ5LWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50LXByaW1hcnktNDUwKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5wcmltYXJ5LWhlYWRlcl9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmxvZ28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgZ2FwOiB2YXIoLS1zaXplLTYpO1xcbn1cXG4uZmlsdGVycy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IHZhcigtLXNpemUtMTIpO1xcbn1cXG4uZmlsdGVycy1jb250YWluZXJfbGlzdCBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5maWx0ZXJzLWNvbnRhaW5lcl9saXN0IGJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudC1wcmltYXJ5LTkwMCk7XFxufVxcbi5maWx0ZXJzLWNvbnRhaW5lcl9saXN0IC5hY3RpdmUge1xcbiAgY29sb3I6IHZhcigtLWNsci1saWdodCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLWNsci1saWdodC1oc2wpLCAwLjEpO1xcbn1cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xcbiAgLnByaW1hcnktaGVhZGVyX2NvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogdmFyKC0tc2l6ZS0xOCk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxufVxcblxcbi8qIENPTlRFTlQgKi9cXG4uY29udGVudF9oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKHZhcigtLWNsci1saWdodC1ocyksIDk3JSk7XFxufVxcbi5jb250ZW50X2hlYWRlci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtMTcpIDA7XFxufVxcbi5zZWFyY2gge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IHZhcigtLXNpemUtMTUpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdmFyKC0tc2l6ZS0xMikgNTAlO1xcbn1cXG4uc2VhcmNoOjpwbGFjZWhvbGRlciB7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtMTIpO1xcbiAgb3BhY2l0eTogMTtcXG4gIGNvbG9yOiBoc2wodmFyKC0tY2xyLWxpZ2h0LWhzKSwgNzUlKTtcXG59XFxuLmNvbnRlbnRfdGFibGUtY29udGFpbmVyIHtcXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1zaXplLTMyKTtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG59XFxuLmNvbnRlbnRfdGFibGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG4uY29udGVudF90YWJsZSB0ZCxcXG50aCB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBoc2wodmFyKC0tY2xyLWxpZ2h0LWhzKSwgOTAlKTtcXG59XFxuLmNvbnRlbnRfdGFibGUgdGgge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiBoc2wodmFyKC0tY2xyLWxpZ2h0LWhzKSwgNzAlKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtNykgdmFyKC0tc2l6ZS0xNik7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtMTIpO1xcbn1cXG4uY29udGVudF90YWJsZSB0ZCB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTE0KSB2YXIoLS1zaXplLTE2KTtcXG59XFxuLmNvbnRlbnRfdGFibGUgdGg6bnRoLWNoaWxkKDEpIHtcXG4gIHdpZHRoOiA4cmVtO1xcbn1cXG4uY29udGVudF90YWJsZSB0aDpudGgtY2hpbGQoMikge1xcbiAgd2lkdGg6IDE1cmVtO1xcbn1cXG4uY29udGVudF90YWJsZSB0ZDpudGgtY2hpbGQoMSkge1xcbiAgY29sb3I6IGhzbCh2YXIoLS1jbHItbGlnaHQtaHMpLCA1MCUpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTE0KTtcXG59XFxuLmNvbnRlbnRfdGFibGUgdGQ6bnRoLWNoaWxkKDMpIHtcXG4gIGNvbG9yOiBoc2wodmFyKC0tY2xyLWxpZ2h0LWhzKSwgNTAlKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS0xNCk7XFxufVxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDUyMHB4KSB7XFxuICAuY29udGVudF9oZWFkZXItY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiB2YXIoLS1zaXplLTgpO1xcbiAgfVxcbn1cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLmNvbnRlbnRfdGFibGUgdGhlYWQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmNvbnRlbnRfdGFibGUgdGJvZHksXFxuICAuY29udGVudF90YWJsZSB0cixcXG4gIC5jb250ZW50X3RhYmxlIHRkIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLmNvbnRlbnRfdGFibGUgdHIge1xcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zaXplLTIwKTtcXG4gIH1cXG4gIC5jb250ZW50X3RhYmxlIHRyOm50aC1jaGlsZCgybikge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2wodmFyKC0tY2xyLWxpZ2h0LWhzKSwgOTUlKTtcXG4gIH1cXG4gIC5jb250ZW50X3RhYmxlIHRkIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG4gIC5jb250ZW50X3RhYmxlIHRkOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IHZhcigtLXNpemUtMTYpO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLDBCQUEwQjs7RUFFMUIsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQiw0QkFBNEI7O0VBRTVCLGlDQUFpQzs7RUFFakMsZ0VBQWdFOztFQUVoRSxrQ0FBa0M7RUFDbEMsb0VBQW9FO0VBQ3BFLG9FQUFvRTtFQUNwRSxvRUFBb0U7O0VBRXBFLDhCQUE4Qjs7RUFFOUIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLG9CQUFv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QUFDM0I7QUFDQTtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTs7O0lBR0UsY0FBYztJQUNkLFdBQVc7RUFDYjtFQUNBO0lBQ0UsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSwrQ0FBK0M7RUFDakQ7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsb0JBQW9CO0VBQ3RCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJy4vcmVzZXQtc3R5bGVzLmNzcycpO1xcblxcbjpyb290IHtcXG4gIC0tY2xyLW1haW46IGhzbCgwLCAwJSwgMCUpO1xcblxcbiAgLS1jbHItbGlnaHQ6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICAtLWNsci1saWdodC1oczogMCwgMCU7XFxuICAtLWNsci1saWdodC1oc2w6IDAsIDAlLCAxMDAlO1xcblxcbiAgLS1jbHItYWNjZW50LXByaW1hcnktaHM6IDE5NSwgNjglO1xcblxcbiAgLS1jbHItYWNjZW50LXByaW1hcnktNDUwOiBoc2wodmFyKC0tY2xyLWFjY2VudC1wcmltYXJ5LWhzKSwgNDUlKTtcXG5cXG4gIC0tY2xyLWFjY2VudC1zZWNvbmRhcnktaHM6IDg1LCA1NCU7XFxuICAtLWNsci1hY2NlbnQtc2Vjb25kYXJ5LTQwMDogaHNsKHZhcigtLWNsci1hY2NlbnQtc2Vjb25kYXJ5LWhzKSwgNDAlKTtcXG4gIC0tY2xyLWFjY2VudC1zZWNvbmRhcnktNTAwOiBoc2wodmFyKC0tY2xyLWFjY2VudC1zZWNvbmRhcnktaHMpLCA1MCUpO1xcbiAgLS1jbHItYWNjZW50LXNlY29uZGFyeS02MDA6IGhzbCh2YXIoLS1jbHItYWNjZW50LXNlY29uZGFyeS1ocyksIDYwJSk7XFxuXFxuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFxuICAtLXNpemUtMTogMC4wNjI1cmVtO1xcbiAgLS1zaXplLTI6IDAuMTI1cmVtO1xcbiAgLS1zaXplLTM6IDAuMTg3NXJlbTtcXG4gIC0tc2l6ZS00OiAwLjI1cmVtO1xcbiAgLS1zaXplLTU6IDAuMzEyNXJlbTtcXG4gIC0tc2l6ZS02OiAwLjM3NXJlbTtcXG4gIC0tc2l6ZS03OiAwLjQzNzVyZW07XFxuICAtLXNpemUtODogMC41cmVtO1xcbiAgLS1zaXplLTk6IDAuNTYyNXJlbTtcXG4gIC0tc2l6ZS0xMDogMC42MjVyZW07XFxuICAtLXNpemUtMTE6IDAuNjg3NXJlbTtcXG4gIC0tc2l6ZS0xMjogMC43NXJlbTtcXG4gIC0tc2l6ZS0xMzogMC44MTI1cmVtO1xcbiAgLS1zaXplLTE0OiAwLjg3NXJlbTtcXG4gIC0tc2l6ZS0xNTogMC45Mzc1cmVtO1xcbiAgLS1zaXplLTE2OiAxcmVtO1xcbiAgLS1zaXplLTE3OiAxLjA2MjVyZW07XFxuICAtLXNpemUtMTg6IDEuMTI1cmVtO1xcbiAgLS1zaXplLTE5OiAxLjE4NzVyZW07XFxuICAtLXNpemUtMjA6IDEuMjVyZW07XFxuICAtLXNpemUtMjE6IDEuMzEyNXJlbTtcXG4gIC0tc2l6ZS0yMjogMS4zNzVyZW07XFxuICAtLXNpemUtMjM6IDEuNDM3NXJlbTtcXG4gIC0tc2l6ZS0yNDogMS41cmVtO1xcbiAgLS1zaXplLTI1OiAxLjU2MjVyZW07XFxuICAtLXNpemUtMjY6IDEuNjI1cmVtO1xcbiAgLS1zaXplLTI3OiAxLjY4NzVyZW07XFxuICAtLXNpemUtMjg6IDEuNzVyZW07XFxuICAtLXNpemUtMjk6IDEuODEyNXJlbTtcXG4gIC0tc2l6ZS0zMDogMS44NzVyZW07XFxuICAtLXNpemUtMzE6IDEuOTM3NXJlbTtcXG4gIC0tc2l6ZS0zMjogMnJlbTtcXG4gIC0tc2l6ZS00MDogMi41cmVtO1xcbiAgLS1zaXplLTQ1OiAyLjgxMjVyZW07XFxuXFxuICAtLXNpemUtNTA6IDMuMTI1cmVtO1xcbn1cXG5cXG4vKiBVVElMSVRZICovXFxuXFxuLmZzLTEyIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS0xMik7XFxufVxcbi5mcy0xNCB7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtMTQpO1xcbn1cXG4uZnMtMTYge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTE2KTtcXG59XFxuLmZzLTE3IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS0xNyk7XFxufVxcbi5lbC13aWR0aC03MDAge1xcbiAgd2lkdGg6IHZhcigtLXNpemUtNzAwKTtcXG59XFxuLmVsLXdpZHRoLTgwMCB7XFxuICB3aWR0aDogdmFyKC0tc2l6ZS04MDApO1xcbn1cXG4uZWwtd2lkdGgtOTAwIHtcXG4gIHdpZHRoOiA0cmVtO1xcbn1cXG4uZWwtd2lkdGgtMTAwMCB7XFxuICB3aWR0aDogNXJlbTtcXG59XFxuLnRleHQtbGlnaHQge1xcbiAgY29sb3I6IHZhcigtLWNsci1saWdodCk7XFxufVxcbi50ZXh0LWFjY2VudC1wcmltYXJ5LTMwMCB7XFxuICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudC1wcmltYXJ5LTMwMCk7XFxufVxcbi50ZXh0LWFjY2VudC1wcmltYXJ5LTcwMCB7XFxuICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudC1wcmltYXJ5LTcwMCk7XFxufVxcbi50ZXh0LXBhc3MtdGhyb3VnaC01MDAge1xcbiAgY29sb3I6IGhzbGEodmFyKC0tY2xyLWxpZ2h0LWhzbCksIDUwJSk7XFxufVxcbi5iZy1uZXV0cmFsLTIwMCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItbmV1dHJhbC0yMDApO1xcbn1cXG4uYmctYWNjZW50LTUwMCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50LXByaW1hcnktNTAwKTtcXG59XFxuLmJnLWFjY2VudC03MDAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudC1wcmltYXJ5LTcwMCk7XFxufVxcbi5iZy1hY2NlbnQtc2Vjb25kYXJ5LTUwMCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50LXNlY29uZGFyeS01MDApO1xcbn1cXG4ucGFkZGluZy1ibG9jay02IHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtNikgdmFyKC0tc2l6ZS02KTtcXG59XFxuLnBhZGRpbmctYmxvY2stNyB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTcpIHZhcigtLXNpemUtNyk7XFxufVxcbi5wYWRkaW5nLWJsb2NrLTkge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS05KSB2YXIoLS1zaXplLTkpO1xcbn1cXG4ucGFkZGluZy1ibG9jay0xNiB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTE2KSB2YXIoLS1zaXplLTE2KTtcXG59XFxuLmJ0bi1zZWNvbmRhcnkge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTE0KTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtNikgdmFyKC0tc2l6ZS0yNSk7XFxufVxcbi5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQtc2Vjb25kYXJ5LTYwMCk7XFxufVxcbi5jb250YWluZXIge1xcbiAgLS1tYXgtd2lkdGg6IDEwMDBweDtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBtYXgtd2lkdGg6IG1pbih2YXIoLS1tYXgtd2lkdGgpLCAoMTAwJSAtIDEwcmVtKSk7XFxufVxcbi5pbmxpbmUtYmxvY2sge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogbWluKHZhcigtLW1heC13aWR0aCksICgxMDAlIC0gMnJlbSkpO1xcbiAgfVxcbn1cXG4vKiBHRU5FUklDIEVMRU1FTlRTICovXFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNpemUtOCk7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5pbnB1dCB7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtMTgpO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS0yKTtcXG4gIHBhZGRpbmctbGVmdDogMi4zcmVtO1xcblxcbiAgYm9yZGVyOiAxcHggc29saWQgaHNsKHZhcigtLWNsci1saWdodC1ocyksIDkwJSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zaXplLTgpO1xcbn1cXG5cXG4vKiBHRU5FUkFMIFNUWUxJTkcgKi9cXG5cXG4vKiBQUklNQVJZIEhFQURFUiAqL1xcbi5wcmltYXJ5LWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50LXByaW1hcnktNDUwKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5wcmltYXJ5LWhlYWRlcl9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmxvZ28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgZ2FwOiB2YXIoLS1zaXplLTYpO1xcbn1cXG4uZmlsdGVycy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IHZhcigtLXNpemUtMTIpO1xcbn1cXG4uZmlsdGVycy1jb250YWluZXJfbGlzdCBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5maWx0ZXJzLWNvbnRhaW5lcl9saXN0IGJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudC1wcmltYXJ5LTkwMCk7XFxufVxcbi5maWx0ZXJzLWNvbnRhaW5lcl9saXN0IC5hY3RpdmUge1xcbiAgY29sb3I6IHZhcigtLWNsci1saWdodCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLWNsci1saWdodC1oc2wpLCAwLjEpO1xcbn1cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xcbiAgLnByaW1hcnktaGVhZGVyX2NvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogdmFyKC0tc2l6ZS0xOCk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxufVxcblxcbi8qIENPTlRFTlQgKi9cXG4uY29udGVudF9oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKHZhcigtLWNsci1saWdodC1ocyksIDk3JSk7XFxufVxcbi5jb250ZW50X2hlYWRlci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtMTcpIDA7XFxufVxcbi5zZWFyY2gge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvbWFnbmlmeWluZy1nbGFzcy5zdmcnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IHZhcigtLXNpemUtMTUpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdmFyKC0tc2l6ZS0xMikgNTAlO1xcbn1cXG4uc2VhcmNoOjpwbGFjZWhvbGRlciB7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtMTIpO1xcbiAgb3BhY2l0eTogMTtcXG4gIGNvbG9yOiBoc2wodmFyKC0tY2xyLWxpZ2h0LWhzKSwgNzUlKTtcXG59XFxuLmNvbnRlbnRfdGFibGUtY29udGFpbmVyIHtcXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1zaXplLTMyKTtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG59XFxuLmNvbnRlbnRfdGFibGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG4uY29udGVudF90YWJsZSB0ZCxcXG50aCB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBoc2wodmFyKC0tY2xyLWxpZ2h0LWhzKSwgOTAlKTtcXG59XFxuLmNvbnRlbnRfdGFibGUgdGgge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiBoc2wodmFyKC0tY2xyLWxpZ2h0LWhzKSwgNzAlKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtNykgdmFyKC0tc2l6ZS0xNik7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtMTIpO1xcbn1cXG4uY29udGVudF90YWJsZSB0ZCB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTE0KSB2YXIoLS1zaXplLTE2KTtcXG59XFxuLmNvbnRlbnRfdGFibGUgdGg6bnRoLWNoaWxkKDEpIHtcXG4gIHdpZHRoOiA4cmVtO1xcbn1cXG4uY29udGVudF90YWJsZSB0aDpudGgtY2hpbGQoMikge1xcbiAgd2lkdGg6IDE1cmVtO1xcbn1cXG4uY29udGVudF90YWJsZSB0ZDpudGgtY2hpbGQoMSkge1xcbiAgY29sb3I6IGhzbCh2YXIoLS1jbHItbGlnaHQtaHMpLCA1MCUpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTE0KTtcXG59XFxuLmNvbnRlbnRfdGFibGUgdGQ6bnRoLWNoaWxkKDMpIHtcXG4gIGNvbG9yOiBoc2wodmFyKC0tY2xyLWxpZ2h0LWhzKSwgNTAlKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS0xNCk7XFxufVxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDUyMHB4KSB7XFxuICAuY29udGVudF9oZWFkZXItY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiB2YXIoLS1zaXplLTgpO1xcbiAgfVxcbn1cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLmNvbnRlbnRfdGFibGUgdGhlYWQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmNvbnRlbnRfdGFibGUgdGJvZHksXFxuICAuY29udGVudF90YWJsZSB0cixcXG4gIC5jb250ZW50X3RhYmxlIHRkIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLmNvbnRlbnRfdGFibGUgdHIge1xcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zaXplLTIwKTtcXG4gIH1cXG4gIC5jb250ZW50X3RhYmxlIHRyOm50aC1jaGlsZCgybikge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2wodmFyKC0tY2xyLWxpZ2h0LWhzKSwgOTUlKTtcXG4gIH1cXG4gIC5jb250ZW50X3RhYmxlIHRkIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG4gIC5jb250ZW50X3RhYmxlIHRkOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IHZhcigtLXNpemUtMTYpO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBDdXN0b20gcnVsZXMgKi9cXG5idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiBCb3ggc2l6aW5nIHJ1bGVzICovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxucCxcXG5maWd1cmUsXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGxpc3Qgcm9sZSwgd2hpY2ggc3VnZ2VzdHMgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZCAqL1xcbnVsW3JvbGU9J2xpc3QnXSxcXG5vbFtyb2xlPSdsaXN0J10ge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogU2V0IGNvcmUgcm9vdCBkZWZhdWx0cyAqL1xcbmh0bWw6Zm9jdXMtd2l0aGluIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG4vKiBTZXQgY29yZSBib2R5IGRlZmF1bHRzICovXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLyogQSBlbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgYSBjbGFzcyBnZXQgZGVmYXVsdCBzdHlsZXMgKi9cXG5hOm5vdChbY2xhc3NdKSB7XFxuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XFxufVxcblxcbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cXG5pbWcsXFxucGljdHVyZSB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogSW5oZXJpdCBmb250cyBmb3IgaW5wdXRzIGFuZCBidXR0b25zICovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG4vKiBSZW1vdmUgYWxsIGFuaW1hdGlvbnMsIHRyYW5zaXRpb25zIGFuZCBzbW9vdGggc2Nyb2xsIGZvciBwZW9wbGUgdGhhdCBwcmVmZXIgbm90IHRvIHNlZSB0aGVtICovXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXG4gIGh0bWw6Zm9jdXMtd2l0aGluIHtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvO1xcbiAgfVxcblxcbiAgKixcXG4gICo6OmJlZm9yZSxcXG4gICo6OmFmdGVyIHtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcmVzZXQtc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxpQkFBaUI7QUFDakI7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEscUJBQXFCO0FBQ3JCOzs7RUFHRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQSwwQkFBMEI7QUFDMUI7Ozs7Ozs7Ozs7RUFVRSxTQUFTO0FBQ1g7O0FBRUEsMkdBQTJHO0FBQzNHOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEI7O0FBRUEsMERBQTBEO0FBQzFEO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBLG9DQUFvQztBQUNwQzs7RUFFRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQSx5Q0FBeUM7QUFDekM7Ozs7RUFJRSxhQUFhO0FBQ2Y7O0FBRUEsZ0dBQWdHO0FBQ2hHO0VBQ0U7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7OztJQUdFLHFDQUFxQztJQUNyQyx1Q0FBdUM7SUFDdkMsc0NBQXNDO0lBQ3RDLGdDQUFnQztFQUNsQztBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEN1c3RvbSBydWxlcyAqL1xcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qIEJveCBzaXppbmcgcnVsZXMgKi9cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXFxuYm9keSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5wLFxcbmZpZ3VyZSxcXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmRkIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyogUmVtb3ZlIGxpc3Qgc3R5bGVzIG9uIHVsLCBvbCBlbGVtZW50cyB3aXRoIGEgbGlzdCByb2xlLCB3aGljaCBzdWdnZXN0cyBkZWZhdWx0IHN0eWxpbmcgd2lsbCBiZSByZW1vdmVkICovXFxudWxbcm9sZT0nbGlzdCddLFxcbm9sW3JvbGU9J2xpc3QnXSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBTZXQgY29yZSByb290IGRlZmF1bHRzICovXFxuaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xcbmE6bm90KFtjbGFzc10pIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcXG59XFxuXFxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcbmltZyxcXG5waWN0dXJlIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbi8qIFJlbW92ZSBhbGwgYW5pbWF0aW9ucywgdHJhbnNpdGlvbnMgYW5kIHNtb290aCBzY3JvbGwgZm9yIHBlb3BsZSB0aGF0IHByZWZlciBub3QgdG8gc2VlIHRoZW0gKi9cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XFxuICB9XFxuXFxuICAqLFxcbiAgKjo6YmVmb3JlLFxcbiAgKjo6YWZ0ZXIge1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSAnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tJztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4LmNzcyc7XG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi9jb25zdGFudHMuanMnO1xuXG5jb25zdCBVc2VyU2VhcmNoID0gKGZ1bmN0aW9uICgpIHtcbiAgbGV0IHVzZXJMaXN0ID0gbnVsbDtcbiAgY29uc3QgU0VBUkNIX1RJTUVPVVRfQU1PVU5UID0gNjAwO1xuXG4gIGNvbnN0IGZldGNoVXNlcnMgPSBhc3luYyAoc2VhcmNoU3RyKSA9PiB7XG4gICAgdXNlckxpc3QgPSBudWxsO1xuICAgIHRyeSB7XG4gICAgICAvLyBUT0RPOiBzdGFydCBsb2FkaW5nIGljb25cbiAgICAgIC8vIHNob3VsZCBwYWdpbmF0ZSBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L3VzZXJzP25hbWVfbGlrZT0ke3NlYXJjaFN0cn1gKTtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBlcnJvciBvY2N1cmVkICgke3Jlc3BvbnNlLnN0YXR1c30pYCk7XG4gICAgICB9XG4gICAgICBjb25zdCByZXNwb25zZUpTT04gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICB1c2VyTGlzdCA9IHJlc3BvbnNlSlNPTjtcbiAgICAgIHVwZGF0ZVVJKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBUT0RPOiBzaG93IHVzZXIgZXJyb3IgbWVzc2FnZVxuXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIC8vIFRPRE86IHN0b3AgbG9hZGluZyBpY29uXG4gICAgfVxuICB9O1xuICBjb25zdCBkZWJvdW5jZSA9IChjYWxsYmFjaywgZGVsYXkgPSA1MDApID0+IHtcbiAgICBsZXQgdGltZXIgPSBudWxsO1xuXG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY2FsbGJhY2soLi4uYXJncyk7XG4gICAgICB9LCBkZWxheSk7XG4gICAgfTtcbiAgfTtcbiAgY29uc3QgdmFsaWRhdGVJbnB1dCA9IChpbnB1dCkgPT4ge1xuICAgIC8vIGFscGhhYmV0aWMgY2hhcmFjdGVycywgd2hpdGVzcGFjZSBhbmQgZW1wdHkgc3RyaW5nXG4gICAgY29uc3QgcmVnZXggPSAvXlthLXpBLVpcXHNdKiQvO1xuICAgIHJldHVybiByZWdleC50ZXN0KGlucHV0KTtcbiAgfTtcbiAgY29uc3QgdXBkYXRlVUkgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFibGVCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnRfdGFibGUtYm9keScpO1xuXG4gICAgY29uc3QgcmVzZXRMaXN0Q29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgd2hpbGUgKHRhYmxlQm9keS5maXJzdENoaWxkKSB7XG4gICAgICAgIHRhYmxlQm9keS5yZW1vdmVDaGlsZCh0YWJsZUJvZHkubGFzdENoaWxkKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGNyZWF0ZVJvd05vZGUgPSAodXNlcikgPT4ge1xuICAgICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuXG4gICAgICBjb25zdCBuYW1lID0gdGQuY2xvbmVOb2RlKCk7XG4gICAgICBjb25zdCBpZCA9IHRkLmNsb25lTm9kZSgpO1xuICAgICAgY29uc3QgZW1haWwgPSB0ZC5jbG9uZU5vZGUoKTtcblxuICAgICAgbmFtZS50ZXh0Q29udGVudCA9IHVzZXIubmFtZTtcbiAgICAgIGlkLnRleHRDb250ZW50ID0gdXNlci5pZDtcbiAgICAgIGVtYWlsLnRleHRDb250ZW50ID0gdXNlci5lbWFpbDtcblxuICAgICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGFiZWwnLCAnTmFtZScpO1xuICAgICAgaWQuc2V0QXR0cmlidXRlKCdkYXRhLWxhYmVsJywgJ0lEJyk7XG4gICAgICBlbWFpbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGFiZWwnLCAnRW1haWwnKTtcblxuICAgICAgdHIuYXBwZW5kKGlkLCBuYW1lLCBlbWFpbCk7XG4gICAgICByZXR1cm4gdHI7XG4gICAgfTtcbiAgICByZXNldExpc3RDb250YWluZXIoKTtcbiAgICBjb25zdCByb3dOb2RlcyA9IHVzZXJMaXN0Lm1hcCgodXNlcikgPT4gY3JlYXRlUm93Tm9kZSh1c2VyKSk7XG4gICAgdGFibGVCb2R5LmFwcGVuZCguLi5yb3dOb2Rlcyk7XG4gIH07XG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgLy8gZGlzcGxheSBhbGwgaXRlbXNcbiAgICBmZXRjaFVzZXJzKCcnKTtcblxuICAgIC8vIGVuYWJsZSBpdGVtIHNlYXJjaFxuICAgIGNvbnN0IHNlYXJjaEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0LXNlYXJjaCcpO1xuICAgIHNlYXJjaEJveC52YWx1ZSA9ICcnO1xuICAgIGNvbnN0IG9uSW5wdXQgPSBkZWJvdW5jZShmZXRjaFVzZXJzLCBTRUFSQ0hfVElNRU9VVF9BTU9VTlQpO1xuICAgIHNlYXJjaEJveC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICBjb25zdCBpbnB1dCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgaWYgKHZhbGlkYXRlSW5wdXQoaW5wdXQpKSB7XG4gICAgICAgIG9uSW5wdXQoaW5wdXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVE9ETzogc2hvdyB1c2VyIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAnT25seSBhbHBoYWJldGljIGNoYXJhY3RlcnMsIHdoaXRlc3BhY2VzIGFuZCBlbXB0eSBzdHJpbmdzIGFyZSBhbGxvd2VkIGluIHRoZSBpbnB1dCBmaWVsZCcsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiB7IGluaXQgfTtcbn0pKCk7XG5cblVzZXJTZWFyY2guaW5pdCgpO1xuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJuZWVkTGF5ZXIiLCJjb25jYXQiLCJsZW5ndGgiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYSIsImRlZHVwZSIsInN1cHBvcnRzIiwibGF5ZXIiLCJ1bmRlZmluZWQiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiayIsImlkIiwiX2siLCJwdXNoIiwidXJsIiwib3B0aW9ucyIsIlN0cmluZyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwidGVzdCIsInNsaWNlIiwiaGFzaCIsIm5lZWRRdW90ZXMiLCJyZXBsYWNlIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsIkFQSV9VUkwiLCJVc2VyU2VhcmNoIiwidXNlckxpc3QiLCJTRUFSQ0hfVElNRU9VVF9BTU9VTlQiLCJmZXRjaFVzZXJzIiwic2VhcmNoU3RyIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJyZXNwb25zZUpTT04iLCJqc29uIiwidXBkYXRlVUkiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJkZWJvdW5jZSIsImNhbGxiYWNrIiwiZGVsYXkiLCJ0aW1lciIsImFyZ3MiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwidmFsaWRhdGVJbnB1dCIsImlucHV0IiwicmVnZXgiLCJ0YWJsZUJvZHkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVzZXRMaXN0Q29udGFpbmVyIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwiY3JlYXRlUm93Tm9kZSIsInVzZXIiLCJ0ciIsImNyZWF0ZUVsZW1lbnQiLCJ0ZCIsIm5hbWUiLCJjbG9uZU5vZGUiLCJlbWFpbCIsInRleHRDb250ZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kIiwicm93Tm9kZXMiLCJpbml0Iiwic2VhcmNoQm94IiwidmFsdWUiLCJvbklucHV0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9