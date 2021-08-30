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
                text: 'PSNR on sequence # 2'
            },
            xAxis: {
                categories: ['VapourSynth EEDI3', 'VapourSynth TDeintMod', 'NNEDI', 'Bob', 'Bob-Weave Deinterlacer', 'Real-Time Deep Deinterlacer', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'MSU Deinterlacer', 'YADIF', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Kernel Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [49.394, 49.216, 48.945, 48.683, 48.253, 48.232, 47.525, 46.159, 45.85, 45.799, 41.956, 41.956, 41.671, 40.857, 38.127, 33.668, ], 
            }]
            });
    })
    })