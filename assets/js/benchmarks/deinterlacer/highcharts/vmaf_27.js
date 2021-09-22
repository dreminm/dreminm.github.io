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
                text: 'VMAF on sequence # 27'
            },
            xAxis: {
                categories: ['MSU Deinterlacer', 'DfRes 61000', 'DfRes 122000 G2e 3', 'DfRes 121000 G2e 3', 'DfRes 119000', 'NNEDI', 'Vapoursynth TDeintMod', 'Bob-Weave Deinterlacer', 'Real-Time Deep Deinterlacer', 'Vapoursynth EEDI3', 'Kernel Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Weston 3-Field Deinterlacer', 'Bob', 'Motion and Area Pixel Deinterlacer', 'YADIF', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
            },
            yAxis: {
                title: {
                    text: 'VMAF'
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
                    name: 'VMAF',
                    data: [84.77, 84.256, 84.108, 83.358, 81.771, 79.528, 78.815, 78.0, 77.908, 77.106, 76.02, 75.99, 75.982, 73.717, 72.771, 69.616, 67.916, 67.916, 62.484, 43.402, ], 
            }]
            });
    })
    })