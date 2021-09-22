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
                text: 'SSIM on sequence # 2'
            },
            xAxis: {
                categories: ['Vapoursynth EEDI3', 'NNEDI', 'DfRes 121000 G2e 3', 'DfRes 119000', 'Vapoursynth TDeintMod', 'DfRes 122000 G2e 3', 'Bob', 'Real-Time Deep Deinterlacer', 'Bob-Weave Deinterlacer', 'DfRes 61000', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'MSU Deinterlacer', 'YADIF', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [0.991, 0.99, 0.99, 0.99, 0.99, 0.99, 0.989, 0.989, 0.989, 0.989, 0.986, 0.981, 0.981, 0.98, 0.946, 0.935, 0.935, 0.919, 0.902, 0.861, ], 
            }]
            });
    })
    })