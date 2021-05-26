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
                text: 'Performance on sequence № 16'
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
			data: [[33.77987476853773, 0.9574299450281802]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[36.735661249979664, 0.9772787453020604]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[35.57524207002004, 0.9700020583887564]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[34.625359257804085, 0.9621529238429192]]
		},
		{
			name: 'NNEDI',
			data: [[35.60673045322045, 0.9717704511484291]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[35.56986749030939, 0.9718331807266136]]
		},
		{
			name: 'Bob',
			data: [[34.619203434808696, 0.9652108487863196]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[35.70864883452096, 0.9706046480433872]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[32.57886609021357, 0.9439853182940284]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[33.39345803368578, 0.9491298850334908]]
		},
		{
			name: 'PAL Interpolation',
			data: [[29.741097513031846, 0.8853630175645141]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[34.70513580554436, 0.9640970120631344]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[33.9347585960459, 0.9596468702411772]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[29.442459619782767, 0.8862497947688353]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[24.944943745335756, 0.8251970620353947]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[34.114668444487386, 0.9577253023326148]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[31.509280503694402, 0.9401639344790724]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[29.69963276959957, 0.908266870292737]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[35.1847244873845, 0.9684685577795844]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[35.88543050997803, 0.9727730398547368]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[34.70704569842636, 0.9648907805688952]]
		},
		]
        });
    });

 });