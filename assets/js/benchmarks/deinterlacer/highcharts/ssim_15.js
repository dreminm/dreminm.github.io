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
                text: 'SSIM on sequence # 15'
            },
            xAxis: {
                categories: ['YADIF', 'NNEDI', 'DfRes 121000 G2e 3', 'DfRes 119000', 'Bob-Weave Deinterlacer', 'Vapoursynth TDeintMod', 'MSU Deinterlacer', 'DfRes 122000 G2e 3', 'Vapoursynth EEDI3', 'DfRes 61000', 'Real-Time Deep Deinterlacer', 'Bob', 'Kernel Deinterlacer (optimal parameters)', 'Motion and Area Pixel Deinterlacer', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Weston 3-Field Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [0.999, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.997, 0.997, 0.996, 0.996, 0.996, 0.995, 0.995, 0.995, 0.995, 0.993, 0.992, 0.929, ], 
            }]
            });
    })
    })