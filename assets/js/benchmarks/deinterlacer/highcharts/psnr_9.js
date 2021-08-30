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
                text: 'PSNR on sequence # 9'
            },
            xAxis: {
                categories: ['VapourSynth EEDI3', 'NNEDI', 'Real-Time Deep Deinterlacer', 'Bob-Weave Deinterlacer', 'MSU Deinterlacer', 'YADIF', 'Bob', 'VapourSynth TDeintMod', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [45.555, 45.339, 44.918, 44.819, 44.629, 44.531, 44.495, 44.38, 44.239, 43.935, 42.963, 42.135, 42.135, 41.012, 38.649, 33.373, ], 
            }]
            });
    })
    })