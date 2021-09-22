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
                categories: ['DfRes 121000 G2e 3', 'DfRes 122000 G2e 3', 'DfRes 119000', 'DfRes 61000', 'MSU Deinterlacer', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'Real-Time Deep Deinterlacer', 'Motion Compensation Deinterlacer', 'Vapoursynth TDeintMod', 'Motion and Area Pixel Deinterlacer', 'NNEDI', 'Kernel Deinterlacer', 'Vapoursynth EEDI3', 'Kernel Deinterlacer (optimal parameters)', 'Bob', 'YADIF', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', ], 
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
                    data: [39.425, 39.394, 39.367, 37.747, 31.581, 27.403, 26.629, 26.51, 26.323, 26.186, 26.17, 26.165, 26.157, 26.099, 26.027, 26.011, 25.773, 24.518, 24.518, 24.044, ], 
            }]
            });
    })
    })