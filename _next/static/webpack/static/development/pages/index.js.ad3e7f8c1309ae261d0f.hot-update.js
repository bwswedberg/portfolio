webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/sections/ExperienceSection.tsx":
/*!********************************************!*\
  !*** ./src/sections/ExperienceSection.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExperienceSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SectionTitle */ "./src/sections/SectionTitle.tsx");
var _jsxFileName = "/Users/swedberg/Workspaces/portfolio/src/sections/ExperienceSection.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function ExperienceSection(_ref) {
  var _this = this;

  var className = _ref.className;
  var classes = useStyles();
  return __jsx("section", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.root, className),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.titleContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx(_SectionTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "9 to 5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 15
    }
  })), jobs.map(function (job) {
    return __jsx("div", {
      className: classes.job,
      key: job.position,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      className: classes.jobHeader,
      variant: "h6",
      gutterBottom: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }, job.position, "\xA0", __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      className: classes.jobDate,
      variant: "body2",
      component: "span",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 19
      }
    }, job.dateRange)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      className: classes.jobDescription,
      variant: "body2",
      gutterBottom: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: classes.jobCompany,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 19
      }
    }, job.company), " \u2014 ", job.description), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      className: classes.jobFooter,
      variant: "caption",
      paragraph: true,
      gutterBottom: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }
    }, job.tech));
  })))));
}
;
var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
    root: {},
    titleContainer: {
      marginBottom: theme.spacing(8)
    },
    job: {
      marginBottom: theme.spacing(8),
      maxWidth: 400
    },
    jobHeader: {
      fontWeight: 'bold',
      color: theme.palette.secondary.main
    },
    jobDate: {
      display: 'inline',
      whiteSpace: 'nowrap',
      color: theme.palette.text.secondary
    },
    jobDescription: {
      marginBottom: theme.spacing(1)
    },
    jobCompany: {
      // fontWeight: 300,
      letterSpacing: '0.03em'
    },
    jobFooter: {
      // borderLeft: `2px solid rgba(255,255,255,0.3)`,
      // paddingLeft: '1rem',
      marginTop: theme.spacing(2),
      color: theme.palette.text.secondary
    }
  });
});
var jobs = [{
  position: 'Fullstack Developer',
  dateRange: '2017.08 - NOW',
  company: 'BOOZ ALLEN',
  description: 'I develop responsive interactive web apps and tools. I also develop stories and visualizations that explain complex topics to a broad audience.',
  tech: 'TypeScript, JavaScript, HTML, CSS, SASS, Angular, D3, Leaflet, Highcharts, Redux, Apollo/GraphQL, Express, REST, Node, PostgreSQL, MongoDB, Git'
}, {
  position: 'Fullstack Developer',
  dateRange: '2015.06 - 2017.08',
  company: 'OGSYSTEMS',
  description: 'I developed features for an enterprise level facilities management web app, and secondary situational awareness web app.',
  tech: 'JavaScript, HTML, CSS, React, Leaflet, jQuery, Java, Oracle, Git'
}];

/***/ })

})
//# sourceMappingURL=index.js.ad3e7f8c1309ae261d0f.hot-update.js.map