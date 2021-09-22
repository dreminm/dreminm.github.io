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
                text: 'VMAF on sequence # 21'
            },
            xAxis: {
                categories: ['NNEDI', 'Vapoursynth TDeintMod', 'MSU Deinterlacer', 'Real-Time Deep Deinterlacer', 'Vapoursynth EEDI3', 'DfRes 61000', 'Kernel Deinterlacer (optimal parameters)', 'Bob-Weave Deinterlacer', 'DfRes 122000 G2e 3', 'Kernel Deinterlacer', 'DfRes 121000 G2e 3', 'Weston 3-Field Deinterlacer', 'Bob', 'DfRes 119000', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'YADIF', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [90.192, 86.901, 86.707, 86.66, 86.122, 86.029, 85.365, 85.256, 84.95, 84.871, 84.628, 84.21, 82.351, 82.271, 80.156, 80.156, 79.456, 77.197, 68.149, 45.275, ], 
            }]
            });
    })
    })