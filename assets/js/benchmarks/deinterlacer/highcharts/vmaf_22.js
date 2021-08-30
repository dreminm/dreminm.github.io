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
                categories: ['NNEDI', 'VapourSynth EEDI3', 'Weston 3-Field Deinterlacer', 'Bob-Weave Deinterlacer', 'Real-Time Deep Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'YADIF', 'Bob', 'Kernel Deinterlacer', 'VapourSynth TDeintMod', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'MSU Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [99.789, 99.65, 99.046, 98.848, 98.615, 98.165, 97.689, 97.624, 97.526, 97.401, 97.133, 97.133, 97.123, 97.036, 95.781, 95.113, ], 
            }]
            });
    })
    })