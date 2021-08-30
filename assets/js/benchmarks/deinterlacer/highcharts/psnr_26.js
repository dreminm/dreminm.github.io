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
                text: 'PSNR on sequence # 26'
            },
            xAxis: {
                categories: ['MSU Deinterlacer', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'Real-Time Deep Deinterlacer', 'Motion Compensation Deinterlacer', 'VapourSynth TDeintMod', 'Motion and Area Pixel Deinterlacer', 'NNEDI', 'Kernel Deinterlacer', 'VapourSynth EEDI3', 'Kernel Deinterlacer (optimal parameters)', 'Bob', 'YADIF', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', ], 
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
                    data: [31.581, 27.403, 26.629, 26.51, 26.323, 26.186, 26.17, 26.165, 26.157, 26.099, 26.027, 26.011, 25.773, 24.518, 24.518, 24.044, ], 
            }]
            });
    })
    })