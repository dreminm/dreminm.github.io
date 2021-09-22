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
                text: 'PSNR on sequence # 14'
            },
            xAxis: {
                categories: ['Vapoursynth TDeintMod', 'DfRes 61000', 'DfRes 121000 G2e 3', 'DfRes 122000 G2e 3', 'DfRes 119000', 'Bob-Weave Deinterlacer', 'Real-Time Deep Deinterlacer', 'Bob', 'Vapoursynth EEDI3', 'Weston 3-Field Deinterlacer', 'YADIF', 'MSU Deinterlacer', 'NNEDI', 'Kernel Deinterlacer (optimal parameters)', 'ASVZZZ Deinterlacer', 'Muksun Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Kernel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [43.675, 43.509, 43.421, 43.407, 43.227, 43.145, 42.631, 42.158, 42.14, 41.941, 41.708, 41.459, 40.989, 38.459, 38.418, 38.418, 37.789, 37.099, 37.032, 35.766, ], 
            }]
            });
    })
    })