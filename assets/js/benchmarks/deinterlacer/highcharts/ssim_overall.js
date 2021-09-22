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
                text: 'Overall SSIM'
            },
            xAxis: {
                categories: ['DfRes 121000 G2e 3', 'DfRes 122000 G2e 3', 'DfRes 119000', 'DfRes 61000', 'MSU Deinterlacer', 'NNEDI', 'Vapoursynth EEDI3', 'Real-Time Deep Deinterlacer', 'Bob-Weave Deinterlacer', 'Bob', 'Vapoursynth TDeintMod', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'YADIF', 'Kernel Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [0.969, 0.969, 0.968, 0.967, 0.963, 0.954, 0.954, 0.953, 0.953, 0.951, 0.951, 0.947, 0.947, 0.945, 0.939, 0.932, 0.928, 0.928, 0.901, 0.83, ], 
            }]
            });
    })
    })