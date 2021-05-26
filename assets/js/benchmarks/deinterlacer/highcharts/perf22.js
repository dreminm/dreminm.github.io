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
                text: 'Performance on sequence № 22'
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
			data: [[39.14008470066371, 0.988658319033183]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[41.68641105374958, 0.992012757327568]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[41.0332396411112, 0.9899494785359586]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[39.43207121694372, 0.973115098961808]]
		},
		{
			name: 'NNEDI',
			data: [[42.60771367212345, 0.9927649702560134]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[42.198831135189565, 0.9912097979432958]]
		},
		{
			name: 'Bob',
			data: [[41.83617651647208, 0.9926826964006209]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[40.07145864092464, 0.9884956529128704]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[37.94053288831997, 0.9662081254931032]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[37.78191452381141, 0.9703923698210336]]
		},
		{
			name: 'PAL Interpolation',
			data: [[35.067404902533305, 0.931701217222246]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[41.6342865232802, 0.9885607010036036]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[39.12741305489904, 0.9795092022859134]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[35.375975333692296, 0.9630557827266722]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[26.779216863094312, 0.9596644183842348]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[40.021003022944186, 0.9849386515561802]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[31.77068297319552, 0.9148610475226956]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[31.10362695994713, 0.8853995462218274]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[42.52544207302317, 0.9934860675166632]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[42.43090045023112, 0.9928197571528552]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[41.05561152016458, 0.9874418535790834]]
		},
		]
        });
    });

 });