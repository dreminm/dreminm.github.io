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
                categories: ['NNEDI', 'VapourSynth TDeintMod', 'Real-Time Deep Deinterlacer', 'VapourSynth EEDI3', 'Bob-Weave Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Weston 3-Field Deinterlacer', 'Bob', 'YADIF', 'MSU Deinterlacer', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [99.776, 99.463, 99.333, 99.295, 99.231, 99.217, 98.888, 98.377, 95.274, 95.014, 93.125, 90.459, 90.459, 88.747, 86.686, 53.147, ], 
            }]
            });
    })
    })