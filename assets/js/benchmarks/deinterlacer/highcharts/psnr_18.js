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
                text: 'PSNR on sequence # 18'
            },
            xAxis: {
                categories: ['Motion and Area Pixel Deinterlacer', 'VapourSynth TDeintMod', 'Bob-Weave Deinterlacer', 'MSU Deinterlacer', 'YADIF', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'VapourSynth EEDI3', 'Bob', 'Kernel Deinterlacer', 'NNEDI', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Real-Time Deep Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [57.053, 53.935, 52.634, 52.309, 51.695, 50.894, 50.616, 50.587, 49.649, 49.066, 48.64, 48.149, 48.149, 47.933, 39.743, 39.203, ], 
            }]
            });
    })
    })