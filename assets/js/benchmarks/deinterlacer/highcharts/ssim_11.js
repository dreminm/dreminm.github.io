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
                text: 'SSIM on sequence # 11'
            },
            xAxis: {
                categories: ['NNEDI', 'VapourSynth EEDI3', 'MSU Deinterlacer', 'Real-Time Deep Deinterlacer', 'Bob', 'Kernel Deinterlacer (optimal parameters)', 'VapourSynth TDeintMod', 'Kernel Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Bob-Weave Deinterlacer', 'YADIF', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Weston 3-Field Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [0.773, 0.771, 0.755, 0.754, 0.741, 0.728, 0.726, 0.725, 0.714, 0.712, 0.708, 0.704, 0.704, 0.695, 0.663, 0.379, ], 
            }]
            });
    })
    })