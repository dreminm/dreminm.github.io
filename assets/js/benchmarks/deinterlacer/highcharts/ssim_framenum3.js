$(function () {
    $(document).ready(function() {
            Highcharts.chart('detailed', {

            title: {
                text: 'SSIM to Frame Number: Sequence # 3'
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
		data: [0.998, 0.998, 0.994, 0.996, 0.994, 0.997, 0.996, 0.996, 0.994, 0.988, 0.99, 0.992, 0.995, 0.992, 0.998, 0.998, 0.998, 0.996, 0.994, 0.995, 0.997, 0.997, 0.988, 0.989, 0.99, 0.986, 0.991, 0.986, 0.991, 0.998]
},{
		name: 'PAL Interpolation',
		data: [0.998, 0.952, 0.934, 0.959, 0.957, 0.953, 0.963, 0.97, 0.961, 0.948, 0.947, 0.96, 0.952, 0.94, 0.911, 0.939, 0.921, 0.946, 0.951, 0.911, 0.939, 0.963, 0.927, 0.914, 0.884, 0.891, 0.887, 0.881, 0.883, 0.878]
},{
		name: 'VapourSynth EEDI3',
		data: [0.999, 0.998, 0.994, 0.996, 0.995, 0.997, 0.996, 0.997, 0.994, 0.988, 0.991, 0.993, 0.995, 0.993, 0.998, 0.998, 0.999, 0.996, 0.994, 0.996, 0.997, 0.998, 0.988, 0.989, 0.99, 0.986, 0.992, 0.986, 0.991, 0.999]
},{
		name: 'Bob',
		data: [0.999, 0.998, 0.992, 0.995, 0.993, 0.997, 0.995, 0.996, 0.993, 0.985, 0.989, 0.992, 0.993, 0.989, 0.999, 0.998, 0.999, 0.995, 0.993, 0.995, 0.997, 0.997, 0.984, 0.985, 0.987, 0.981, 0.988, 0.982, 0.989, 0.999]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [0.983, 0.961, 0.968, 0.979, 0.971, 0.978, 0.973, 0.983, 0.984, 0.968, 0.976, 0.864, 0.962, 0.937, 0.951, 0.979, 0.953, 0.981, 0.961, 0.95, 0.967, 0.96, 0.965, 0.954, 0.951, 0.946, 0.952, 0.942, 0.94, 0.936]
},{
		name: 'YADIF',
		data: [0.999, 0.996, 0.981, 0.987, 0.977, 0.99, 0.988, 0.988, 0.982, 0.963, 0.963, 0.974, 0.978, 0.971, 0.998, 0.998, 0.999, 0.981, 0.978, 0.989, 0.994, 0.995, 0.964, 0.963, 0.956, 0.95, 0.964, 0.957, 0.965, 0.93]
},{
		name: 'MSU Deinterlacer',
		data: [0.997, 0.996, 0.987, 0.991, 0.987, 0.994, 0.992, 0.993, 0.989, 0.978, 0.984, 0.986, 0.989, 0.983, 0.997, 0.997, 0.997, 0.987, 0.989, 0.992, 0.995, 0.995, 0.974, 0.975, 0.978, 0.97, 0.98, 0.972, 0.982, 0.997]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [0.975, 0.971, 0.97, 0.981, 0.972, 0.983, 0.977, 0.98, 0.979, 0.955, 0.965, 0.977, 0.974, 0.963, 0.969, 0.973, 0.96, 0.971, 0.963, 0.968, 0.98, 0.978, 0.954, 0.954, 0.954, 0.95, 0.954, 0.948, 0.95, 0.953]
},{
		name: 'VapourSynth TDeintMod',
		data: [0.999, 0.998, 0.995, 0.996, 0.995, 0.997, 0.996, 0.996, 0.994, 0.989, 0.991, 0.993, 0.995, 0.993, 0.998, 0.998, 0.999, 0.997, 0.994, 0.996, 0.997, 0.997, 0.989, 0.99, 0.991, 0.987, 0.992, 0.987, 0.992, 0.999]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [0.999, 0.986, 0.987, 0.985, 0.987, 0.97, 0.981, 0.992, 0.981, 0.981, 0.966, 0.85, 0.953, 0.936, 0.97, 0.993, 0.991, 0.993, 0.985, 0.968, 0.988, 0.988, 0.981, 0.981, 0.978, 0.97, 0.975, 0.972, 0.976, 0.978]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [0.998, 0.997, 0.99, 0.99, 0.973, 0.965, 0.986, 0.984, 0.984, 0.972, 0.948, 0.966, 0.971, 0.974, 0.984, 0.997, 0.997, 0.995, 0.971, 0.967, 0.989, 0.993, 0.984, 0.982, 0.973, 0.971, 0.969, 0.97, 0.971, 0.972]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [0.997, 0.997, 0.989, 0.994, 0.986, 0.993, 0.993, 0.992, 0.989, 0.983, 0.965, 0.976, 0.983, 0.987, 0.998, 0.998, 0.998, 0.993, 0.986, 0.993, 0.996, 0.996, 0.985, 0.981, 0.973, 0.974, 0.978, 0.979, 0.979, 0.998]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [0.877, 0.865, 0.972, 0.688, 0.978, 0.736, 0.986, 0.507, 0.98, 0.363, 0.968, 0.304, 0.979, 0.417, 0.995, 0.816, 0.997, 0.502, 0.981, 0.765, 0.992, 0.873, 0.954, 0.466, 0.963, 0.454, 0.967, 0.469, 0.967, 0.711]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [0.995, 0.995, 0.993, 0.994, 0.992, 0.994, 0.994, 0.994, 0.991, 0.982, 0.983, 0.981, 0.992, 0.99, 0.995, 0.995, 0.996, 0.995, 0.991, 0.993, 0.994, 0.995, 0.988, 0.988, 0.989, 0.985, 0.989, 0.985, 0.989, 0.994]
},{
		name: 'Muksun Deinterlacer',
		data: [0.975, 0.971, 0.97, 0.981, 0.972, 0.983, 0.977, 0.98, 0.979, 0.955, 0.965, 0.977, 0.974, 0.963, 0.969, 0.973, 0.96, 0.971, 0.963, 0.968, 0.98, 0.978, 0.954, 0.954, 0.954, 0.95, 0.954, 0.948, 0.95, 0.953]
},{
		name: 'Kernel Deinterlacer',
		data: [0.999, 0.958, 0.978, 0.972, 0.977, 0.95, 0.966, 0.983, 0.964, 0.978, 0.955, 0.779, 0.931, 0.906, 0.93, 0.975, 0.955, 0.987, 0.971, 0.947, 0.976, 0.972, 0.973, 0.963, 0.953, 0.942, 0.939, 0.946, 0.949, 0.924]
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