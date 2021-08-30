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
                text: 'PSNR on sequence # 19'
            },
            xAxis: {
                categories: ['NNEDI', 'VapourSynth EEDI3', 'VapourSynth TDeintMod', 'Real-Time Deep Deinterlacer', 'Bob-Weave Deinterlacer', 'Bob', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'MSU Deinterlacer', 'YADIF', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
            },
            yAxis: {
                title: {
                    text: 'PSNR'
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
                    name: 'PSNR',
                    data: [44.291, 43.885, 43.827, 43.822, 43.606, 43.041, 42.671, 42.252, 41.578, 41.391, 40.552, 38.831, 38.831, 38.038, 35.455, 29.77, ], 
            }]
            });
    })
    })