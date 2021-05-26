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
                text: 'Performance on sequence № 9'
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
			data: [[32.417883136274206, 0.955739189505306]]
		},
		{
			name: 'Bob-Weave Deinterlacer',
			data: [[35.57196281418317, 0.9766565744673428]]
		},
		{
			name: 'Weston 3-Field Deinterlacer',
			data: [[34.71986659468599, 0.9683737908561922]]
		},
		{
			name: 'Kernel Deinterlacer',
			data: [[34.40920012612796, 0.9615032841277432]]
		},
		{
			name: 'NNEDI',
			data: [[36.07678625100826, 0.9784827134035794]]
		},
		{
			name: 'Real-Time Deep Deinterlacer',
			data: [[35.96351066282328, 0.9777005541000898]]
		},
		{
			name: 'Bob',
			data: [[34.9774116332578, 0.9735650243940606]]
		},
		{
			name: 'MSU Deinterlacer',
			data: [[37.6680026830912, 0.98488561360072]]
		},
		{
			name: 'Motion and Area Pixel Deinterlacer',
			data: [[32.377111782561265, 0.9440127747675876]]
		},
		{
			name: 'Muksun Deinterlacer',
			data: [[32.318259840883, 0.944727081938778]]
		},
		{
			name: 'PAL Interpolation',
			data: [[30.591897740415806, 0.9063820606716644]]
		},
		{
			name: 'Elemental Live Low Latency Interpolation',
			data: [[35.07514765277014, 0.9718181801161904]]
		},
		{
			name: 'Elemental Live Motion Adaptive Interpolation',
			data: [[33.207508400757604, 0.9608130710251896]]
		},
		{
			name: 'Studio Coast Pty vMix',
			data: [[29.784306608500586, 0.9176712519575024]]
		},
		{
			name: 'ASVZZZ Deinterlacer',
			data: [[25.026388420453173, 0.8774558152177785]]
		},
		{
			name: 'Adobe Premiere Pro Built-In',
			data: [[33.492992228139016, 0.9592583280280732]]
		},
		{
			name: 'Elemental Live Motion Adaptive Blend',
			data: [[27.116422709586296, 0.8508402153461234]]
		},
		{
			name: 'Motion Compensation Deinterlacer',
			data: [[24.11664833544681, 0.7466801244393164]]
		},
		{
			name: 'VapourSynth EEDI3',
			data: [[35.87110317111422, 0.9777866292593655]]
		},
		{
			name: 'VapourSynth TDeintMod',
			data: [[35.887337279350454, 0.9779621582236018]]
		},
		{
			name: 'Kernel Deinterlacer (optimal parameters)',
			data: [[34.65498963932261, 0.9691112122059912]]
		},
		]
        });
    });

 });