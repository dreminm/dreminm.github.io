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
                text: 'Performance on sequence № 10'
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
			data: [[32.78896865156742, 0.9609582199168364]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[36.29919485917813, 0.9808039476079474]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[34.88669966237827, 0.9723436690346564]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[34.33297479580845, 0.9684052713421464]]
		},
		{
			name: 'NNEDI',
			data: [[35.58510288847722, 0.9777014295639516]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[35.73436181951181, 0.9777764160265708]]
		},
		{
			name: 'Bob',
			data: [[34.53877007588032, 0.9727232973831386]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[37.1752424506814, 0.983725526437588]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[32.551069949431536, 0.955155029105304]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[32.079071157506554, 0.9530338364405282]]
		},
		{
			name: 'PAL Interpolation',
			data: [[30.008315986481826, 0.9090903938656222]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[34.644598252174696, 0.9709533397713754]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[32.90736374435158, 0.964045120212312]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[29.48124812211464, 0.9145268029792022]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[24.73130381709013, 0.8748788708042674]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[33.009764099711234, 0.9582408511054838]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[30.33154095505007, 0.9271108264831622]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[27.853342938202015, 0.8807894746708299]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[35.412372449558966, 0.977026627077987]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[35.455355459746315, 0.9779081442914352]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[34.383059749420745, 0.9706163920877025]]
		},
		]
        });
    });

 });