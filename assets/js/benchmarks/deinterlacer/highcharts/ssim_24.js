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
                text: 'SSIM on sequence # 24'
            },
            xAxis: {
                categories: ['DfRes 122000 G2e 3', 'DfRes 121000 G2e 3', 'DfRes 119000', 'DfRes 61000', 'MSU Deinterlacer', 'Vapoursynth EEDI3', 'NNEDI', 'Real-Time Deep Deinterlacer', 'Bob-Weave Deinterlacer', 'Bob', 'Vapoursynth TDeintMod', 'YADIF', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'Weston 3-Field Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [0.973, 0.973, 0.973, 0.971, 0.969, 0.959, 0.954, 0.95, 0.943, 0.941, 0.941, 0.94, 0.935, 0.928, 0.926, 0.924, 0.924, 0.917, 0.886, 0.726, ], 
            }]
            });
    })
    })