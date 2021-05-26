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
                text: 'Performance on sequence № 38'
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
			data: [[51.728210326824325, 0.995994050339126]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[51.60192721898344, 0.9958161450445672]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[51.40797444755177, 0.9944429058365932]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[42.72224472145654, 0.9758993229133524]]
		},
		{
			name: 'NNEDI',
			data: [[52.99710255397329, 0.9965291975296502]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[50.57677928846889, 0.9947683600842462]]
		},
		{
			name: 'Bob',
			data: [[54.003176734429104, 0.997069158376262]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[48.441278419952745, 0.9949025878469206]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[40.684045075317435, 0.9702139228034378]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[43.37679673791331, 0.9701774488627328]]
		},
		{
			name: 'PAL Interpolation',
			data: [[42.782605679579774, 0.9662401152466791]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[49.60771204033392, 0.9913795823532868]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[46.06078733897274, 0.9883548893185026]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[42.17884491123584, 0.9790771041412428]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[33.75291613790174, 0.9813785291939064]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[44.9288060076084, 0.9825835911040603]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[25.164314731190263, 0.689829156615625]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[25.48643639946716, 0.5673055097082574]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[53.94514115401606, 0.9971006217641316]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[54.09742331905508, 0.9970964305671716]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[48.46502738578229, 0.9916203093106468]]
		},
		]
        });
    });

 });