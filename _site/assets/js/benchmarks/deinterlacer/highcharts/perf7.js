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
                text: 'Performance on sequence № 7'
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
			data: [[43.748174485854676, 0.992017163902036]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[46.9869790588327, 0.9949833323599964]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[45.04727240462071, 0.9924567715438034]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[43.43780999771825, 0.9888106070454116]]
		},
		{
			name: 'NNEDI',
			data: [[47.108971351948405, 0.9944690360171832]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[46.12874572006184, 0.993386761229166]]
		},
		{
			name: 'Bob',
			data: [[45.34860668458821, 0.9937558944956072]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[47.86977807254372, 0.9959532592299598]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[40.36849624071317, 0.983571304721291]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[42.29149048169929, 0.9861713198027168]]
		},
		{
			name: 'PAL Interpolation',
			data: [[36.39080887866431, 0.9540817465478144]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[44.64371244458521, 0.989586155549815]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[42.466248767947285, 0.9871933635752159]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[37.27160732430112, 0.9705696945101036]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[29.036520477655554, 0.9625080286523456]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[38.50682853854125, 0.9590350731105284]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[35.219810604470545, 0.9681006135838716]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[34.45343914378009, 0.9573648298724504]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[46.69422190044238, 0.9945558174304144]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[46.899913749220346, 0.9946843297697896]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[44.35716917398094, 0.9915705550539534]]
		},
		]
        });
    });

 });