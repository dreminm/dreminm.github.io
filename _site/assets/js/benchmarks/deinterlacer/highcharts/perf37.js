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
                text: 'Performance on sequence № 37'
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
			data: [[28.78703219588327, 0.9417144784469491]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[30.22668768713556, 0.9599610955178892]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[29.760148549018588, 0.9516973662742916]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[30.000315449761953, 0.949044941189845]]
		},
		{
			name: 'NNEDI',
			data: [[31.21546550783781, 0.9670553804052512]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[31.02248760996945, 0.965452177193448]]
		},
		{
			name: 'Bob',
			data: [[30.340349356037997, 0.9609303826447942]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[31.735710215379605, 0.9699863240780282]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[28.478336685368237, 0.926660182175326]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[28.344965701355072, 0.9265498891148738]]
		},
		{
			name: 'PAL Interpolation',
			data: [[26.74211880303029, 0.8722876480693611]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[30.46038825166435, 0.9597584896100616]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[29.64080417905036, 0.9487765207038344]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[27.123820559638077, 0.9065528975892304]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[24.769074121088916, 0.8651499517814679]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[29.6733575963027, 0.9484308174249252]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[26.64009469669968, 0.8742011989262192]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[24.76929739569855, 0.8176539554366667]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[30.78690552505802, 0.9655866520685944]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[30.457068594659766, 0.9633649253384576]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[30.118737166491037, 0.9562641988307488]]
		},
		]
        });
    });

 });