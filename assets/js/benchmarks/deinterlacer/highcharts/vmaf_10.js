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
                text: 'VMAF on sequence # 10'
            },
            xAxis: {
                categories: ['DfRes 122000 G2e 3', 'DfRes 121000 G2e 3', 'DfRes 119000', 'DfRes 61000', 'Real-Time Deep Deinterlacer', 'Bob-Weave Deinterlacer', 'MSU Deinterlacer', 'NNEDI', 'Motion and Area Pixel Deinterlacer', 'Vapoursynth TDeintMod', 'YADIF', 'Vapoursynth EEDI3', 'Weston 3-Field Deinterlacer', 'ASVZZZ Deinterlacer', 'Muksun Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'Bob', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [97.213, 97.121, 97.118, 96.884, 96.195, 95.988, 95.955, 95.914, 94.973, 94.686, 94.619, 93.789, 93.692, 92.509, 92.509, 91.922, 91.726, 90.518, 89.95, 86.406, ], 
            }]
            });
    })
    })