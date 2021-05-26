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
                text: 'Performance on sequence № 31'
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
			data: [[26.24727595388289, 0.8555459692597097]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[27.277002119259976, 0.8739477421940445]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[27.084393672133174, 0.8577853013231703]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[27.577260497013224, 0.8692606580102155]]
		},
		{
			name: 'NNEDI',
			data: [[27.814333914624928, 0.8840646963000708]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[27.643297148315664, 0.8823709465037068]]
		},
		{
			name: 'Bob',
			data: [[27.776328854288987, 0.8856871352712533]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[29.433161743650018, 0.9041212502578532]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[26.756600590869922, 0.8570547005185128]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[26.265100563429485, 0.849979906255821]]
		},
		{
			name: 'PAL Interpolation',
			data: [[25.596866071378866, 0.817814699485019]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[27.920811975756468, 0.8852851862037079]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[27.169915953184923, 0.8708286819658265]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[25.434728796137854, 0.7932958582477377]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[23.784027360769826, 0.7394381451587526]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[27.183383732769226, 0.8705212860593624]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[24.959502170987157, 0.7684730175903111]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[22.213327383683747, 0.7029903639713736]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[27.792502510587372, 0.8848825347723772]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[27.524516678160825, 0.8798071404889123]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[27.63406602318201, 0.8771624156267116]]
		},
		]
        });
    });

 });