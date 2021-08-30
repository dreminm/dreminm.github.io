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
                text: 'PSNR on sequence # 11'
            },
            xAxis: {
                categories: ['NNEDI', 'VapourSynth EEDI3', 'MSU Deinterlacer', 'Real-Time Deep Deinterlacer', 'Bob', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'VapourSynth TDeintMod', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'YADIF', 'Motion and Area Pixel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [18.668, 18.474, 18.435, 18.34, 18.211, 18.102, 18.064, 17.753, 17.706, 17.653, 17.601, 17.555, 17.294, 17.294, 16.708, 14.64, ], 
            }]
            });
    })
    })