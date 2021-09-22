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
                text: 'PSNR on sequence # 23'
            },
            xAxis: {
                categories: ['DfRes 122000 G2e 3', 'DfRes 121000 G2e 3', 'DfRes 119000', 'DfRes 61000', 'MSU Deinterlacer', 'YADIF', 'Vapoursynth EEDI3', 'NNEDI', 'Real-Time Deep Deinterlacer', 'Bob', 'Bob-Weave Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Vapoursynth TDeintMod', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer', 'PAL Interpolation', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Motion Compensation Deinterlacer', ], 
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
                    data: [40.581, 40.508, 40.322, 40.25, 39.883, 39.757, 39.373, 39.368, 39.35, 39.299, 39.254, 39.234, 39.185, 39.089, 38.91, 37.205, 37.003, 37.003, 36.88, 29.965, ], 
            }]
            });
    })
    })