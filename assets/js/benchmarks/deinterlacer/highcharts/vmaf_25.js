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
                text: 'VMAF on sequence # 25'
            },
            xAxis: {
                categories: ['MSU Deinterlacer', 'Bob-Weave Deinterlacer', 'VapourSynth TDeintMod', 'Weston 3-Field Deinterlacer', 'YADIF', 'Motion and Area Pixel Deinterlacer', 'Kernel Deinterlacer', 'PAL Interpolation', 'Real-Time Deep Deinterlacer', 'NNEDI', 'Motion Compensation Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'VapourSynth EEDI3', 'Bob', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', ], 
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
                    data: [94.402, 92.456, 90.441, 89.818, 89.394, 88.773, 88.302, 88.3, 88.077, 87.506, 87.249, 86.507, 86.122, 81.705, 76.408, 76.408, ], 
            }]
            });
    })
    })