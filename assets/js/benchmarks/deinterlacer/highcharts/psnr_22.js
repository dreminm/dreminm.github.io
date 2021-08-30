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
                text: 'PSNR on sequence # 22'
            },
            xAxis: {
                categories: ['Bob', 'Bob-Weave Deinterlacer', 'MSU Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'VapourSynth TDeintMod', 'YADIF', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Weston 3-Field Deinterlacer', 'VapourSynth EEDI3', 'PAL Interpolation', 'NNEDI', 'Real-Time Deep Deinterlacer', 'Motion Compensation Deinterlacer', ], 
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
                    data: [51.645, 48.285, 48.04, 47.832, 47.483, 47.303, 46.82, 45.973, 45.973, 45.907, 45.762, 45.487, 43.395, 42.837, 42.014, 40.61, ], 
            }]
            });
    })
    })