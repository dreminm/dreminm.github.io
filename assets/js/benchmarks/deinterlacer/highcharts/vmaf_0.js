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
                text: 'VMAF on sequence # 0'
            },
            xAxis: {
                categories: ['NNEDI', 'Vapoursynth TDeintMod', 'Bob-Weave Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Real-Time Deep Deinterlacer', 'Vapoursynth EEDI3', 'DfRes 61000', 'DfRes 122000 G2e 3', 'DfRes 121000 G2e 3', 'DfRes 119000', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer', 'MSU Deinterlacer', 'Bob', 'YADIF', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [99.87, 99.804, 99.798, 99.622, 99.602, 99.553, 99.509, 99.506, 99.431, 99.367, 99.074, 98.933, 98.606, 98.554, 97.371, 95.37, 95.37, 94.548, 84.742, 68.345, ], 
            }]
            });
    })
    })