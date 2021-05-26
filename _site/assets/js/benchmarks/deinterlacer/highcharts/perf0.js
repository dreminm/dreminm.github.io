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
                text: 'Performance on sequence № 0'
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
			data: [[26.63398952270788, 0.9287803693990851]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[29.52370223985364, 0.9588731645397779]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[29.112962655595563, 0.9357571989242076]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[29.376865273768075, 0.9406041111023644]]
		},
		{
			name: 'NNEDI',
			data: [[30.987845778505744, 0.9732148831410812]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[31.06565760645462, 0.9723333727859104]]
		},
		{
			name: 'Bob',
			data: [[29.95018680363484, 0.9675076735834486]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[31.19199718070158, 0.9743930338471142]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[27.7609552023946, 0.9330242607170768]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[26.544334063854325, 0.9207143681565084]]
		},
		{
			name: 'PAL Interpolation',
			data: [[26.155384940028476, 0.8970027298434088]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[30.070653897063192, 0.9661245749001058]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[28.09398890380401, 0.949175654243126]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[25.465303520276212, 0.9078602440057744]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[22.396372646886526, 0.8527999125376295]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[28.417523270002626, 0.9509135688146609]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[21.551348168448406, 0.7520245467264619]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[17.044838896461485, 0.5503616672156485]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[30.74067117632524, 0.9718882548998452]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[30.671057517834786, 0.9711177923819072]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[29.605671510066827, 0.9539022635707042]]
		},
		]
        });
    });

 });