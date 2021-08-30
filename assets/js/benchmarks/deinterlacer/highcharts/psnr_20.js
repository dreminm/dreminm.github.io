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
                text: 'PSNR on sequence # 20'
            },
            xAxis: {
                categories: ['MSU Deinterlacer', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'NNEDI', 'VapourSynth EEDI3', 'VapourSynth TDeintMod', 'Real-Time Deep Deinterlacer', 'Bob', 'Kernel Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'YADIF', 'Motion Compensation Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', ], 
            },
            yAxis: {
                title: {
                    text: 'PSNR'
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
                    name: 'PSNR',
                    data: [34.061, 27.302, 25.905, 25.817, 25.727, 25.497, 25.474, 25.21, 25.046, 24.885, 24.85, 23.542, 23.017, 22.069, 22.069, 21.909, ], 
            }]
            });
    })
    })