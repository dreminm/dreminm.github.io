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
                text: 'PSNR on sequence # 27'
            },
            xAxis: {
                categories: ['MSU Deinterlacer', 'DfRes 122000 G2e 3', 'DfRes 121000 G2e 3', 'DfRes 119000', 'DfRes 61000', 'NNEDI', 'Vapoursynth EEDI3', 'Bob', 'Real-Time Deep Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'Vapoursynth TDeintMod', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'YADIF', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [29.914, 29.78, 29.636, 29.541, 29.501, 28.039, 27.984, 27.984, 27.849, 27.818, 27.756, 27.739, 27.604, 27.191, 26.969, 26.554, 26.454, 26.454, 25.6, 22.462, ], 
            }]
            });
    })
    })