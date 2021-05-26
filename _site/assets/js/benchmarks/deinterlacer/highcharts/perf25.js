$(function () {
    $(document).ready(function() {

        Highcharts.chart('perf-plot', {
            chart: {
                type: 'scatter',
                zoomType: 'xy',
                spacingBottom: 15,
                spacingTop: 10,
                spacingLeft: 10,
                spacingRight: 10,
                // Explicitly tell the width and height of a chart
                width: null,
                height: null
            },
            title: {
                text: 'Performance on sequence № 25'
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: 'PSNR'
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: 'SSIM'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false
                            }
                        }
                    },
                    tooltip: {
                        headerFormat: '<b>{series.name}</b><br>',
                        pointFormat: '{point.x}, {point.y}'
                    }
                }
            },
            navigation: {
                buttonOptions: {
                    enabled: false
                }
            },
            series: [		{
			name: 'YADIF',
			data: [[34.252783005676406, 0.9610735599241156]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[37.325264810462386, 0.979191712756486]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[37.12649917462455, 0.9719617970271704]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[36.284654814154855, 0.9636397634033252]]
		},
		{
			name: 'NNEDI',
			data: [[39.382558818758994, 0.9866224594987846]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[39.12159151246392, 0.9856028180660166]]
		},
		{
			name: 'Bob',
			data: [[37.734374577531355, 0.9814009673639214]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[37.169335542200315, 0.9790303986256732]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[33.92284034781234, 0.9497998159827824]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[34.27981706517349, 0.9506059055976566]]
		},
		{
			name: 'PAL Interpolation',
			data: [[31.989281268050604, 0.9238947002792872]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[37.752861857631146, 0.9795149935432074]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[35.02781713822706, 0.9684410689941728]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[31.02447819091596, 0.9234581556118052]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[26.586721356673586, 0.879408969556015]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[35.8968292445868, 0.970164365042704]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[25.269770416264034, 0.7656064737277436]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[22.48024811475713, 0.6115282658094879]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[38.94163619406457, 0.9854359431548112]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[39.80303067923875, 0.9873753440248059]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[37.14894239735633, 0.9753071438895106]]
		},
		]
        });
    });

 });