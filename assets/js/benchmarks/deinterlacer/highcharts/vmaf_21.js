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
                text: 'VMAF on sequence # 21'
            },
            xAxis: {
                categories: ['NNEDI', 'VapourSynth TDeintMod', 'MSU Deinterlacer', 'Real-Time Deep Deinterlacer', 'VapourSynth EEDI3', 'Kernel Deinterlacer (optimal parameters)', 'Bob-Weave Deinterlacer', 'Kernel Deinterlacer', 'Weston 3-Field Deinterlacer', 'Bob', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'YADIF', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [90.192, 86.901, 86.707, 86.66, 86.122, 85.365, 85.256, 84.871, 84.21, 82.351, 80.156, 80.156, 79.456, 77.197, 68.149, 45.275, ], 
            }]
            });
    })
    })