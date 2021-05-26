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
                text: 'Performance on sequence № 18'
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
			data: [[41.19551417692872, 0.9828948076180998]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[44.464699994465626, 0.9911294818244649]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[42.430847506672976, 0.9886024744045456]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[41.17953947099915, 0.9861777967143066]]
		},
		{
			name: 'NNEDI',
			data: [[40.80075255832814, 0.9805444000642608]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[40.964327792091325, 0.9818911149842154]]
		},
		{
			name: 'Bob',
			data: [[38.742117052629524, 0.974934638616397]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[46.26212782304648, 0.9940006400292286]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[40.83130460971041, 0.9854094229269864]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[38.47069890376617, 0.9768737098074666]]
		},
		{
			name: 'PAL Interpolation',
			data: [[35.472197860547354, 0.9453800028768996]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[38.768510714335626, 0.972882414537802]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[38.972628611782405, 0.9782051016728796]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[33.05881739481098, 0.9221875129654474]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[29.639521114533125, 0.8790752880488278]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[34.606486543612725, 0.9259250242300358]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[39.53511974905739, 0.9790497635821229]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[38.12793292066246, 0.9711774507047743]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[40.20866934247665, 0.9795310103551552]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[41.69196369195644, 0.9853910137545658]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[40.51214480565825, 0.984437812993626]]
		},
		]
        });
    });

 });