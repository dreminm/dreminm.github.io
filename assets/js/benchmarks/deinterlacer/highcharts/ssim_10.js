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
                text: 'SSIM on sequence # 10'
            },
            xAxis: {
                categories: ['Real-Time Deep Deinterlacer', 'Bob-Weave Deinterlacer', 'VapourSynth TDeintMod', 'MSU Deinterlacer', 'YADIF', 'VapourSynth EEDI3', 'NNEDI', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Bob', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.998, 0.996, ], 
            }]
            });
    })
    })