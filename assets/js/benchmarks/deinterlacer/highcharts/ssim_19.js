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
                text: 'SSIM on sequence # 19'
            },
            xAxis: {
                categories: ['DfRes 121000 G2e 3', 'DfRes 119000', 'DfRes 122000 G2e 3', 'NNEDI', 'Vapoursynth EEDI3', 'DfRes 61000', 'Real-Time Deep Deinterlacer', 'Bob-Weave Deinterlacer', 'Vapoursynth TDeintMod', 'Bob', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'YADIF', 'MSU Deinterlacer', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [0.992, 0.992, 0.992, 0.991, 0.991, 0.991, 0.99, 0.99, 0.99, 0.989, 0.986, 0.985, 0.985, 0.984, 0.97, 0.958, 0.958, 0.954, 0.911, 0.861, ], 
            }]
            });
    })
    })