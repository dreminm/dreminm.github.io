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
                text: 'SSIM on sequence # 8'
            },
            xAxis: {
                categories: ['Bob', 'VapourSynth EEDI3', 'VapourSynth TDeintMod', 'NNEDI', 'Real-Time Deep Deinterlacer', 'Bob-Weave Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Weston 3-Field Deinterlacer', 'MSU Deinterlacer', 'YADIF', 'Kernel Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [0.977, 0.976, 0.975, 0.975, 0.974, 0.973, 0.973, 0.972, 0.971, 0.971, 0.958, 0.953, 0.952, 0.952, 0.937, 0.722, ], 
            }]
            });
    })
    })