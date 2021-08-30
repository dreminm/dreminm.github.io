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
                text: 'PSNR on sequence # 8'
            },
            xAxis: {
                categories: ['VapourSynth EEDI3', 'Bob', 'VapourSynth TDeintMod', 'NNEDI', 'Real-Time Deep Deinterlacer', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Bob-Weave Deinterlacer', 'YADIF', 'MSU Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Kernel Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [43.486, 43.444, 43.295, 43.21, 43.024, 42.705, 42.416, 42.392, 41.749, 41.551, 40.075, 40.075, 39.507, 38.543, 37.605, 25.503, ], 
            }]
            });
    })
    })