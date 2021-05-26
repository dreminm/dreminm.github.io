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
                text: 'PSNR to Speed'
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
			data: [[37.742, 48.96]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[39.679, 46.45]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[38.68, 36.75]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[36.731, 37.85]]
		},
		{
			name: 'NNEDI',
			data: [[39.625, 1.91]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[39.203, 0.27]]
		},
		{
			name: 'Bob',
			data: [[38.499, 52.83]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[40.708, 1.3]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[35.415, 2.15]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[35.444, 1.95]]
		},
		{
			name: 'PAL Interpolation',
			data: [[33.111, 2.85]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[27.499, 1.9]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[36.092, 43.82]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[27.899, 1.45]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[39.373, 51.9]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[39.916, 50.29]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[38.103, 37.91]]
		},
		]
        });
    });

 });