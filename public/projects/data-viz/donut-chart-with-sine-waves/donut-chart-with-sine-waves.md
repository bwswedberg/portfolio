---
path: "/donut-chart-with-sine-waves"
title: "Donut chart with sine waves"
date: "2018-09-23"
description: "Experimental donut chart sine waves"
cardSize: "sm"
gists: 
  - username: "bwswedberg"
    id: "bec2f9531578441a82413ca2854b1593"
    description: "Donut chart with sine waves"
  - username: "bwswedberg"
    id: "00f8a9767750b7183c048ea5a4fb9525"
    description: "Sine water effect"
hero:
  type: "gist"
  gistId: "bec2f9531578441a82413ca2854b1593"
links: 
  - name: "Live"
    url: "https://bl.ocks.org/bwswedberg/bec2f9531578441a82413ca2854b1593"
  - name: "Github"
    url: "https://gist.github.com/bwswedberg/bec2f9531578441a82413ca2854b1593"
thumbnail: "./preview.png"
thumbnailImage: "./thumbnail.png"
previewImage: "./preview.png"
headlineImage: "./preview.png"
---
Experimental donut chart where the fill of the donut is somewhat proportional to a value--much like a column in a bar chart. 

Sine waves give the appearance of water filling up the chart. To do this, I wrote a tiny d3 plugin `d3-sine-wave` to help with managing sine wave related state.

<hero><gist gistid="00f8a9767750b7183c048ea5a4fb9525"></gist></hero>

![Sine Water Effect](./water-effect.png)

This chart could be improved by making the circle fill proportional to the circle. The circle fill is a clipped rectangle, and the height of the fill is proportional to the rectangle--NOT the circle, which is somewhat misleading.

Inspiration: 
- [Sine Water Effect](https://bl.ocks.org/bwswedberg/00f8a9767750b7183c048ea5a4fb9525)
Thanks for text transition example from [Text Transition 1](https://bl.ocks.org/mbostock/7004f92cac972edef365).
