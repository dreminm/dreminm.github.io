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
                text: 'Performance on sequence № 34'
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
			data: [[43.3569120520051, 0.9864462280945254]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[44.07186993070807, 0.9876258340946676]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[43.9083392291292, 0.9855200761206908]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[39.0924261043862, 0.9574140433370548]]
		},
		{
			name: 'NNEDI',
			data: [[46.65605545286002, 0.9914466801885108]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[44.79384360983979, 0.9893596692489828]]
		},
		{
			name: 'Bob',
			data: [[44.897293339877564, 0.9901822413418374]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[46.644784381630316, 0.9925171250413052]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[38.35408230509089, 0.9460387392941424]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[40.4331697649934, 0.9530011297020016]]
		},
		{
			name: 'PAL Interpolation',
			data: [[35.88838373430604, 0.9071313080132776]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[44.230936660234356, 0.9855399063517778]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[42.62867836001568, 0.97704917308589]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[38.25953084465449, 0.9644742301402895]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[29.366757441371174, 0.9528160759243368]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[42.643824034692294, 0.9794198835160232]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[28.814159052289014, 0.8664655713167932]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[26.961047992070128, 0.8007165675311101]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[46.92468086290186, 0.9923557810547652]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[46.153034800532524, 0.9904894693073903]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[42.83550384609156, 0.980979952756584]]
		},
		]
        });
    });

 });