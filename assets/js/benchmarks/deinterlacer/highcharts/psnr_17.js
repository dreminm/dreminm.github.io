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
                text: 'PSNR on sequence # 17'
            },
            xAxis: {
                categories: ['Bob-Weave Deinterlacer', 'VapourSynth TDeintMod', 'Real-Time Deep Deinterlacer', 'MSU Deinterlacer', 'NNEDI', 'YADIF', 'VapourSynth EEDI3', 'Weston 3-Field Deinterlacer', 'Bob', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [44.318, 43.798, 43.446, 43.216, 43.171, 42.962, 42.921, 42.876, 42.544, 42.466, 41.285, 39.752, 39.746, 39.746, 37.24, 33.217, ], 
            }]
            });
    })
    })