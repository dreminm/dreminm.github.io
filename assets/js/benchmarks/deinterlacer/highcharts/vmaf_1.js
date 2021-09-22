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
                text: 'VMAF on sequence # 1'
            },
            xAxis: {
                categories: ['NNEDI', 'DfRes 61000', 'DfRes 122000 G2e 3', 'Real-Time Deep Deinterlacer', 'DfRes 121000 G2e 3', 'Vapoursynth TDeintMod', 'DfRes 119000', 'Vapoursynth EEDI3', 'Bob-Weave Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Weston 3-Field Deinterlacer', 'MSU Deinterlacer', 'YADIF', 'Bob', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [91.768, 89.749, 89.648, 89.464, 89.405, 88.76, 88.355, 88.262, 88.19, 86.549, 86.262, 85.885, 85.885, 85.625, 85.503, 84.593, 84.491, 83.498, 75.76, 49.979, ], 
            }]
            });
    })
    })