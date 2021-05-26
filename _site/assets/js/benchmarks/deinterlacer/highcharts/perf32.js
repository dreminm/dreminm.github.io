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
                text: 'Performance on sequence № 32'
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
			data: [[28.99772193996432, 0.9290148367022336]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[30.027688021587586, 0.9436998254305724]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[29.51857662471457, 0.9297003891363071]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[29.990481909527894, 0.9351953850630124]]
		},
		{
			name: 'NNEDI',
			data: [[30.363620871598307, 0.9486368636787064]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[30.1051675307956, 0.9461630217159516]]
		},
		{
			name: 'Bob',
			data: [[30.05055795608741, 0.9450118765848691]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[32.789920201749695, 0.9669875095789312]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[29.006558176118823, 0.9242707813322081]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[28.30201231338155, 0.915665350425234]]
		},
		{
			name: 'PAL Interpolation',
			data: [[27.44230984920772, 0.8773234568470845]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[30.210100818432466, 0.9438981291009079]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[29.444642376261072, 0.9344483153020768]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[27.433003284242353, 0.8857014996272323]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[25.07791314531279, 0.8391370322008355]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[29.49841353835645, 0.9352833199375609]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[27.78509289916468, 0.8690460871741539]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[25.41491716479673, 0.8131899573530705]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[30.196062973241784, 0.9475313334361564]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[30.02630058341978, 0.9458852754302844]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[30.01668854664877, 0.940501118162174]]
		},
		]
        });
    });

 });