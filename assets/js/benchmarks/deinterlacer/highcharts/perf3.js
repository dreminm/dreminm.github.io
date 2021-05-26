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
                text: 'Performance on sequence № 3'
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
			data: [[44.83765270408698, 0.9878945711187168]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[49.11085994637681, 0.9948189073721156]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[47.01876754505144, 0.9918283820232152]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[45.241449855793455, 0.9871778295610284]]
		},
		{
			name: 'NNEDI',
			data: [[47.37576411887836, 0.9928523076504931]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[46.31852562853424, 0.9905096150324244]]
		},
		{
			name: 'Bob',
			data: [[46.33488399707119, 0.9911679225073206]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[51.414948703088534, 0.9968132301871124]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[43.58889749242514, 0.9813159077220376]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[44.018288117418116, 0.9834095116013908]]
		},
		{
			name: 'PAL Interpolation',
			data: [[38.95349842009626, 0.9487344702972962]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[45.54015920698514, 0.9874759285267968]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[44.57231769900031, 0.985568912376502]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[39.456516615548395, 0.9593968478142301]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[27.23587830313518, 0.9492395899682778]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[44.721598549508684, 0.9864781069211972]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[45.03980652242046, 0.984387059725172]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[42.91672226356949, 0.9778852649523644]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[47.22610597769674, 0.9928190350909906]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[47.41357030418214, 0.9926135455247596]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[45.95681837979925, 0.9897820158941538]]
		},
		]
        });
    });

 });