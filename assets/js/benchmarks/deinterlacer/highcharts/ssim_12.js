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
                text: 'SSIM on sequence # 12'
            },
            xAxis: {
                categories: ['MSU Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Weston 3-Field Deinterlacer', 'Bob-Weave Deinterlacer', 'Real-Time Deep Deinterlacer', 'NNEDI', 'VapourSynth EEDI3', 'VapourSynth TDeintMod', 'Bob', 'Kernel Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'YADIF', 'Motion Compensation Deinterlacer', 'PAL Interpolation', ], 
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
                    data: [0.959, 0.95, 0.931, 0.93, 0.928, 0.921, 0.919, 0.917, 0.914, 0.907, 0.906, 0.902, 0.902, 0.902, 0.896, 0.868, ], 
            }]
            });
    })
    })