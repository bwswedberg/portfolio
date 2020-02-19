webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/sections/ProjectsSection/projects.ts":
/*!**************************************************!*\
  !*** ./src/sections/ProjectsSection/projects.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var projects = [{
  id: 'bible-reading-plans',
  type: 'Progressive Web App',
  title: 'Read Through the Bible',
  lead: 'Discover, use, and create Bible reading plans',
  description: 'A Progressive Web App that provides an enhanced ability to explore, share, create, export, and participate in Bible reading plans.',
  tech: 'TypeScript, React, Redux, GraphQL, and AWS',
  thumbnail: {
    title: '',
    alt: '',
    src: '/projects/brpa/preview.png'
  },
  images: [{
    src: '/projects/brpa/preview.png',
    caption: 'My caption'
  }]
}, {
  id: 'apartment-reporter',
  type: 'Web App & Scraper w/ Email Alert',
  title: 'Apartment Reporter',
  lead: 'Scraping the web for the apartment next door',
  description: 'An app that helped me get a better apartment. The app scrapes and stores apartment listings daily, alerts via email if there is a match, and provides exploration through a Redfin inspired frontend.',
  tech: 'JavaScript, React, Redux, D3, and AWS',
  thumbnail: {
    title: '',
    alt: '',
    src: '/projects/apartment-reporter/preview.png'
  },
  images: [{
    src: '/projects/apartment-reporter/apartment-reporter-1.png',
    caption: 'The frontend interface of *Apartment Reporter*. Orange circles indicate an apartment listing. The frontend is populated by apartment listings scraped daily by the AWS backend.'
  }, {
    src: '/projects/apartment-reporter/apartment-reporter-2.png',
    caption: 'The frontend interface of *Apartment Reporter*. Settings flipped to show past apartment listings.'
  }, {
    src: '/projects/apartment-reporter/apartment-reporter-4.png',
    caption: 'The frontend interface of *Apartment Reporter*. Filtering past apartment listings by date range.'
  }, {
    src: '/projects/apartment-reporter/apartment-reporter-7.png',
    caption: 'The frontend interface of *Apartment Reporter*. Filtering past apartment listings by room number and monthly rent price'
  }]
}, {
  id: 'data-viz',
  type: 'Data Visualization',
  title: 'Proof of Concepts, Experiments, & Art',
  lead: 'Data Viz for the Mind and Soul',
  description: 'Data visualizations are a great deal of fun for testing ideas and showing off techniques. [Bl.ocks](https://bl.ocks.org/bwswedberg) are ObservableHQ is an enviroment perfect for that.',
  tech: 'JavaScript, D3, Leaflet, and Three',
  thumbnail: {
    title: '',
    alt: '',
    src: '/projects/data-viz/preview.png'
  },
  images: [{
    src: '/projects/data-viz/circular-fractal.png',
    caption: '[Circular Fractal](https://bl.ocks.org/bwswedberg/93cb6fea2dd3d653727e01b2db967dba) is an experimental vizualization using trigonometry and fractals.'
  }, {
    src: '/projects/data-viz/collapsible-tree-w-minimap.png',
    caption: '[Collapsible Tree with Minimap](https://bl.ocks.org/bwswedberg/464a7dbc471ee2a94dd6278bc7d94710) is a proof-of-concept data visualization to demo minimap capability for tree visualizations.'
  }, {
    src: '/projects/data-viz/facebook-friends.png',
    caption: '[My Facebook Friends](http://bl.ocks.org/bwswedberg/8d7061442cdf3e1b7ed7) is a data visualization showing my actual Facebook friends and their Facebook connections.'
  }, {
    src: '/projects/data-viz/filled-donut-chart.png',
    caption: '[Filled Donut Chart](https://bl.ocks.org/bwswedberg/bec2f9531578441a82413ca2854b1593) is an experimental data visualization where the fill of the donut is somewhat proportional to a value. This chart was inspired by water filling up a glass.'
  }, {
    src: '/projects/data-viz/satellite-1.png',
    caption: 'A series of satellite map proof-of-concepts that demonstrate how to map real satellites using a variety of libraries. Simple to complex: [Satellite Map Using Leaflet](https://bl.ocks.org/bwswedberg/645f73c77b76913bea5b19e6ebce1204), [Satellite Map Using Leaflet with Wrapping](https://bl.ocks.org/bwswedberg/c4a444ebf27fd08bb4339e8e77c9d986), [Satellite Map Using Leaflet + D3 with Wrapping](https://bl.ocks.org/bwswedberg/d7d6eaedc2c501dc5f5e4be649b0da1d), and [Satellite Map Using Three.js with Zoom and Pan](https://bl.ocks.org/bwswedberg/29bda412413335b705c434e8a0af1f50).'
  }, {
    src: '/projects/data-viz/world-wrap-click-to-zoom.png',
    caption: '[World Wrapping Map w/ Click-to-Zoom](https://bl.ocks.org/bwswedberg/da180a7f413d9fa47495482e99a56b9b) is a proof-of-concept map that shows how to reconcile infinite panning with click-to-zoom.'
  }]
}, {
  id: 'perse',
  type: 'Data Visualization',
  title: 'PerSE',
  lead: 'Geovisual analytics for multi-calendar environments',
  description: 'A static frontend analytics environment for finding patterns in multi-calendar related coded news articles. The outcome of my Master\'s Thesis at Penn State.',
  tech: 'JavaScript, D3, jQuery',
  thumbnail: {
    title: '',
    alt: '',
    src: '/projects/perse/preview.png'
  },
  images: [{
    src: '/projects/perse/perse-with-table.png',
    caption: 'The main interface of PerSE. PerSE is a web app developed to help analysts detect and analyze calendar related spatiotemporal periodicity.'
  }, {
    src: '/projects/perse/subplots.png',
    caption: 'he Voronoi Subplots Map bins geospatial data with an overlaying interactive voronoi diagram. Data binned by voronoi cells is used in respective subplot (i.e. Time-Wheel).'
  }, {
    src: '/projects/perse/time-wheels.png',
    caption: 'A) The time-wheel displays coded events binned by a calendar aggregate unit. B) Mouse hover over binned day-of-week. C) Mouse hover over a Gregorian month. D) Mouse hover over an Islamic month.'
  }, {
    src: '/projects/perse/timelines.png',
    caption: 'The timelines in this image are displaying coded events binned by week-of-year per the Gregorian calendar. Arrows demonstrate temporal selections.'
  }]
}, {
  id: 'spotvis',
  type: 'Data Visualization',
  title: 'SPoTvis',
  lead: 'Exploring sentiment surrounding 2013 U.S. Government shutdown.',
  description: 'A data visualization for exploring Twitter sentiment surrounding the 2013 U.S. Government shutdown. SPoTvis. The result of a graduate project at Penn State.',
  tech: 'JavaScript, D3, jQuery',
  thumbnail: {
    title: '',
    alt: '',
    src: '/projects/spotvis/preview.png'
  },
  images: [{
    src: '/projects/spotvis/spotvis_ia_nj.png',
    caption: 'A comparison of Twitter sentiment between Iowa and New Jersey.'
  }, {
    src: '/projects/spotvis/spotvis_ia_va.png',
    caption: 'A comparison of Twitter sentiment between Iowa and Virginia.'
  }, {
    src: '/projects/spotvis/spotvis_dem_rep.png',
    caption: 'A comparison of Twitter sentiment between Republican and Democrat leaning states.'
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (projects);

/***/ })

})
//# sourceMappingURL=index.js.744e8769a0fd79d3ee33.hot-update.js.map