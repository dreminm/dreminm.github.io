---
original_url: http://compression.ru/video/quality_measure/metric_plugins/dfm_en.htm
title: MSU Drop Frames Metric (DFM)
description: Calculation of number of drop-frames in sequence.
preview_img: /assets/img/vqmt/plugins-dfm/dfm_vis.jpg
subprojects: plugins
---

# MSU Drop Frames Metric (DFM)

* Project, Ideas: Dr. Dmitriy Vatolin  
* Implementation: Alexey Noskov  
* Updating and additions: Sergey Grishin  


## Common description

DFM is made to calculate number of drop-frames in sequence.

## Change Log

\[!\] — Known bug  
\[+\] — New Feature  
\[\*\] — Other

***Version 1.1***  
\[\*\] Visualization bug fixed for non-stadard resolution video

***Version 1.0***  
\[+\] First plugin release

## Visualization

Metric's visualization difference of Y-planes between two consecutive
frames + 128. So, grey color (128, 128, 128) means that brigtness of a
pixel is the same as at the previous frame.

<div class="center">
<div>
<img src="/assets/img/vqmt/plugins-dfm/dfm_vis.jpg" alt="Visualization
example "><br/>
Visualization example
</div>
</div>

## Plots

Metric's plot is making after all measurements. "Zero" value means that
current frame exist, "one" - that it is dropped. The resulting metric's
value is number of drop-frames.
<div class="center">
<div>
<img src="/assets/img/vqmt/plugins-dfm/dfm_graph.png" alt="Plot's
example "><br/>
Plot's example
</div>
</div>


## Algorithm

For each frame difference with the previous one is calculating. Metric's
value is 1 if frames are identical, 0 otherwise.

## Download

-   [Metric's sources for VS
    2013](http://compression.ru/video/quality_measure/metric_plugins/files/dfm_src.zip)
-   [MSU Video Quality Measurement
    Tool](/vqmt/download.html#start)
-   [License text for sources and binary files
    (LGPL)](http://www.gnu.org/licenses/lgpl.html)

## Contacts

E-mail: <video-measure@graphics.cs.msu.ru>

