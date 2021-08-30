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
                text: 'PSNR on sequence # 13'
            },
            xAxis: {
                categories: ['MSU Deinterlacer', 'VapourSynth EEDI3', 'NNEDI', 'Real-Time Deep Deinterlacer', 'VapourSynth TDeintMod', 'Bob-Weave Deinterlacer', 'Bob', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'YADIF', 'Motion and Area Pixel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [40.422, 39.603, 39.5, 39.41, 39.247, 38.957, 38.771, 38.223, 38.178, 37.054, 36.778, 34.546, 34.443, 34.443, 31.998, 28.165, ], 
            }]
            });
    })
    })