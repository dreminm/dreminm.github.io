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
                text: 'Performance on sequence № 4'
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
			data: [[51.87336504206463, 0.9987745773779076]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[53.581742877361314, 0.9981264066844702]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[52.84295219369883, 0.9970545931675788]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[43.627489122804135, 0.9606766861417078]]
		},
		{
			name: 'NNEDI',
			data: [[55.094076692480115, 0.9985008520080249]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[51.075264983141224, 0.9932439664564056]]
		},
		{
			name: 'Bob',
			data: [[54.824456876181955, 0.9990540246592176]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[51.42773146171889, 0.9979053723224957]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[41.90262472923353, 0.9560210077862644]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[43.067134406678626, 0.9626153027443431]]
		},
		{
			name: 'PAL Interpolation',
			data: [[38.624971747639464, 0.9201571905584196]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[51.00975473275496, 0.993049829913898]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[45.0482268978092, 0.969687317288226]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[44.08956235330224, 0.9770067598745932]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[43.690365130563315, 0.9897398913600172]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[47.88930216834146, 0.9886831904396769]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[31.466613955837477, 0.8685887913501614]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[32.004172767224915, 0.8563446117314573]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[55.95507118214177, 0.9990829326876348]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[53.85502731395482, 0.9961758197592094]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[49.04579242727365, 0.9866674895922724]]
		},
		]
        });
    });

 });