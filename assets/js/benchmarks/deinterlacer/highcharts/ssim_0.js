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
                text: 'SSIM on sequence # 0'
            },
            xAxis: {
                categories: ['Bob', 'VapourSynth EEDI3', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'YADIF', 'NNEDI', 'Real-Time Deep Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'VapourSynth TDeintMod', 'MSU Deinterlacer', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Motion Compensation Deinterlacer', 'PAL Interpolation', ], 
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
                    data: [0.997, 0.997, 0.996, 0.996, 0.996, 0.996, 0.994, 0.994, 0.994, 0.994, 0.986, 0.979, 0.979, 0.976, 0.945, 0.937, ], 
            }]
            });
    })
    })