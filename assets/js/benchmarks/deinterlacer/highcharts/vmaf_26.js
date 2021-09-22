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
                text: 'VMAF on sequence # 26'
            },
            xAxis: {
                categories: ['DfRes 122000 G2e 3', 'DfRes 121000 G2e 3', 'DfRes 119000', 'DfRes 61000', 'MSU Deinterlacer', 'Motion Compensation Deinterlacer', 'Bob-Weave Deinterlacer', 'NNEDI', 'Vapoursynth TDeintMod', 'Motion and Area Pixel Deinterlacer', 'Real-Time Deep Deinterlacer', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Vapoursynth EEDI3', 'YADIF', 'Bob', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', ], 
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
                    data: [94.522, 94.519, 94.268, 93.763, 85.75, 78.826, 78.116, 75.962, 74.752, 74.741, 74.333, 74.158, 73.913, 73.089, 72.602, 69.78, 68.854, 65.236, 65.236, 64.106, ], 
            }]
            });
    })
    })