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
                categories: ['NNEDI', 'MSU Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Bob-Weave Deinterlacer', 'VapourSynth TDeintMod', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'VapourSynth EEDI3', 'Weston 3-Field Deinterlacer', 'Real-Time Deep Deinterlacer', 'Bob', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'YADIF', ], 
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
                    data: [90.779, 90.226, 88.356, 88.331, 87.382, 81.469, 79.031, 78.736, 78.736, 78.25, 77.102, 76.075, 75.219, 74.135, 73.318, 70.352, ], 
            }]
            });
    })
    })