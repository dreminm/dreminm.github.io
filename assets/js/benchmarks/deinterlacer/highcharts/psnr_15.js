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
                text: 'PSNR on sequence # 15'
            },
            xAxis: {
                categories: ['YADIF', 'Bob-Weave Deinterlacer', 'VapourSynth TDeintMod', 'Kernel Deinterlacer', 'MSU Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'PAL Interpolation', 'Real-Time Deep Deinterlacer', 'NNEDI', 'Weston 3-Field Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'VapourSynth EEDI3', 'Bob', 'Motion Compensation Deinterlacer', ], 
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
                    data: [53.564, 50.197, 49.2, 46.794, 46.424, 46.139, 45.861, 43.255, 41.918, 40.868, 39.844, 38.995, 38.995, 38.839, 37.232, 34.845, ], 
            }]
            });
    })
    })