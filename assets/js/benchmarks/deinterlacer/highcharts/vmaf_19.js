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
                text: 'VMAF on sequence # 19'
            },
            xAxis: {
                categories: ['NNEDI', 'Real-Time Deep Deinterlacer', 'Bob-Weave Deinterlacer', 'VapourSynth TDeintMod', 'VapourSynth EEDI3', 'Kernel Deinterlacer (optimal parameters)', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer', 'MSU Deinterlacer', 'Bob', 'YADIF', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [99.839, 99.823, 99.774, 99.739, 99.407, 99.298, 98.791, 98.579, 97.99, 97.561, 96.747, 96.626, 96.626, 95.843, 88.247, 53.6, ], 
            }]
            });
    })
    })