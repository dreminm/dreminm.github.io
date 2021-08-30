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
                text: 'VMAF on sequence # 11'
            },
            xAxis: {
                categories: ['VapourSynth EEDI3', 'NNEDI', 'VapourSynth TDeintMod', 'Real-Time Deep Deinterlacer', 'Bob', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'MSU Deinterlacer', 'Bob-Weave Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'YADIF', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [57.53, 57.408, 56.526, 56.042, 54.469, 54.414, 54.226, 53.622, 53.004, 52.708, 46.852, 44.696, 43.595, 43.595, 38.807, 33.179, ], 
            }]
            });
    })
    })