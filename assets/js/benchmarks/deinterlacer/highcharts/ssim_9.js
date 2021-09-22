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
                text: 'SSIM on sequence # 9'
            },
            xAxis: {
                categories: ['DfRes 121000 G2e 3', 'DfRes 119000', 'Vapoursynth EEDI3', 'DfRes 61000', 'DfRes 122000 G2e 3', 'NNEDI', 'Bob', 'Bob-Weave Deinterlacer', 'YADIF', 'Real-Time Deep Deinterlacer', 'MSU Deinterlacer', 'Weston 3-Field Deinterlacer', 'Vapoursynth TDeintMod', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [0.993, 0.993, 0.993, 0.993, 0.993, 0.992, 0.992, 0.992, 0.992, 0.991, 0.991, 0.99, 0.989, 0.988, 0.981, 0.975, 0.975, 0.972, 0.951, 0.92, ], 
            }]
            });
    })
    })