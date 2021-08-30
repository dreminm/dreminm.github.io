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
                text: 'SSIM on sequence # 14'
            },
            xAxis: {
                categories: ['VapourSynth EEDI3', 'Bob', 'NNEDI', 'VapourSynth TDeintMod', 'Real-Time Deep Deinterlacer', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'YADIF', 'MSU Deinterlacer', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [0.975, 0.974, 0.974, 0.973, 0.972, 0.971, 0.968, 0.964, 0.958, 0.955, 0.93, 0.922, 0.922, 0.9, 0.887, 0.851, ], 
            }]
            });
    })
    })