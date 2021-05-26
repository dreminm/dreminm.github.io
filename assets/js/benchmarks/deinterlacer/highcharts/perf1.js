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
                text: 'Performance on sequence № 1'
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
			data: [[28.58013362352878, 0.9494238801978212]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[32.66048973292146, 0.9758022147276568]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[31.33327835617713, 0.9640155840857018]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[31.333726948233448, 0.9561044036179934]]
		},
		{
			name: 'NNEDI',
			data: [[32.60407735546938, 0.9766447383799688]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[32.528134782213755, 0.9760809562463456]]
		},
		{
			name: 'Bob',
			data: [[31.911430283752214, 0.9735482865188771]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[32.310662091072025, 0.9757022385584101]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[29.58355276128845, 0.940857315143494]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[28.347553580992646, 0.9313574603205124]]
		},
		{
			name: 'PAL Interpolation',
			data: [[27.337610801452595, 0.8804573584260961]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[32.00827956373578, 0.9711318567934372]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[29.841833959599608, 0.95427934777275]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[27.974729164316848, 0.9304200109758108]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[23.958537361058564, 0.8755315610015616]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[29.77608800925207, 0.9576734291374928]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[28.74940758230896, 0.9212391999528072]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[25.71982069743281, 0.8665518407665139]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[32.59979450164557, 0.9766094191127748]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[32.7103033068047, 0.9761823245206516]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[31.482902396233445, 0.9663889432107512]]
		},
		]
        });
    });

 });