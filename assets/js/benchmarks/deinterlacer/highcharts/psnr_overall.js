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
                categories: ['MSU Deinterlacer', 'Bob-Weave Deinterlacer', 'VapourSynth TDeintMod', 'NNEDI', 'VapourSynth EEDI3', 'Real-Time Deep Deinterlacer', 'YADIF', 'Weston 3-Field Deinterlacer', 'Bob', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [38.556, 37.948, 37.617, 37.099, 37.061, 37.031, 36.918, 36.788, 36.668, 36.449, 35.712, 35.278, 34.486, 34.486, 32.901, 29.259, ], 
            }]
            });
    })
    })