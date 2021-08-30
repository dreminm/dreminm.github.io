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
                text: 'VMAF on sequence # 6'
            },
            xAxis: {
                categories: ['MSU Deinterlacer', 'Bob-Weave Deinterlacer', 'Real-Time Deep Deinterlacer', 'Weston 3-Field Deinterlacer', 'NNEDI', 'VapourSynth TDeintMod', 'YADIF', 'Kernel Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'VapourSynth EEDI3', 'Motion and Area Pixel Deinterlacer', 'Bob', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [94.005, 92.15, 90.394, 89.692, 88.765, 87.538, 86.192, 84.982, 84.182, 83.393, 80.094, 78.07, 77.778, 77.778, 72.769, 69.839, ], 
            }]
            });
    })
    })