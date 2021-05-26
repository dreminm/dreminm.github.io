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
                text: 'Performance on sequence № 29'
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
			data: [[49.45135470398297, 0.9965658710448654]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[49.921963389348754, 0.9965303740848702]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[50.52739851821038, 0.9961170894517504]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[42.17975472048149, 0.9841914192772506]]
		},
		{
			name: 'NNEDI',
			data: [[49.95101744244608, 0.9962867485350811]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[48.827543509960755, 0.9947959572430806]]
		},
		{
			name: 'Bob',
			data: [[49.63973386092898, 0.9967674459230804]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[48.34404770010458, 0.9956233708702414]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[42.84000070132455, 0.9848421786939122]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[44.61493736626493, 0.9848450527620628]]
		},
		{
			name: 'PAL Interpolation',
			data: [[40.91334023986053, 0.9668295814889968]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[47.65253739640698, 0.9917665997635002]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[45.366370670868854, 0.9887612398524234]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[40.689030702975934, 0.9797925027699992]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[30.734408594512054, 0.9829887471740794]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[43.914012942057035, 0.9832959887661851]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[29.58281385282755, 0.8675031043363901]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[28.930790106847066, 0.8185550789667683]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[50.16732486082414, 0.9967900893966298]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[51.20437123919715, 0.9971819592606912]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[47.99622278975993, 0.9943381645184156]]
		},
		]
        });
    });

 });