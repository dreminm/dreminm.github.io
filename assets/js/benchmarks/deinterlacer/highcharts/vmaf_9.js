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
                text: 'VMAF on sequence # 9'
            },
            xAxis: {
                categories: ['NNEDI', 'Real-Time Deep Deinterlacer', 'DfRes 122000 G2e 3', 'DfRes 121000 G2e 3', 'Bob-Weave Deinterlacer', 'Vapoursynth TDeintMod', 'Vapoursynth EEDI3', 'DfRes 61000', 'DfRes 119000', 'Kernel Deinterlacer (optimal parameters)', 'Weston 3-Field Deinterlacer', 'MSU Deinterlacer', 'Kernel Deinterlacer', 'YADIF', 'Bob', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [97.804, 96.631, 96.134, 96.065, 96.06, 96.058, 95.881, 95.864, 95.556, 93.496, 93.457, 92.749, 92.176, 91.922, 91.56, 91.557, 91.557, 90.561, 85.351, 52.241, ], 
            }]
            });
    })
    })