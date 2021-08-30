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
                text: 'VMAF on sequence # 4'
            },
            xAxis: {
                categories: ['Real-Time Deep Deinterlacer', 'VapourSynth TDeintMod', 'VapourSynth EEDI3', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'NNEDI', 'YADIF', 'Kernel Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Bob', 'MSU Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [100.0, 100.0, 100.0, 99.989, 99.886, 99.772, 99.635, 99.548, 99.548, 99.38, 99.295, 99.099, 99.099, 98.759, 93.098, 58.052, ], 
            }]
            });
    })
    })