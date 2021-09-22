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
                text: 'VMAF on sequence # 13'
            },
            xAxis: {
                categories: ['Vapoursynth TDeintMod', 'DfRes 121000 G2e 3', 'DfRes 122000 G2e 3', 'DfRes 119000', 'NNEDI', 'Real-Time Deep Deinterlacer', 'Bob-Weave Deinterlacer', 'DfRes 61000', 'Vapoursynth EEDI3', 'Kernel Deinterlacer (optimal parameters)', 'Weston 3-Field Deinterlacer', 'MSU Deinterlacer', 'Kernel Deinterlacer', 'Bob', 'Motion and Area Pixel Deinterlacer', 'YADIF', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', ], 
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
                    data: [99.904, 99.865, 99.86, 99.84, 99.806, 99.805, 99.787, 99.774, 99.725, 99.503, 98.986, 98.641, 98.519, 97.069, 95.425, 94.851, 93.787, 93.787, 85.724, 61.551, ], 
            }]
            });
    })
    })