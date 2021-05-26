---
original_url: http://compression.ru/video/quality_measure/metric_plugins/scd_en.htm
title: MSU Scene Change Detector (SCD)
description: Automatically identify scene boundaries in video sequence.
preview_img: /assets/img/vqmt/plugins-scd/scd_frame5.gif
subprojects: plugins
---

# MSU Scene Change Detector (SCD)

* Project, Ideas: Dr. Dmitriy Vatolin, Alexander Parshin  
* Implementation: Ivan Glazistov  
* Updating and additions: Sergey Grishin  

## Common Description

  
Scene Change Detector is made to automatic identification of scene
boundaries in video sequence.

## Change Log

\[!\] — Known bug  
\[+\] — New Feature  
\[\*\] — Other

***Version 1.2***  
\[\*\] Windows Vista & Windows 7 support implemented

***Version 1.1***  
\[\*\] Visualization bug fixed for non-stadard resolution video

***Version 1.0***  
\[+\] First plugin release

## Usage

  
The plugin implements four algorithms of similarity measurements between
two adjacency frames in video sequence:

1.  Pixel-level frames comparison
2.  Global Histogram comparison
3.  Block-Based Histogram comparison
4.  Motion-Based similarity measure

The choice of the algorithm can be made in Settings. Numbers from 1 up
to 4 corresponds to each algorithm.

Default and recommended value is 3 (Block-Based Histogram).

## Visualisation

  
Y-plane is drawing during the visualization. Brightness of scene
boundary frames is increased.

Example of visualization:

<div class="center">
<img src="/assets/img/vqmt/plugins-scd/scd_frame1.gif">
<img src="/assets/img/vqmt/plugins-scd/scd_frame2.gif">
<img src="/assets/img/vqmt/plugins-scd/scd_frame3.gif">
<img src="/assets/img/vqmt/plugins-scd/scd_frame4.gif">
<img src="/assets/img/vqmt/plugins-scd/scd_frame5.gif">
</div>

## Plots

Metric's plot is making after all measurements. "One" value means that
current frame is the first frame in scene, other frames have "zero"
values. Sequence average value is the number of detected scene changes.

<div class="center">
<div>
<img src="/assets/img/vqmt/plugins-scd/scd_graph.gif" alt="Plot's example"><br/>
Plot's example
</div>
</div>

## Algorithm

### Pixel-level comparison

Similarity measure of two frames is the sum of absolute differences
(SAD) between corresponding pixels values.

### Global Histogram

The histogram is obtained by counting the number of pixels in frame with
specified brightness level. The difference between two histograms is
then determined calculating SAD of number of pixels on each brightness
level.

### Block-Based Histogram

Each frame is divided into 16x16 pixel blocks. Brightness distribution
histogram is constructed for each block. Then similarity measure for
each block is obtained. Average value of these measures is accepted as a
frames similarity measure.

### Motion-Based

Motion Estimation algorithm with block size 16x16 pixels is performed
for two adjacency frames at the first stage. After that average value of
motion vector errors is accepted as a finally similarity measure.

## Download

-   [MSU Video Quality Measurement
    Tool](/vqmt/download.html#start)

## Contacts

E-mail: <video-measure@graphics.cs.msu.ru>

