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
                text: 'Performance on sequence № 19'
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
			data: [[44.63847510037614, 0.99488515180765]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[47.05555552855512, 0.9956550648065868]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[41.1808526174711, 0.9927481039961696]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[41.637893136831295, 0.9824979561832676]]
		},
		{
			name: 'NNEDI',
			data: [[37.819811125918605, 0.9939673238014884]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[40.242155240658434, 0.9927731382840608]]
		},
		{
			name: 'Bob',
			data: [[36.11755783337559, 0.992656723153766]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[48.69511005142865, 0.9964725508843004]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[39.990916664592454, 0.9764705007768072]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[34.694487695297674, 0.9748661504680284]]
		},
		{
			name: 'PAL Interpolation',
			data: [[36.04333063317087, 0.940207993034886]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[36.07782597552008, 0.9880548302154796]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[40.14188283214728, 0.9836010342883944]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[30.270829712772546, 0.9660205480071258]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[27.06832723569921, 0.9601560308247671]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[35.716828708636754, 0.9865916791272814]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[33.94643725777804, 0.9451408569543468]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[30.97155185951115, 0.9082319812043484]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[37.12548221486504, 0.9935844605203809]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[46.951814717220365, 0.9953777270182794]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[41.85109038389483, 0.9911877449712136]]
		},
		]
        });
    });

 });