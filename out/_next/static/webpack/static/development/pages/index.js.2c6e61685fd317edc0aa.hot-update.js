webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/sections/ProjectsSection/ProjectLightbox.tsx":
/*!**********************************************************!*\
  !*** ./src/sections/ProjectsSection/ProjectLightbox.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-image-lightbox */ "./node_modules/react-image-lightbox/dist/index.es.js");
var _jsxFileName = "/Users/swedberg/Workspaces/portfolio/src/sections/ProjectsSection/ProjectLightbox.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var project = _ref.project,
      _onCloseRequest = _ref.onCloseRequest;
  var images = project.images;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      imageIndex = _useState[0],
      setImageIndex = _useState[1];

  var image = images[imageIndex];
  return __jsx(react_image_lightbox__WEBPACK_IMPORTED_MODULE_1__["default"], {
    mainSrc: image.src,
    nextSrc: images[(imageIndex + 1) % images.length].src,
    prevSrc: images[(imageIndex + images.length - 1) % images.length].src,
    onCloseRequest: function onCloseRequest() {
      return _onCloseRequest();
    },
    onMovePrevRequest: function onMovePrevRequest() {
      return setImageIndex((imageIndex + images.length - 1) % images.length);
    },
    onMoveNextRequest: function onMoveNextRequest() {
      return setImageIndex((imageIndex + 1) % images.length);
    },
    imageTitle: 'Title',
    imageCaption: image.caption,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  });
});

/***/ })

})
//# sourceMappingURL=index.js.2c6e61685fd317edc0aa.hot-update.js.map