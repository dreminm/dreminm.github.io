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
                text: 'Performance on sequence № 24'
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
			data: [[26.973982220915218, 0.9015129201846208]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[28.39470785631761, 0.9277192424338092]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[28.06796883670722, 0.91164834544544]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[28.682417851050076, 0.9239499713639756]]
		},
		{
			name: 'NNEDI',
			data: [[29.29563464964197, 0.9414338272594068]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[29.168517414284, 0.9378117032121068]]
		},
		{
			name: 'Bob',
			data: [[28.943565682630137, 0.9362819468551128]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[30.43230154556214, 0.9548095517227648]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[27.54026102847858, 0.911199880851251]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[27.135188670121174, 0.9016871970813102]]
		},
		{
			name: 'PAL Interpolation',
			data: [[26.3384796508075, 0.8847551247522256]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[29.079893356334328, 0.9360302711808238]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[27.875774028089065, 0.9197912852180968]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[25.80313523526874, 0.8585945458683487]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[22.80196814251873, 0.7830779129573386]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[28.227015131477533, 0.9193836457086162]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[23.435918383995663, 0.7483200977555441]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[21.09778593492482, 0.6463588135651831]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[29.164895122974247, 0.9399330036253734]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[29.02542682884892, 0.9389856282943444]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[28.762430137001285, 0.928989186724558]]
		},
		]
        });
    });

 });