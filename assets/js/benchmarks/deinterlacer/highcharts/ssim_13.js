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
                text: 'SSIM on sequence # 13'
            },
            xAxis: {
                categories: ['MSU Deinterlacer', 'VapourSynth EEDI3', 'NNEDI', 'Real-Time Deep Deinterlacer', 'VapourSynth TDeintMod', 'Bob-Weave Deinterlacer', 'Bob', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'YADIF', 'Kernel Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [0.986, 0.986, 0.986, 0.985, 0.985, 0.984, 0.983, 0.981, 0.98, 0.975, 0.968, 0.949, 0.948, 0.948, 0.904, 0.791, ], 
            }]
            });
    })
    })