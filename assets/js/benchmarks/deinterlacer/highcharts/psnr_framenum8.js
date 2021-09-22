$(function () {
    $(document).ready(function() {
            Highcharts.chart('detailed', {

            title: {
                text: 'PSNR to Frame Number: Sequence # 8'
            },

            subtitle: {
                text: ''
            },

            yAxis: {
                title: {
                    text: 'PSNR'
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
		data: [43.561, 43.024, 42.852, 42.601, 42.435, 43.611, 42.665, 42.181, 42.304, 42.834, 42.001, 42.617, 42.591, 43.252, 42.984, 41.34, 41.395, 41.984, 45.091, 44.486, 43.723, 43.385, 44.114, 45.044, 44.013, 44.083, 43.894, 43.778, 44.259, 44.206]
},{
		name: 'DfRes 119000',
		data: [41.917, 38.482, 38.181, 37.601, 41.724, 42.983, 40.569, 37.56, 36.052, 38.39, 37.449, 37.062, 38.825, 37.649, 41.04, 39.277, 37.128, 39.445, 40.271, 42.278, 39.56, 36.92, 39.189, 40.215, 40.745, 39.279, 36.754, 37.247, 35.21, 40.88]
},{
		name: 'PAL Interpolation',
		data: [39.183, 36.785, 38.369, 38.061, 37.205, 37.54, 36.38, 36.712, 37.286, 37.158, 36.476, 36.387, 36.932, 38.154, 38.131, 36.571, 36.425, 36.631, 38.396, 38.135, 37.493, 37.428, 38.764, 38.88, 37.801, 37.696, 37.549, 38.067, 39.027, 38.537]
},{
		name: 'Vapoursynth EEDI3',
		data: [43.835, 43.298, 43.132, 42.878, 42.661, 43.918, 42.877, 42.432, 42.571, 43.101, 42.229, 42.837, 42.86, 43.569, 43.27, 41.582, 41.73, 42.259, 45.419, 44.769, 43.969, 43.651, 44.448, 45.357, 44.263, 44.379, 44.189, 44.05, 44.574, 44.46]
},{
		name: 'Bob',
		data: [43.827, 42.99, 43.077, 42.945, 42.626, 43.902, 42.71, 42.455, 42.602, 43.049, 42.026, 42.715, 42.819, 43.727, 43.413, 41.638, 41.865, 42.366, 45.21, 44.597, 43.942, 43.599, 44.47, 45.372, 44.099, 44.31, 43.974, 43.979, 44.636, 44.376]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [39.616, 38.148, 38.524, 38.415, 38.186, 38.17, 37.716, 38.645, 38.43, 38.689, 36.861, 37.112, 38.525, 38.579, 38.641, 37.267, 38.082, 38.708, 40.224, 39.735, 38.043, 39.033, 39.819, 39.682, 37.991, 37.958, 37.411, 39.114, 40.189, 38.776]
},{
		name: 'DfRes 122000 G2e 3',
		data: [43.752, 43.246, 42.935, 42.725, 42.705, 43.838, 42.918, 42.388, 42.528, 43.042, 42.212, 42.695, 42.723, 43.304, 43.123, 41.704, 41.798, 42.204, 45.016, 44.575, 43.849, 43.467, 44.194, 45.037, 44.134, 44.173, 42.98, 43.6, 44.242, 41.416]
},{
		name: 'YADIF',
		data: [41.477, 41.263, 41.562, 41.404, 41.173, 42.279, 41.241, 41.064, 41.245, 41.351, 40.283, 40.933, 40.974, 42.188, 41.915, 40.382, 40.65, 41.133, 43.234, 42.701, 42.243, 42.005, 42.969, 43.464, 42.3, 42.688, 42.362, 42.499, 42.81, 40.681]
},{
		name: 'MSU Deinterlacer',
		data: [41.105, 41.251, 41.484, 41.36, 41.08, 41.891, 40.989, 41.029, 41.143, 41.246, 40.393, 41.031, 40.995, 41.78, 41.65, 40.221, 40.517, 40.983, 43.11, 42.59, 42.011, 41.891, 42.641, 43.196, 42.045, 42.363, 41.89, 42.261, 42.91, 39.474]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [40.437, 40.041, 40.389, 39.96, 39.633, 40.122, 39.414, 39.728, 39.85, 39.911, 39.15, 39.544, 39.443, 40.525, 40.037, 38.908, 39.21, 39.578, 40.869, 40.475, 40.126, 40.153, 40.771, 41.089, 40.148, 40.408, 40.246, 40.621, 41.059, 40.416]
},{
		name: 'Vapoursynth TDeintMod',
		data: [43.671, 42.932, 42.865, 42.698, 42.459, 43.74, 42.612, 42.219, 42.382, 42.912, 42.001, 42.681, 42.718, 43.41, 43.13, 41.369, 41.519, 42.061, 45.199, 44.599, 43.858, 43.485, 44.27, 45.24, 44.067, 44.203, 43.926, 43.855, 44.404, 44.357]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [43.77, 41.629, 42.262, 42.161, 41.715, 42.281, 41.929, 41.825, 41.998, 42.3, 40.783, 40.725, 41.962, 42.735, 42.646, 40.953, 41.251, 41.73, 44.252, 43.589, 42.201, 42.667, 43.611, 44.14, 42.833, 42.691, 42.072, 42.786, 43.62, 43.355]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [42.593, 42.417, 42.356, 42.249, 41.938, 42.967, 42.102, 41.779, 41.944, 42.413, 41.403, 41.949, 42.114, 42.898, 42.734, 41.115, 41.173, 41.631, 44.274, 43.91, 43.289, 42.975, 43.549, 44.323, 43.484, 43.604, 43.3, 43.287, 43.727, 43.658]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [41.674, 41.852, 42.022, 41.846, 41.652, 42.716, 41.796, 41.532, 41.592, 41.944, 41.013, 41.65, 41.785, 42.626, 42.42, 40.745, 40.938, 41.502, 43.884, 43.553, 42.998, 42.65, 43.523, 44.158, 43.077, 43.368, 42.968, 43.04, 43.272, 43.961]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [16.709, 15.642, 27.266, 14.35, 35.409, 16.621, 37.568, 14.454, 37.701, 13.727, 37.273, 14.666, 37.748, 13.715, 38.567, 17.418, 37.91, 15.397, 39.139, 15.179, 38.728, 15.486, 39.194, 14.758, 38.474, 15.511, 38.556, 14.814, 39.083, 14.017]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [43.309, 42.808, 42.628, 42.454, 42.268, 43.378, 42.516, 42.078, 42.191, 42.635, 41.869, 42.455, 42.464, 43.058, 42.837, 41.296, 41.428, 41.898, 44.706, 44.205, 43.537, 43.251, 43.915, 44.736, 43.803, 43.843, 43.68, 43.564, 44.006, 43.915]
},{
		name: 'Muksun Deinterlacer',
		data: [40.437, 40.041, 40.389, 39.96, 39.633, 40.122, 39.414, 39.728, 39.85, 39.911, 39.15, 39.544, 39.443, 40.525, 40.037, 38.908, 39.21, 39.578, 40.869, 40.475, 40.126, 40.153, 40.771, 41.089, 40.148, 40.408, 40.246, 40.621, 41.059, 40.416]
},{
		name: 'DfRes 121000 G2e 3',
		data: [43.741, 43.057, 42.576, 40.67, 42.739, 43.924, 42.93, 42.216, 41.855, 42.676, 41.872, 41.781, 42.376, 42.956, 42.875, 41.513, 41.468, 42.078, 44.975, 44.61, 43.428, 42.64, 43.907, 45.007, 43.68, 43.322, 40.239, 42.799, 43.811, 41.274]
},{
		name: 'DfRes 61000',
		data: [43.595, 43.06, 42.806, 42.65, 42.534, 43.702, 42.76, 42.231, 42.349, 42.811, 42.093, 42.691, 42.595, 43.164, 42.996, 41.549, 41.649, 42.082, 44.84, 44.383, 43.772, 43.419, 44.09, 44.863, 43.924, 44.023, 43.841, 43.724, 44.091, 41.744]
},{
		name: 'Kernel Deinterlacer',
		data: [43.77, 38.009, 39.847, 39.699, 38.994, 38.994, 39.288, 39.604, 39.875, 39.582, 37.63, 37.13, 39.48, 40.241, 39.89, 38.261, 39.021, 39.478, 41.308, 40.312, 37.902, 39.924, 40.912, 40.885, 38.427, 38.333, 37.853, 39.745, 40.47, 40.352]
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