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
                text: 'PSNR on sequence # 21'
            },
            xAxis: {
                categories: ['MSU Deinterlacer', 'DfRes 122000 G2e 3', 'DfRes 121000 G2e 3', 'DfRes 61000', 'DfRes 119000', 'Bob', 'Vapoursynth EEDI3', 'NNEDI', 'Real-Time Deep Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'Bob-Weave Deinterlacer', 'Vapoursynth TDeintMod', 'Weston 3-Field Deinterlacer', 'YADIF', 'Motion and Area Pixel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [29.573, 28.842, 28.826, 28.763, 28.682, 28.46, 28.378, 28.371, 28.351, 28.262, 28.189, 28.176, 28.104, 27.929, 27.41, 27.38, 27.317, 27.317, 25.992, 23.173, ], 
            }]
            });
    })
    })