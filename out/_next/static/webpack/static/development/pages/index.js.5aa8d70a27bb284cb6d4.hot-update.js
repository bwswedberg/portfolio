webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/sections/SectionTitle.tsx":
/*!***************************************!*\
  !*** ./src/sections/SectionTitle.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionTitle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/swedberg/Workspaces/portfolio/src/sections/SectionTitle.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function SectionTitle(_ref) {
  var title = _ref.title;
  var classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: classes.title,
    variant: "h2",
    component: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, title);
}
var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
    title: {
      position: 'relative',
      color: theme.palette.text.secondary,
      // borderBottom: `2px solid rgba(255,255,255,0.1)`,
      // borderTop: '2px solid rgba(255,255,255,0.1)',
      // borderRight: '2px solid rgba(255,255,255,0.1)',
      textAlign: 'right',
      // fontFamily: 'Fira Code',
      '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        borderTop: '2px solid rgba(255,255,255,0.1)',
        borderRight: '2px solid rgba(255,255,255,0.1)',
        right: 0,
        left: -10000
      }
    }
  });
});

/***/ })

})
//# sourceMappingURL=index.js.5aa8d70a27bb284cb6d4.hot-update.js.map