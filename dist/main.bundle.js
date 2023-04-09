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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --clr-main: hsl(0, 0%, 0%);\n\n  --clr-light: hsl(0, 0%, 100%);\n  --clr-light-hs: 0, 0%;\n  --clr-light-hsl: 0, 0%, 100%;\n\n  --clr-accent-primary-hs: 195, 68%;\n\n  --clr-accent-primary-450: hsl(var(--clr-accent-primary-hs), 45%);\n\n  --clr-accent-secondary-hs: 85, 54%;\n  --clr-accent-secondary-400: hsl(var(--clr-accent-secondary-hs), 40%);\n  --clr-accent-secondary-500: hsl(var(--clr-accent-secondary-hs), 50%);\n  --clr-accent-secondary-600: hsl(var(--clr-accent-secondary-hs), 60%);\n\n  font-family: Arial, sans-serif;\n\n  --size-1: 0.0625rem;\n  --size-2: 0.125rem;\n  --size-3: 0.1875rem;\n  --size-4: 0.25rem;\n  --size-5: 0.3125rem;\n  --size-6: 0.375rem;\n  --size-7: 0.4375rem;\n  --size-8: 0.5rem;\n  --size-9: 0.5625rem;\n  --size-10: 0.625rem;\n  --size-11: 0.6875rem;\n  --size-12: 0.75rem;\n  --size-13: 0.8125rem;\n  --size-14: 0.875rem;\n  --size-15: 0.9375rem;\n  --size-16: 1rem;\n  --size-17: 1.0625rem;\n  --size-18: 1.125rem;\n  --size-19: 1.1875rem;\n  --size-20: 1.25rem;\n  --size-21: 1.3125rem;\n  --size-22: 1.375rem;\n  --size-23: 1.4375rem;\n  --size-24: 1.5rem;\n  --size-25: 1.5625rem;\n  --size-26: 1.625rem;\n  --size-27: 1.6875rem;\n  --size-28: 1.75rem;\n  --size-29: 1.8125rem;\n  --size-30: 1.875rem;\n  --size-31: 1.9375rem;\n  --size-32: 2rem;\n  --size-40: 2.5rem;\n  --size-45: 2.8125rem;\n\n  --size-50: 3.125rem;\n}\n\n/* UTILITY */\n\n.fs-12 {\n  font-size: var(--size-12);\n}\n.fs-14 {\n  font-size: var(--size-14);\n}\n.fs-16 {\n  font-size: var(--size-16);\n}\n.fs-17 {\n  font-size: var(--size-17);\n}\n.el-width-700 {\n  width: var(--size-700);\n}\n.el-width-800 {\n  width: var(--size-800);\n}\n.el-width-900 {\n  width: 4rem;\n}\n.el-width-1000 {\n  width: 5rem;\n}\n.text-light {\n  color: var(--clr-light);\n}\n.text-accent-primary-300 {\n  color: var(--clr-accent-primary-300);\n}\n.text-accent-primary-700 {\n  color: var(--clr-accent-primary-700);\n}\n.text-pass-through-500 {\n  color: hsla(var(--clr-light-hsl), 50%);\n}\n.bg-neutral-200 {\n  background-color: var(--clr-neutral-200);\n}\n.bg-accent-500 {\n  background-color: var(--clr-accent-primary-500);\n}\n.bg-accent-700 {\n  background-color: var(--clr-accent-primary-700);\n}\n.bg-accent-secondary-500 {\n  background-color: var(--clr-accent-secondary-500);\n}\n.padding-block-6 {\n  padding: var(--size-6) var(--size-6);\n}\n.padding-block-7 {\n  padding: var(--size-7) var(--size-7);\n}\n.padding-block-9 {\n  padding: var(--size-9) var(--size-9);\n}\n.padding-block-16 {\n  padding: var(--size-16) var(--size-16);\n}\n.btn-secondary {\n  font-size: var(--size-14);\n  padding: var(--size-6) var(--size-25);\n}\n.btn-secondary:hover {\n  /* TODO: SHOULD ADD HLS white transparency */\n  background-color: var(--clr-accent-secondary-600);\n}\n.container {\n  --max-width: 1000px;\n  margin-inline: auto;\n  max-width: min(var(--max-width), (100% - 10rem));\n}\n.inline-block {\n  display: inline-block;\n}\n@media all and (max-width: 800px) {\n  .container {\n    max-width: min(var(--max-width), (100% - 2rem));\n  }\n}\n/* GENERIC ELEMENTS */\n\nbutton {\n  border-radius: var(--size-8);\n  white-space: nowrap;\n}\nbutton:hover {\n  cursor: pointer;\n}\ninput {\n  font-size: var(--size-18);\n  max-width: 100%;\n  padding-left: 2.3rem;\n\n  border: 1px solid hsl(var(--clr-light-hs), 90%);\n  border-radius: var(--size-8);\n}\n\n/* GENERAL STYLING */\n\n/* PRIMARY HEADER */\n.primary-header {\n  background-color: var(--clr-accent-primary-450);\n  position: relative;\n  z-index: 1;\n}\n.primary-header_container {\n  display: flex;\n  justify-content: space-between;\n}\n.logo {\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  gap: var(--size-6);\n}\n.filters-container {\n  display: flex;\n  align-items: center;\n  gap: var(--size-12);\n}\n.filters-container_list button {\n  background-color: transparent;\n}\n.filters-container_list button:hover {\n  color: var(--clr-accent-primary-900);\n}\n.filters-container_list .active {\n  color: var(--clr-light);\n  background-color: hsla(var(--clr-light-hsl), 0.1);\n}\n@media all and (max-width: 420px) {\n  .primary-header_container {\n    flex-direction: column;\n    gap: var(--size-18);\n    align-items: center;\n  }\n}\n\n/* CONTENT */\n.content_header {\n  background-color: hsl(var(--clr-light-hs), 97%);\n}\n.content_header-container {\n  display: flex;\n  justify-content: space-between;\n  padding: var(--size-17) 0;\n}\n.search {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: var(--size-15);\n  background-position: var(--size-12) 50%;\n}\n.search::placeholder {\n  font-size: var(--size-12);\n  opacity: 1;\n  color: hsl(var(--clr-light-hs), 75%);\n}\n.content_table-container {\n  padding-top: var(--size-32);\n  overflow-x: scroll;\n}\n.content_table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.content_table td,\nth {\n  white-space: nowrap;\n  text-align: left;\n  border-bottom: 1px solid hsl(var(--clr-light-hs), 90%);\n}\n.content_table th {\n  font-weight: 400;\n  color: hsl(var(--clr-light-hs), 70%);\n  padding: var(--size-7) var(--size-16);\n  font-size: var(--size-12);\n}\n.content_table td {\n  padding: var(--size-14) var(--size-16);\n}\n.content_table th:nth-child(1) {\n  width: 8rem;\n}\n.content_table th:nth-child(2) {\n  width: 15rem;\n}\n.content_table td:nth-child(1) {\n  color: hsl(var(--clr-light-hs), 50%);\n  font-size: var(--size-14);\n}\n.content_table td:nth-child(3) {\n  color: hsl(var(--clr-light-hs), 50%);\n  font-size: var(--size-14);\n}\n@media all and (max-width: 520px) {\n  .content_header-container {\n    flex-direction: column;\n    align-items: center;\n    gap: var(--size-8);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"AAEA;EACE,0BAA0B;;EAE1B,6BAA6B;EAC7B,qBAAqB;EACrB,4BAA4B;;EAE5B,iCAAiC;;EAEjC,gEAAgE;;EAEhE,kCAAkC;EAClC,oEAAoE;EACpE,oEAAoE;EACpE,oEAAoE;;EAEpE,8BAA8B;;EAE9B,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;EACnB,mBAAmB;EACnB,oBAAoB;EACpB,kBAAkB;EAClB,oBAAoB;EACpB,mBAAmB;EACnB,oBAAoB;EACpB,eAAe;EACf,oBAAoB;EACpB,mBAAmB;EACnB,oBAAoB;EACpB,kBAAkB;EAClB,oBAAoB;EACpB,mBAAmB;EACnB,oBAAoB;EACpB,iBAAiB;EACjB,oBAAoB;EACpB,mBAAmB;EACnB,oBAAoB;EACpB,kBAAkB;EAClB,oBAAoB;EACpB,mBAAmB;EACnB,oBAAoB;EACpB,eAAe;EACf,iBAAiB;EACjB,oBAAoB;;EAEpB,mBAAmB;AACrB;;AAEA,YAAY;;AAEZ;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,sBAAsB;AACxB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;AACb;AACA;EACE,uBAAuB;AACzB;AACA;EACE,oCAAoC;AACtC;AACA;EACE,oCAAoC;AACtC;AACA;EACE,sCAAsC;AACxC;AACA;EACE,wCAAwC;AAC1C;AACA;EACE,+CAA+C;AACjD;AACA;EACE,+CAA+C;AACjD;AACA;EACE,iDAAiD;AACnD;AACA;EACE,oCAAoC;AACtC;AACA;EACE,oCAAoC;AACtC;AACA;EACE,oCAAoC;AACtC;AACA;EACE,sCAAsC;AACxC;AACA;EACE,yBAAyB;EACzB,qCAAqC;AACvC;AACA;EACE,4CAA4C;EAC5C,iDAAiD;AACnD;AACA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,gDAAgD;AAClD;AACA;EACE,qBAAqB;AACvB;AACA;EACE;IACE,+CAA+C;EACjD;AACF;AACA,qBAAqB;;AAErB;EACE,4BAA4B;EAC5B,mBAAmB;AACrB;AACA;EACE,eAAe;AACjB;AACA;EACE,yBAAyB;EACzB,eAAe;EACf,oBAAoB;;EAEpB,+CAA+C;EAC/C,4BAA4B;AAC9B;;AAEA,oBAAoB;;AAEpB,mBAAmB;AACnB;EACE,+CAA+C;EAC/C,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,oCAAoC;AACtC;AACA;EACE,uBAAuB;EACvB,iDAAiD;AACnD;AACA;EACE;IACE,sBAAsB;IACtB,mBAAmB;IACnB,mBAAmB;EACrB;AACF;;AAEA,YAAY;AACZ;EACE,+CAA+C;AACjD;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,yBAAyB;AAC3B;AACA;EACE,yDAAuD;EACvD,4BAA4B;EAC5B,+BAA+B;EAC/B,uCAAuC;AACzC;AACA;EACE,yBAAyB;EACzB,UAAU;EACV,oCAAoC;AACtC;AACA;EACE,2BAA2B;EAC3B,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,yBAAyB;AAC3B;AACA;;EAEE,mBAAmB;EACnB,gBAAgB;EAChB,sDAAsD;AACxD;AACA;EACE,gBAAgB;EAChB,oCAAoC;EACpC,qCAAqC;EACrC,yBAAyB;AAC3B;AACA;EACE,sCAAsC;AACxC;AACA;EACE,WAAW;AACb;AACA;EACE,YAAY;AACd;AACA;EACE,oCAAoC;EACpC,yBAAyB;AAC3B;AACA;EACE,oCAAoC;EACpC,yBAAyB;AAC3B;AACA;EACE;IACE,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;EACpB;AACF","sourcesContent":["@import url('./reset-styles.css');\n\n:root {\n  --clr-main: hsl(0, 0%, 0%);\n\n  --clr-light: hsl(0, 0%, 100%);\n  --clr-light-hs: 0, 0%;\n  --clr-light-hsl: 0, 0%, 100%;\n\n  --clr-accent-primary-hs: 195, 68%;\n\n  --clr-accent-primary-450: hsl(var(--clr-accent-primary-hs), 45%);\n\n  --clr-accent-secondary-hs: 85, 54%;\n  --clr-accent-secondary-400: hsl(var(--clr-accent-secondary-hs), 40%);\n  --clr-accent-secondary-500: hsl(var(--clr-accent-secondary-hs), 50%);\n  --clr-accent-secondary-600: hsl(var(--clr-accent-secondary-hs), 60%);\n\n  font-family: Arial, sans-serif;\n\n  --size-1: 0.0625rem;\n  --size-2: 0.125rem;\n  --size-3: 0.1875rem;\n  --size-4: 0.25rem;\n  --size-5: 0.3125rem;\n  --size-6: 0.375rem;\n  --size-7: 0.4375rem;\n  --size-8: 0.5rem;\n  --size-9: 0.5625rem;\n  --size-10: 0.625rem;\n  --size-11: 0.6875rem;\n  --size-12: 0.75rem;\n  --size-13: 0.8125rem;\n  --size-14: 0.875rem;\n  --size-15: 0.9375rem;\n  --size-16: 1rem;\n  --size-17: 1.0625rem;\n  --size-18: 1.125rem;\n  --size-19: 1.1875rem;\n  --size-20: 1.25rem;\n  --size-21: 1.3125rem;\n  --size-22: 1.375rem;\n  --size-23: 1.4375rem;\n  --size-24: 1.5rem;\n  --size-25: 1.5625rem;\n  --size-26: 1.625rem;\n  --size-27: 1.6875rem;\n  --size-28: 1.75rem;\n  --size-29: 1.8125rem;\n  --size-30: 1.875rem;\n  --size-31: 1.9375rem;\n  --size-32: 2rem;\n  --size-40: 2.5rem;\n  --size-45: 2.8125rem;\n\n  --size-50: 3.125rem;\n}\n\n/* UTILITY */\n\n.fs-12 {\n  font-size: var(--size-12);\n}\n.fs-14 {\n  font-size: var(--size-14);\n}\n.fs-16 {\n  font-size: var(--size-16);\n}\n.fs-17 {\n  font-size: var(--size-17);\n}\n.el-width-700 {\n  width: var(--size-700);\n}\n.el-width-800 {\n  width: var(--size-800);\n}\n.el-width-900 {\n  width: 4rem;\n}\n.el-width-1000 {\n  width: 5rem;\n}\n.text-light {\n  color: var(--clr-light);\n}\n.text-accent-primary-300 {\n  color: var(--clr-accent-primary-300);\n}\n.text-accent-primary-700 {\n  color: var(--clr-accent-primary-700);\n}\n.text-pass-through-500 {\n  color: hsla(var(--clr-light-hsl), 50%);\n}\n.bg-neutral-200 {\n  background-color: var(--clr-neutral-200);\n}\n.bg-accent-500 {\n  background-color: var(--clr-accent-primary-500);\n}\n.bg-accent-700 {\n  background-color: var(--clr-accent-primary-700);\n}\n.bg-accent-secondary-500 {\n  background-color: var(--clr-accent-secondary-500);\n}\n.padding-block-6 {\n  padding: var(--size-6) var(--size-6);\n}\n.padding-block-7 {\n  padding: var(--size-7) var(--size-7);\n}\n.padding-block-9 {\n  padding: var(--size-9) var(--size-9);\n}\n.padding-block-16 {\n  padding: var(--size-16) var(--size-16);\n}\n.btn-secondary {\n  font-size: var(--size-14);\n  padding: var(--size-6) var(--size-25);\n}\n.btn-secondary:hover {\n  /* TODO: SHOULD ADD HLS white transparency */\n  background-color: var(--clr-accent-secondary-600);\n}\n.container {\n  --max-width: 1000px;\n  margin-inline: auto;\n  max-width: min(var(--max-width), (100% - 10rem));\n}\n.inline-block {\n  display: inline-block;\n}\n@media all and (max-width: 800px) {\n  .container {\n    max-width: min(var(--max-width), (100% - 2rem));\n  }\n}\n/* GENERIC ELEMENTS */\n\nbutton {\n  border-radius: var(--size-8);\n  white-space: nowrap;\n}\nbutton:hover {\n  cursor: pointer;\n}\ninput {\n  font-size: var(--size-18);\n  max-width: 100%;\n  padding-left: 2.3rem;\n\n  border: 1px solid hsl(var(--clr-light-hs), 90%);\n  border-radius: var(--size-8);\n}\n\n/* GENERAL STYLING */\n\n/* PRIMARY HEADER */\n.primary-header {\n  background-color: var(--clr-accent-primary-450);\n  position: relative;\n  z-index: 1;\n}\n.primary-header_container {\n  display: flex;\n  justify-content: space-between;\n}\n.logo {\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  gap: var(--size-6);\n}\n.filters-container {\n  display: flex;\n  align-items: center;\n  gap: var(--size-12);\n}\n.filters-container_list button {\n  background-color: transparent;\n}\n.filters-container_list button:hover {\n  color: var(--clr-accent-primary-900);\n}\n.filters-container_list .active {\n  color: var(--clr-light);\n  background-color: hsla(var(--clr-light-hsl), 0.1);\n}\n@media all and (max-width: 420px) {\n  .primary-header_container {\n    flex-direction: column;\n    gap: var(--size-18);\n    align-items: center;\n  }\n}\n\n/* CONTENT */\n.content_header {\n  background-color: hsl(var(--clr-light-hs), 97%);\n}\n.content_header-container {\n  display: flex;\n  justify-content: space-between;\n  padding: var(--size-17) 0;\n}\n.search {\n  background-image: url('../assets/magnifying-glass.svg');\n  background-repeat: no-repeat;\n  background-size: var(--size-15);\n  background-position: var(--size-12) 50%;\n}\n.search::placeholder {\n  font-size: var(--size-12);\n  opacity: 1;\n  color: hsl(var(--clr-light-hs), 75%);\n}\n.content_table-container {\n  padding-top: var(--size-32);\n  overflow-x: scroll;\n}\n.content_table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.content_table td,\nth {\n  white-space: nowrap;\n  text-align: left;\n  border-bottom: 1px solid hsl(var(--clr-light-hs), 90%);\n}\n.content_table th {\n  font-weight: 400;\n  color: hsl(var(--clr-light-hs), 70%);\n  padding: var(--size-7) var(--size-16);\n  font-size: var(--size-12);\n}\n.content_table td {\n  padding: var(--size-14) var(--size-16);\n}\n.content_table th:nth-child(1) {\n  width: 8rem;\n}\n.content_table th:nth-child(2) {\n  width: 15rem;\n}\n.content_table td:nth-child(1) {\n  color: hsl(var(--clr-light-hs), 50%);\n  font-size: var(--size-14);\n}\n.content_table td:nth-child(3) {\n  color: hsl(var(--clr-light-hs), 50%);\n  font-size: var(--size-14);\n}\n@media all and (max-width: 520px) {\n  .content_header-container {\n    flex-direction: column;\n    align-items: center;\n    gap: var(--size-8);\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLGFBQWEsTUFBTSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxhQUFhLGFBQWEsYUFBYSxPQUFPLGFBQWEsYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLFVBQVUsS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSwyREFBMkQsV0FBVywrQkFBK0Isb0NBQW9DLDBCQUEw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QUFJLEVBQUVFLEtBQUssQ0FBQztNQUMxQixPQUFPTCxFQUFFO0lBQ1gsQ0FBQztJQUNETixrQkFBa0IsRUFBRTtJQUNwQixNQUFNYyxRQUFRLEdBQUcxQyxRQUFRLENBQUN4QyxHQUFHLENBQUV5RSxJQUFJLElBQUtELGFBQWEsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7SUFDNURSLFNBQVMsQ0FBQ2dCLE1BQU0sQ0FBQyxHQUFHQyxRQUFRLENBQUM7RUFDL0IsQ0FBQztFQUNELE1BQU1DLElBQUksR0FBR0EsQ0FBQSxLQUFNO0lBQ2pCO0lBQ0F6QyxVQUFVLENBQUMsRUFBRSxDQUFDOztJQUVkO0lBQ0EsTUFBTTBDLFNBQVMsR0FBR2xCLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGFBQWEsQ0FBQztJQUN4RGlCLFNBQVMsQ0FBQ0MsS0FBSyxHQUFHLEVBQUU7SUFDcEIsTUFBTUMsT0FBTyxHQUFHL0IsUUFBUSxDQUFDYixVQUFVLEVBQUVELHFCQUFxQixDQUFDO0lBQzNEMkMsU0FBUyxDQUFDRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdDLENBQUMsSUFBSztNQUN6QyxNQUFNekIsS0FBSyxHQUFHeUIsQ0FBQyxDQUFDQyxNQUFNLENBQUNKLEtBQUs7TUFDNUIsSUFBSXZCLGFBQWEsQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7UUFDeEJ1QixPQUFPLENBQUN2QixLQUFLLENBQUM7TUFDaEIsQ0FBQyxNQUFNO1FBQ0w7UUFDQVYsT0FBTyxDQUFDQyxLQUFLLENBQ1gsMEZBQTBGLENBQzNGO01BQ0g7SUFDRixDQUFDLENBQUM7RUFDSixDQUFDO0VBQ0QsT0FBTztJQUFFNkI7RUFBSyxDQUFDO0FBQ2pCLENBQUMsRUFBRztBQUVKNUMsVUFBVSxDQUFDNEMsSUFBSSxFQUFFLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mZS10ZXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9mZS10ZXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9mZS10ZXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZmUtdGVzdC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzIiwid2VicGFjazovL2ZlLXRlc3QvLi9zcmMvc3R5bGVzL3Jlc2V0LXN0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vZmUtdGVzdC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzPzYzNDkiLCJ3ZWJwYWNrOi8vZmUtdGVzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9mZS10ZXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9mZS10ZXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2ZlLXRlc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZmUtdGVzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2ZlLXRlc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9mZS10ZXN0Ly4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9mZS10ZXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZlLXRlc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZmUtdGVzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmUtdGVzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2ZlLXRlc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mZS10ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmUtdGVzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9mZS10ZXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2ZlLXRlc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2ZlLXRlc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC1zdHlsZXMuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9tYWduaWZ5aW5nLWdsYXNzLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tY2xyLW1haW46IGhzbCgwLCAwJSwgMCUpO1xcblxcbiAgLS1jbHItbGlnaHQ6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICAtLWNsci1saWdodC1oczogMCwgMCU7XFxuICAtLWNsci1saWdodC1oc2w6IDAsIDAlLCAxMDAlO1xcblxcbiAgLS1jbHItYWNjZW50LXByaW1hcnktaHM6IDE5NSwgNjglO1xcblxcbiAgLS1jbHItYWNjZW50LXByaW1hcnktNDUwOiBoc2wodmFyKC0tY2xyLWFjY2VudC1wcmltYXJ5LWhzKSwgNDUlKTtcXG5cXG4gIC0tY2xyLWFjY2VudC1zZWNvbmRhcnktaHM6IDg1LCA1NCU7XFxuICAtLWNsci1hY2NlbnQtc2Vjb25kYXJ5LTQwMDogaHNsKHZhcigtLWNsci1hY2NlbnQtc2Vjb25kYXJ5LWhzKSwgNDAlKTtcXG4gIC0tY2xyLWFjY2VudC1zZWNvbmRhcnktNTAwOiBoc2wodmFyKC0tY2xyLWFjY2VudC1zZWNvbmRhcnktaHMpLCA1MCUpO1xcbiAgLS1jbHItYWNjZW50LXNlY29uZGFyeS02MDA6IGhzbCh2YXIoLS1jbHItYWNjZW50LXNlY29uZGFyeS1ocyksIDYwJSk7XFxuXFxuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFxuICAtLXNpemUtMTogMC4wNjI1cmVtO1xcbiAgLS1zaXplLTI6IDAuMTI1cmVtO1xcbiAgLS1zaXplLTM6IDAuMTg3NXJlbTtcXG4gIC0tc2l6ZS00OiAwLjI1cmVtO1xcbiAgLS1zaXplLTU6IDAuMzEyNXJlbTtcXG4gIC0tc2l6ZS02OiAwLjM3NXJlbTtcXG4gIC0tc2l6ZS03OiAwLjQzNzVyZW07XFxuICAtLXNpemUtODogMC41cmVtO1xcbiAgLS1zaXplLTk6IDAuNTYyNXJlbTtcXG4gIC0tc2l6ZS0xMDogMC42MjVyZW07XFxuICAtLXNpemUtMTE6IDAuNjg3NXJlbTtcXG4gIC0tc2l6ZS0xMjogMC43NXJlbTtcXG4gIC0tc2l6ZS0xMzogMC44MTI1cmVtO1xcbiAgLS1zaXplLTE0OiAwLjg3NXJlbTtcXG4gIC0tc2l6ZS0xNTogMC45Mzc1cmVtO1xcbiAgLS1zaXplLTE2OiAxcmVtO1xcbiAgLS1zaXplLTE3OiAxLjA2MjVyZW07XFxuICAtLXNpemUtMTg6IDEuMTI1cmVtO1xcbiAgLS1zaXplLTE5OiAxLjE4NzVyZW07XFxuICAtLXNpemUtMjA6IDEuMjVyZW07XFxuICAtLXNpemUtMjE6IDEuMzEyNXJlbTtcXG4gIC0tc2l6ZS0yMjogMS4zNzVyZW07XFxuICAtLXNpemUtMjM6IDEuNDM3NXJlbTtcXG4gIC0tc2l6ZS0yNDogMS41cmVtO1xcbiAgLS1zaXplLTI1OiAxLjU2MjVyZW07XFxuICAtLXNpemUtMjY6IDEuNjI1cmVtO1xcbiAgLS1zaXplLTI3OiAxLjY4NzVyZW07XFxuICAtLXNpemUtMjg6IDEuNzVyZW07XFxuICAtLXNpemUtMjk6IDEuODEyNXJlbTtcXG4gIC0tc2l6ZS0zMDogMS44NzVyZW07XFxuICAtLXNpemUtMzE6IDEuOTM3NXJlbTtcXG4gIC0tc2l6ZS0zMjogMnJlbTtcXG4gIC0tc2l6ZS00MDogMi41cmVtO1xcbiAgLS1zaXplLTQ1OiAyLjgxMjVyZW07XFxuXFxuICAtLXNpemUtNTA6IDMuMTI1cmVtO1xcbn1cXG5cXG4vKiBVVElMSVRZICovXFxuXFxuLmZzLTEyIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS0xMik7XFxufVxcbi5mcy0xNCB7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtMTQpO1xcbn1cXG4uZnMtMTYge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTE2KTtcXG59XFxuLmZzLTE3IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS0xNyk7XFxufVxcbi5lbC13aWR0aC03MDAge1xcbiAgd2lkdGg6IHZhcigtLXNpemUtNzAwKTtcXG59XFxuLmVsLXdpZHRoLTgwMCB7XFxuICB3aWR0aDogdmFyKC0tc2l6ZS04MDApO1xcbn1cXG4uZWwtd2lkdGgtOTAwIHtcXG4gIHdpZHRoOiA0cmVtO1xcbn1cXG4uZWwtd2lkdGgtMTAwMCB7XFxuICB3aWR0aDogNXJlbTtcXG59XFxuLnRleHQtbGlnaHQge1xcbiAgY29sb3I6IHZhcigtLWNsci1saWdodCk7XFxufVxcbi50ZXh0LWFjY2VudC1wcmltYXJ5LTMwMCB7XFxuICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudC1wcmltYXJ5LTMwMCk7XFxufVxcbi50ZXh0LWFjY2VudC1wcmltYXJ5LTcwMCB7XFxuICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudC1wcmltYXJ5LTcwMCk7XFxufVxcbi50ZXh0LXBhc3MtdGhyb3VnaC01MDAge1xcbiAgY29sb3I6IGhzbGEodmFyKC0tY2xyLWxpZ2h0LWhzbCksIDUwJSk7XFxufVxcbi5iZy1uZXV0cmFsLTIwMCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItbmV1dHJhbC0yMDApO1xcbn1cXG4uYmctYWNjZW50LTUwMCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50LXByaW1hcnktNTAwKTtcXG59XFxuLmJnLWFjY2VudC03MDAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudC1wcmltYXJ5LTcwMCk7XFxufVxcbi5iZy1hY2NlbnQtc2Vjb25kYXJ5LTUwMCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50LXNlY29uZGFyeS01MDApO1xcbn1cXG4ucGFkZGluZy1ibG9jay02IHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtNikgdmFyKC0tc2l6ZS02KTtcXG59XFxuLnBhZGRpbmctYmxvY2stNyB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTcpIHZhcigtLXNpemUtNyk7XFxufVxcbi5wYWRkaW5nLWJsb2NrLTkge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS05KSB2YXIoLS1zaXplLTkpO1xcbn1cXG4ucGFkZGluZy1ibG9jay0xNiB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTE2KSB2YXIoLS1zaXplLTE2KTtcXG59XFxuLmJ0bi1zZWNvbmRhcnkge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTE0KTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtNikgdmFyKC0tc2l6ZS0yNSk7XFxufVxcbi5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcXG4gIC8qIFRPRE86IFNIT1VMRCBBREQgSExTIHdoaXRlIHRyYW5zcGFyZW5jeSAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudC1zZWNvbmRhcnktNjAwKTtcXG59XFxuLmNvbnRhaW5lciB7XFxuICAtLW1heC13aWR0aDogMTAwMHB4O1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIG1heC13aWR0aDogbWluKHZhcigtLW1heC13aWR0aCksICgxMDAlIC0gMTByZW0pKTtcXG59XFxuLmlubGluZS1ibG9jayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiBtaW4odmFyKC0tbWF4LXdpZHRoKSwgKDEwMCUgLSAycmVtKSk7XFxuICB9XFxufVxcbi8qIEdFTkVSSUMgRUxFTUVOVFMgKi9cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2l6ZS04KTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbmJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmlucHV0IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS0xOCk7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDIuM3JlbTtcXG5cXG4gIGJvcmRlcjogMXB4IHNvbGlkIGhzbCh2YXIoLS1jbHItbGlnaHQtaHMpLCA5MCUpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2l6ZS04KTtcXG59XFxuXFxuLyogR0VORVJBTCBTVFlMSU5HICovXFxuXFxuLyogUFJJTUFSWSBIRUFERVIgKi9cXG4ucHJpbWFyeS1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudC1wcmltYXJ5LTQ1MCk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4ucHJpbWFyeS1oZWFkZXJfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5sb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGdhcDogdmFyKC0tc2l6ZS02KTtcXG59XFxuLmZpbHRlcnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiB2YXIoLS1zaXplLTEyKTtcXG59XFxuLmZpbHRlcnMtY29udGFpbmVyX2xpc3QgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uZmlsdGVycy1jb250YWluZXJfbGlzdCBidXR0b246aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWNsci1hY2NlbnQtcHJpbWFyeS05MDApO1xcbn1cXG4uZmlsdGVycy1jb250YWluZXJfbGlzdCAuYWN0aXZlIHtcXG4gIGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1jbHItbGlnaHQtaHNsKSwgMC4xKTtcXG59XFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcXG4gIC5wcmltYXJ5LWhlYWRlcl9jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IHZhcigtLXNpemUtMTgpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG4vKiBDT05URU5UICovXFxuLmNvbnRlbnRfaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCh2YXIoLS1jbHItbGlnaHQtaHMpLCA5NyUpO1xcbn1cXG4uY29udGVudF9oZWFkZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTE3KSAwO1xcbn1cXG4uc2VhcmNoIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiB2YXIoLS1zaXplLTE1KTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHZhcigtLXNpemUtMTIpIDUwJTtcXG59XFxuLnNlYXJjaDo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTEyKTtcXG4gIG9wYWNpdHk6IDE7XFxuICBjb2xvcjogaHNsKHZhcigtLWNsci1saWdodC1ocyksIDc1JSk7XFxufVxcbi5jb250ZW50X3RhYmxlLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nLXRvcDogdmFyKC0tc2l6ZS0zMik7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxufVxcbi5jb250ZW50X3RhYmxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuLmNvbnRlbnRfdGFibGUgdGQsXFxudGgge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgaHNsKHZhcigtLWNsci1saWdodC1ocyksIDkwJSk7XFxufVxcbi5jb250ZW50X3RhYmxlIHRoIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogaHNsKHZhcigtLWNsci1saWdodC1ocyksIDcwJSk7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTcpIHZhcigtLXNpemUtMTYpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTEyKTtcXG59XFxuLmNvbnRlbnRfdGFibGUgdGQge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS0xNCkgdmFyKC0tc2l6ZS0xNik7XFxufVxcbi5jb250ZW50X3RhYmxlIHRoOm50aC1jaGlsZCgxKSB7XFxuICB3aWR0aDogOHJlbTtcXG59XFxuLmNvbnRlbnRfdGFibGUgdGg6bnRoLWNoaWxkKDIpIHtcXG4gIHdpZHRoOiAxNXJlbTtcXG59XFxuLmNvbnRlbnRfdGFibGUgdGQ6bnRoLWNoaWxkKDEpIHtcXG4gIGNvbG9yOiBoc2wodmFyKC0tY2xyLWxpZ2h0LWhzKSwgNTAlKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS0xNCk7XFxufVxcbi5jb250ZW50X3RhYmxlIHRkOm50aC1jaGlsZCgzKSB7XFxuICBjb2xvcjogaHNsKHZhcigtLWNsci1saWdodC1ocyksIDUwJSk7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtMTQpO1xcbn1cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1MjBweCkge1xcbiAgLmNvbnRlbnRfaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogdmFyKC0tc2l6ZS04KTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSwwQkFBMEI7O0VBRTFCLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsNEJBQTRCOztFQUU1QixpQ0FBaUM7O0VBRWpDLGdFQUFnRTs7RUFFaEUsa0NBQWtDO0VBQ2xDLG9FQUFvRTtFQUNwRSxvRUFBb0U7RUFDcEUsb0VBQW9FOztFQUVwRSw4QkFBOEI7O0VBRTlCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFvQjs7RUFFcEIsbUJBQW1CO0FBQ3JCOztBQUVBLFlBQVk7O0FBRVo7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSx3Q0FBd0M7QUFDMUM7QUFDQTtFQUNFLCtDQUErQztBQUNqRDtBQUNBO0VBQ0UsK0NBQStDO0FBQ2pEO0FBQ0E7RUFDRSxpREFBaUQ7QUFDbkQ7QUFDQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLHNDQUFzQztBQUN4QztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHFDQUFxQztBQUN2QztBQUNBO0VBQ0UsNENBQTRDO0VBQzVDLGlEQUFpRDtBQUNuRDtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnREFBZ0Q7QUFDbEQ7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0U7SUFDRSwrQ0FBK0M7RUFDakQ7QUFDRjtBQUNBLHFCQUFxQjs7QUFFckI7RUFDRSw0QkFBNEI7RUFDNUIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG9CQUFvQjs7RUFFcEIsK0NBQStDO0VBQy9DLDRCQUE0QjtBQUM5Qjs7QUFFQSxvQkFBb0I7O0FBRXBCLG1CQUFtQjtBQUNuQjtFQUNFLCtDQUErQztFQUMvQyxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlEQUFpRDtBQUNuRDtBQUNBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBLFlBQVk7QUFDWjtFQUNFLCtDQUErQztBQUNqRDtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlEQUF1RDtFQUN2RCw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLHVDQUF1QztBQUN6QztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7QUFDQTs7RUFFRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNEQUFzRDtBQUN4RDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyxxQ0FBcUM7RUFDckMseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJy4vcmVzZXQtc3R5bGVzLmNzcycpO1xcblxcbjpyb290IHtcXG4gIC0tY2xyLW1haW46IGhzbCgwLCAwJSwgMCUpO1xcblxcbiAgLS1jbHItbGlnaHQ6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICAtLWNsci1saWdodC1oczogMCwgMCU7XFxuICAtLWNsci1saWdodC1oc2w6IDAsIDAlLCAxMDAlO1xcblxcbiAgLS1jbHItYWNjZW50LXByaW1hcnktaHM6IDE5NSwgNjglO1xcblxcbiAgLS1jbHItYWNjZW50LXByaW1hcnktNDUwOiBoc2wodmFyKC0tY2xyLWFjY2VudC1wcmltYXJ5LWhzKSwgNDUlKTtcXG5cXG4gIC0tY2xyLWFjY2VudC1zZWNvbmRhcnktaHM6IDg1LCA1NCU7XFxuICAtLWNsci1hY2NlbnQtc2Vjb25kYXJ5LTQwMDogaHNsKHZhcigtLWNsci1hY2NlbnQtc2Vjb25kYXJ5LWhzKSwgNDAlKTtcXG4gIC0tY2xyLWFjY2VudC1zZWNvbmRhcnktNTAwOiBoc2wodmFyKC0tY2xyLWFjY2VudC1zZWNvbmRhcnktaHMpLCA1MCUpO1xcbiAgLS1jbHItYWNjZW50LXNlY29uZGFyeS02MDA6IGhzbCh2YXIoLS1jbHItYWNjZW50LXNlY29uZGFyeS1ocyksIDYwJSk7XFxuXFxuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFxuICAtLXNpemUtMTogMC4wNjI1cmVtO1xcbiAgLS1zaXplLTI6IDAuMTI1cmVtO1xcbiAgLS1zaXplLTM6IDAuMTg3NXJlbTtcXG4gIC0tc2l6ZS00OiAwLjI1cmVtO1xcbiAgLS1zaXplLTU6IDAuMzEyNXJlbTtcXG4gIC0tc2l6ZS02OiAwLjM3NXJlbTtcXG4gIC0tc2l6ZS03OiAwLjQzNzVyZW07XFxuICAtLXNpemUtODogMC41cmVtO1xcbiAgLS1zaXplLTk6IDAuNTYyNXJlbTtcXG4gIC0tc2l6ZS0xMDogMC42MjVyZW07XFxuICAtLXNpemUtMTE6IDAuNjg3NXJlbTtcXG4gIC0tc2l6ZS0xMjogMC43NXJlbTtcXG4gIC0tc2l6ZS0xMzogMC44MTI1cmVtO1xcbiAgLS1zaXplLTE0OiAwLjg3NXJlbTtcXG4gIC0tc2l6ZS0xNTogMC45Mzc1cmVtO1xcbiAgLS1zaXplLTE2OiAxcmVtO1xcbiAgLS1zaXplLTE3OiAxLjA2MjVyZW07XFxuICAtLXNpemUtMTg6IDEuMTI1cmVtO1xcbiAgLS1zaXplLTE5OiAxLjE4NzVyZW07XFxuICAtLXNpemUtMjA6IDEuMjVyZW07XFxuICAtLXNpemUtMjE6IDEuMzEyNXJlbTtcXG4gIC0tc2l6ZS0yMjogMS4zNzVyZW07XFxuICAtLXNpemUtMjM6IDEuNDM3NXJlbTtcXG4gIC0tc2l6ZS0yNDogMS41cmVtO1xcbiAgLS1zaXplLTI1OiAxLjU2MjVyZW07XFxuICAtLXNpemUtMjY6IDEuNjI1cmVtO1xcbiAgLS1zaXplLTI3OiAxLjY4NzVyZW07XFxuICAtLXNpemUtMjg6IDEuNzVyZW07XFxuICAtLXNpemUtMjk6IDEuODEyNXJlbTtcXG4gIC0tc2l6ZS0zMDogMS44NzVyZW07XFxuICAtLXNpemUtMzE6IDEuOTM3NXJlbTtcXG4gIC0tc2l6ZS0zMjogMnJlbTtcXG4gIC0tc2l6ZS00MDogMi41cmVtO1xcbiAgLS1zaXplLTQ1OiAyLjgxMjVyZW07XFxuXFxuICAtLXNpemUtNTA6IDMuMTI1cmVtO1xcbn1cXG5cXG4vKiBVVElMSVRZICovXFxuXFxuLmZzLTEyIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS0xMik7XFxufVxcbi5mcy0xNCB7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtMTQpO1xcbn1cXG4uZnMtMTYge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTE2KTtcXG59XFxuLmZzLTE3IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS0xNyk7XFxufVxcbi5lbC13aWR0aC03MDAge1xcbiAgd2lkdGg6IHZhcigtLXNpemUtNzAwKTtcXG59XFxuLmVsLXdpZHRoLTgwMCB7XFxuICB3aWR0aDogdmFyKC0tc2l6ZS04MDApO1xcbn1cXG4uZWwtd2lkdGgtOTAwIHtcXG4gIHdpZHRoOiA0cmVtO1xcbn1cXG4uZWwtd2lkdGgtMTAwMCB7XFxuICB3aWR0aDogNXJlbTtcXG59XFxuLnRleHQtbGlnaHQge1xcbiAgY29sb3I6IHZhcigtLWNsci1saWdodCk7XFxufVxcbi50ZXh0LWFjY2VudC1wcmltYXJ5LTMwMCB7XFxuICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudC1wcmltYXJ5LTMwMCk7XFxufVxcbi50ZXh0LWFjY2VudC1wcmltYXJ5LTcwMCB7XFxuICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudC1wcmltYXJ5LTcwMCk7XFxufVxcbi50ZXh0LXBhc3MtdGhyb3VnaC01MDAge1xcbiAgY29sb3I6IGhzbGEodmFyKC0tY2xyLWxpZ2h0LWhzbCksIDUwJSk7XFxufVxcbi5iZy1uZXV0cmFsLTIwMCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItbmV1dHJhbC0yMDApO1xcbn1cXG4uYmctYWNjZW50LTUwMCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50LXByaW1hcnktNTAwKTtcXG59XFxuLmJnLWFjY2VudC03MDAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudC1wcmltYXJ5LTcwMCk7XFxufVxcbi5iZy1hY2NlbnQtc2Vjb25kYXJ5LTUwMCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50LXNlY29uZGFyeS01MDApO1xcbn1cXG4ucGFkZGluZy1ibG9jay02IHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtNikgdmFyKC0tc2l6ZS02KTtcXG59XFxuLnBhZGRpbmctYmxvY2stNyB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTcpIHZhcigtLXNpemUtNyk7XFxufVxcbi5wYWRkaW5nLWJsb2NrLTkge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS05KSB2YXIoLS1zaXplLTkpO1xcbn1cXG4ucGFkZGluZy1ibG9jay0xNiB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTE2KSB2YXIoLS1zaXplLTE2KTtcXG59XFxuLmJ0bi1zZWNvbmRhcnkge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTE0KTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtNikgdmFyKC0tc2l6ZS0yNSk7XFxufVxcbi5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcXG4gIC8qIFRPRE86IFNIT1VMRCBBREQgSExTIHdoaXRlIHRyYW5zcGFyZW5jeSAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudC1zZWNvbmRhcnktNjAwKTtcXG59XFxuLmNvbnRhaW5lciB7XFxuICAtLW1heC13aWR0aDogMTAwMHB4O1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIG1heC13aWR0aDogbWluKHZhcigtLW1heC13aWR0aCksICgxMDAlIC0gMTByZW0pKTtcXG59XFxuLmlubGluZS1ibG9jayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiBtaW4odmFyKC0tbWF4LXdpZHRoKSwgKDEwMCUgLSAycmVtKSk7XFxuICB9XFxufVxcbi8qIEdFTkVSSUMgRUxFTUVOVFMgKi9cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2l6ZS04KTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbmJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmlucHV0IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS0xOCk7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDIuM3JlbTtcXG5cXG4gIGJvcmRlcjogMXB4IHNvbGlkIGhzbCh2YXIoLS1jbHItbGlnaHQtaHMpLCA5MCUpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2l6ZS04KTtcXG59XFxuXFxuLyogR0VORVJBTCBTVFlMSU5HICovXFxuXFxuLyogUFJJTUFSWSBIRUFERVIgKi9cXG4ucHJpbWFyeS1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudC1wcmltYXJ5LTQ1MCk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4ucHJpbWFyeS1oZWFkZXJfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5sb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGdhcDogdmFyKC0tc2l6ZS02KTtcXG59XFxuLmZpbHRlcnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiB2YXIoLS1zaXplLTEyKTtcXG59XFxuLmZpbHRlcnMtY29udGFpbmVyX2xpc3QgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uZmlsdGVycy1jb250YWluZXJfbGlzdCBidXR0b246aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWNsci1hY2NlbnQtcHJpbWFyeS05MDApO1xcbn1cXG4uZmlsdGVycy1jb250YWluZXJfbGlzdCAuYWN0aXZlIHtcXG4gIGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1jbHItbGlnaHQtaHNsKSwgMC4xKTtcXG59XFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcXG4gIC5wcmltYXJ5LWhlYWRlcl9jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IHZhcigtLXNpemUtMTgpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG4vKiBDT05URU5UICovXFxuLmNvbnRlbnRfaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCh2YXIoLS1jbHItbGlnaHQtaHMpLCA5NyUpO1xcbn1cXG4uY29udGVudF9oZWFkZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTE3KSAwO1xcbn1cXG4uc2VhcmNoIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL21hZ25pZnlpbmctZ2xhc3Muc3ZnJyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiB2YXIoLS1zaXplLTE1KTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHZhcigtLXNpemUtMTIpIDUwJTtcXG59XFxuLnNlYXJjaDo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTEyKTtcXG4gIG9wYWNpdHk6IDE7XFxuICBjb2xvcjogaHNsKHZhcigtLWNsci1saWdodC1ocyksIDc1JSk7XFxufVxcbi5jb250ZW50X3RhYmxlLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nLXRvcDogdmFyKC0tc2l6ZS0zMik7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxufVxcbi5jb250ZW50X3RhYmxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuLmNvbnRlbnRfdGFibGUgdGQsXFxudGgge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgaHNsKHZhcigtLWNsci1saWdodC1ocyksIDkwJSk7XFxufVxcbi5jb250ZW50X3RhYmxlIHRoIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogaHNsKHZhcigtLWNsci1saWdodC1ocyksIDcwJSk7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTcpIHZhcigtLXNpemUtMTYpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTEyKTtcXG59XFxuLmNvbnRlbnRfdGFibGUgdGQge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS0xNCkgdmFyKC0tc2l6ZS0xNik7XFxufVxcbi5jb250ZW50X3RhYmxlIHRoOm50aC1jaGlsZCgxKSB7XFxuICB3aWR0aDogOHJlbTtcXG59XFxuLmNvbnRlbnRfdGFibGUgdGg6bnRoLWNoaWxkKDIpIHtcXG4gIHdpZHRoOiAxNXJlbTtcXG59XFxuLmNvbnRlbnRfdGFibGUgdGQ6bnRoLWNoaWxkKDEpIHtcXG4gIGNvbG9yOiBoc2wodmFyKC0tY2xyLWxpZ2h0LWhzKSwgNTAlKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS0xNCk7XFxufVxcbi5jb250ZW50X3RhYmxlIHRkOm50aC1jaGlsZCgzKSB7XFxuICBjb2xvcjogaHNsKHZhcigtLWNsci1saWdodC1ocyksIDUwJSk7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtMTQpO1xcbn1cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1MjBweCkge1xcbiAgLmNvbnRlbnRfaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogdmFyKC0tc2l6ZS04KTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQ3VzdG9tIHJ1bGVzICovXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLyogQm94IHNpemluZyBydWxlcyAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbnAsXFxuZmlndXJlLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBSZW1vdmUgbGlzdCBzdHlsZXMgb24gdWwsIG9sIGVsZW1lbnRzIHdpdGggYSBsaXN0IHJvbGUsIHdoaWNoIHN1Z2dlc3RzIGRlZmF1bHQgc3R5bGluZyB3aWxsIGJlIHJlbW92ZWQgKi9cXG51bFtyb2xlPSdsaXN0J10sXFxub2xbcm9sZT0nbGlzdCddIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIFNldCBjb3JlIHJvb3QgZGVmYXVsdHMgKi9cXG5odG1sOmZvY3VzLXdpdGhpbiB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi8qIEEgZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIGEgY2xhc3MgZ2V0IGRlZmF1bHQgc3R5bGVzICovXFxuYTpub3QoW2NsYXNzXSkge1xcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xcbn1cXG5cXG4vKiBNYWtlIGltYWdlcyBlYXNpZXIgdG8gd29yayB3aXRoICovXFxuaW1nLFxcbnBpY3R1cmUge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIEluaGVyaXQgZm9udHMgZm9yIGlucHV0cyBhbmQgYnV0dG9ucyAqL1xcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuLyogUmVtb3ZlIGFsbCBhbmltYXRpb25zLCB0cmFuc2l0aW9ucyBhbmQgc21vb3RoIHNjcm9sbCBmb3IgcGVvcGxlIHRoYXQgcHJlZmVyIG5vdCB0byBzZWUgdGhlbSAqL1xcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxuICBodG1sOmZvY3VzLXdpdGhpbiB7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcXG4gIH1cXG5cXG4gICosXFxuICAqOjpiZWZvcmUsXFxuICAqOjphZnRlciB7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3Jlc2V0LXN0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsaUJBQWlCO0FBQ2pCO0VBQ0UsWUFBWTtBQUNkOztBQUVBLHFCQUFxQjtBQUNyQjs7O0VBR0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUEsMEJBQTBCO0FBQzFCOzs7Ozs7Ozs7O0VBVUUsU0FBUztBQUNYOztBQUVBLDJHQUEyRztBQUMzRzs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOztBQUVBLDBEQUEwRDtBQUMxRDtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQSxvQ0FBb0M7QUFDcEM7O0VBRUUsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUEseUNBQXlDO0FBQ3pDOzs7O0VBSUUsYUFBYTtBQUNmOztBQUVBLGdHQUFnRztBQUNoRztFQUNFO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBOzs7SUFHRSxxQ0FBcUM7SUFDckMsdUNBQXVDO0lBQ3ZDLHNDQUFzQztJQUN0QyxnQ0FBZ0M7RUFDbEM7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBDdXN0b20gcnVsZXMgKi9cXG5idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiBCb3ggc2l6aW5nIHJ1bGVzICovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxucCxcXG5maWd1cmUsXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGxpc3Qgcm9sZSwgd2hpY2ggc3VnZ2VzdHMgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZCAqL1xcbnVsW3JvbGU9J2xpc3QnXSxcXG5vbFtyb2xlPSdsaXN0J10ge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogU2V0IGNvcmUgcm9vdCBkZWZhdWx0cyAqL1xcbmh0bWw6Zm9jdXMtd2l0aGluIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG4vKiBTZXQgY29yZSBib2R5IGRlZmF1bHRzICovXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLyogQSBlbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgYSBjbGFzcyBnZXQgZGVmYXVsdCBzdHlsZXMgKi9cXG5hOm5vdChbY2xhc3NdKSB7XFxuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XFxufVxcblxcbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cXG5pbWcsXFxucGljdHVyZSB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogSW5oZXJpdCBmb250cyBmb3IgaW5wdXRzIGFuZCBidXR0b25zICovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG4vKiBSZW1vdmUgYWxsIGFuaW1hdGlvbnMsIHRyYW5zaXRpb25zIGFuZCBzbW9vdGggc2Nyb2xsIGZvciBwZW9wbGUgdGhhdCBwcmVmZXIgbm90IHRvIHNlZSB0aGVtICovXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXG4gIGh0bWw6Zm9jdXMtd2l0aGluIHtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvO1xcbiAgfVxcblxcbiAgKixcXG4gICo6OmJlZm9yZSxcXG4gICo6OmFmdGVyIHtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBBUElfVVJMID0gJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbSc7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5jc3MnO1xuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gJy4vY29uc3RhbnRzLmpzJztcblxuY29uc3QgVXNlclNlYXJjaCA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCB1c2VyTGlzdCA9IG51bGw7XG4gIGNvbnN0IFNFQVJDSF9USU1FT1VUX0FNT1VOVCA9IDYwMDtcblxuICBjb25zdCBmZXRjaFVzZXJzID0gYXN5bmMgKHNlYXJjaFN0cikgPT4ge1xuICAgIHVzZXJMaXN0ID0gbnVsbDtcbiAgICB0cnkge1xuICAgICAgLy8gVE9ETzogc3RhcnQgbG9hZGluZyBpY29uXG4gICAgICAvLyBzaG91bGQgcGFnaW5hdGUgZm9yIGJldHRlciBwZXJmb3JtYW5jZVxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS91c2Vycz9uYW1lX2xpa2U9JHtzZWFyY2hTdHJ9YCk7XG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gZXJyb3Igb2NjdXJlZCAoJHtyZXNwb25zZS5zdGF0dXN9KWApO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzcG9uc2VKU09OID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgdXNlckxpc3QgPSByZXNwb25zZUpTT047XG4gICAgICB1cGRhdGVVSSgpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gVE9ETzogc2hvdyB1c2VyIGVycm9yIG1lc3NhZ2VcblxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICAvLyBUT0RPOiBzdG9wIGxvYWRpbmcgaWNvblxuICAgIH1cbiAgfTtcbiAgY29uc3QgZGVib3VuY2UgPSAoY2FsbGJhY2ssIGRlbGF5ID0gNTAwKSA9PiB7XG4gICAgbGV0IHRpbWVyID0gbnVsbDtcblxuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNhbGxiYWNrKC4uLmFyZ3MpO1xuICAgICAgfSwgZGVsYXkpO1xuICAgIH07XG4gIH07XG4gIGNvbnN0IHZhbGlkYXRlSW5wdXQgPSAoaW5wdXQpID0+IHtcbiAgICAvLyBhbHBoYWJldGljIGNoYXJhY3RlcnMsIHdoaXRlc3BhY2UgYW5kIGVtcHR5IHN0cmluZ1xuICAgIGNvbnN0IHJlZ2V4ID0gL15bYS16QS1aXFxzXSokLztcbiAgICByZXR1cm4gcmVnZXgudGVzdChpbnB1dCk7XG4gIH07XG4gIGNvbnN0IHVwZGF0ZVVJID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhYmxlQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50X3RhYmxlLWJvZHknKTtcblxuICAgIGNvbnN0IHJlc2V0TGlzdENvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgIHdoaWxlICh0YWJsZUJvZHkuZmlyc3RDaGlsZCkge1xuICAgICAgICB0YWJsZUJvZHkucmVtb3ZlQ2hpbGQodGFibGVCb2R5Lmxhc3RDaGlsZCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBjcmVhdGVSb3dOb2RlID0gKHVzZXIpID0+IHtcbiAgICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcblxuICAgICAgY29uc3QgbmFtZSA9IHRkLmNsb25lTm9kZSgpO1xuICAgICAgY29uc3QgaWQgPSB0ZC5jbG9uZU5vZGUoKTtcbiAgICAgIGNvbnN0IGVtYWlsID0gdGQuY2xvbmVOb2RlKCk7XG5cbiAgICAgIG5hbWUudGV4dENvbnRlbnQgPSB1c2VyLm5hbWU7XG4gICAgICBpZC50ZXh0Q29udGVudCA9IHVzZXIuaWQ7XG4gICAgICBlbWFpbC50ZXh0Q29udGVudCA9IHVzZXIuZW1haWw7XG5cbiAgICAgIHRyLmFwcGVuZChpZCwgbmFtZSwgZW1haWwpO1xuICAgICAgcmV0dXJuIHRyO1xuICAgIH07XG4gICAgcmVzZXRMaXN0Q29udGFpbmVyKCk7XG4gICAgY29uc3Qgcm93Tm9kZXMgPSB1c2VyTGlzdC5tYXAoKHVzZXIpID0+IGNyZWF0ZVJvd05vZGUodXNlcikpO1xuICAgIHRhYmxlQm9keS5hcHBlbmQoLi4ucm93Tm9kZXMpO1xuICB9O1xuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIC8vIGRpc3BsYXkgYWxsIGl0ZW1zXG4gICAgZmV0Y2hVc2VycygnJyk7XG5cbiAgICAvLyBlbmFibGUgaXRlbSBzZWFyY2hcbiAgICBjb25zdCBzZWFyY2hCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdC1zZWFyY2gnKTtcbiAgICBzZWFyY2hCb3gudmFsdWUgPSAnJztcbiAgICBjb25zdCBvbklucHV0ID0gZGVib3VuY2UoZmV0Y2hVc2VycywgU0VBUkNIX1RJTUVPVVRfQU1PVU5UKTtcbiAgICBzZWFyY2hCb3guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgY29uc3QgaW5wdXQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIGlmICh2YWxpZGF0ZUlucHV0KGlucHV0KSkge1xuICAgICAgICBvbklucHV0KGlucHV0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFRPRE86IHNob3cgdXNlciBlcnJvciBtZXNzYWdlXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgJ09ubHkgYWxwaGFiZXRpYyBjaGFyYWN0ZXJzLCB3aGl0ZXNwYWNlcyBhbmQgZW1wdHkgc3RyaW5ncyBhcmUgYWxsb3dlZCBpbiB0aGUgaW5wdXQgZmllbGQnLFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICByZXR1cm4geyBpbml0IH07XG59KSgpO1xuXG5Vc2VyU2VhcmNoLmluaXQoKTtcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJpZCIsIl9rIiwicHVzaCIsInVybCIsIm9wdGlvbnMiLCJTdHJpbmciLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsInRlc3QiLCJzbGljZSIsImhhc2giLCJuZWVkUXVvdGVzIiwicmVwbGFjZSIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJBUElfVVJMIiwiVXNlclNlYXJjaCIsInVzZXJMaXN0IiwiU0VBUkNIX1RJTUVPVVRfQU1PVU5UIiwiZmV0Y2hVc2VycyIsInNlYXJjaFN0ciIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwic3RhdHVzIiwicmVzcG9uc2VKU09OIiwianNvbiIsInVwZGF0ZVVJIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiZGVib3VuY2UiLCJjYWxsYmFjayIsImRlbGF5IiwidGltZXIiLCJhcmdzIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInZhbGlkYXRlSW5wdXQiLCJpbnB1dCIsInJlZ2V4IiwidGFibGVCb2R5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlc2V0TGlzdENvbnRhaW5lciIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsImNyZWF0ZVJvd05vZGUiLCJ1c2VyIiwidHIiLCJjcmVhdGVFbGVtZW50IiwidGQiLCJuYW1lIiwiY2xvbmVOb2RlIiwiZW1haWwiLCJ0ZXh0Q29udGVudCIsImFwcGVuZCIsInJvd05vZGVzIiwiaW5pdCIsInNlYXJjaEJveCIsInZhbHVlIiwib25JbnB1dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==