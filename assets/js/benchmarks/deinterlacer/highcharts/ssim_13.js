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
                categories: ['DfRes 121000 G2e 3', 'DfRes 119000', 'DfRes 122000 G2e 3', 'DfRes 61000', 'NNEDI', 'Vapoursynth EEDI3', 'MSU Deinterlacer', 'Real-Time Deep Deinterlacer', 'Vapoursynth TDeintMod', 'Bob-Weave Deinterlacer', 'Bob', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'YADIF', 'Kernel Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [0.992, 0.992, 0.992, 0.991, 0.986, 0.986, 0.986, 0.985, 0.985, 0.984, 0.983, 0.981, 0.98, 0.975, 0.968, 0.949, 0.948, 0.948, 0.904, 0.791, ], 
            }]
            });
    })
    })