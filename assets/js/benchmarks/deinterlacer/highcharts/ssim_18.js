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
                text: 'SSIM on sequence # 18'
            },
            xAxis: {
                categories: ['Bob-Weave Deinterlacer', 'VapourSynth TDeintMod', 'YADIF', 'Bob', 'VapourSynth EEDI3', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'MSU Deinterlacer', 'NNEDI', 'Real-Time Deep Deinterlacer', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [0.998, 0.998, 0.998, 0.998, 0.998, 0.997, 0.997, 0.997, 0.997, 0.996, 0.99, 0.99, 0.99, 0.99, 0.952, 0.935, ], 
            }]
            });
    })
    })