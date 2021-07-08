/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/play/[hash]";
exports.ids = ["pages/play/[hash]"];
exports.modules = {

/***/ "./data/actress.json":
/*!***************************!*\
  !*** ./data/actress.json ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('[{"name":"Aika Yamagishi","code":"PRED-271","photo":"https://pics.dmm.co.jp/mono/movie/adult/pred271/pred271pl.jpg","c464410b157349a3b19f7401077b6f1c":"https://sbembed3.com/e/r0scx1ckyf1r.html"}]');

/***/ }),

/***/ "./pages/play/[hash].js":
/*!******************************!*\
  !*** ./pages/play/[hash].js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Hash; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; },\n/* harmony export */   \"getStaticPaths\": function() { return /* binding */ getStaticPaths; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_actress_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/actress.json */ \"./data/actress.json\");\n\nvar _jsxFileName = \"/Users/alphakas/Desktop/pproject/pages/play/[hash].js\";\n\n\nfunction Hash({\n  name,\n  code,\n  photo,\n  url\n}) {\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    window.history.pushState(\"object or string\", \"Title\", `/${name}/${code}`);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    id: \"main\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      id: \"name\",\n      children: name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n      id: \"code\",\n      children: code\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      id: \"photo\",\n      src: photo\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      id: \"video\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n        id: \"frame\",\n        src: url,\n        frameBorder: 0,\n        marginWidth: 0,\n        marginHeight: 0,\n        scrolling: \"NO\",\n        allowFullScreen: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 10\n  }, this);\n}\nasync function getStaticProps(context) {\n  const hash = context.params.hash;\n  const obj = _data_actress_json__WEBPACK_IMPORTED_MODULE_2__.find(act => Object.keys(act)[3] === hash);\n  const video = obj[hash];\n  const name = obj[\"name\"];\n  const photo = obj[\"photo\"];\n  const code = obj[\"code\"];\n  return {\n    props: {\n      name,\n      code,\n      photo,\n      url: video\n    }\n  };\n}\nasync function getStaticPaths() {\n  const paths = _data_actress_json__WEBPACK_IMPORTED_MODULE_2__.map(act => {\n    return {\n      params: {\n        'hash': Object.keys(act)[3]\n      }\n    };\n  });\n  return {\n    paths,\n    fallback: false\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcHJvamVjdC8uL3BhZ2VzL3BsYXkvW2hhc2hdLmpzPzIyNzQiXSwibmFtZXMiOlsiSGFzaCIsIm5hbWUiLCJjb2RlIiwicGhvdG8iLCJ1cmwiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwiaGFzaCIsInBhcmFtcyIsIm9iaiIsImFjdHJlc3MiLCJhY3QiLCJPYmplY3QiLCJrZXlzIiwidmlkZW8iLCJwcm9wcyIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJmYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULENBQWM7QUFBQ0MsTUFBRDtBQUFPQyxNQUFQO0FBQWFDLE9BQWI7QUFBb0JDO0FBQXBCLENBQWQsRUFBdUM7QUFFcERDLGtEQUFTLENBQUMsTUFBSTtBQUNkQyxVQUFNLENBQUNDLE9BQVAsQ0FBZUMsU0FBZixDQUF5QixrQkFBekIsRUFBNkMsT0FBN0MsRUFBdUQsSUFBR1AsSUFBSyxJQUFHQyxJQUFLLEVBQXZFO0FBQ0MsR0FGUSxFQUVQLEVBRk8sQ0FBVDtBQUlBLHNCQUFPO0FBQUssTUFBRSxFQUFDLE1BQVI7QUFBQSw0QkFDTDtBQUFJLFFBQUUsRUFBQyxNQUFQO0FBQUEsZ0JBQWVEO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURLLGVBRUw7QUFBSSxRQUFFLEVBQUMsTUFBUDtBQUFBLGdCQUFlQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSyxlQUdMO0FBQUssUUFBRSxFQUFDLE9BQVI7QUFBZ0IsU0FBRyxFQUFFQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEssZUFJTDtBQUFLLFFBQUUsRUFBQyxPQUFSO0FBQUEsNkJBQ0E7QUFDRSxVQUFFLEVBQUMsT0FETDtBQUVFLFdBQUcsRUFBRUMsR0FGUDtBQUdFLG1CQUFXLEVBQUUsQ0FIZjtBQUlFLG1CQUFXLEVBQUUsQ0FKZjtBQUtFLG9CQUFZLEVBQUUsQ0FMaEI7QUFNRSxpQkFBUyxFQUFDLElBTlo7QUFPRSx1QkFBZTtBQVBqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBa0JEO0FBRU0sZUFBZUssY0FBZixDQUE4QkMsT0FBOUIsRUFBdUM7QUFDNUMsUUFBTUMsSUFBSSxHQUFJRCxPQUFPLENBQUNFLE1BQVIsQ0FBZUQsSUFBN0I7QUFDQSxRQUFNRSxHQUFHLEdBQUdDLG9EQUFBLENBQWFDLEdBQUcsSUFBSUMsTUFBTSxDQUFDQyxJQUFQLENBQVlGLEdBQVosRUFBaUIsQ0FBakIsTUFBd0JKLElBQTVDLENBQVo7QUFDQSxRQUFNTyxLQUFLLEdBQUdMLEdBQUcsQ0FBQ0YsSUFBRCxDQUFqQjtBQUNBLFFBQU1WLElBQUksR0FBRVksR0FBRyxDQUFDLE1BQUQsQ0FBZjtBQUNBLFFBQU1WLEtBQUssR0FBR1UsR0FBRyxDQUFDLE9BQUQsQ0FBakI7QUFDQSxRQUFNWCxJQUFJLEdBQUdXLEdBQUcsQ0FBQyxNQUFELENBQWhCO0FBQ0EsU0FBTztBQUNMTSxTQUFLLEVBQUU7QUFDTGxCLFVBREs7QUFFTEMsVUFGSztBQUdMQyxXQUhLO0FBSUxDLFNBQUcsRUFBRWM7QUFKQTtBQURGLEdBQVA7QUFPRDtBQUVNLGVBQWVFLGNBQWYsR0FBZ0M7QUFDckMsUUFBTUMsS0FBSyxHQUFHUCxtREFBQSxDQUFZQyxHQUFHLElBQUk7QUFDL0IsV0FBTztBQUFFSCxZQUFNLEVBQUU7QUFBRSxnQkFBU0ksTUFBTSxDQUFDQyxJQUFQLENBQVlGLEdBQVosRUFBaUIsQ0FBakI7QUFBWDtBQUFWLEtBQVA7QUFDRCxHQUZhLENBQWQ7QUFHQSxTQUFPO0FBQ0xNLFNBREs7QUFFTEMsWUFBUSxFQUFDO0FBRkosR0FBUDtBQUlEIiwiZmlsZSI6Ii4vcGFnZXMvcGxheS9baGFzaF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYWN0cmVzcyBmcm9tICcuLi8uLi9kYXRhL2FjdHJlc3MuanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhhc2goe25hbWUsIGNvZGUsIHBob3RvLCB1cmx9KXtcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKFwib2JqZWN0IG9yIHN0cmluZ1wiLCBcIlRpdGxlXCIsIGAvJHtuYW1lfS8ke2NvZGV9YCk7XG4gIH0sW10pO1xuICBcbiAgcmV0dXJuIDxkaXYgaWQ9XCJtYWluXCI+XG4gICAgPGgxIGlkPVwibmFtZVwiPntuYW1lfTwvaDE+XG4gICAgPGgzIGlkPVwiY29kZVwiPntjb2RlfTwvaDM+XG4gICAgPGltZyBpZD1cInBob3RvXCIgc3JjPXtwaG90b30vPlxuICAgIDxkaXYgaWQ9XCJ2aWRlb1wiPlxuICAgIDxpZnJhbWUgXG4gICAgICBpZD1cImZyYW1lXCJcbiAgICAgIHNyYz17dXJsfSBcbiAgICAgIGZyYW1lQm9yZGVyPXswfVxuICAgICAgbWFyZ2luV2lkdGg9ezB9XG4gICAgICBtYXJnaW5IZWlnaHQ9ezB9XG4gICAgICBzY3JvbGxpbmc9XCJOT1wiXG4gICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAvPiBcbiAgICAgIFxuICAgIDwvZGl2PlxuICAgIFxuICA8L2Rpdj5cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgaGFzaCA9ICBjb250ZXh0LnBhcmFtcy5oYXNoO1xuICBjb25zdCBvYmogPSBhY3RyZXNzLmZpbmQoYWN0ID0+IE9iamVjdC5rZXlzKGFjdClbM10gPT09IGhhc2gpO1xuICBjb25zdCB2aWRlbyA9IG9ialtoYXNoXTtcbiAgY29uc3QgbmFtZT0gb2JqW1wibmFtZVwiXTtcbiAgY29uc3QgcGhvdG8gPSBvYmpbXCJwaG90b1wiXTtcbiAgY29uc3QgY29kZSA9IG9ialtcImNvZGVcIl07XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIG5hbWUsIFxuICAgICAgY29kZSxcbiAgICAgIHBob3RvLFxuICAgICAgdXJsOiB2aWRlb30sIFxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcGF0aHMgPSBhY3RyZXNzLm1hcChhY3QgPT4ge1xuICAgIHJldHVybiB7IHBhcmFtczogeyAnaGFzaCc6ICBPYmplY3Qua2V5cyhhY3QpWzNdfSB9XG4gIH0pXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6ZmFsc2UsXG4gIH07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/play/[hash].js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/play/[hash].js"));
module.exports = __webpack_exports__;

})();