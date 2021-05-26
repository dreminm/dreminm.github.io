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
                text: 'Performance on sequence № 15'
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
			data: [[26.4446128010264, 0.892234728168057]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[27.60260629160856, 0.9156725614015058]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[27.28635299028047, 0.9030976471081332]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[27.78751961354766, 0.9087351124216824]]
		},
		{
			name: 'NNEDI',
			data: [[28.23565994371535, 0.9254647760612073]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[27.926754908798745, 0.9205876621860752]]
		},
		{
			name: 'Bob',
			data: [[28.04950332600577, 0.9197998022993868]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[30.168625853464288, 0.9534182105979412]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[26.672444538585246, 0.8875458988856242]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[26.58327168447216, 0.8880252066529402]]
		},
		{
			name: 'PAL Interpolation',
			data: [[25.608925413086453, 0.8525112400343935]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[28.214361544921623, 0.9188745265633584]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[27.272864884297515, 0.9065355668848925]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[25.32799789991209, 0.829647285550163]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[22.175114052460767, 0.7564537840908839]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[27.330007626857988, 0.9016044501115338]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[24.482314154740266, 0.7913007944471536]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[21.75211443848249, 0.7080360902450508]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[28.288019581645543, 0.9262188132642548]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[27.98526331270132, 0.9203728187613242]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[27.83049733413555, 0.9130406890499844]]
		},
		]
        });
    });

 });