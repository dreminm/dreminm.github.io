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
                text: 'Performance on sequence № 35'
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
			data: [[44.472514427985885, 0.991135880790068]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[45.13974689053247, 0.9914499442615792]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[44.055294389271715, 0.9882652320818768]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[41.59240843855214, 0.9686229873097816]]
		},
		{
			name: 'NNEDI',
			data: [[46.73669235713174, 0.9933120075243428]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[45.759810139340935, 0.991943292070432]]
		},
		{
			name: 'Bob',
			data: [[45.064658667541636, 0.9925626402216284]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[47.24646885697424, 0.99406427880505]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[39.23320359361764, 0.9571488537647702]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[41.28054651723494, 0.9639557852146192]]
		},
		{
			name: 'PAL Interpolation',
			data: [[36.7220375944671, 0.9185596521557844]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[44.399309050901344, 0.9878392196668954]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[42.99385282967392, 0.9792389820641636]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[38.80922311046905, 0.9715014652890236]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[30.250095445255514, 0.9622248996032984]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[43.25434713070722, 0.9841449977941092]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[33.1587724414806, 0.9225044632250144]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[30.676892470020913, 0.88050560253904]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[46.80319944032311, 0.9939336277639658]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[45.99514315444543, 0.9920496967019109]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[43.854730139929295, 0.9857279148039324]]
		},
		]
        });
    });

 });