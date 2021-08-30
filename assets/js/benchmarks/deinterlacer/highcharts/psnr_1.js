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
                text: 'PSNR on sequence # 1'
            },
            xAxis: {
                categories: ['Real-Time Deep Deinterlacer', 'NNEDI', 'VapourSynth EEDI3', 'MSU Deinterlacer', 'Bob', 'VapourSynth TDeintMod', 'Kernel Deinterlacer (optimal parameters)', 'Bob-Weave Deinterlacer', 'Kernel Deinterlacer', 'Weston 3-Field Deinterlacer', 'YADIF', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [37.634, 37.61, 37.415, 37.312, 36.994, 36.968, 36.836, 36.828, 36.597, 36.524, 36.423, 35.949, 35.949, 35.146, 33.327, 30.365, ], 
            }]
            });
    })
    })