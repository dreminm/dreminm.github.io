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
                text: 'Performance on sequence № 12'
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
			data: [[35.307641520444115, 0.977803499416375]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[36.8618417034054, 0.9826918579320087]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[36.36600963357243, 0.9741916906126202]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[36.07317868350072, 0.9612546821702602]]
		},
		{
			name: 'NNEDI',
			data: [[39.21416533722449, 0.988759406471015]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[38.56569728620417, 0.986769127579791]]
		},
		{
			name: 'Bob',
			data: [[37.33080101392769, 0.9858858997016804]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[37.46662445290894, 0.9845777704203144]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[34.862733551683995, 0.9566425463319788]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[35.677968898175074, 0.9603823604560444]]
		},
		{
			name: 'PAL Interpolation',
			data: [[33.307639325762636, 0.9221188751787848]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[37.28770018306846, 0.9806876482694572]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[36.78497529200077, 0.9754536264711788]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[33.413857676893834, 0.9568739548941392]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[27.80744172965849, 0.9429327331104884]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[37.10065453932626, 0.982732183394376]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[26.32316791027275, 0.8497269867049289]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[25.86699100988924, 0.8059008708996505]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[39.17645703543987, 0.9894595722055494]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[37.569842866884386, 0.9858411430087872]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[36.878367630337465, 0.976786078535312]]
		},
		]
        });
    });

 });