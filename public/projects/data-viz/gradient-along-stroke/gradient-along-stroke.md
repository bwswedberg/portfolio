---
path: "/gradient-along-stroke"
title: "Gradient along stroke"
date: "2018-05-23"
description: "A naive solution for putting a gradient on a stroke"
cardSize: "sm"
gists:
  - username: "bwswedberg"
    id: "ea8b6aaaa830574fda9359dd2351dcda"
    description: "Gradient along stroke"
  - username: "bwswedberg"
    id: "0a8f0351f8d04272e35f455290edf9a1"
    description: "Gradient along stroke (naive) spiral"
hero:
  type: "gist"
  image: "0a8f0351f8d04272e35f455290edf9a1"
links:
  - name: "Live (bl.ock)"
    url: "https://bl.ocks.org/bwswedberg/ea8b6aaaa830574fda9359dd2351dcda"
  - name: "Github"
    url: "https://gist.github.com/bwswedberg/ea8b6aaaa830574fda9359dd2351dcda"
thumbnail: "./preview.png"
thumbnailImage: "./thumbnail.png"
previewImage: "./preview.png"
headlineImage: "./preview.png"
---
Placing a gradient along a stroke/path is a commonly desired effect because it communicates movement. However, it is difficult to do in SVG&mdash;especially if you want to make it dynamic. 

Mike Bostock used a [miter joint](https://en.wikipedia.org/wiki/Miter_joint) method demonstrated in [Gradient Along Stroke](https://bl.ocks.org/mbostock/4163057), which may be overkill for visualization that don't need that level of precision.

This example demonstrates how to put a gradient on a stroke using a naive, computationally simple method. It is useful if your stroke or path is relatively simple and you do not need a high level of precision--like when animating paths/routes on a worldwide map. There are two steps: 

1. Break the stroke into segment
2. Use `stroke-linecap: round;` to make the segments appear connected. 

See [Gradient Along Stroke (Naive) Spiral](https://bl.ocks.org/bwswedberg/0a8f0351f8d04272e35f455290edf9a1) for same logic but spiral layout.