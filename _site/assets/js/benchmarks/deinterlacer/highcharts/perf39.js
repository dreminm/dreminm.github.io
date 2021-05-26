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
                text: 'Performance on sequence № 39'
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
			data: [[41.91656654760666, 0.9789395568771804]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[44.121834876284574, 0.9869121902588244]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[44.32729306727501, 0.9862384776989632]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[39.69249865981104, 0.953580709260006]]
		},
		{
			name: 'NNEDI',
			data: [[46.233139521023034, 0.9917259688103184]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[45.53637644029912, 0.9904557718463736]]
		},
		{
			name: 'Bob',
			data: [[45.00214757530574, 0.9894636131329916]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[43.69642666167147, 0.9865642528838432]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[38.178391378670824, 0.9411737172437808]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[39.58089587100513, 0.9523811319046062]]
		},
		{
			name: 'PAL Interpolation',
			data: [[35.751697032491165, 0.8939290517219475]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[44.295944129129026, 0.9859342664396898]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[41.69899200679362, 0.9791261443886804]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[36.98824699346361, 0.9495539445619156]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[28.461330859460286, 0.9318880449042948]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[43.51412229707579, 0.9848804390880138]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[29.023269625069858, 0.7975904218984224]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[28.47919141431936, 0.7071673448192007]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[46.31713507937153, 0.9918460357313916]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[46.626354902634056, 0.9922597762120108]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[43.570125302615175, 0.9834222504929584]]
		},
		]
        });
    });

 });