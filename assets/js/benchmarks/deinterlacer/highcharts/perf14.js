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
                text: 'Performance on sequence № 14'
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
			data: [[34.64320703366193, 0.9756717511723194]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[36.049752289788636, 0.979686747020592]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[35.465343762387874, 0.9616742843306556]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[35.03499937872304, 0.9609724705304116]]
		},
		{
			name: 'NNEDI',
			data: [[39.034443286313575, 0.9887275458727004]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[38.156651584665745, 0.9857450424566314]]
		},
		{
			name: 'Bob',
			data: [[36.264318752280495, 0.9826489922008309]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[38.66943690397937, 0.9882564564263616]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[33.16213807623426, 0.949048299236176]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[34.43167876945044, 0.9568981812153009]]
		},
		{
			name: 'PAL Interpolation',
			data: [[31.752485413359537, 0.9289698775852652]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[36.30859764051415, 0.9792922048644876]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[35.94190421574169, 0.9780678564042448]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[30.87366402920229, 0.945826283550725]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[26.864228649666142, 0.9172324236580603]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[35.710240490602324, 0.9754441204193842]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[24.451054614676146, 0.800783299351907]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[21.936635373006855, 0.6934894101145923]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[38.510525284266976, 0.988106713532905]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[37.38047581710935, 0.9847509497761691]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[35.73585063076417, 0.9727997942762756]]
		},
		]
        });
    });

 });