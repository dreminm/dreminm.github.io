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
                text: 'VMAF on sequence # 6'
            },
            xAxis: {
                categories: ['DfRes 122000 G2e 3', 'DfRes 61000', 'DfRes 121000 G2e 3', 'DfRes 119000', 'MSU Deinterlacer', 'Bob-Weave Deinterlacer', 'Real-Time Deep Deinterlacer', 'Weston 3-Field Deinterlacer', 'NNEDI', 'Vapoursynth TDeintMod', 'YADIF', 'Kernel Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Vapoursynth EEDI3', 'Motion and Area Pixel Deinterlacer', 'Bob', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [96.475, 96.472, 96.247, 96.113, 94.005, 92.15, 90.394, 89.692, 88.765, 87.538, 86.192, 84.982, 84.182, 83.393, 80.094, 78.07, 77.778, 77.778, 72.769, 69.839, ], 
            }]
            });
    })
    })