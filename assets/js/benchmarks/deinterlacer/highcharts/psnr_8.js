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
                text: 'PSNR on sequence # 8'
            },
            xAxis: {
                categories: ['Vapoursynth EEDI3', 'Bob', 'Vapoursynth TDeintMod', 'DfRes 122000 G2e 3', 'NNEDI', 'DfRes 61000', 'Real-Time Deep Deinterlacer', 'DfRes 121000 G2e 3', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Bob-Weave Deinterlacer', 'YADIF', 'MSU Deinterlacer', 'ASVZZZ Deinterlacer', 'Muksun Deinterlacer', 'Kernel Deinterlacer', 'DfRes 119000', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [43.486, 43.444, 43.295, 43.218, 43.21, 43.134, 43.024, 42.767, 42.705, 42.416, 42.392, 41.749, 41.551, 40.075, 40.075, 39.507, 38.996, 38.543, 37.605, 25.503, ], 
            }]
            });
    })
    })