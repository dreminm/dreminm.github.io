$(function () {
    $(document).ready(function() {
            Highcharts.chart('detailed', {

            title: {
                text: 'SSIM to Frame Number: Sequence # 18'
            },

            subtitle: {
                text: ''
            },

            yAxis: {
                title: {
                    text: 'SSIM'
                }
            },

            xAxis: {
                title: {
                        text: 'Frame Number'
                }
            },

            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                }
            },
            navigation: {
                buttonOptions: {
                    enabled: false
                }
            },series: [{
		name: 'NNEDI',
		data: [0.997, 0.997, 0.997, 0.997, 0.997, 0.997, 0.997, 0.997, 0.997, 0.997, 0.997, 0.998, 0.997, 0.998, 0.997, 0.997, 0.997, 0.997, 0.997, 0.997, 0.997, 0.997, 0.997, 0.997, 0.997, 0.997, 0.997, 0.997, 0.997, 0.997]
},{
		name: 'PAL Interpolation',
		data: [0.959, 0.942, 0.946, 0.946, 0.955, 0.944, 0.944, 0.946, 0.945, 0.956, 0.946, 0.949, 0.949, 0.947, 0.958, 0.949, 0.953, 0.955, 0.952, 0.962, 0.953, 0.955, 0.955, 0.954, 0.961, 0.954, 0.957, 0.954, 0.952, 0.959]
},{
		name: 'VapourSynth EEDI3',
		data: [0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998]
},{
		name: 'Bob',
		data: [0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [1.0, 1.0, 1.0, 0.972, 0.979, 1.0, 1.0, 1.0, 0.972, 0.98, 1.0, 1.0, 1.0, 0.973, 0.98, 1.0, 1.0, 1.0, 0.975, 0.981, 1.0, 1.0, 1.0, 0.973, 0.98, 1.0, 1.0, 1.0, 0.973, 0.978]
},{
		name: 'YADIF',
		data: [0.998, 0.998, 0.997, 0.997, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998]
},{
		name: 'MSU Deinterlacer',
		data: [0.995, 0.997, 0.998, 0.997, 0.996, 0.997, 0.997, 0.998, 0.997, 0.997, 0.997, 0.997, 0.998, 0.997, 0.997, 0.997, 0.996, 0.998, 0.997, 0.997, 0.997, 0.997, 0.998, 0.997, 0.997, 0.997, 0.997, 0.998, 0.997, 0.996]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [1.0, 0.999, 0.999, 0.978, 0.977, 0.999, 0.999, 0.999, 0.976, 0.976, 0.999, 0.999, 0.999, 0.976, 0.976, 0.999, 0.999, 0.999, 0.978, 0.977, 0.999, 0.999, 0.999, 0.976, 0.976, 0.999, 0.999, 0.999, 0.975, 0.974]
},{
		name: 'VapourSynth TDeintMod',
		data: [0.998, 0.998, 0.998, 0.997, 0.997, 0.998, 0.998, 0.998, 0.997, 0.997, 0.998, 0.998, 0.998, 0.998, 0.997, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.997, 0.998, 0.998, 0.998, 0.998, 0.998]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [0.998, 0.998, 0.997, 0.993, 0.995, 0.998, 0.998, 0.998, 0.994, 0.996, 0.998, 0.998, 0.998, 0.994, 0.996, 0.998, 0.998, 0.998, 0.994, 0.996, 0.998, 0.998, 0.998, 0.994, 0.995, 0.998, 0.998, 0.998, 0.993, 0.995]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [0.998, 0.998, 0.997, 0.996, 0.997, 0.997, 0.998, 0.998, 0.997, 0.997, 0.998, 0.998, 0.998, 0.997, 0.997, 0.998, 0.998, 0.998, 0.997, 0.997, 0.997, 0.998, 0.998, 0.997, 0.997, 0.997, 0.997, 0.997, 0.997, 0.997]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.997]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [0.993, 0.989, 0.989, 0.688, 0.985, 0.99, 0.989, 0.99, 0.989, 0.682, 0.99, 0.991, 0.991, 0.688, 0.99, 0.993, 0.991, 0.991, 0.991, 0.688, 0.992, 0.992, 0.992, 0.723, 0.991, 0.994, 0.992, 0.993, 0.993, 0.794]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [0.997, 0.996, 0.996, 0.996, 0.996, 0.997, 0.997, 0.997, 0.997, 0.997, 0.997, 0.997, 0.997, 0.997, 0.997, 0.997, 0.997, 0.997, 0.996, 0.996, 0.997, 0.997, 0.996, 0.996, 0.996, 0.996, 0.996, 0.996, 0.996, 0.996]
},{
		name: 'Muksun Deinterlacer',
		data: [1.0, 0.999, 0.999, 0.978, 0.977, 0.999, 0.999, 0.999, 0.976, 0.976, 0.999, 0.999, 0.999, 0.976, 0.976, 0.999, 0.999, 0.999, 0.978, 0.977, 0.999, 0.999, 0.999, 0.976, 0.976, 0.999, 0.999, 0.999, 0.975, 0.974]
},{
		name: 'Kernel Deinterlacer',
		data: [0.998, 0.998, 0.998, 0.974, 0.983, 0.998, 0.999, 0.999, 0.971, 0.982, 0.999, 0.998, 0.998, 0.972, 0.982, 0.999, 0.998, 0.998, 0.974, 0.984, 0.999, 0.998, 0.998, 0.972, 0.98, 0.999, 0.998, 0.998, 0.97, 0.98]
},],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }

        });
    });

});