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
                text: 'SSIM on sequence # 7'
            },
            xAxis: {
                categories: ['MSU Deinterlacer', 'Bob-Weave Deinterlacer', 'YADIF', 'VapourSynth EEDI3', 'NNEDI', 'Real-Time Deep Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'VapourSynth TDeintMod', 'Kernel Deinterlacer', 'Bob', 'Weston 3-Field Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Motion Compensation Deinterlacer', 'PAL Interpolation', ], 
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
                    data: [0.984, 0.971, 0.968, 0.968, 0.968, 0.966, 0.964, 0.964, 0.963, 0.963, 0.962, 0.958, 0.958, 0.958, 0.935, 0.925, ], 
            }]
            });
    })
    })