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
                text: 'SSIM on sequence # 23'
            },
            xAxis: {
                categories: ['DfRes 121000 G2e 3', 'DfRes 119000', 'DfRes 122000 G2e 3', 'MSU Deinterlacer', 'YADIF', 'DfRes 61000', 'Bob', 'Real-Time Deep Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Vapoursynth EEDI3', 'Bob-Weave Deinterlacer', 'Kernel Deinterlacer', 'NNEDI', 'Vapoursynth TDeintMod', 'Weston 3-Field Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
            },
            yAxis: {
                title: {
                    text: 'SSIM'
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
                    name: 'SSIM',
                    data: [0.934, 0.933, 0.933, 0.932, 0.93, 0.928, 0.926, 0.922, 0.922, 0.92, 0.918, 0.917, 0.917, 0.917, 0.917, 0.904, 0.904, 0.902, 0.899, 0.85, ], 
            }]
            });
    })
    })