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
                categories: ['Bob', 'DfRes 119000', 'DfRes 122000 G2e 3', 'DfRes 121000 G2e 3', 'DfRes 61000', 'Bob-Weave Deinterlacer', 'MSU Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Vapoursynth TDeintMod', 'YADIF', 'Kernel Deinterlacer', 'ASVZZZ Deinterlacer', 'Muksun Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Weston 3-Field Deinterlacer', 'Vapoursynth EEDI3', 'PAL Interpolation', 'NNEDI', 'Real-Time Deep Deinterlacer', 'Motion Compensation Deinterlacer', ], 
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
                    data: [51.645, 50.565, 50.475, 50.449, 50.283, 48.285, 48.04, 47.832, 47.483, 47.303, 46.82, 45.973, 45.973, 45.907, 45.762, 45.487, 43.395, 42.837, 42.014, 40.61, ], 
            }]
            });
    })
    })