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
                text: 'VMAF on sequence # 7'
            },
            xAxis: {
                categories: ['DfRes 122000 G2e 3', 'DfRes 121000 G2e 3', 'DfRes 119000', 'DfRes 61000', 'MSU Deinterlacer', 'NNEDI', 'Bob-Weave Deinterlacer', 'Real-Time Deep Deinterlacer', 'Vapoursynth EEDI3', 'Vapoursynth TDeintMod', 'Weston 3-Field Deinterlacer', 'YADIF', 'Kernel Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Motion and Area Pixel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Bob', 'Motion Compensation Deinterlacer', 'PAL Interpolation', ], 
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
                    data: [92.98, 92.749, 92.443, 92.221, 89.984, 86.386, 86.315, 85.321, 84.146, 83.973, 83.247, 82.351, 80.98, 80.95, 80.803, 78.735, 78.735, 78.392, 75.903, 70.784, ], 
            }]
            });
    })
    })