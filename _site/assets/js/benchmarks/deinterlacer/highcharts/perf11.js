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
                text: 'Performance on sequence № 11'
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
			data: [[39.67105189121648, 0.9908800396605528]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[41.920953575019844, 0.993003425119963]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[40.27787836153164, 0.9905785107684966]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[39.02915070329856, 0.9888716379289484]]
		},
		{
			name: 'NNEDI',
			data: [[37.64158458918593, 0.9868890326639832]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[38.43019557342939, 0.9869207609085696]]
		},
		{
			name: 'Bob',
			data: [[36.649241793440964, 0.9856429954098871]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[44.17372812315265, 0.9948499731957804]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[38.98278657555094, 0.9875950064785962]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[35.027788599720076, 0.9796150551552008]]
		},
		{
			name: 'PAL Interpolation',
			data: [[35.546277941195164, 0.9728012339860768]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[36.651026403273846, 0.9810258675870329]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[36.18399193146132, 0.9804951179030748]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[31.690363121735658, 0.9528532263692244]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[27.15088114940018, 0.9436205252016108]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[34.53692450815299, 0.9395251357703452]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[38.4238966847283, 0.9808942908939232]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[37.512500565771866, 0.978124056588172]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[37.27177571227213, 0.9868266223067038]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[38.6797916120152, 0.9891012211810702]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[38.29896085561315, 0.9884082877781438]]
		},
		]
        });
    });

 });