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
                text: 'SSIM on sequence # 1'
            },
            xAxis: {
                categories: ['MSU Deinterlacer', 'Real-Time Deep Deinterlacer', 'Bob', 'Kernel Deinterlacer (optimal parameters)', 'YADIF', 'VapourSynth EEDI3', 'NNEDI', 'Bob-Weave Deinterlacer', 'VapourSynth TDeintMod', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [0.965, 0.962, 0.962, 0.961, 0.961, 0.961, 0.96, 0.959, 0.959, 0.958, 0.957, 0.956, 0.956, 0.95, 0.93, 0.905, ], 
            }]
            });
    })
    })