---
original_url: http://compression.ru/video/quality_measure/metric_plugins/ne_en.htm
title: MSU Noise Estimation Metric (NE)
description: Estimator of noise level for video.
preview_img: /assets/img/vqmt/plugins-ne/preview.png
subprojects: plugins
---

# MSU Noise Estimation Metric (NE)

* Project, idea: Dr. Dmitriy Vatolin, Sergey Grishin  
* Algorithm, implementation: Kumok Boris  
* Updating and additions: Sheludko Victor, Sergey Putilin,
Sergey Grishin  

## Common idea
 
Metrics Noise Estimator is intended for calculation of noise level for
each frame of video sequence.

## Changelog

\[!\] — Known bug  
\[+\] — New Feature  
\[\*\] — Other

*0.3*  
\[\*\] Incorrect processing of non-standard resolution video bug fixed  

*0.2*  
\[\*\] Bug with incorrect (identical) values for some videos is fixed.  
\[\*\] Home page is fixed (was incorrect)  
\[\*\] Command line name is changed (became easier to use)  

*0.1*  
\[\*\] First released version.  

## Usage

  
The metrics realizes three various algorithms of definition of noise
level:

-   MAD
-   Block-Based
-   Spatio-Temporal Gradients

The choice of which algorithm to use can be made in Settings. To
algorithms there correspond figures from 0 up to 2.

## Visualization
  
Visualization of the metrics does not carry any information.

## Plots

By results of job of the metrics the plot of frame-accurate value of
noise level is constructed. Final value of the metrics is average
arithmetic of all frame-accurate values.

<div class="center">
<div>
<img src="/assets/img/vqmt/plugins-ne/ne_graph.gif" alt="Plot's example "><br/>
Plot's example
</div>
</div>

## Algorithm

### MAD

For each frame do HAAR wavelet decomposition. Than evaluate median of
HH-component's absolute values. Final value of the metrics is the
normalized median.

### Block-Based

Frames are tessellated into a number of 8x8 blocks. Standard deviations
of intensity (measures of intensity variation) are computed for all the
blocks and sorted. The block with the smallest standard deviation has
the least change of intensity. The smaller the standard deviation, the
smother the block. The intensity variation of a smooth block may be due
to noise, in which the standard deviation of the block is close to that
of the Gaussian noise added. Normalized average arithmetic values of 30
% of all blocks with the least values grows is the final value of the
metric.

### Spatio-Temporal Gradients

For each frame is doing wavelet decomposition. computing temporal and
spatial histograms. The initial estimation of noise level is defined by
value at which temporal or spatial histogram achieves the maximal value.
The decision of whether to use the spatial or temporal histogram is
based on the deviation of the histogram from the Rayleigh distribution.
Then this estimation is corrected, using Kolmogorov-Smirnoff test. The
normalized corrected estimation is the final value of the metric.

## Download

-   [MSU Video Quality Measurement
    Tool](/vqmt/download.html#start)

## Contacts

E-mail: <video-measure@graphics.cs.msu.ru>


