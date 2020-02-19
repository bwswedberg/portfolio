webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/sections/ProjectsSection/Project.tsx":
/*!**************************************************!*\
  !*** ./src/sections/ProjectsSection/Project.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ProjectLightbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectLightbox */ "./src/sections/ProjectsSection/ProjectLightbox.tsx");
var _jsxFileName = "/Users/swedberg/Workspaces/portfolio/src/sections/ProjectsSection/Project.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




// https://medium.com/the-non-traditional-developer/how-to-use-an-intersectionobserver-in-a-react-hook-9fb061ac6cb5
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var project = _ref.project,
      i = _ref.i;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isLightboxOpen = _useState[0],
      setIsLightboxOpen = _useState[1];

  var classes = useStyles();

  var setRootRef = function setRootRef(element) {
    console.log(element);
  };

  return __jsx("div", {
    className: classes.root,
    ref: setRootRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('row', i % 2 && 'flex-row-reverse'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "col-12 col-xl-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: classes.thumbnailContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("img", {
    className: classes.thumbnail,
    src: project.thumbnail.src,
    onClick: function onClick() {
      return setIsLightboxOpen(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx("div", {
    className: classes.thumbnailBackground,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }))), __jsx("div", {
    className: "col-12 col-xl-6 align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: classes.title,
    color: "textSecondary",
    variant: "overline",
    display: "block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, project.type), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: classes.lead,
    color: "textPrimary",
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, project.title), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: classes.paragraph,
    variant: "body2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, project.description, " Built with ", project.tech, "."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined",
    color: "secondary",
    onClick: function onClick() {
      return setIsLightboxOpen(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "MORE")))), isLightboxOpen && __jsx(_ProjectLightbox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    project: project,
    onCloseRequest: function onCloseRequest() {
      return setIsLightboxOpen(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }));
});
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
    root: {},
    thumbnailContainer: {
      position: 'relative',
      display: 'inline-block',
      marginBottom: theme.spacing(3)
    },
    thumbnail: {
      maxWidth: 500,
      width: '100%',
      maxHeight: 260,
      height: 260,
      backgroundColor: theme.palette.background.paper,
      'transition': 'transform 500ms',
      '&:hover': {
        transform: 'translate(10px,10px)'
      }
    },
    thumbnailBackground: {
      position: 'absolute',
      top: 10,
      right: -10,
      bottom: -10,
      left: 10,
      zIndex: -1,
      backgroundColor: theme.palette.secondary.main
    },
    content: {
      maxWidth: 500
    },
    title: {
      textTransform: 'uppercase',
      letterSpacing: '0.03em',
      lineHeight: '1.1em',
      marginBottom: theme.spacing(1) // fontWeight: 400,
      // fontWeight: 'bold',

    },
    lead: {
      marginBottom: theme.spacing(1),
      lineHeight: '1.2em'
    },
    paragraph: {
      marginBottom: theme.spacing(2)
    }
  });
});

/***/ })

})
//# sourceMappingURL=index.js.57701ba74818ff3fdf92.hot-update.js.map