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
                text: 'VMAF on sequence # 10'
            },
            xAxis: {
                categories: ['Real-Time Deep Deinterlacer', 'Bob-Weave Deinterlacer', 'MSU Deinterlacer', 'NNEDI', 'Motion and Area Pixel Deinterlacer', 'VapourSynth TDeintMod', 'YADIF', 'VapourSynth EEDI3', 'Weston 3-Field Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'Bob', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [96.195, 95.988, 95.955, 95.914, 94.973, 94.686, 94.619, 93.789, 93.692, 92.509, 92.509, 91.922, 91.726, 90.518, 89.95, 86.406, ], 
            }]
            });
    })
    })