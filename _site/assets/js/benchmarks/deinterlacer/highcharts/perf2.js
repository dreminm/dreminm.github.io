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
                text: 'Performance on sequence № 2'
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
			data: [[39.74453469776625, 0.9760571608162212]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[42.08708744723547, 0.9858107753019624]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[41.73792972126283, 0.982599939651242]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[39.89979114526242, 0.9672982050473632]]
		},
		{
			name: 'NNEDI',
			data: [[44.143428695338116, 0.990380008631834]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[43.52125538654313, 0.9885216410305366]]
		},
		{
			name: 'Bob',
			data: [[42.69520755541657, 0.9875166062859232]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[44.331133429473475, 0.9908358102513568]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[37.98334396061959, 0.9543376574152292]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[38.783876656773245, 0.9595711083616122]]
		},
		{
			name: 'PAL Interpolation',
			data: [[35.48060350858419, 0.9176819359606508]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[42.38308753948245, 0.9840367498113356]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[40.45540883401351, 0.9770396686345902]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[35.84985800230618, 0.9448133430154674]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[27.50618731854168, 0.9257544271854324]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[41.489539913086546, 0.9823707085947256]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[31.457032280318497, 0.8607408027540789]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[28.85094013731689, 0.7627987525531488]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[43.933165619014034, 0.9901568012147038]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[44.0287473080186, 0.9904685224498084]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[41.8701666526594, 0.9830771993513192]]
		},
		]
        });
    });

 });