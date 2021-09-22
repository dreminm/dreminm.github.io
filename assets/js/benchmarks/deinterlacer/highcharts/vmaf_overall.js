$(function () {
    $(document).ready(function() {
        Highcharts.chart('overall-plot', {
            chart: {
                type: 'column'
            },
            navigation: {
                buttonOptions: {
                    enabled: false
                }
            },
            title: {
                text: 'Overall VMAF'
            },
            xAxis: {
                categories: ['DfRes 61000', 'DfRes 122000 G2e 3', 'DfRes 121000 G2e 3', 'DfRes 119000', 'NNEDI', 'MSU Deinterlacer', 'Bob-Weave Deinterlacer', 'Vapoursynth TDeintMod', 'Real-Time Deep Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'Vapoursynth EEDI3', 'Weston 3-Field Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Bob', 'YADIF', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [94.865, 94.848, 94.768, 94.252, 93.246, 92.141, 91.309, 91.044, 90.964, 90.757, 90.25, 90.122, 89.625, 88.882, 87.242, 87.24, 86.873, 86.873, 82.662, 64.436, ], 
            }]
            });
    })
    })