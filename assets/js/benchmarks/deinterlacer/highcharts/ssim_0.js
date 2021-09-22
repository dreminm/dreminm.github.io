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
                text: 'SSIM on sequence # 0'
            },
            xAxis: {
                categories: ['Bob', 'DfRes 121000 G2e 3', 'DfRes 119000', 'Vapoursynth EEDI3', 'DfRes 61000', 'DfRes 122000 G2e 3', 'NNEDI', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'YADIF', 'Real-Time Deep Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Vapoursynth TDeintMod', 'MSU Deinterlacer', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Motion Compensation Deinterlacer', 'PAL Interpolation', ], 
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
                    data: [0.997, 0.997, 0.997, 0.997, 0.997, 0.997, 0.996, 0.996, 0.996, 0.996, 0.994, 0.994, 0.994, 0.994, 0.986, 0.979, 0.979, 0.976, 0.945, 0.937, ], 
            }]
            });
    })
    })