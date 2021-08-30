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
                text: 'VMAF on sequence # 14'
            },
            xAxis: {
                categories: ['VapourSynth TDeintMod', 'NNEDI', 'Bob-Weave Deinterlacer', 'Real-Time Deep Deinterlacer', 'VapourSynth EEDI3', 'Weston 3-Field Deinterlacer', 'Bob', 'Kernel Deinterlacer (optimal parameters)', 'YADIF', 'MSU Deinterlacer', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [96.251, 96.158, 95.649, 95.173, 95.086, 94.346, 93.733, 92.973, 92.865, 92.171, 90.175, 90.09, 90.09, 88.759, 84.391, 76.022, ], 
            }]
            });
    })
    })