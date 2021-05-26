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
                text: 'Performance on sequence № 5'
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
			data: [[37.10617752136736, 0.9728489386616962]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[39.444018285451754, 0.9813543964730892]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[39.09273395594561, 0.9754549781010656]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[37.949879246694614, 0.9554487560985164]]
		},
		{
			name: 'NNEDI',
			data: [[40.203722773665376, 0.9853946156625004]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[40.30357601493747, 0.9845480477003208]]
		},
		{
			name: 'Bob',
			data: [[40.02245034099853, 0.9854230599140734]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[38.650633493335455, 0.9798073783550668]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[36.52439132161749, 0.9455617840471916]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[36.460564015179145, 0.9498382793348692]]
		},
		{
			name: 'PAL Interpolation',
			data: [[33.796535808288134, 0.888234003349723]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[39.8609022739294, 0.980454380227484]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[37.93862697270376, 0.9692288780869373]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[35.82225335365241, 0.954476038834129]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[31.11618742372591, 0.9448376526888628]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[38.57511414875225, 0.9770789652121518]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[33.25128095744404, 0.9095989915488424]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[32.181470710815155, 0.8814419436849591]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[40.267500687346725, 0.9860013650418562]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[40.19076366739298, 0.9850545845546342]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[39.37134848867731, 0.9765855511109116]]
		},
		]
        });
    });

 });