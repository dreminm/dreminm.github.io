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
                text: 'VMAF on sequence # 8'
            },
            xAxis: {
                categories: ['Real-Time Deep Deinterlacer', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'VapourSynth TDeintMod', 'MSU Deinterlacer', 'YADIF', 'Bob', 'VapourSynth EEDI3', 'NNEDI', 'Kernel Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 99.853, 99.745, 99.745, 99.703, 99.703, 99.699, 99.576, 58.985, ], 
            }]
            });
    })
    })