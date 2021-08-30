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
                text: 'VMAF on sequence # 18'
            },
            xAxis: {
                categories: ['NNEDI', 'Motion and Area Pixel Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'VapourSynth TDeintMod', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Real-Time Deep Deinterlacer', 'Bob-Weave Deinterlacer', 'MSU Deinterlacer', 'PAL Interpolation', 'VapourSynth EEDI3', 'Weston 3-Field Deinterlacer', 'YADIF', 'Bob', 'Motion Compensation Deinterlacer', ], 
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
                    data: [98.801, 98.292, 97.645, 97.568, 97.522, 97.015, 97.015, 96.717, 96.6, 96.18, 95.926, 94.2, 93.888, 93.864, 91.772, 81.44, ], 
            }]
            });
    })
    })