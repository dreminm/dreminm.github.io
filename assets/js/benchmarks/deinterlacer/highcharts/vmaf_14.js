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
                categories: ['Vapoursynth TDeintMod', 'NNEDI', 'Bob-Weave Deinterlacer', 'DfRes 61000', 'Real-Time Deep Deinterlacer', 'Vapoursynth EEDI3', 'DfRes 122000 G2e 3', 'DfRes 121000 G2e 3', 'Weston 3-Field Deinterlacer', 'DfRes 119000', 'Bob', 'Kernel Deinterlacer (optimal parameters)', 'YADIF', 'MSU Deinterlacer', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [96.251, 96.158, 95.649, 95.39, 95.173, 95.086, 94.865, 94.668, 94.346, 94.336, 93.733, 92.973, 92.865, 92.171, 90.175, 90.09, 90.09, 88.759, 84.391, 76.022, ], 
            }]
            });
    })
    })