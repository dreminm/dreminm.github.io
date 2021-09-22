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
                text: 'VMAF on sequence # 5'
            },
            xAxis: {
                categories: ['NNEDI', 'DfRes 121000 G2e 3', 'DfRes 122000 G2e 3', 'Real-Time Deep Deinterlacer', 'DfRes 61000', 'DfRes 119000', 'Bob-Weave Deinterlacer', 'Vapoursynth TDeintMod', 'Vapoursynth EEDI3', 'MSU Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'ASVZZZ Deinterlacer', 'Muksun Deinterlacer', 'Kernel Deinterlacer', 'Weston 3-Field Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'YADIF', 'Bob', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [99.079, 98.618, 98.552, 98.224, 98.203, 97.922, 97.151, 96.957, 96.867, 96.079, 95.555, 95.329, 95.329, 95.275, 95.234, 94.46, 94.42, 93.829, 92.622, 52.872, ], 
            }]
            });
    })
    })