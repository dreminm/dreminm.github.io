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
                text: 'PSNR on sequence # 18'
            },
            xAxis: {
                categories: ['DfRes 119000', 'DfRes 121000 G2e 3', 'DfRes 122000 G2e 3', 'Motion and Area Pixel Deinterlacer', 'DfRes 61000', 'Vapoursynth TDeintMod', 'Bob-Weave Deinterlacer', 'MSU Deinterlacer', 'YADIF', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Vapoursynth EEDI3', 'Bob', 'Kernel Deinterlacer', 'NNEDI', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Real-Time Deep Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [59.684, 59.569, 59.463, 57.053, 56.297, 53.935, 52.634, 52.309, 51.695, 50.894, 50.616, 50.587, 49.649, 49.066, 48.64, 48.149, 48.149, 47.933, 39.743, 39.203, ], 
            }]
            });
    })
    })