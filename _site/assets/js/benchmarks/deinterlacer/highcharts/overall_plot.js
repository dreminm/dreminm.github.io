$(function () {
    $(document).ready(function() {

        Highcharts.chart('overall-plot', {
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
                text: 'Overall Performance'
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
			data: [[37.742, 0.965]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[39.679, 0.976]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[38.68, 0.969]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[36.731, 0.96]]
		},
		{
			name: 'NNEDI',
			data: [[39.625, 0.978]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[39.203, 0.976]]
		},
		{
			name: 'Bob',
			data: [[38.499, 0.975]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[40.708, 0.983]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[35.415, 0.95]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[35.444, 0.949]]
		},
		{
			name: 'PAL Interpolation',
			data: [[33.111, 0.913]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[38.056, 0.972]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[37.063, 0.964]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[36.99, 0.95]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[27.499, 0.902]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[36.092, 0.958]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[29.744, 0.868]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[27.899, 0.804]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[39.373, 0.977]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[39.916, 0.977]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[38.103, 0.97]]
		},
		]
        });
    });

 });