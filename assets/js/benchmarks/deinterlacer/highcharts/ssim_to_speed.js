$(function () {
    $(document).ready(function() {

        Highcharts.chart('speed_plot', {
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
                text: 'SSIM to Speed'
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: 'SSIM'
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: 'FPS on CPU'
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
			name: 'NNEDI',
			data: [[0.954, 1.91]]
		},
		{
			name: 'DfRes 119000',
			data: [[0.968, 0.0]]
		},
		{
			name: 'PAL Interpolation',
			data: [[0.901, 2.85]]
		},
		{
			name: 'Vapoursynth EEDI3',
			data: [[0.954, 51.9]]
		},
		{
			name: 'Bob',
			data: [[0.951, 52.83]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[0.932, 2.15]]
		},
		{
			name: 'DfRes 122000 G2e 3',
			data: [[0.969, 0.0]]
		},
		{
			name: 'YADIF',
			data: [[0.945, 48.96]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[0.963, 1.3]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[0.928, 1.9]]
		},
		{
			name: 'Vapoursynth TDeintMod',
			data: [[0.951, 50.29]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[0.947, 37.91]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[0.947, 36.75]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[0.953, 46.45]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[0.83, 1.45]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[0.953, 0.27]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[0.928, 1.95]]
		},
		{
			name: 'DfRes 121000 G2e 3',
			data: [[0.969, 0.0]]
		},
		{
			name: 'DfRes 61000',
			data: [[0.967, 0.0]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[0.939, 37.85]]
		},
		]
        });
    });

 });