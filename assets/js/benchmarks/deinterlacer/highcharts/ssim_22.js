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
                text: 'SSIM on sequence # 22'
            },
            xAxis: {
                categories: ['Bob', 'DfRes 121000 G2e 3', 'DfRes 119000', 'DfRes 61000', 'DfRes 122000 G2e 3', 'Bob-Weave Deinterlacer', 'Vapoursynth EEDI3', 'YADIF', 'Weston 3-Field Deinterlacer', 'MSU Deinterlacer', 'NNEDI', 'Kernel Deinterlacer (optimal parameters)', 'Vapoursynth TDeintMod', 'Real-Time Deep Deinterlacer', 'Kernel Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [0.997, 0.996, 0.996, 0.996, 0.996, 0.995, 0.994, 0.994, 0.993, 0.993, 0.992, 0.992, 0.992, 0.991, 0.99, 0.989, 0.989, 0.989, 0.985, 0.978, ], 
            }]
            });
    })
    })