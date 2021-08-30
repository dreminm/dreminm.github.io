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
                text: 'PSNR on sequence # 24'
            },
            xAxis: {
                categories: ['MSU Deinterlacer', 'VapourSynth EEDI3', 'NNEDI', 'Real-Time Deep Deinterlacer', 'Bob-Weave Deinterlacer', 'YADIF', 'VapourSynth TDeintMod', 'Bob', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Weston 3-Field Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [32.923, 31.473, 31.095, 30.653, 30.023, 29.93, 29.733, 29.662, 29.623, 29.552, 29.361, 29.361, 29.255, 28.55, 27.699, 22.463, ], 
            }]
            });
    })
    })