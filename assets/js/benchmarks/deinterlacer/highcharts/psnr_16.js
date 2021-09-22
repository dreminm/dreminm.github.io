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
                text: 'PSNR on sequence # 16'
            },
            xAxis: {
                categories: ['MSU Deinterlacer', 'DfRes 61000', 'DfRes 122000 G2e 3', 'DfRes 121000 G2e 3', 'Vapoursynth EEDI3', 'NNEDI', 'Bob', 'DfRes 119000', 'Real-Time Deep Deinterlacer', 'Vapoursynth TDeintMod', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'YADIF', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [29.813, 27.847, 27.826, 27.783, 27.642, 27.574, 27.483, 27.463, 27.356, 27.267, 27.256, 27.04, 27.001, 26.789, 26.468, 26.468, 26.354, 26.264, 25.559, 19.651, ], 
            }]
            });
    })
    })