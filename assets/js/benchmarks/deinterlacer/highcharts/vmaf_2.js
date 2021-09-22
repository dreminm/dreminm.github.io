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
                text: 'VMAF on sequence # 2'
            },
            xAxis: {
                categories: ['NNEDI', 'Vapoursynth TDeintMod', 'Real-Time Deep Deinterlacer', 'DfRes 61000', 'Vapoursynth EEDI3', 'Bob-Weave Deinterlacer', 'DfRes 122000 G2e 3', 'Kernel Deinterlacer (optimal parameters)', 'DfRes 121000 G2e 3', 'DfRes 119000', 'Weston 3-Field Deinterlacer', 'Bob', 'YADIF', 'MSU Deinterlacer', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [99.776, 99.463, 99.333, 99.316, 99.295, 99.231, 99.228, 99.217, 99.174, 99.01, 98.888, 98.377, 95.274, 95.014, 93.125, 90.459, 90.459, 88.747, 86.686, 53.147, ], 
            }]
            });
    })
    })