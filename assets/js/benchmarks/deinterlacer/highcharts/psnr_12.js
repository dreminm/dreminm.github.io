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
                text: 'PSNR on sequence # 12'
            },
            xAxis: {
                categories: ['DfRes 119000', 'DfRes 121000 G2e 3', 'DfRes 122000 G2e 3', 'DfRes 61000', 'MSU Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Weston 3-Field Deinterlacer', 'Bob-Weave Deinterlacer', 'Real-Time Deep Deinterlacer', 'NNEDI', 'Vapoursynth EEDI3', 'Bob', 'Vapoursynth TDeintMod', 'Motion Compensation Deinterlacer', 'Kernel Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'YADIF', 'PAL Interpolation', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', ], 
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
                    data: [47.012, 45.983, 45.509, 41.112, 26.808, 25.711, 25.167, 24.5, 24.302, 24.01, 23.779, 23.7, 23.627, 23.573, 23.551, 23.542, 22.974, 22.581, 22.321, 22.321, ], 
            }]
            });
    })
    })