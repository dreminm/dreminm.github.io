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
                text: 'PSNR on sequence # 7'
            },
            xAxis: {
                categories: ['MSU Deinterlacer', 'Bob-Weave Deinterlacer', 'YADIF', 'NNEDI', 'Real-Time Deep Deinterlacer', 'VapourSynth EEDI3', 'Kernel Deinterlacer', 'VapourSynth TDeintMod', 'Kernel Deinterlacer (optimal parameters)', 'Weston 3-Field Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Bob', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion Compensation Deinterlacer', 'PAL Interpolation', ], 
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
                    data: [41.444, 38.16, 37.684, 37.668, 37.474, 37.279, 37.23, 37.199, 37.197, 36.955, 36.553, 36.513, 36.178, 36.178, 34.702, 34.237, ], 
            }]
            });
    })
    })