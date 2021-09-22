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
                text: 'VMAF on sequence # 16'
            },
            xAxis: {
                categories: ['MSU Deinterlacer', 'NNEDI', 'DfRes 61000', 'DfRes 122000 G2e 3', 'DfRes 121000 G2e 3', 'Vapoursynth EEDI3', 'Real-Time Deep Deinterlacer', 'Vapoursynth TDeintMod', 'DfRes 119000', 'Kernel Deinterlacer (optimal parameters)', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'Bob', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'YADIF', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [95.456, 94.129, 92.968, 92.428, 92.372, 91.65, 91.3, 91.117, 90.013, 88.907, 88.282, 88.28, 87.353, 87.127, 85.541, 85.541, 84.052, 81.993, 78.991, 31.653, ], 
            }]
            });
    })
    })