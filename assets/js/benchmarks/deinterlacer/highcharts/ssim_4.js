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
                text: 'SSIM on sequence # 4'
            },
            xAxis: {
                categories: ['DfRes 121000 G2e 3', 'DfRes 119000', 'Vapoursynth EEDI3', 'DfRes 61000', 'DfRes 122000 G2e 3', 'NNEDI', 'Real-Time Deep Deinterlacer', 'Bob', 'Vapoursynth TDeintMod', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'MSU Deinterlacer', 'YADIF', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [0.985, 0.985, 0.985, 0.985, 0.985, 0.984, 0.984, 0.983, 0.983, 0.982, 0.979, 0.979, 0.976, 0.976, 0.967, 0.953, 0.953, 0.951, 0.914, 0.789, ], 
            }]
            });
    })
    })