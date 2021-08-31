$(function () {
    $(document).ready(function() {
            Highcharts.chart('detailed', {

            title: {
                text: 'SSIM to Frame Number: Sequence # 23'
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
		data: [0.998, 0.993, 0.98, 0.972, 0.96, 0.947, 0.939, 0.91, 0.892, 0.891, 0.899, 0.933, 0.886, 0.916, 0.915, 0.88, 0.907, 0.866, 0.914, 0.915, 0.88, 0.88, 0.881, 0.871, 0.9, 0.92, 0.922, 0.921, 0.905, 0.909]
},{
		name: 'PAL Interpolation',
		data: [0.655, 0.988, 0.981, 0.974, 0.969, 0.961, 0.948, 0.928, 0.913, 0.914, 0.871, 0.911, 0.873, 0.905, 0.897, 0.865, 0.892, 0.874, 0.873, 0.897, 0.866, 0.874, 0.876, 0.868, 0.882, 0.901, 0.901, 0.913, 0.895, 0.896]
},{
		name: 'VapourSynth EEDI3',
		data: [0.998, 0.995, 0.981, 0.975, 0.963, 0.95, 0.943, 0.915, 0.898, 0.896, 0.903, 0.936, 0.891, 0.92, 0.919, 0.884, 0.911, 0.871, 0.917, 0.918, 0.885, 0.886, 0.886, 0.876, 0.904, 0.923, 0.924, 0.924, 0.909, 0.913]
},{
		name: 'Bob',
		data: [0.998, 0.995, 0.983, 0.977, 0.966, 0.954, 0.947, 0.921, 0.905, 0.903, 0.909, 0.94, 0.899, 0.925, 0.924, 0.891, 0.916, 0.879, 0.923, 0.924, 0.893, 0.894, 0.894, 0.885, 0.909, 0.928, 0.928, 0.928, 0.914, 0.917]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [0.859, 0.977, 0.95, 0.937, 0.925, 0.937, 0.937, 0.876, 0.882, 0.881, 0.885, 0.905, 0.905, 0.911, 0.891, 0.886, 0.903, 0.87, 0.909, 0.892, 0.875, 0.881, 0.876, 0.868, 0.892, 0.897, 0.915, 0.918, 0.909, 0.921]
},{
		name: 'YADIF',
		data: [0.998, 0.995, 0.982, 0.977, 0.966, 0.955, 0.948, 0.923, 0.908, 0.906, 0.912, 0.945, 0.908, 0.932, 0.931, 0.901, 0.925, 0.891, 0.929, 0.93, 0.899, 0.9, 0.9, 0.891, 0.913, 0.931, 0.932, 0.932, 0.919, 0.925]
},{
		name: 'MSU Deinterlacer',
		data: [0.997, 0.994, 0.98, 0.974, 0.962, 0.949, 0.943, 0.917, 0.905, 0.904, 0.914, 0.946, 0.917, 0.936, 0.936, 0.912, 0.931, 0.904, 0.935, 0.934, 0.906, 0.906, 0.904, 0.895, 0.915, 0.932, 0.934, 0.934, 0.925, 0.915]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [0.861, 0.935, 0.936, 0.922, 0.907, 0.933, 0.941, 0.882, 0.86, 0.885, 0.895, 0.912, 0.909, 0.917, 0.902, 0.893, 0.908, 0.876, 0.915, 0.9, 0.884, 0.889, 0.885, 0.878, 0.899, 0.908, 0.919, 0.921, 0.913, 0.921]
},{
		name: 'VapourSynth TDeintMod',
		data: [0.997, 0.995, 0.981, 0.974, 0.961, 0.947, 0.94, 0.911, 0.893, 0.891, 0.898, 0.933, 0.888, 0.917, 0.917, 0.882, 0.908, 0.868, 0.915, 0.916, 0.881, 0.881, 0.881, 0.871, 0.899, 0.919, 0.92, 0.92, 0.904, 0.908]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [0.999, 0.995, 0.983, 0.974, 0.963, 0.951, 0.943, 0.918, 0.903, 0.901, 0.905, 0.933, 0.896, 0.921, 0.916, 0.888, 0.915, 0.879, 0.917, 0.915, 0.887, 0.889, 0.889, 0.881, 0.905, 0.922, 0.924, 0.925, 0.912, 0.918]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [0.998, 0.994, 0.981, 0.974, 0.963, 0.949, 0.941, 0.915, 0.897, 0.894, 0.898, 0.925, 0.885, 0.913, 0.912, 0.883, 0.909, 0.871, 0.909, 0.908, 0.876, 0.878, 0.88, 0.871, 0.896, 0.915, 0.918, 0.92, 0.908, 0.914]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [0.998, 0.994, 0.98, 0.972, 0.959, 0.945, 0.937, 0.908, 0.89, 0.887, 0.898, 0.934, 0.894, 0.919, 0.918, 0.887, 0.912, 0.874, 0.916, 0.916, 0.883, 0.883, 0.883, 0.873, 0.901, 0.921, 0.922, 0.922, 0.91, 0.904]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [0.651, 0.894, 0.98, 0.926, 0.96, 0.853, 0.942, 0.838, 0.905, 0.748, 0.908, 0.795, 0.902, 0.817, 0.924, 0.771, 0.921, 0.756, 0.92, 0.774, 0.895, 0.728, 0.898, 0.701, 0.908, 0.755, 0.926, 0.771, 0.913, 0.823]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [0.994, 0.993, 0.981, 0.974, 0.963, 0.95, 0.943, 0.916, 0.9, 0.899, 0.906, 0.937, 0.895, 0.921, 0.921, 0.889, 0.914, 0.877, 0.92, 0.92, 0.888, 0.889, 0.889, 0.88, 0.906, 0.924, 0.926, 0.925, 0.911, 0.915]
},{
		name: 'Muksun Deinterlacer',
		data: [0.861, 0.935, 0.936, 0.922, 0.907, 0.933, 0.941, 0.882, 0.86, 0.885, 0.895, 0.912, 0.909, 0.917, 0.902, 0.893, 0.908, 0.876, 0.915, 0.9, 0.884, 0.889, 0.885, 0.878, 0.899, 0.908, 0.919, 0.921, 0.913, 0.921]
},{
		name: 'Kernel Deinterlacer',
		data: [0.999, 0.994, 0.985, 0.97, 0.946, 0.938, 0.94, 0.916, 0.902, 0.899, 0.903, 0.918, 0.905, 0.914, 0.898, 0.887, 0.91, 0.875, 0.911, 0.896, 0.881, 0.884, 0.882, 0.875, 0.897, 0.909, 0.919, 0.923, 0.912, 0.921]
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