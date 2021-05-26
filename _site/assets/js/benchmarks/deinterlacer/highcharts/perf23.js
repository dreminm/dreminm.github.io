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
                text: 'Performance on sequence № 23'
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
			data: [[47.23869828209683, 0.996053043296866]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[47.91099062907651, 0.9956069925487632]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[45.7645659109482, 0.99364074722173]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[38.254527487583644, 0.977472176298992]]
		},
		{
			name: 'NNEDI',
			data: [[44.990577741061784, 0.9947645310779276]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[47.89673868791171, 0.9940570938059572]]
		},
		{
			name: 'Bob',
			data: [[39.652557577485936, 0.9948763754822488]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[48.63341862647992, 0.9952459703867046]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[39.04111698060925, 0.974773833645024]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[38.57485635665225, 0.9767178266771576]]
		},
		{
			name: 'PAL Interpolation',
			data: [[40.96109580786757, 0.97127097334416]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[39.555940380177844, 0.9903144659809798]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[40.83190246177825, 0.9886599095511398]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[36.27199399574166, 0.9809800097156534]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[32.21814541154419, 0.984904986320866]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[37.154689953278606, 0.9602998858821712]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[24.788764654752253, 0.7357601819277004]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[24.881979855491252, 0.6504233301072032]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[40.54650824599496, 0.9948494308122516]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[44.52213634872055, 0.99604363355453]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[41.59428745269272, 0.9907128675854172]]
		},
		]
        });
    });

 });