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
                text: 'SSIM on sequence # 25'
            },
            xAxis: {
                categories: ['MSU Deinterlacer', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'YADIF', 'VapourSynth TDeintMod', 'Kernel Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'PAL Interpolation', 'Real-Time Deep Deinterlacer', 'Motion Compensation Deinterlacer', 'NNEDI', 'VapourSynth EEDI3', 'Bob', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', ], 
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
                    data: [0.991, 0.987, 0.982, 0.98, 0.979, 0.978, 0.978, 0.973, 0.971, 0.97, 0.967, 0.966, 0.964, 0.959, 0.943, 0.943, ], 
            }]
            });
    })
    })