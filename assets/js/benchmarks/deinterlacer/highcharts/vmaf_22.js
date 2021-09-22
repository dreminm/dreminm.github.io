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
                text: 'VMAF on sequence # 22'
            },
            xAxis: {
                categories: ['NNEDI', 'Vapoursynth EEDI3', 'Weston 3-Field Deinterlacer', 'Bob-Weave Deinterlacer', 'Real-Time Deep Deinterlacer', 'DfRes 61000', 'Kernel Deinterlacer (optimal parameters)', 'DfRes 119000', 'DfRes 122000 G2e 3', 'DfRes 121000 G2e 3', 'YADIF', 'Bob', 'Kernel Deinterlacer', 'Vapoursynth TDeintMod', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'MSU Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [99.789, 99.65, 99.046, 98.848, 98.615, 98.263, 98.165, 97.967, 97.94, 97.872, 97.689, 97.624, 97.526, 97.401, 97.133, 97.133, 97.123, 97.036, 95.781, 95.113, ], 
            }]
            });
    })
    })