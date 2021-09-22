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
                text: 'PSNR on sequence # 2'
            },
            xAxis: {
                categories: ['DfRes 121000 G2e 3', 'DfRes 122000 G2e 3', 'DfRes 119000', 'Vapoursynth EEDI3', 'Vapoursynth TDeintMod', 'DfRes 61000', 'NNEDI', 'Bob', 'Bob-Weave Deinterlacer', 'Real-Time Deep Deinterlacer', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'MSU Deinterlacer', 'YADIF', 'ASVZZZ Deinterlacer', 'Muksun Deinterlacer', 'Kernel Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [49.524, 49.434, 49.407, 49.394, 49.216, 49.054, 48.945, 48.683, 48.253, 48.232, 47.525, 46.159, 45.85, 45.799, 41.956, 41.956, 41.671, 40.857, 38.127, 33.668, ], 
            }]
            });
    })
    })