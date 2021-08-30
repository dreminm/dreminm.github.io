$(function () {
    $(document).ready(function() {
        Highcharts.chart('perf-plot', {
            chart: {
                type: 'column'
            },
            navigation: {
                buttonOptions: {
                    enabled: false
                }
            },
            title: {
                text: 'PSNR on sequence # 14'
            },
            xAxis: {
                categories: ['VapourSynth TDeintMod', 'Bob-Weave Deinterlacer', 'Real-Time Deep Deinterlacer', 'Bob', 'VapourSynth EEDI3', 'Weston 3-Field Deinterlacer', 'YADIF', 'MSU Deinterlacer', 'NNEDI', 'Kernel Deinterlacer (optimal parameters)', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Kernel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
            },
            yAxis: {
                title: {
                    text: 'PSNR'
                }
            },
            plotOptions: {
              series: {
                dataLabels: {
                  align: 'center',
                  enabled: true
                }
              }
            },
            series: [{
                    name: 'PSNR',
                    data: [43.675, 43.145, 42.631, 42.158, 42.14, 41.941, 41.708, 41.459, 40.989, 38.459, 38.418, 38.418, 37.789, 37.099, 37.032, 35.766, ], 
            }]
            });
    })
    })