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
                text: 'Performance on sequence № 26'
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
			data: [[35.063817903500784, 0.9577352836620204]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[37.65720876272547, 0.975724920549808]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[36.92421520530427, 0.9651313015456164]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[35.437832974939056, 0.9549979858599694]]
		},
		{
			name: 'NNEDI',
			data: [[39.70147543817913, 0.9836109773006784]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[39.240165683681155, 0.981869368217317]]
		},
		{
			name: 'Bob',
			data: [[37.81891015700114, 0.9770457449875936]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[39.328895843658856, 0.9830148782783632]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[33.71542106489274, 0.9391911164462688]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[34.9326168477186, 0.946545668910114]]
		},
		{
			name: 'PAL Interpolation',
			data: [[31.943312139457536, 0.9080884345128204]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[37.83157050535855, 0.9749441607886992]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[35.85927945246013, 0.9660872976358378]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[31.964818914882336, 0.9191911075043788]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[26.7445436492271, 0.8717375340850074]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[36.61288507495194, 0.9685735125751812]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[26.2852374023762, 0.7648699796876536]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[23.128758897216077, 0.6010491681543935]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[38.680213074284346, 0.9806304753844158]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[39.70654228774789, 0.9836338396542246]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[37.10817141368511, 0.9695561258823856]]
		},
		]
        });
    });

 });