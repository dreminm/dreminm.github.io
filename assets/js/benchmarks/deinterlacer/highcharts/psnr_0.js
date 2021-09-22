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
                text: 'PSNR on sequence # 0'
            },
            xAxis: {
                categories: ['Kernel Deinterlacer (optimal parameters)', 'DfRes 61000', 'DfRes 119000', 'Vapoursynth TDeintMod', 'DfRes 122000 G2e 3', 'DfRes 121000 G2e 3', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'MSU Deinterlacer', 'Bob', 'Vapoursynth EEDI3', 'YADIF', 'NNEDI', 'Real-Time Deep Deinterlacer', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [38.733, 38.718, 38.712, 38.696, 38.69, 38.683, 38.659, 38.653, 38.548, 38.483, 38.452, 38.427, 38.425, 38.313, 38.277, 36.971, 36.971, 36.752, 34.774, 32.495, ], 
            }]
            });
    })
    })