$(function () {
    $(document).ready(function() {
        Highcharts.chart('overall-plot', {
            chart: {
                type: 'column'
            },
            navigation: {
                buttonOptions: {
                    enabled: false
                }
            },
            title: {
                text: 'Overall PSNR'
            },
            xAxis: {
                categories: ['DfRes 122000 G2e 3', 'DfRes 121000 G2e 3', 'DfRes 119000', 'DfRes 61000', 'MSU Deinterlacer', 'Bob-Weave Deinterlacer', 'Vapoursynth TDeintMod', 'NNEDI', 'Vapoursynth EEDI3', 'Real-Time Deep Deinterlacer', 'YADIF', 'Weston 3-Field Deinterlacer', 'Bob', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [41.891, 41.869, 41.674, 41.163, 38.556, 37.948, 37.617, 37.099, 37.061, 37.031, 36.918, 36.788, 36.668, 36.449, 35.712, 35.278, 34.486, 34.486, 32.901, 29.259, ], 
            }]
            });
    })
    })