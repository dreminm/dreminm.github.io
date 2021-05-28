---
original_url: http://compression.ru/video/quality_measure/metric_plugins/bfm_en.htm
title: MSU Brightness Flicking Metric (BFM)
description: Measure flicking quantity between neighboring
             frames of the sequence.
preview_img: /assets/img/vqmt/plugins-bfm/bfm_vis.jpg
subprojects: plugins
---

# MSU Brightness Flicking Metric (BFM)

* Project, Ideas: Dr. Dmitriy Vatolin  
* Implementation: Alexey Noskov  
* Updating and additions: Sergey Grishin  

## Common description

BFM metric is made to measure flicking quantity between neighboring
frames of the sequence.

## Change Log

\[!\] — Known bug  
\[+\] — New Feature  
\[\*\] — Other

***Version 1.1***  
\[\*\] Visualization error fixed for non-stadard resolution video

***Version 1.0***  
\[+\] First filter release

## Visualization

Y-plane is drawing during the visualization.

<div class="center">
<div>
<img src="/assets/img/vqmt/plugins-bfm/bfm_vis.jpg" alt="Visualization
example "><br/>
Visualization example
</div>
</div>


## Plots

Per-frame metric's value is showing after measurements. Metric's value
is modulus of difference between average brightness values of previous
and current frames. Resulting metric's value is average value among all
per-frame values.

<div class="center">
<div>
<img src="/assets/img/vqmt/plugins-bfm/bfm_graph.gif" alt="Plot's
example "><br/>
Plot's example
</div>
</div>


## Algorithm

Average brightness value is calculating for each frame. Metric's value
is modulus of difference between average brightness values of previous
and current frames.

## Download

-   [Metric's sources for VS
    2013](http://compression.ru/video/quality_measure/metric_plugins/files/bfm_src.zip)
-   [MSU Video Quality Measurement
    Tool](/vqmt/download.html#start)
-   [License text for sources and binary files
    (LGPL)](http://www.gnu.org/licenses/lgpl.html)

## Contacts

E-mail: <video-measure@graphics.cs.msu.ru>

