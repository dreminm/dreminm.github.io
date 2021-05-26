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
                text: 'Performance on sequence № 8'
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
			data: [[43.074820915880416, 0.9921490208455004]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[45.921034690043754, 0.99507966965811]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[44.628463263415384, 0.99358644886437]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[42.47076350405639, 0.9864421381514794]]
		},
		{
			name: 'NNEDI',
			data: [[43.38144873557054, 0.9927941663086902]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[43.110978294894345, 0.992218803416352]]
		},
		{
			name: 'Bob',
			data: [[41.636829027503, 0.990903740783336]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[46.63311699935748, 0.9953053337323016]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[40.80509890510003, 0.9800400399209848]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[39.85687914190556, 0.9780704936204756]]
		},
		{
			name: 'PAL Interpolation',
			data: [[36.821359596982546, 0.9537416311356396]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[41.44585082917687, 0.9879538050642138]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[41.56837199338775, 0.987044236172394]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[34.041135948939555, 0.9546748856521536]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[28.561827305755656, 0.939564360469814]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[34.552736338318354, 0.9283881085441908]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[34.842519897817546, 0.947071879382662]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[32.81466106152746, 0.9181333715300268]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[43.00886763628735, 0.9925014614861012]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[45.181192484558935, 0.9950792807041544]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[43.210853971797334, 0.9925264754874092]]
		},
		]
        });
    });

 });