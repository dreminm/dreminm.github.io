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
                text: 'Performance on sequence № 36'
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
			data: [[29.329087792142616, 0.947790329907262]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[30.754540836758316, 0.9634754508327384]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[30.375305724214353, 0.9543528807841722]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[30.60743764660379, 0.9491105367714574]]
		},
		{
			name: 'NNEDI',
			data: [[31.974988134468656, 0.9719407364392221]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[31.695116798154192, 0.970153819276226]]
		},
		{
			name: 'Bob',
			data: [[31.049119554940816, 0.9657137648503848]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[33.353799263390606, 0.9787567748953808]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[29.24457242503653, 0.9315504018211818]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[29.1369236121428, 0.9291951129592396]]
		},
		{
			name: 'PAL Interpolation',
			data: [[27.668756050925783, 0.8861485402672339]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[31.149631300687698, 0.9638989888201204]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[30.30429810908122, 0.9544294684218502]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[27.512584206871637, 0.9160056456280776]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[24.82404114112882, 0.8716916987252751]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[30.39000433413705, 0.9532759831603222]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[25.153663842328, 0.8252034906229266]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[22.50966189664343, 0.7272817882238808]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[31.62600572938343, 0.9708558602915214]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[31.235567112023354, 0.9682631455455522]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[30.760247517554756, 0.9594738427969652]]
		},
		]
        });
    });

 });