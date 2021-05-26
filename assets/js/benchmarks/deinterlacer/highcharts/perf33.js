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
                text: 'Performance on sequence № 33'
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
			data: [[26.14820489143271, 0.9307474877153232]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[27.93897413685716, 0.9547371063961028]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[26.314299026302024, 0.9327674366234]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[26.555536885580377, 0.9326605888180798]]
		},
		{
			name: 'NNEDI',
			data: [[26.746277716359614, 0.9350693183964824]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[26.887762245479628, 0.9393026014787448]]
		},
		{
			name: 'Bob',
			data: [[26.53080296283524, 0.9294940958079512]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[32.727120282773086, 0.9844795219258372]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[25.727170929495287, 0.9219239192261224]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[24.85669181419341, 0.9010627081229202]]
		},
		{
			name: 'PAL Interpolation',
			data: [[24.111189196488226, 0.8704846816564996]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[26.631528453291324, 0.9279847025307169]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[25.90526249730887, 0.9228686738761818]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[23.547679975084094, 0.8381392730379057]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[20.890239814365977, 0.7659602014365006]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[25.78060874037158, 0.9123892179642512]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[26.53228261351082, 0.9192429982089224]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[24.18863719130537, 0.878014094414607]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[26.68444091158141, 0.9341645222506486]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[26.799827036943107, 0.940597789940502]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[26.4842606420603, 0.9320997234439786]]
		},
		]
        });
    });

 });