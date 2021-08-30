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
                text: 'PSNR on sequence # 6'
            },
            xAxis: {
                categories: ['MSU Deinterlacer', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'YADIF', 'Real-Time Deep Deinterlacer', 'VapourSynth TDeintMod', 'Motion and Area Pixel Deinterlacer', 'Kernel Deinterlacer', 'NNEDI', 'Kernel Deinterlacer (optimal parameters)', 'VapourSynth EEDI3', 'PAL Interpolation', 'Bob', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion Compensation Deinterlacer', ], 
            },
            yAxis: {
                title: {
                    text: 'PSNR'
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
                    name: 'PSNR',
                    data: [36.588, 35.207, 32.932, 32.7, 32.498, 31.036, 30.928, 30.72, 30.357, 30.168, 29.954, 29.714, 29.2, 28.932, 28.932, 28.46, ], 
            }]
            });
    })
    })