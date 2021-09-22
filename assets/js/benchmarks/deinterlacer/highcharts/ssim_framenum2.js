$(function () {
    $(document).ready(function() {
            Highcharts.chart('detailed', {

            title: {
                text: 'SSIM to Frame Number: Sequence # 2'
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
		data: [0.988, 0.989, 0.988, 0.989, 0.987, 0.987, 0.988, 0.987, 0.987, 0.988, 0.987, 0.989, 0.988, 0.987, 0.988, 0.987, 0.993, 0.993, 0.993, 0.993, 0.993, 0.994, 0.994, 0.994, 0.994, 0.994, 0.994, 0.993, 0.994, 0.994]
},{
		name: 'DfRes 119000',
		data: [0.987, 0.987, 0.987, 0.987, 0.986, 0.985, 0.987, 0.986, 0.985, 0.986, 0.986, 0.987, 0.987, 0.986, 0.987, 0.986, 0.999, 0.993, 0.993, 0.992, 0.992, 0.999, 0.993, 0.993, 0.993, 0.993, 0.993, 0.999, 0.994, 0.982]
},{
		name: 'PAL Interpolation',
		data: [0.976, 0.913, 0.911, 0.91, 0.908, 0.907, 0.91, 0.91, 0.902, 0.905, 0.902, 0.906, 0.909, 0.906, 0.903, 0.897, 0.975, 0.88, 0.882, 0.88, 0.881, 0.884, 0.887, 0.886, 0.89, 0.89, 0.88, 0.886, 0.89, 0.891]
},{
		name: 'Vapoursynth EEDI3',
		data: [0.989, 0.989, 0.989, 0.989, 0.988, 0.987, 0.989, 0.988, 0.987, 0.989, 0.988, 0.989, 0.989, 0.988, 0.989, 0.988, 0.993, 0.994, 0.994, 0.993, 0.993, 0.994, 0.994, 0.994, 0.994, 0.994, 0.994, 0.994, 0.995, 0.994]
},{
		name: 'Bob',
		data: [0.988, 0.988, 0.987, 0.988, 0.986, 0.986, 0.987, 0.986, 0.986, 0.987, 0.987, 0.988, 0.987, 0.987, 0.987, 0.986, 0.991, 0.992, 0.992, 0.991, 0.991, 0.992, 0.992, 0.992, 0.993, 0.992, 0.992, 0.992, 0.993, 0.993]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [0.943, 0.922, 0.921, 0.923, 0.921, 0.922, 0.925, 0.921, 0.917, 0.919, 0.917, 0.924, 0.924, 0.922, 0.917, 0.915, 1.0, 0.893, 0.897, 0.899, 0.895, 0.906, 0.903, 0.908, 0.91, 0.908, 0.902, 1.0, 0.89, 0.898]
},{
		name: 'DfRes 122000 G2e 3',
		data: [0.987, 0.988, 0.987, 0.987, 0.986, 0.985, 0.987, 0.986, 0.985, 0.987, 0.986, 0.987, 0.987, 0.986, 0.987, 0.986, 0.999, 0.993, 0.993, 0.992, 0.992, 0.999, 0.994, 0.993, 0.994, 0.993, 0.994, 0.999, 0.994, 0.979]
},{
		name: 'YADIF',
		data: [0.977, 0.978, 0.977, 0.978, 0.976, 0.976, 0.977, 0.976, 0.976, 0.977, 0.977, 0.978, 0.977, 0.977, 0.978, 0.977, 0.983, 0.984, 0.983, 0.983, 0.983, 0.986, 0.985, 0.984, 0.985, 0.984, 0.985, 0.986, 0.985, 0.981]
},{
		name: 'MSU Deinterlacer',
		data: [0.981, 0.978, 0.978, 0.977, 0.977, 0.976, 0.978, 0.976, 0.977, 0.978, 0.979, 0.98, 0.978, 0.977, 0.978, 0.979, 0.988, 0.982, 0.982, 0.982, 0.982, 0.992, 0.983, 0.983, 0.985, 0.984, 0.984, 0.99, 0.982, 0.987]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [0.936, 0.935, 0.934, 0.933, 0.935, 0.934, 0.936, 0.932, 0.931, 0.932, 0.932, 0.936, 0.933, 0.932, 0.93, 0.93, 1.0, 0.926, 0.925, 0.924, 0.925, 0.929, 0.93, 0.929, 0.93, 0.93, 0.926, 1.0, 0.925, 0.927]
},{
		name: 'Vapoursynth TDeintMod',
		data: [0.988, 0.988, 0.987, 0.987, 0.985, 0.985, 0.986, 0.985, 0.985, 0.986, 0.986, 0.987, 0.987, 0.986, 0.987, 0.986, 0.993, 0.994, 0.994, 0.993, 0.993, 0.994, 0.994, 0.994, 0.994, 0.994, 0.994, 0.994, 0.995, 0.995]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [0.987, 0.977, 0.977, 0.978, 0.977, 0.978, 0.978, 0.977, 0.977, 0.978, 0.977, 0.979, 0.979, 0.978, 0.978, 0.977, 0.989, 0.984, 0.982, 0.981, 0.981, 0.982, 0.988, 0.982, 0.982, 0.982, 0.982, 0.993, 0.983, 0.98]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [0.98, 0.984, 0.984, 0.984, 0.983, 0.982, 0.983, 0.982, 0.982, 0.983, 0.983, 0.984, 0.984, 0.983, 0.983, 0.982, 0.994, 0.989, 0.99, 0.989, 0.989, 0.99, 0.99, 0.99, 0.99, 0.99, 0.99, 0.995, 0.99, 0.99]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [0.984, 0.986, 0.986, 0.986, 0.985, 0.984, 0.986, 0.985, 0.984, 0.986, 0.985, 0.987, 0.986, 0.985, 0.986, 0.986, 0.994, 0.991, 0.991, 0.991, 0.991, 0.994, 0.993, 0.992, 0.992, 0.992, 0.992, 0.995, 0.992, 0.994]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [0.769, 0.752, 0.957, 0.756, 0.961, 0.733, 0.964, 0.743, 0.962, 0.742, 0.962, 0.736, 0.965, 0.749, 0.965, 0.76, 0.974, 0.762, 0.974, 0.769, 0.971, 0.756, 0.973, 0.761, 0.975, 0.751, 0.974, 0.975, 0.976, 0.768]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [0.987, 0.988, 0.987, 0.987, 0.986, 0.986, 0.987, 0.986, 0.986, 0.987, 0.986, 0.988, 0.987, 0.986, 0.987, 0.986, 0.992, 0.992, 0.992, 0.992, 0.991, 0.992, 0.993, 0.992, 0.993, 0.993, 0.993, 0.993, 0.993, 0.993]
},{
		name: 'Muksun Deinterlacer',
		data: [0.936, 0.935, 0.934, 0.933, 0.935, 0.934, 0.936, 0.932, 0.931, 0.932, 0.932, 0.936, 0.933, 0.932, 0.93, 0.93, 1.0, 0.926, 0.925, 0.924, 0.925, 0.929, 0.93, 0.929, 0.93, 0.93, 0.926, 1.0, 0.925, 0.927]
},{
		name: 'DfRes 121000 G2e 3',
		data: [0.987, 0.988, 0.987, 0.987, 0.986, 0.986, 0.987, 0.986, 0.986, 0.987, 0.986, 0.988, 0.987, 0.986, 0.987, 0.986, 0.999, 0.993, 0.993, 0.993, 0.992, 0.999, 0.994, 0.993, 0.994, 0.994, 0.994, 0.999, 0.994, 0.98]
},{
		name: 'DfRes 61000',
		data: [0.986, 0.987, 0.986, 0.987, 0.985, 0.985, 0.986, 0.985, 0.984, 0.986, 0.985, 0.987, 0.986, 0.985, 0.986, 0.985, 0.998, 0.993, 0.993, 0.992, 0.992, 0.999, 0.993, 0.993, 0.993, 0.993, 0.993, 0.999, 0.994, 0.982]
},{
		name: 'Kernel Deinterlacer',
		data: [0.987, 0.946, 0.944, 0.949, 0.945, 0.948, 0.947, 0.948, 0.944, 0.947, 0.943, 0.948, 0.952, 0.949, 0.947, 0.944, 0.99, 0.928, 0.933, 0.932, 0.929, 0.937, 0.942, 0.939, 0.938, 0.935, 0.934, 0.998, 0.922, 0.928]
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