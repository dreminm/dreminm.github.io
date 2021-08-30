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
                text: 'SSIM on sequence # 17'
            },
            xAxis: {
                categories: ['VapourSynth EEDI3', 'Real-Time Deep Deinterlacer', 'Bob-Weave Deinterlacer', 'Bob', 'NNEDI', 'VapourSynth TDeintMod', 'Weston 3-Field Deinterlacer', 'MSU Deinterlacer', 'YADIF', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
            },
            yAxis: {
                title: {
                    text: 'SSIM'
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
                    name: 'SSIM',
                    data: [0.984, 0.983, 0.983, 0.983, 0.983, 0.981, 0.98, 0.979, 0.979, 0.977, 0.964, 0.957, 0.957, 0.954, 0.931, 0.899, ], 
            }]
            });
    })
    })