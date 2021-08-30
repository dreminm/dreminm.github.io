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
                text: 'SSIM on sequence # 20'
            },
            xAxis: {
                categories: ['MSU Deinterlacer', 'Bob-Weave Deinterlacer', 'NNEDI', 'VapourSynth TDeintMod', 'VapourSynth EEDI3', 'Real-Time Deep Deinterlacer', 'Weston 3-Field Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Bob', 'Kernel Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'YADIF', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [0.99, 0.961, 0.945, 0.943, 0.943, 0.939, 0.939, 0.937, 0.936, 0.931, 0.931, 0.911, 0.887, 0.887, 0.849, 0.77, ], 
            }]
            });
    })
    })