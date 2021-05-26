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
			name: 'YADIF',
			data: [[0.965, 48.96]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[0.976, 46.45]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[0.969, 36.75]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[0.96, 37.85]]
		},
		{
			name: 'NNEDI',
			data: [[0.978, 1.91]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[0.976, 0.27]]
		},
		{
			name: 'Bob',
			data: [[0.975, 52.83]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[0.983, 1.3]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[0.95, 2.15]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[0.949, 1.95]]
		},
		{
			name: 'PAL Interpolation',
			data: [[0.913, 2.85]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[0.902, 1.9]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[0.958, 43.82]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[0.804, 1.45]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[0.977, 51.9]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[0.977, 50.29]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[0.97, 37.91]]
		},
		]
        });
    });

 });