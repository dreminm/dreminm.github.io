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
                text: 'Performance on sequence № 30'
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
			data: [[51.99968908999276, 0.9972054284515856]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[51.89140181664076, 0.9967859202173438]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[51.28497341965434, 0.996174233779852]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[43.66941399655032, 0.9851375092303848]]
		},
		{
			name: 'NNEDI',
			data: [[51.16627289216668, 0.9963783866958572]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[49.499406099333974, 0.9947592320611088]]
		},
		{
			name: 'Bob',
			data: [[50.77674590463572, 0.9969365193454158]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[51.500088290268955, 0.9966377165379331]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[43.857080733774616, 0.984194179427074]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[45.11674440765333, 0.9841264282603388]]
		},
		{
			name: 'PAL Interpolation',
			data: [[41.02010217744293, 0.9637151266267228]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[48.269017723514644, 0.9915566840015856]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[46.024073426219566, 0.9884165190951356]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[42.252877999450256, 0.9811349302101348]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[32.12596351740217, 0.9860843261223872]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[43.40647041008042, 0.9784630139925928]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[31.505776174155283, 0.8784605710812906]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[30.50475638127552, 0.8297922920926275]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[51.35869127487295, 0.9969332905512508]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[52.0950484225049, 0.9972811335298256]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[48.80783828783509, 0.994268462635392]]
		},
		]
        });
    });

 });