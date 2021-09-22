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
                text: 'SSIM on sequence # 16'
            },
            xAxis: {
                categories: ['MSU Deinterlacer', 'DfRes 122000 G2e 3', 'DfRes 121000 G2e 3', 'DfRes 61000', 'Vapoursynth EEDI3', 'DfRes 119000', 'NNEDI', 'Real-Time Deep Deinterlacer', 'Bob', 'Vapoursynth TDeintMod', 'Bob-Weave Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'Weston 3-Field Deinterlacer', 'YADIF', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [0.947, 0.922, 0.921, 0.921, 0.918, 0.917, 0.916, 0.911, 0.911, 0.909, 0.904, 0.904, 0.898, 0.893, 0.89, 0.886, 0.886, 0.881, 0.855, 0.613, ], 
            }]
            });
    })
    })