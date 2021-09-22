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
                text: 'PSNR on sequence # 5'
            },
            xAxis: {
                categories: ['DfRes 122000 G2e 3', 'DfRes 61000', 'DfRes 121000 G2e 3', 'Real-Time Deep Deinterlacer', 'DfRes 119000', 'MSU Deinterlacer', 'NNEDI', 'YADIF', 'Vapoursynth EEDI3', 'Bob-Weave Deinterlacer', 'Vapoursynth TDeintMod', 'Bob', 'Kernel Deinterlacer (optimal parameters)', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [38.341, 38.336, 38.218, 38.06, 37.61, 37.603, 37.558, 37.217, 37.149, 36.992, 36.938, 36.871, 36.693, 36.52, 36.389, 36.208, 36.208, 34.993, 34.973, 26.78, ], 
            }]
            });
    })
    })