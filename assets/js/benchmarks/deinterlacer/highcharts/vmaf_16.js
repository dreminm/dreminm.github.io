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
                text: 'VMAF on sequence # 16'
            },
            xAxis: {
                categories: ['MSU Deinterlacer', 'NNEDI', 'VapourSynth EEDI3', 'Real-Time Deep Deinterlacer', 'VapourSynth TDeintMod', 'Kernel Deinterlacer (optimal parameters)', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'Bob', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'YADIF', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [95.456, 94.129, 91.65, 91.3, 91.117, 88.907, 88.282, 88.28, 87.353, 87.127, 85.541, 85.541, 84.052, 81.993, 78.991, 31.653, ], 
            }]
            });
    })
    })