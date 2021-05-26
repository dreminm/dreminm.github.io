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
                text: 'Performance on sequence № 27'
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
			data: [[29.23134152256584, 0.9060065999406139]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[30.80789423919641, 0.9342403411406028]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[30.555423104240823, 0.9204797709538942]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[30.74282135912185, 0.9193887086100292]]
		},
		{
			name: 'NNEDI',
			data: [[31.640472843898767, 0.9456212159780184]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[31.57948718465262, 0.9444132343132926]]
		},
		{
			name: 'Bob',
			data: [[31.17117691212516, 0.9394421448099368]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[34.67444557221885, 0.97092998119545]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[29.340598181036796, 0.8951046082454212]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[29.242993368645763, 0.8954964603371086]]
		},
		{
			name: 'PAL Interpolation',
			data: [[27.68347777463152, 0.8424291808194575]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[31.313656778568326, 0.9377935125302382]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[30.36273486016477, 0.923071866690832]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[28.171927441863488, 0.8614685265616697]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[24.571035221339105, 0.8029764464252108]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[30.45941473141664, 0.923670408092652]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[26.95100730512879, 0.7950084759493738]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[23.256402388274218, 0.6590628604744335]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[31.514533054887124, 0.9443862773736528]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[31.160564104951767, 0.9410127626449392]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[30.931101452170356, 0.9310361261617576]]
		},
		]
        });
    });

 });