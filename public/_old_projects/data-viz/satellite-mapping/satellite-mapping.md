---
path: "/satellite-mapping"
title: "Satellite mapping series"
date: "2018-05-23"
description: "Series on methods how different to map satellites"
cardSize: "sm"
gists:
  - username: "bwswedberg"
    id: "645f73c77b76913bea5b19e6ebce1204"
    description: "Satellite map using Leaflet"
  - username: "bwswedberg"
    id: "c4a444ebf27fd08bb4339e8e77c9d986"
    description: "Satellite map using Leaflet + D3,js with wrapping"
  - username: "bwswedberg"
    id: "d7d6eaedc2c501dc5f5e4be649b0da1d"
    description: "Satellite map using Leaflet + D3,js with wrapping"
  - username: "bwswedberg"
    id: "29bda412413335b705c434e8a0af1f50"
    description: "Satellite map using Three.js with zoom and pan"
hero:
  type: "gist"
  gistId: "d7d6eaedc2c501dc5f5e4be649b0da1d"
links:
  - name: "Live (bl.ock)"
    url: "https://bl.ocks.org/bwswedberg/d7d6eaedc2c501dc5f5e4be649b0da1d"
  - name: "Gist"
    url: "https://gist.github.com/bwswedberg/d7d6eaedc2c501dc5f5e4be649b0da1d"
thumbnail: "./satellite-map-leaflet-d3-w-wrap-preview.png"
thumbnailImage: "./satellite-map-leaflet-d3-w-wrap-preview.png"
previewImage: "./satellite-map-leaflet-d3-w-wrap-preview.png"
headlineImage: "./satellite-map-leaflet-d3-w-wrap-preview.png"
---
How can satellites be mapped in using common web libraries? The series below is the result of my efforts when mapping open source satellite data with [Leaflet](https://leafletjs.com/), [D3.js](https://d3js.org/), and [Three.js](https://threejs.org/). The progression starts with a rudimentary example, and works toward a complex 3D example.

## Satellite map using Leaflet [Live](https://bl.ocks.org/bwswedberg/645f73c77b76913bea5b19e6ebce1204)
In this example, I animate satellitles using updated L.geoJSON layers. Each animation frame is clears and updates with new data. This version does not extend satellites for the entire leaflet view. In other words it's limited to 180 to -180.

> JavaScript, [Leaflet](https://leafletjs.com/), [satellite.js](https://github.com/shashwatak/satellite-js)

## Satellite map using Leaflet with wrapping [Live](https://bl.ocks.org/bwswedberg/c4a444ebf27fd08bb4339e8e77c9d986)
Same as last example, but this version extrapolates satellites across longitude of a wrapped map (i.e. duplicates satellites). That way there is a seamless wrap at worldwide zoom levels. 

> JavaScript, [Leaflet](https://leafletjs.com/), [satellite.js](https://github.com/shashwatak/satellite-js)

## Satellite map using Leaflet + D3,js with wrapping [Live](https://bl.ocks.org/bwswedberg/d7d6eaedc2c501dc5f5e4be649b0da1d)
In this example satellites are added to a leaflet SVG overlay pane with D3.js, and on each animation frame the are updated with D3.js. If the map pans or zooms beyond map bounds then it duplicates/wraps satellites.

> JavaScript, [Leaflet](https://leafletjs.com/), [D3.js](https://d3js.org/), [satellite.js](https://github.com/shashwatak/satellite-js)

## Satellite map using Three.js with zoom and pan [Live](https://bl.ocks.org/bwswedberg/29bda412413335b705c434e8a0af1f50)
An animated satellite map with three.js. This one also has zoom and pan capability. It's interesting to note that this version may be more visually stimulating to the viewer, but it is less effective in terms of answering basic questions about the data set. For example, what satellites are over Africa? Or, how many geosynchronous satellites are on the map?

> JavaScript, [Three.js](https://threejs.org/), [satellite.js](https://github.com/shashwatak/satellite-js)

## Data
[Space-Track](https://www.space-track.org) &mdash; Latest curated weather satellites on 2018 JAN 26
