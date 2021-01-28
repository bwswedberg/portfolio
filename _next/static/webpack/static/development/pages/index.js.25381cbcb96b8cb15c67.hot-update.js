webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/sections/ProjectsSection/ProjectsSection.tsx":
/*!**********************************************************!*\
  !*** ./src/sections/ProjectsSection/ProjectsSection.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SectionTitle */ "./src/sections/SectionTitle.tsx");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Project */ "./src/sections/ProjectsSection/Project.tsx");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects */ "./src/sections/ProjectsSection/projects.ts");
var _this = undefined,
    _jsxFileName = "/Users/swedberg/Workspaces/portfolio/src/sections/ProjectsSection/ProjectsSection.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var className = _ref.className;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      selectedProject = _useState[0],
      setSelectedProject = _useState[1];

  var classes = useStyles();
  return __jsx("section", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.root, className),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.titleContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx(_SectionTitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Side Projects",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  })))), _projects__WEBPACK_IMPORTED_MODULE_5__["default"].map(function (d, i) {
    return __jsx("div", {
      className: classes.project,
      key: d.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }
    }, __jsx(_Project__WEBPACK_IMPORTED_MODULE_4__["default"], {
      project: d,
      i: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    }));
  })));
});
var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
    root: {},
    titleContainer: {
      marginBottom: theme.spacing(8)
    },
    project: {
      marginBottom: theme.spacing(10)
    }
  });
});

/***/ })

})
//# sourceMappingURL=index.js.25381cbcb96b8cb15c67.hot-update.js.map