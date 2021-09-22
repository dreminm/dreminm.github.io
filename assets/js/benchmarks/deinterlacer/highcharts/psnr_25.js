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
                text: 'PSNR on sequence # 25'
            },
            xAxis: {
                categories: ['DfRes 122000 G2e 3', 'DfRes 121000 G2e 3', 'DfRes 119000', 'DfRes 61000', 'MSU Deinterlacer', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'YADIF', 'Vapoursynth TDeintMod', 'Kernel Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Kernel Deinterlacer (optimal parameters)', 'Motion Compensation Deinterlacer', 'Real-Time Deep Deinterlacer', 'NNEDI', 'Vapoursynth EEDI3', 'Bob', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', ], 
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
                    data: [39.514, 39.502, 39.422, 39.136, 37.357, 34.89, 33.494, 33.001, 32.434, 32.008, 31.839, 31.745, 31.186, 31.028, 30.872, 30.09, 29.88, 29.271, 27.187, 27.187, ], 
            }]
            });
    })
    })