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
                text: 'VMAF on sequence # 15'
            },
            xAxis: {
                categories: ['MSU Deinterlacer', 'YADIF', 'DfRes 119000', 'Vapoursynth TDeintMod', 'DfRes 122000 G2e 3', 'DfRes 121000 G2e 3', 'DfRes 61000', 'Bob-Weave Deinterlacer', 'PAL Interpolation', 'Motion and Area Pixel Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'Real-Time Deep Deinterlacer', 'NNEDI', 'Weston 3-Field Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Vapoursynth EEDI3', 'Bob', 'Motion Compensation Deinterlacer', ], 
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
                    data: [97.555, 97.549, 97.431, 97.42, 97.386, 97.316, 97.237, 96.97, 96.053, 95.934, 95.166, 95.158, 94.552, 93.445, 92.575, 91.974, 91.974, 91.759, 90.234, 74.839, ], 
            }]
            });
    })
    })