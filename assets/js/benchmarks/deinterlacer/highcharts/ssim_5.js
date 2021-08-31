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
                text: 'SSIM on sequence # 5'
            },
            xAxis: {
                categories: ['MSU Deinterlacer', 'YADIF', 'Bob', 'Real-Time Deep Deinterlacer', 'VapourSynth EEDI3', 'Kernel Deinterlacer (optimal parameters)', 'Bob-Weave Deinterlacer', 'VapourSynth TDeintMod', 'NNEDI', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Motion and Area Pixel Deinterlacer', 'Motion Compensation Deinterlacer', ], 
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
                    data: [0.927, 0.925, 0.923, 0.919, 0.917, 0.916, 0.914, 0.914, 0.914, 0.908, 0.907, 0.903, 0.903, 0.898, 0.896, 0.817, ], 
            }]
            });
    })
    })