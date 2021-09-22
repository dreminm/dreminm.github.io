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
                text: 'SSIM on sequence # 26'
            },
            xAxis: {
                categories: ['DfRes 122000 G2e 3', 'DfRes 121000 G2e 3', 'DfRes 119000', 'DfRes 61000', 'MSU Deinterlacer', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'Real-Time Deep Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Vapoursynth TDeintMod', 'Kernel Deinterlacer', 'Motion Compensation Deinterlacer', 'NNEDI', 'Kernel Deinterlacer (optimal parameters)', 'YADIF', 'Vapoursynth EEDI3', 'Bob', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', ], 
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
                    data: [0.993, 0.993, 0.993, 0.991, 0.981, 0.953, 0.941, 0.938, 0.936, 0.936, 0.935, 0.932, 0.931, 0.931, 0.93, 0.93, 0.926, 0.903, 0.903, 0.877, ], 
            }]
            });
    })
    })