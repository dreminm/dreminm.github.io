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
                text: 'Performance on sequence № 20'
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
			data: [[47.553224335664815, 0.9955244382439532]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[48.417786083346186, 0.9955460638871316]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[43.351564264526615, 0.9933045752340324]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[41.5778767842617, 0.9768195129074428]]
		},
		{
			name: 'NNEDI',
			data: [[40.19835076890457, 0.9931807049859832]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[39.470680678862756, 0.9907223274974488]]
		},
		{
			name: 'Bob',
			data: [[39.172371250547904, 0.9925268903513651]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[48.807559382833574, 0.9959024335699151]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[41.46489434201553, 0.9725099539972271]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[37.608609832302214, 0.9698994046192748]]
		},
		{
			name: 'PAL Interpolation',
			data: [[36.95442820106233, 0.9320550270086732]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[39.066291987291045, 0.9877625062096856]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[42.73000898301419, 0.9815931428240146]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[33.93536892203924, 0.9667172043359208]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[27.68789220338425, 0.9684346500588332]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[38.45210193005129, 0.9833510327315362]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[33.014603748305895, 0.9516674492457696]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[30.23717264476288, 0.9305692446705024]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[40.00824515344321, 0.9932386339054344]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[46.51533093159164, 0.994356222180986]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[42.38745740265287, 0.9894996065368072]]
		},
		]
        });
    });

 });