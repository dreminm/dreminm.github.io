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
                text: 'Performance on sequence № 28'
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
			data: [[31.554755040156635, 0.9467303922341108]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[32.61750964150595, 0.9584429773541128]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[32.11295740409432, 0.948647030811196]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[32.56320204337489, 0.9448797025061619]]
		},
		{
			name: 'NNEDI',
			data: [[33.84776421806543, 0.9678840992657488]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[33.747421201971854, 0.9667235348951132]]
		},
		{
			name: 'Bob',
			data: [[33.07457035178331, 0.9625535655154226]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[36.54018198091799, 0.981159174779068]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[31.01871721458525, 0.9274613182335648]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[31.03225418753607, 0.928532690527978]]
		},
		{
			name: 'PAL Interpolation',
			data: [[29.12953241122242, 0.8752445876177959]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[33.183191942888676, 0.9598195486063518]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[32.513970052066014, 0.9518258711504279]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[29.997764269450297, 0.9113661432961504]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[26.26305513758841, 0.8771012347942524]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[32.540493003981645, 0.9512086806982868]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[29.196170568274002, 0.8743833409569591]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[25.959232132388557, 0.7909413998271693]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[33.61514648033149, 0.9668613925836738]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[33.057459206059555, 0.9628827739284836]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[32.787005783402016, 0.9557173312515592]]
		},
		]
        });
    });

 });