$(function () {
    $(document).ready(function() {
            Highcharts.chart('detailed', {

            title: {
                text: 'SSIM to Frame Number: Sequence # 17'
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
		data: [0.989, 0.982, 0.984, 0.98, 0.989, 0.982, 0.984, 0.981, 0.978, 0.987, 0.989, 0.975, 0.985, 0.984, 0.986, 0.989, 0.983, 0.982, 0.971, 0.984, 0.988, 0.976, 0.974, 0.988, 0.978, 0.979, 0.985, 0.989, 0.986, 0.99]
},{
		name: 'PAL Interpolation',
		data: [0.979, 0.918, 0.928, 0.931, 0.926, 0.926, 0.928, 0.923, 0.931, 0.937, 0.927, 0.921, 0.936, 0.93, 0.932, 0.931, 0.93, 0.931, 0.924, 0.934, 0.932, 0.924, 0.929, 0.933, 0.924, 0.938, 0.934, 0.936, 0.933, 0.933]
},{
		name: 'VapourSynth EEDI3',
		data: [0.989, 0.983, 0.984, 0.981, 0.989, 0.982, 0.985, 0.981, 0.978, 0.987, 0.989, 0.976, 0.985, 0.985, 0.987, 0.989, 0.983, 0.982, 0.972, 0.984, 0.989, 0.976, 0.975, 0.988, 0.978, 0.979, 0.985, 0.989, 0.986, 0.991]
},{
		name: 'Bob',
		data: [0.988, 0.982, 0.983, 0.981, 0.988, 0.982, 0.984, 0.981, 0.978, 0.986, 0.987, 0.976, 0.985, 0.984, 0.986, 0.988, 0.983, 0.982, 0.972, 0.984, 0.987, 0.977, 0.975, 0.987, 0.978, 0.979, 0.985, 0.989, 0.985, 0.99]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [0.957, 0.955, 0.953, 0.947, 0.955, 0.952, 0.949, 0.953, 0.952, 0.952, 0.951, 0.953, 0.956, 0.953, 0.954, 0.955, 0.954, 0.953, 0.945, 0.952, 0.954, 0.953, 0.95, 0.954, 0.956, 0.956, 0.956, 0.962, 0.954, 0.963]
},{
		name: 'YADIF',
		data: [0.984, 0.978, 0.978, 0.977, 0.985, 0.979, 0.981, 0.977, 0.972, 0.981, 0.983, 0.97, 0.982, 0.98, 0.982, 0.985, 0.979, 0.977, 0.966, 0.98, 0.985, 0.972, 0.972, 0.985, 0.975, 0.975, 0.981, 0.986, 0.982, 0.986]
},{
		name: 'MSU Deinterlacer',
		data: [0.982, 0.979, 0.979, 0.977, 0.984, 0.978, 0.98, 0.978, 0.973, 0.98, 0.983, 0.973, 0.981, 0.98, 0.982, 0.985, 0.98, 0.979, 0.969, 0.979, 0.984, 0.974, 0.972, 0.984, 0.977, 0.976, 0.982, 0.986, 0.982, 0.984]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [0.955, 0.958, 0.957, 0.953, 0.959, 0.957, 0.956, 0.958, 0.955, 0.958, 0.958, 0.955, 0.96, 0.958, 0.958, 0.96, 0.958, 0.958, 0.949, 0.957, 0.959, 0.956, 0.953, 0.959, 0.957, 0.958, 0.96, 0.965, 0.957, 0.964]
},{
		name: 'VapourSynth TDeintMod',
		data: [0.988, 0.981, 0.982, 0.98, 0.986, 0.98, 0.982, 0.979, 0.975, 0.983, 0.985, 0.974, 0.983, 0.982, 0.984, 0.986, 0.981, 0.979, 0.97, 0.982, 0.986, 0.975, 0.974, 0.986, 0.976, 0.977, 0.983, 0.988, 0.984, 0.989]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [0.988, 0.976, 0.977, 0.974, 0.979, 0.975, 0.975, 0.975, 0.971, 0.978, 0.979, 0.971, 0.978, 0.977, 0.978, 0.98, 0.976, 0.975, 0.967, 0.977, 0.979, 0.972, 0.97, 0.979, 0.973, 0.974, 0.978, 0.983, 0.979, 0.983]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [0.976, 0.979, 0.981, 0.977, 0.985, 0.979, 0.981, 0.978, 0.977, 0.984, 0.984, 0.974, 0.982, 0.981, 0.983, 0.985, 0.98, 0.979, 0.97, 0.98, 0.984, 0.974, 0.973, 0.984, 0.976, 0.978, 0.981, 0.986, 0.982, 0.987]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [0.987, 0.983, 0.984, 0.98, 0.989, 0.981, 0.984, 0.982, 0.979, 0.987, 0.989, 0.975, 0.985, 0.984, 0.986, 0.989, 0.983, 0.982, 0.971, 0.983, 0.988, 0.976, 0.974, 0.988, 0.979, 0.98, 0.984, 0.989, 0.985, 0.99]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [0.874, 0.835, 0.92, 0.834, 0.942, 0.881, 0.97, 0.892, 0.966, 0.877, 0.972, 0.854, 0.97, 0.84, 0.967, 0.81, 0.958, 0.802, 0.943, 0.812, 0.96, 0.838, 0.951, 0.839, 0.962, 0.877, 0.97, 0.835, 0.967, 0.865]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [0.989, 0.983, 0.984, 0.981, 0.989, 0.982, 0.984, 0.981, 0.978, 0.986, 0.988, 0.975, 0.985, 0.984, 0.986, 0.989, 0.983, 0.982, 0.972, 0.984, 0.988, 0.976, 0.975, 0.988, 0.978, 0.979, 0.985, 0.989, 0.986, 0.99]
},{
		name: 'Muksun Deinterlacer',
		data: [0.955, 0.958, 0.957, 0.953, 0.959, 0.957, 0.956, 0.958, 0.955, 0.958, 0.958, 0.955, 0.96, 0.958, 0.958, 0.96, 0.958, 0.958, 0.949, 0.957, 0.959, 0.956, 0.953, 0.959, 0.957, 0.958, 0.96, 0.965, 0.957, 0.964]
},{
		name: 'Kernel Deinterlacer',
		data: [0.988, 0.963, 0.964, 0.957, 0.964, 0.961, 0.959, 0.963, 0.958, 0.96, 0.962, 0.962, 0.966, 0.963, 0.964, 0.964, 0.963, 0.963, 0.955, 0.962, 0.964, 0.962, 0.959, 0.963, 0.963, 0.963, 0.964, 0.971, 0.965, 0.971]
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