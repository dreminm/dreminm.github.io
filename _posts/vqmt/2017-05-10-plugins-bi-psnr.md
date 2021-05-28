---
original_url: https://www.compression.ru/video/quality_measure/metric_plugins/bi-psnr_en.htm
title: MSU Brightness Independent PSNR (BI-PSNR)
description: Measuring distortions in video taking
             into account brightness shifts.
preview_img: /assets/img/vqmt/plugins-bi-psnr/preview.gif
subprojects: plugins
---

# MSU Brightness Independent PSNR (BI-PSNR)

* Project, Ideas: Dr. Dmitriy Vatolin
* Implementation: Alexey Noskov
* Updating and additions: Sergey Grishin

## Common idea

BI-PSNR metric is intended for measuring distortions in video taking
into account brightness shifts.

## Change Log

\[!\] — Known bug  
\[+\] — New Feature  
\[\*\] — Other

***Version 1.1***  
\[\*\] Visualization bug fixed for non-stadard resolution video

***Version 1.0***  
\[+\] First plugin release

## Usage

BI-PSNR metric should be used when one of the sequences has any
brightness transformation, which does not change within frame. Example
of such transformation is uniform increasing of brightness of contrast
for single frame of for all sequence. Such transformations prevent usage
of standard metrics because of strong brightness difference between
comparing frames. BI-PSNR algorithm calculates brightness
transformation, which makes frames similar as possible and calculates
standard PSNR and MSE metrics taking into account founded
transformation.

## Visualization

There are two part of visualization:

-   MSE visualization for frame. Colors of visualization are standard
    for MSE (in order of error increasing): black-blue-green-red.
-   Brightness transformation plot. X-axis is brightness at the first
    sequence, Y-axis - brightness on the second one. Green points are
    values, which corresponds to each other (brightness transformation).
    Red diagonal is identical transformation (no brightness changes).

<div class="center">
<div>
<img src="/assets/img/vqmt/plugins-bi-psnr/bi-psnr_vis.gif" alt="Example of
visualization "><br/>
Example of visualization
</div>
</div>


<div class="center">
<div>
<img src="/assets/img/vqmt/plugins-bi-psnr/bi-psnr_vis_std.gif" alt="Visualization of the same frame using standard
PSNR "><br/>
Visualization of the same frame using standard PSNR
</div>
</div>


## Plots

Plots of per-frame PSNR values after the found transformation are
drawing after all calculations. Plots are entirely the same as standard
per-frame PSNR

<div class="center">
<div>
<img src="/assets/img/vqmt/plugins-bi-psnr/bi-psnr_graph.png" alt="Plot's
example "><br/>
Plot's example
</div>
</div>


<div class="center">
<div>
<img src="/assets/img/vqmt/plugins-bi-psnr/bi-psnr_graph_std.gif" alt="Standard PSNR plot for the same
sequence "><br/>
Standard PSNR plot for the same sequence
</div>
</div>


## Algorithm

Table C\[i,j\] is filling for each frame: C\[i,j\] = { number of points
in the same position, which have brightness <span class="var">i</span>
at the first sequence frame and <span class="var">j</span> at the second
sequence frame }

Next, for each <span class="var">i</span> (brightness value from the
first frame) we find corresponding brightness from the second sequence.
Following formula is used to estimate distanse from arbitrary values of
<span class="var">i</span> and <span class="var">j</span>:

<div class="center">
<div>
<img src="/assets/img/vqmt/plugins-bi-psnr/bi-psnr_w.svg">
</div>
</div>

One can note that this formula is sum of quadratic differences between
all pixels of the first sequence with value <span class="var">i</span>
and all corresponding pixels from second sequence on the assumption that
brightness was shifted to <span class="var">i-j</span>.

<div class="center">
<div>
<img src="/assets/img/vqmt/plugins-bi-psnr/bi-psnr_ji.svg">
</div>
</div>

When transformation was found, we can find MSE for the frame taking into
account this transformation:

<div class="center">
<div>
<img src="/assets/img/vqmt/plugins-bi-psnr/bi-psnr_mse.svg">
</div>
</div>

## Download

-   [Metric's sources for VS
    2013](http://compression.ru/video/quality_measure/metric_plugins/files/bi-psnr_src.zip)
-   [MSU Video Quality Measurement
    Tool](/vqmt/download.html#start)
-   [License text for sources and binary files
    (LGPL)](http://www.gnu.org/licenses/lgpl.html)

## Contacts

E-mail: <video-measure@graphics.cs.msu.ru>



