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
                text: 'VMAF on sequence # 23'
            },
            xAxis: {
                categories: ['NNEDI', 'MSU Deinterlacer', 'Real-Time Deep Deinterlacer', 'Bob-Weave Deinterlacer', 'VapourSynth TDeintMod', 'Kernel Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'VapourSynth EEDI3', 'Kernel Deinterlacer (optimal parameters)', 'Weston 3-Field Deinterlacer', 'YADIF', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Bob', 'Motion Compensation Deinterlacer', ], 
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
                    data: [98.539, 98.35, 98.277, 98.169, 97.972, 97.816, 97.705, 97.445, 97.395, 97.127, 97.115, 96.878, 96.878, 95.839, 95.573, 80.005, ], 
            }]
            });
    })
    })