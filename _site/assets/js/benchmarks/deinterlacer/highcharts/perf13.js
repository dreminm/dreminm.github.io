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
                text: 'Performance on sequence № 13'
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
			data: [[39.58122158702292, 0.98562054481322]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[40.955936092879995, 0.9883835494892274]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[40.62453530594134, 0.9838209720366798]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[38.11792367966051, 0.9604655094303634]]
		},
		{
			name: 'NNEDI',
			data: [[42.636050026042746, 0.9913755711104356]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[42.19505538049118, 0.9900620740749949]]
		},
		{
			name: 'Bob',
			data: [[41.440578541681354, 0.9905052076774696]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[41.14293363872118, 0.9884712773469309]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[37.212659917507175, 0.9560156162639328]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[38.37000084534888, 0.9622999212344078]]
		},
		{
			name: 'PAL Interpolation',
			data: [[35.494556147612265, 0.9265922809369136]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[41.17236540574229, 0.9854324930383456]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[39.28597724009244, 0.977223018302721]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[35.993324043508636, 0.9635386904208388]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[30.644605333418532, 0.957388615679604]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[40.86305890088156, 0.9870552397356134]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[27.352134052445603, 0.8328057354225583]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[26.13105760415382, 0.7722566938797361]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[42.489829489264395, 0.991934622151968]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[41.918417236774594, 0.9907267703815128]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[40.4760049225345, 0.9822169227690614]]
		},
		]
        });
    });

 });