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
                text: 'VMAF on sequence # 20'
            },
            xAxis: {
                categories: ['DfRes 121000 G2e 3', 'DfRes 119000', 'DfRes 122000 G2e 3', 'DfRes 61000', 'NNEDI', 'MSU Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Bob-Weave Deinterlacer', 'Vapoursynth TDeintMod', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Vapoursynth EEDI3', 'Weston 3-Field Deinterlacer', 'Real-Time Deep Deinterlacer', 'Bob', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'YADIF', ], 
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
                    data: [96.769, 96.765, 96.55, 95.982, 90.779, 90.226, 88.356, 88.331, 87.382, 81.469, 79.031, 78.736, 78.736, 78.25, 77.102, 76.075, 75.219, 74.135, 73.318, 70.352, ], 
            }]
            });
    })
    })