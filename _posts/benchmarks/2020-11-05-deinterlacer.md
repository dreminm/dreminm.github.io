---
title: MSU Deinterlacer Benchmark
description:
preview_img: /assets/img/benchmarks/deinterlacer/deinterlacing_preview480x270.png
subprojects:
---

<link rel="stylesheet" href="/assets/css/benchmarks/deinterlacer/style.css">
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script src="https://code.highcharts.com/highcharts-more.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.22/css/jquery.dataTables.css">
<script type="text/javascript" charset="utf8"
   src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.js"></script>

<style>
    .subproject-links {
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
    }

    .subproject-links a {
        background-color: #f0f0f0;
        color: black;
        font-size: 16px;
        padding: 10px 15px;

        text-align: center;
        text-decoration: none;

        margin: 4px 8px;
        border-radius: 10px;
    }

    .subproject-links a:hover {
        background-color: #e0e0e0;
        text-decoration: none;
    }

    table.deint {
        display: table;
    }
</style>

<div class="subproject-links">
    <a href="/benchmarks/deinterlacer.html" class="button">Home</a>
    <a href="/benchmarks/deinterlacer-participants.html" class="button">Participants</a>
    <a href="#methodology" class="button">Evaluation methodology</a>
    <a href="#participate" class="button">How to participate</a>
    <a href="#contacts" class="button">Contact us</a>
</div>

{:.center}
# MSU Deinterlacer Benchmark — selecting the best deinterlacing filter

{:.center}
## The most comprehensive comparison of deinterlacing methods


## What's new

- **26.11.2020** Beta-version Release
- **22.12.2020** Added Adobe Premiere Built-In, VS EEDI3, VS TDeintMod, MC Deinterlacer, EL MAB. Tuned Kernel Deinterlacer

## Key features of the Benchmark


*   **For Deinterlacing methods' users**
    *   Choose deinterlacing method that is **the best for your speed and quality requirements**
    *   Discover **the newest deinterlacing methods’ achievements**

*   **For Researchers and Developers**
    *   **Quickly get comprehensive comparison results for your paper** with our tables, visual comparison tools and performance plots
    *   **Check the performance** of your deinterlacing method on the complex cases


To submit deinterlacing method, please, follow 3 simple steps in the the [Deinterlacer Submission](#participate) section

We appreciate new ideas. Please, write us an e-mail to <deinterlacer-benchmark@videoprocessing.ml>



## <span id="leaderboard"></span> Leaderboard

The table below shows a comparison of deinterlacers by PSNR, SSIM metrics and by speed.

{% include benchmarks/deinterlacer/leaderboard.html %}

## Full FrameRate Leaderboard

{% include benchmarks/deinterlacer/double_leaderboard.html %}


## Visualization

In this section you can see a frame, a crop from this frame, and also MSU VQMT PSNR Visualization of this crop.

{% include benchmarks/deinterlacer/visualization_images.html %}

## Charts

{% include benchmarks/deinterlacer/plots.html %}

## Cross-PSNR

In this section you can see PSNR between the output of chosen deinterlacer and the others

{% include benchmarks/deinterlacer/cross_psnr_table.html %}

## <span id="methodology"></span> Evaluation methodology

{% include benchmarks/deinterlacer/evaluation_methodology.html %}


<!--
<style>
    .paper-preview-container img:hover {
        filter: brightness(80%);
    }

    #paper-preview01 {
        padding: 0;
        clear: both;
        border: 1px solid black;
        box-shadow: 5px 5px 3px #888888;
        width: 150px;
    }
</style>

**Read the Benchmark's paper**


<div style="display: inline-block; text-align: center" class="paper-preview-container">
    <a href="/"><img src="/assets/img/benchmarks/deinterlacer/paper_preview.png" id="paper-preview01"></a><br/>
    <a href="/">Download (pdf)</a>
</div> -->


## <span id="participate"></span> Deinterlacer Submission

{% include benchmarks/deinterlacer/submission.html %}

<!--See more information on the <a href="/benchmarks/helloworld.html#participate">GitHub page</a>-->

## <span id="contacts"></span>Contacts

For questions and propositions, please contact us: <deinterlacer-benchmark@videoprocessing.ml>
