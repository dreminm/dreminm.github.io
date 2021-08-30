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
                text: 'VMAF on sequence # 12'
            },
            xAxis: {
                categories: ['Motion and Area Pixel Deinterlacer', 'NNEDI', 'Motion Compensation Deinterlacer', 'Kernel Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'MSU Deinterlacer', 'Bob-Weave Deinterlacer', 'Real-Time Deep Deinterlacer', 'Weston 3-Field Deinterlacer', 'VapourSynth TDeintMod', 'VapourSynth EEDI3', 'Bob', 'YADIF', ], 
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
                    data: [99.13, 94.696, 90.324, 90.257, 90.192, 86.847, 86.847, 84.598, 72.605, 67.973, 67.296, 66.647, 65.634, 65.078, 62.447, 60.793, ], 
            }]
            });
    })
    })