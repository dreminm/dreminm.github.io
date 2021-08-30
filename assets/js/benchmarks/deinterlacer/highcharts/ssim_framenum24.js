$(function () {
    $(document).ready(function() {
            Highcharts.chart('detailed', {

            title: {
                text: 'SSIM to Frame Number: Sequence # 24'
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
		data: [0.954, 0.949, 0.951, 0.953, 0.952, 0.95, 0.95, 0.95, 0.951, 0.948, 0.951, 0.951, 0.952, 0.953, 0.955, 0.957, 0.958, 0.958, 0.957, 0.958, 0.957, 0.956, 0.957, 0.959, 0.959, 0.96, 0.961, 0.958, 0.954, 0.953]
},{
		name: 'PAL Interpolation',
		data: [0.905, 0.859, 0.865, 0.863, 0.861, 0.865, 0.877, 0.876, 0.877, 0.871, 0.876, 0.877, 0.879, 0.883, 0.878, 0.892, 0.896, 0.898, 0.898, 0.899, 0.897, 0.895, 0.897, 0.899, 0.899, 0.9, 0.899, 0.9, 0.895, 0.896]
},{
		name: 'VapourSynth EEDI3',
		data: [0.959, 0.955, 0.957, 0.958, 0.957, 0.956, 0.956, 0.955, 0.956, 0.954, 0.956, 0.956, 0.957, 0.959, 0.96, 0.961, 0.962, 0.961, 0.961, 0.961, 0.96, 0.959, 0.96, 0.962, 0.962, 0.962, 0.962, 0.96, 0.957, 0.956]
},{
		name: 'Bob',
		data: [0.937, 0.933, 0.935, 0.937, 0.936, 0.935, 0.935, 0.935, 0.936, 0.934, 0.936, 0.936, 0.937, 0.939, 0.941, 0.943, 0.945, 0.945, 0.945, 0.945, 0.944, 0.943, 0.944, 0.946, 0.947, 0.947, 0.95, 0.946, 0.942, 0.941]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [0.902, 0.906, 0.914, 0.912, 0.911, 0.92, 0.927, 0.919, 0.915, 0.911, 0.913, 0.913, 0.913, 0.913, 0.916, 0.918, 0.92, 0.92, 0.921, 0.921, 0.919, 0.918, 0.918, 0.921, 0.922, 0.924, 0.924, 0.922, 0.918, 0.916]
},{
		name: 'YADIF',
		data: [0.931, 0.932, 0.937, 0.937, 0.936, 0.943, 0.944, 0.94, 0.939, 0.936, 0.938, 0.937, 0.937, 0.938, 0.94, 0.941, 0.943, 0.944, 0.943, 0.943, 0.942, 0.941, 0.942, 0.945, 0.945, 0.945, 0.947, 0.944, 0.941, 0.924]
},{
		name: 'MSU Deinterlacer',
		data: [0.949, 0.959, 0.965, 0.968, 0.967, 0.973, 0.975, 0.974, 0.973, 0.973, 0.973, 0.971, 0.97, 0.972, 0.971, 0.971, 0.973, 0.971, 0.97, 0.969, 0.968, 0.967, 0.966, 0.968, 0.971, 0.971, 0.971, 0.968, 0.965, 0.954]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [0.913, 0.909, 0.913, 0.914, 0.913, 0.914, 0.914, 0.913, 0.917, 0.914, 0.916, 0.919, 0.92, 0.922, 0.928, 0.93, 0.932, 0.933, 0.932, 0.933, 0.931, 0.93, 0.931, 0.933, 0.934, 0.934, 0.936, 0.933, 0.93, 0.928]
},{
		name: 'VapourSynth TDeintMod',
		data: [0.937, 0.931, 0.934, 0.936, 0.936, 0.934, 0.935, 0.934, 0.936, 0.933, 0.936, 0.936, 0.937, 0.939, 0.942, 0.944, 0.947, 0.947, 0.946, 0.947, 0.946, 0.945, 0.946, 0.949, 0.951, 0.95, 0.953, 0.949, 0.945, 0.943]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [0.937, 0.925, 0.931, 0.932, 0.93, 0.931, 0.936, 0.935, 0.934, 0.929, 0.932, 0.932, 0.932, 0.933, 0.934, 0.936, 0.938, 0.938, 0.938, 0.939, 0.937, 0.936, 0.938, 0.94, 0.94, 0.942, 0.941, 0.94, 0.936, 0.934]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [0.901, 0.924, 0.933, 0.929, 0.928, 0.935, 0.942, 0.935, 0.929, 0.927, 0.93, 0.926, 0.924, 0.923, 0.922, 0.923, 0.924, 0.923, 0.925, 0.926, 0.923, 0.923, 0.924, 0.927, 0.928, 0.928, 0.927, 0.928, 0.924, 0.922]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [0.93, 0.941, 0.947, 0.946, 0.946, 0.954, 0.958, 0.949, 0.944, 0.943, 0.944, 0.94, 0.939, 0.939, 0.94, 0.941, 0.943, 0.942, 0.942, 0.943, 0.941, 0.94, 0.941, 0.944, 0.945, 0.946, 0.948, 0.946, 0.942, 0.938]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [0.668, 0.673, 0.838, 0.679, 0.877, 0.707, 0.907, 0.705, 0.884, 0.651, 0.884, 0.615, 0.862, 0.605, 0.843, 0.578, 0.832, 0.565, 0.825, 0.58, 0.812, 0.593, 0.802, 0.601, 0.801, 0.603, 0.798, 0.595, 0.801, 0.598]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [0.95, 0.947, 0.949, 0.95, 0.949, 0.949, 0.95, 0.948, 0.948, 0.946, 0.948, 0.947, 0.947, 0.948, 0.95, 0.952, 0.953, 0.953, 0.952, 0.953, 0.951, 0.95, 0.951, 0.953, 0.953, 0.955, 0.955, 0.953, 0.949, 0.948]
},{
		name: 'Muksun Deinterlacer',
		data: [0.913, 0.909, 0.913, 0.914, 0.913, 0.914, 0.914, 0.913, 0.917, 0.914, 0.916, 0.919, 0.92, 0.922, 0.928, 0.93, 0.932, 0.933, 0.932, 0.933, 0.931, 0.93, 0.931, 0.933, 0.934, 0.934, 0.936, 0.933, 0.93, 0.928]
},{
		name: 'Kernel Deinterlacer',
		data: [0.937, 0.919, 0.925, 0.925, 0.924, 0.926, 0.932, 0.929, 0.928, 0.923, 0.924, 0.925, 0.925, 0.926, 0.926, 0.927, 0.929, 0.929, 0.93, 0.93, 0.929, 0.928, 0.93, 0.932, 0.932, 0.933, 0.931, 0.931, 0.927, 0.926]
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