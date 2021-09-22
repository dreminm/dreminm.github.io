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
                text: 'SSIM on sequence # 3'
            },
            xAxis: {
                categories: ['NNEDI', 'DfRes 119000', 'Vapoursynth EEDI3', 'Vapoursynth TDeintMod', 'DfRes 122000 G2e 3', 'DfRes 121000 G2e 3', 'Bob', 'DfRes 61000', 'Real-Time Deep Deinterlacer', 'Bob-Weave Deinterlacer', 'MSU Deinterlacer', 'Weston 3-Field Deinterlacer', 'YADIF', 'Kernel Deinterlacer (optimal parameters)', 'ASVZZZ Deinterlacer', 'Muksun Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Kernel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [0.994, 0.994, 0.994, 0.994, 0.994, 0.993, 0.992, 0.992, 0.991, 0.988, 0.987, 0.98, 0.977, 0.975, 0.967, 0.967, 0.959, 0.953, 0.934, 0.783, ], 
            }]
            });
    })
    })