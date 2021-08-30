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
                text: 'VMAF to Speed'
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: 'VMAF'
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
			data: [[93.246, 1.91]]
		},
		{
			name: 'PAL Interpolation',
			data: [[82.662, 2.85]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[90.122, 51.9]]
		},
		{
			name: 'Bob',
			data: [[87.242, 52.83]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[88.882, 2.15]]
		},
		{
			name: 'YADIF',
			data: [[87.24, 48.96]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[92.141, 1.3]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[86.873, 1.9]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[91.044, 50.29]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[90.757, 37.91]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[89.625, 36.75]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[91.309, 46.45]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[64.436, 1.45]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[90.964, 0.27]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[86.873, 1.95]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[90.25, 37.85]]
		},
		]
        });
    });

 });