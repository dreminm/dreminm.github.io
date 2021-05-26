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
                text: 'Performance on sequence № 17'
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
			data: [[30.999561346836987, 0.9368651859091808]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[33.83472399867688, 0.965526191029226]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[32.26949120419359, 0.9524025032128728]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[31.280517692376502, 0.9402701905172838]]
		},
		{
			name: 'NNEDI',
			data: [[31.867088585206126, 0.9480275120769388]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[31.951040374719142, 0.9492862853596634]]
		},
		{
			name: 'Bob',
			data: [[31.220187806794247, 0.9410894679158436]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[34.04182756239948, 0.9670800433715168]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[30.17031978709616, 0.9283882684446756]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[30.541083544334718, 0.9286597743923928]]
		},
		{
			name: 'PAL Interpolation',
			data: [[27.473164392553958, 0.8608334093303697]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[31.32497947601655, 0.9405429143581494]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[30.762965084121827, 0.9368426358985732]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[26.78155823879793, 0.8413909236808438]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[23.23297744049217, 0.7669299658741451]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[30.99641635463088, 0.9336526471884654]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[32.78081442100976, 0.9530372117345509]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[30.065187481855684, 0.9226787440850686]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[31.46365482712467, 0.9418882180969148]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[32.02378565924314, 0.9493796017079406]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[31.24930277161408, 0.9407113645954742]]
		},
		]
        });
    });

 });