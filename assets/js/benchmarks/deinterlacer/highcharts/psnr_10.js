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
                text: 'PSNR on sequence # 10'
            },
            xAxis: {
                categories: ['DfRes 119000', 'DfRes 122000 G2e 3', 'DfRes 121000 G2e 3', 'DfRes 61000', 'Bob-Weave Deinterlacer', 'MSU Deinterlacer', 'NNEDI', 'YADIF', 'Real-Time Deep Deinterlacer', 'Weston 3-Field Deinterlacer', 'Vapoursynth TDeintMod', 'Motion and Area Pixel Deinterlacer', 'Vapoursynth EEDI3', 'Kernel Deinterlacer (optimal parameters)', 'ASVZZZ Deinterlacer', 'Muksun Deinterlacer', 'Kernel Deinterlacer', 'Bob', 'Motion Compensation Deinterlacer', 'PAL Interpolation', ], 
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
                    data: [58.923, 58.736, 58.643, 58.14, 53.313, 53.164, 52.853, 52.192, 51.537, 50.738, 50.037, 49.94, 49.463, 48.281, 47.908, 47.908, 47.579, 47.136, 43.465, 43.267, ], 
            }]
            });
    })
    })