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
                text: 'SSIM on sequence # 18'
            },
            xAxis: {
                categories: ['DfRes 121000 G2e 3', 'DfRes 119000', 'DfRes 61000', 'DfRes 122000 G2e 3', 'Bob', 'Vapoursynth EEDI3', 'Bob-Weave Deinterlacer', 'Vapoursynth TDeintMod', 'YADIF', 'NNEDI', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'MSU Deinterlacer', 'Real-Time Deep Deinterlacer', 'Kernel Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
            },
            yAxis: {
                title: {
                    text: 'SSIM'
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
                    name: 'SSIM',
                    data: [0.999, 0.999, 0.999, 0.999, 0.998, 0.998, 0.998, 0.998, 0.998, 0.997, 0.997, 0.997, 0.997, 0.996, 0.99, 0.99, 0.99, 0.99, 0.952, 0.935, ], 
            }]
            });
    })
    })