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
                text: 'SSIM on sequence # 27'
            },
            xAxis: {
                categories: ['MSU Deinterlacer', 'Bob', 'VapourSynth EEDI3', 'NNEDI', 'Real-Time Deep Deinterlacer', 'VapourSynth TDeintMod', 'Kernel Deinterlacer (optimal parameters)', 'Bob-Weave Deinterlacer', 'Kernel Deinterlacer', 'Weston 3-Field Deinterlacer', 'YADIF', 'Motion and Area Pixel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [0.909, 0.887, 0.886, 0.885, 0.884, 0.882, 0.881, 0.875, 0.872, 0.861, 0.858, 0.855, 0.851, 0.851, 0.808, 0.686, ], 
            }]
            });
    })
    })