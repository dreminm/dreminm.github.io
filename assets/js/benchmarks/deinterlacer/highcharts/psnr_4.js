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
                text: 'PSNR on sequence # 4'
            },
            xAxis: {
                categories: ['NNEDI', 'VapourSynth EEDI3', 'Real-Time Deep Deinterlacer', 'VapourSynth TDeintMod', 'Bob-Weave Deinterlacer', 'Bob', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'MSU Deinterlacer', 'YADIF', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [40.798, 40.547, 40.467, 39.836, 39.31, 39.212, 38.781, 38.745, 38.14, 38.108, 37.902, 36.273, 36.273, 35.504, 33.38, 26.881, ], 
            }]
            });
    })
    })