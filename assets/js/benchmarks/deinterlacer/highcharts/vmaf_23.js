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
                text: 'VMAF on sequence # 23'
            },
            xAxis: {
                categories: ['DfRes 122000 G2e 3', 'DfRes 121000 G2e 3', 'DfRes 61000', 'NNEDI', 'DfRes 119000', 'MSU Deinterlacer', 'Real-Time Deep Deinterlacer', 'Bob-Weave Deinterlacer', 'Vapoursynth TDeintMod', 'Kernel Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Vapoursynth EEDI3', 'Kernel Deinterlacer (optimal parameters)', 'Weston 3-Field Deinterlacer', 'YADIF', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Bob', 'Motion Compensation Deinterlacer', ], 
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
                    data: [98.912, 98.767, 98.762, 98.539, 98.539, 98.35, 98.277, 98.169, 97.972, 97.816, 97.705, 97.445, 97.395, 97.127, 97.115, 96.878, 96.878, 95.839, 95.573, 80.005, ], 
            }]
            });
    })
    })