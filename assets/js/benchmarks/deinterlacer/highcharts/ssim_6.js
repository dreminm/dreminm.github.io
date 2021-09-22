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
                text: 'SSIM on sequence # 6'
            },
            xAxis: {
                categories: ['DfRes 121000 G2e 3', 'DfRes 122000 G2e 3', 'DfRes 119000', 'DfRes 61000', 'MSU Deinterlacer', 'Bob-Weave Deinterlacer', 'YADIF', 'Real-Time Deep Deinterlacer', 'Weston 3-Field Deinterlacer', 'NNEDI', 'Vapoursynth TDeintMod', 'Motion and Area Pixel Deinterlacer', 'Vapoursynth EEDI3', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'Bob', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
            },
            yAxis: {
                title: {
                    text: 'SSIM'
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
                    name: 'SSIM',
                    data: [0.987, 0.987, 0.986, 0.986, 0.981, 0.976, 0.966, 0.965, 0.962, 0.955, 0.952, 0.948, 0.947, 0.945, 0.944, 0.94, 0.927, 0.927, 0.922, 0.91, ], 
            }]
            });
    })
    })