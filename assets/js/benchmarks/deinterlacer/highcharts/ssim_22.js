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
                text: 'SSIM on sequence # 22'
            },
            xAxis: {
                categories: ['Bob', 'Bob-Weave Deinterlacer', 'YADIF', 'VapourSynth EEDI3', 'Weston 3-Field Deinterlacer', 'MSU Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'VapourSynth TDeintMod', 'NNEDI', 'Real-Time Deep Deinterlacer', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [0.997, 0.995, 0.994, 0.994, 0.993, 0.993, 0.992, 0.992, 0.992, 0.991, 0.99, 0.989, 0.989, 0.989, 0.985, 0.978, ], 
            }]
            });
    })
    })