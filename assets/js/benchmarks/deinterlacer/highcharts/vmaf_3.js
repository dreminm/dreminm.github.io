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
                text: 'VMAF on sequence # 3'
            },
            xAxis: {
                categories: ['Real-Time Deep Deinterlacer', 'VapourSynth TDeintMod', 'VapourSynth EEDI3', 'Weston 3-Field Deinterlacer', 'NNEDI', 'Bob', 'Bob-Weave Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'MSU Deinterlacer', 'Kernel Deinterlacer', 'YADIF', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [100.0, 100.0, 100.0, 99.952, 99.906, 99.898, 99.877, 99.677, 99.538, 99.093, 98.578, 98.399, 98.399, 98.368, 95.67, 63.265, ], 
            }]
            });
    })
    })