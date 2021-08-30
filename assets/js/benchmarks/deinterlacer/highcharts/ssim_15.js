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
                text: 'SSIM on sequence # 15'
            },
            xAxis: {
                categories: ['YADIF', 'Bob-Weave Deinterlacer', 'VapourSynth TDeintMod', 'MSU Deinterlacer', 'NNEDI', 'VapourSynth EEDI3', 'Real-Time Deep Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Bob', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Weston 3-Field Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [0.999, 0.998, 0.998, 0.998, 0.998, 0.997, 0.996, 0.996, 0.996, 0.995, 0.995, 0.995, 0.995, 0.993, 0.992, 0.929, ], 
            }]
            });
    })
    })