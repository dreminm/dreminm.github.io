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
                text: 'PSNR on sequence # 3'
            },
            xAxis: {
                categories: ['DfRes 122000 G2e 3', 'DfRes 119000', 'DfRes 121000 G2e 3', 'Vapoursynth TDeintMod', 'Vapoursynth EEDI3', 'NNEDI', 'DfRes 61000', 'Bob', 'Real-Time Deep Deinterlacer', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'MSU Deinterlacer', 'YADIF', 'Kernel Deinterlacer (optimal parameters)', 'ASVZZZ Deinterlacer', 'Muksun Deinterlacer', 'Kernel Deinterlacer', 'PAL Interpolation', 'Motion and Area Pixel Deinterlacer', 'Motion Compensation Deinterlacer', ], 
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
                    data: [47.628, 47.301, 47.295, 46.999, 46.966, 46.603, 46.313, 45.493, 44.739, 43.614, 43.184, 40.955, 40.57, 39.839, 38.481, 38.481, 36.315, 36.018, 35.203, 25.694, ], 
            }]
            });
    })
    })