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
                text: 'Performance on sequence № 6'
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
			data: [[45.866141480707824, 0.9946898503006156]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[48.20144940020091, 0.9958649503642956]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[47.05454138098561, 0.9943279413100324]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[44.92032341983602, 0.9917232131874693]]
		},
		{
			name: 'NNEDI',
			data: [[48.959018186385485, 0.9952643875245404]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[47.510144792924464, 0.9943779386517348]]
		},
		{
			name: 'Bob',
			data: [[47.033019158329886, 0.9950227993815264]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[48.680460733143185, 0.9965647285597412]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[42.683242901026, 0.9897035150158155]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[44.43079714284282, 0.9909607934015496]]
		},
		{
			name: 'PAL Interpolation',
			data: [[38.554083317048715, 0.9704222671328002]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[45.98432992534163, 0.9906937362641324]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[43.716997530985566, 0.9882816400034058]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[38.41488501097517, 0.9745157358187552]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[31.368396412469824, 0.97100874377629]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[35.65262789173378, 0.9212583137987091]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[34.17702427023754, 0.9727654664595506]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[34.36440058708944, 0.96677597195666]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[48.66313760569106, 0.9955671669356756]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[49.08844327631674, 0.9963168725132208]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[46.241118213500435, 0.9937632147718344]]
		},
		]
        });
    });

 });