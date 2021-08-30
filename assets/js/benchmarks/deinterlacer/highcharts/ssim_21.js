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
                text: 'SSIM on sequence # 21'
            },
            xAxis: {
                categories: ['MSU Deinterlacer', 'Bob', 'VapourSynth EEDI3', 'Real-Time Deep Deinterlacer', 'NNEDI', 'Bob-Weave Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'VapourSynth TDeintMod', 'Kernel Deinterlacer', 'Weston 3-Field Deinterlacer', 'YADIF', 'Motion and Area Pixel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [0.883, 0.854, 0.852, 0.851, 0.851, 0.848, 0.848, 0.846, 0.842, 0.838, 0.818, 0.818, 0.812, 0.812, 0.75, 0.579, ], 
            }]
            });
    })
    })