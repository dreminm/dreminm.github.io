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
                text: 'VMAF on sequence # 24'
            },
            xAxis: {
                categories: ['DfRes 61000', 'DfRes 122000 G2e 3', 'DfRes 121000 G2e 3', 'DfRes 119000', 'NNEDI', 'MSU Deinterlacer', 'Vapoursynth EEDI3', 'Real-Time Deep Deinterlacer', 'Vapoursynth TDeintMod', 'Bob-Weave Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'Weston 3-Field Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'YADIF', 'Bob', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
            },
            yAxis: {
                title: {
                    text: 'VMAF'
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
                    name: 'VMAF',
                    data: [99.652, 99.597, 99.589, 99.571, 97.965, 97.807, 96.071, 95.801, 94.789, 94.148, 94.137, 93.51, 92.183, 90.249, 90.249, 89.588, 89.454, 88.97, 83.335, 50.892, ], 
            }]
            });
    })
    })