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
                text: 'PSNR on sequence # 3'
            },
            xAxis: {
                categories: ['VapourSynth TDeintMod', 'VapourSynth EEDI3', 'NNEDI', 'Bob', 'Real-Time Deep Deinterlacer', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'MSU Deinterlacer', 'YADIF', 'Kernel Deinterlacer (optimal parameters)', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Kernel Deinterlacer', 'PAL Interpolation', 'Motion and Area Pixel Deinterlacer', 'Motion Compensation Deinterlacer', ], 
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
                    data: [46.999, 46.966, 46.603, 45.493, 44.739, 43.614, 43.184, 40.955, 40.57, 39.839, 38.481, 38.481, 36.315, 36.018, 35.203, 25.694, ], 
            }]
            });
    })
    })