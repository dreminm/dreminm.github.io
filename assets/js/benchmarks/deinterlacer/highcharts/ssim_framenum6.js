$(function () {
    $(document).ready(function() {
            Highcharts.chart('detailed', {

            title: {
                text: 'SSIM to Frame Number: Sequence # 6'
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
		data: [0.955, 0.952, 0.951, 0.95, 0.95, 0.953, 0.954, 0.953, 0.958, 0.954, 0.952, 0.953, 0.952, 0.952, 0.953, 0.953, 0.952, 0.952, 0.953, 0.955, 0.961, 0.962, 0.96, 0.96, 0.957, 0.959, 0.959, 0.956, 0.955, 0.957]
},{
		name: 'PAL Interpolation',
		data: [0.942, 0.911, 0.933, 0.932, 0.921, 0.915, 0.911, 0.918, 0.917, 0.911, 0.916, 0.926, 0.922, 0.922, 0.928, 0.929, 0.932, 0.924, 0.931, 0.927, 0.932, 0.948, 0.941, 0.938, 0.909, 0.905, 0.906, 0.904, 0.906, 0.91]
},{
		name: 'VapourSynth EEDI3',
		data: [0.948, 0.945, 0.944, 0.943, 0.942, 0.945, 0.946, 0.945, 0.949, 0.946, 0.944, 0.945, 0.943, 0.943, 0.945, 0.945, 0.945, 0.945, 0.946, 0.948, 0.953, 0.955, 0.953, 0.952, 0.95, 0.951, 0.951, 0.948, 0.947, 0.949]
},{
		name: 'Bob',
		data: [0.941, 0.938, 0.937, 0.935, 0.934, 0.938, 0.938, 0.938, 0.942, 0.939, 0.937, 0.938, 0.936, 0.936, 0.938, 0.938, 0.938, 0.939, 0.939, 0.941, 0.947, 0.948, 0.946, 0.945, 0.943, 0.944, 0.944, 0.942, 0.94, 0.942]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [0.935, 0.951, 0.958, 0.958, 0.948, 0.945, 0.942, 0.946, 0.942, 0.944, 0.945, 0.953, 0.943, 0.95, 0.951, 0.955, 0.955, 0.949, 0.956, 0.948, 0.959, 0.963, 0.959, 0.955, 0.935, 0.934, 0.935, 0.932, 0.935, 0.943]
},{
		name: 'YADIF',
		data: [0.963, 0.972, 0.973, 0.968, 0.96, 0.962, 0.962, 0.966, 0.965, 0.968, 0.971, 0.974, 0.968, 0.972, 0.972, 0.975, 0.969, 0.971, 0.971, 0.967, 0.979, 0.98, 0.979, 0.958, 0.95, 0.95, 0.949, 0.95, 0.948, 0.955]
},{
		name: 'MSU Deinterlacer',
		data: [0.976, 0.982, 0.985, 0.984, 0.981, 0.982, 0.982, 0.984, 0.985, 0.983, 0.983, 0.985, 0.981, 0.984, 0.984, 0.985, 0.983, 0.983, 0.984, 0.979, 0.985, 0.985, 0.985, 0.981, 0.972, 0.973, 0.975, 0.971, 0.971, 0.967]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [0.927, 0.927, 0.927, 0.924, 0.923, 0.924, 0.924, 0.924, 0.927, 0.924, 0.923, 0.924, 0.919, 0.926, 0.926, 0.928, 0.927, 0.927, 0.929, 0.93, 0.936, 0.936, 0.934, 0.932, 0.926, 0.926, 0.927, 0.923, 0.926, 0.931]
},{
		name: 'VapourSynth TDeintMod',
		data: [0.949, 0.948, 0.949, 0.948, 0.947, 0.95, 0.95, 0.949, 0.954, 0.951, 0.95, 0.952, 0.95, 0.95, 0.951, 0.951, 0.951, 0.95, 0.953, 0.956, 0.963, 0.964, 0.961, 0.958, 0.951, 0.951, 0.951, 0.947, 0.946, 0.949]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [0.941, 0.943, 0.952, 0.953, 0.946, 0.943, 0.942, 0.945, 0.946, 0.94, 0.943, 0.951, 0.945, 0.945, 0.949, 0.951, 0.951, 0.946, 0.951, 0.948, 0.956, 0.961, 0.957, 0.954, 0.936, 0.932, 0.933, 0.93, 0.931, 0.935]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [0.949, 0.966, 0.976, 0.974, 0.966, 0.961, 0.957, 0.967, 0.958, 0.957, 0.964, 0.971, 0.965, 0.967, 0.969, 0.973, 0.973, 0.967, 0.972, 0.963, 0.975, 0.977, 0.974, 0.972, 0.943, 0.937, 0.943, 0.939, 0.937, 0.946]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [0.973, 0.98, 0.982, 0.979, 0.974, 0.976, 0.976, 0.978, 0.977, 0.978, 0.98, 0.982, 0.978, 0.981, 0.981, 0.983, 0.979, 0.981, 0.98, 0.977, 0.985, 0.984, 0.984, 0.972, 0.966, 0.966, 0.964, 0.965, 0.96, 0.949]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [0.874, 0.883, 0.941, 0.889, 0.947, 0.865, 0.944, 0.878, 0.941, 0.884, 0.95, 0.895, 0.951, 0.894, 0.956, 0.887, 0.961, 0.875, 0.963, 0.865, 0.964, 0.892, 0.964, 0.894, 0.945, 0.819, 0.938, 0.829, 0.933, 0.871]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [0.955, 0.967, 0.967, 0.965, 0.963, 0.966, 0.961, 0.968, 0.963, 0.964, 0.965, 0.967, 0.963, 0.967, 0.966, 0.969, 0.968, 0.966, 0.967, 0.962, 0.973, 0.971, 0.971, 0.968, 0.962, 0.96, 0.962, 0.959, 0.958, 0.962]
},{
		name: 'Muksun Deinterlacer',
		data: [0.927, 0.927, 0.927, 0.924, 0.923, 0.924, 0.924, 0.924, 0.927, 0.924, 0.923, 0.924, 0.919, 0.926, 0.926, 0.928, 0.927, 0.927, 0.929, 0.93, 0.936, 0.936, 0.934, 0.932, 0.926, 0.926, 0.927, 0.923, 0.926, 0.931]
},{
		name: 'Kernel Deinterlacer',
		data: [0.941, 0.943, 0.957, 0.958, 0.946, 0.94, 0.938, 0.945, 0.942, 0.936, 0.941, 0.955, 0.943, 0.947, 0.951, 0.954, 0.955, 0.944, 0.953, 0.945, 0.958, 0.962, 0.959, 0.955, 0.929, 0.924, 0.925, 0.922, 0.925, 0.932]
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