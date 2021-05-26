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
                text: 'Performance on sequence № 21'
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
			data: [[43.312272287184356, 0.9928436263335156]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[44.510359887609404, 0.9935687763158871]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[44.75362106228543, 0.9921295647133256]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[40.80819258212468, 0.971260620599364]]
		},
		{
			name: 'NNEDI',
			data: [[47.11721790443625, 0.9953991281969348]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[46.09384998164742, 0.993722562508817]]
		},
		{
			name: 'Bob',
			data: [[45.706435484686864, 0.9956460054426752]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[43.07586794258867, 0.9919591616063382]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[39.667454492938134, 0.9651532244142548]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[40.4864873282837, 0.9672330513045996]]
		},
		{
			name: 'PAL Interpolation',
			data: [[36.57040734620996, 0.9231849608120148]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[44.8173070895274, 0.9909742472906052]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[42.33632493811483, 0.9820494137436536]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[36.938898349580384, 0.969842167087402]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[28.111307369797643, 0.9709577164545924]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[43.072764207953824, 0.9867678075127952]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[28.711100378872857, 0.8532612632193817]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[29.276174062414626, 0.8147571655465194]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[47.24858172725644, 0.9962782233598152]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[46.71714698239079, 0.9959461087276829]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[44.06554548425334, 0.9897755757970206]]
		},
		]
        });
    });

 });