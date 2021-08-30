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
                text: 'VMAF on sequence # 17'
            },
            xAxis: {
                categories: ['VapourSynth TDeintMod', 'Bob-Weave Deinterlacer', 'NNEDI', 'Real-Time Deep Deinterlacer', 'MSU Deinterlacer', 'VapourSynth EEDI3', 'Kernel Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'YADIF', 'Weston 3-Field Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Bob', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [97.773, 97.702, 97.466, 95.37, 94.475, 94.437, 93.864, 93.815, 93.814, 93.202, 92.454, 91.045, 89.422, 89.422, 82.659, 58.486, ], 
            }]
            });
    })
    })