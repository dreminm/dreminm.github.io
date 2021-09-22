$(function () {
    $(document).ready(function() {
            Highcharts.chart('detailed', {

            title: {
                text: 'VMAF to Frame Number: Sequence # 1'
            },

            subtitle: {
                text: ''
            },

            yAxis: {
                title: {
                    text: 'VMAF'
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
		data: [90.811, 93.052, 93.42, 93.404, 93.072, 93.077, 92.801, 91.793, 91.457, 90.417, 89.923, 90.149, 91.128, 90.601, 91.048, 91.202, 91.307, 90.964, 91.44, 90.917, 91.473, 91.501, 91.358, 90.947, 91.345, 92.145, 92.599, 92.924, 93.385, 93.381]
},{
		name: 'DfRes 119000',
		data: [91.687, 90.905, 90.846, 89.83, 89.497, 89.18, 88.883, 87.928, 87.074, 86.581, 87.289, 86.971, 87.227, 87.764, 88.251, 88.313, 87.866, 88.353, 88.864, 88.9, 89.002, 88.358, 88.966, 88.883, 87.891, 88.501, 89.185, 88.688, 89.524, 79.437]
},{
		name: 'PAL Interpolation',
		data: [82.162, 79.132, 78.292, 77.999, 77.795, 77.612, 77.298, 76.05, 75.769, 74.103, 73.308, 74.474, 75.609, 74.55, 75.074, 75.414, 74.764, 74.153, 75.486, 74.746, 74.855, 75.104, 74.02, 73.608, 73.405, 74.89, 75.573, 75.638, 75.879, 76.039]
},{
		name: 'Vapoursynth EEDI3',
		data: [91.987, 90.718, 90.578, 90.483, 89.893, 89.61, 89.18, 88.114, 87.468, 86.775, 86.351, 86.373, 87.329, 86.588, 87.267, 87.428, 87.721, 87.171, 87.886, 87.168, 87.528, 87.627, 87.338, 87.097, 87.444, 87.993, 88.659, 89.06, 89.609, 89.403]
},{
		name: 'Bob',
		data: [89.688, 87.67, 87.198, 86.679, 85.995, 85.632, 85.023, 84.078, 83.218, 83.052, 82.459, 82.561, 83.532, 82.78, 83.543, 83.756, 83.811, 83.265, 84.012, 83.408, 83.797, 83.869, 83.57, 83.324, 83.674, 84.01, 84.7, 85.247, 85.568, 85.624]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [83.301, 85.369, 85.107, 84.806, 85.017, 84.365, 84.195, 83.423, 83.06, 82.012, 81.474, 81.868, 82.908, 82.623, 82.433, 83.323, 82.596, 82.573, 83.353, 83.634, 83.639, 83.879, 83.252, 82.882, 82.72, 83.551, 84.017, 83.813, 84.658, 85.101]
},{
		name: 'DfRes 122000 G2e 3',
		data: [91.952, 91.353, 91.415, 90.842, 90.865, 90.492, 90.228, 89.448, 88.758, 88.267, 88.769, 88.432, 88.86, 89.117, 89.721, 89.768, 89.363, 89.791, 90.323, 90.358, 90.402, 89.832, 90.45, 90.343, 89.511, 90.041, 90.659, 90.369, 91.054, 78.662]
},{
		name: 'YADIF',
		data: [88.466, 87.962, 86.985, 86.265, 86.49, 85.751, 85.093, 83.423, 82.761, 82.299, 82.067, 82.403, 83.82, 83.271, 83.837, 84.043, 83.927, 83.603, 84.586, 84.418, 84.712, 84.367, 84.413, 84.003, 84.247, 84.809, 85.055, 85.225, 85.904, 83.582]
},{
		name: 'MSU Deinterlacer',
		data: [88.989, 87.216, 86.74, 86.396, 86.123, 86.185, 85.847, 85.106, 84.297, 83.395, 83.963, 83.664, 84.102, 84.516, 85.204, 85.456, 84.877, 85.332, 85.934, 85.821, 85.96, 85.16, 85.021, 85.395, 84.94, 85.223, 86.03, 85.731, 86.638, 85.825]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [83.94, 87.006, 86.969, 87.01, 87.584, 87.33, 87.148, 85.562, 85.152, 84.146, 83.963, 84.213, 85.842, 84.573, 85.47, 85.636, 85.421, 84.715, 85.677, 85.568, 85.594, 85.713, 85.742, 84.994, 85.538, 86.538, 87.053, 86.812, 87.669, 87.972]
},{
		name: 'Vapoursynth TDeintMod',
		data: [93.011, 91.446, 91.173, 91.081, 90.449, 90.185, 89.862, 88.921, 87.896, 87.312, 86.896, 86.803, 87.887, 87.036, 87.788, 87.905, 88.073, 87.602, 88.397, 87.745, 88.043, 88.123, 87.672, 87.435, 87.842, 88.252, 88.961, 89.415, 89.913, 89.666]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [87.925, 89.332, 89.018, 88.551, 88.084, 88.079, 87.709, 86.734, 85.927, 85.293, 84.474, 84.66, 85.551, 84.884, 85.751, 85.976, 85.73, 85.362, 86.109, 85.651, 86.04, 86.063, 85.764, 85.599, 85.906, 86.488, 87.034, 87.25, 87.814, 87.719]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [89.855, 88.385, 88.131, 87.738, 87.068, 86.888, 86.34, 85.453, 84.483, 83.982, 83.499, 83.483, 84.546, 83.778, 84.562, 84.836, 84.681, 84.488, 85.302, 84.888, 85.167, 85.369, 85.169, 85.026, 85.071, 85.249, 85.733, 86.282, 86.611, 86.7]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [89.934, 89.903, 89.705, 89.432, 89.327, 89.128, 88.898, 87.834, 86.931, 85.99, 86.27, 86.274, 87.291, 86.889, 87.527, 87.493, 87.499, 87.378, 88.338, 87.946, 88.516, 87.99, 88.52, 88.092, 87.724, 87.98, 88.31, 88.712, 89.528, 90.356]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [50.163, 27.072, 83.13, 20.053, 83.671, 14.229, 82.87, 13.741, 80.368, 8.987, 77.888, 20.483, 80.121, 22.268, 79.367, 27.118, 79.518, 24.959, 79.975, 26.32, 80.444, 27.416, 79.728, 29.931, 79.686, 25.18, 80.348, 14.572, 81.437, 18.323]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [92.007, 90.81, 90.886, 90.843, 90.407, 90.369, 89.603, 88.908, 88.363, 87.83, 87.601, 87.823, 88.794, 88.212, 88.748, 88.836, 88.988, 88.642, 89.362, 89.018, 89.156, 89.195, 88.965, 89.166, 89.1, 89.705, 90.137, 90.585, 90.884, 90.969]
},{
		name: 'Muksun Deinterlacer',
		data: [83.94, 87.006, 86.969, 87.01, 87.584, 87.33, 87.148, 85.562, 85.152, 84.146, 83.963, 84.213, 85.842, 84.573, 85.47, 85.636, 85.421, 84.715, 85.677, 85.568, 85.594, 85.713, 85.742, 84.994, 85.538, 86.538, 87.053, 86.812, 87.669, 87.972]
},{
		name: 'DfRes 121000 G2e 3',
		data: [92.022, 91.273, 91.407, 90.859, 90.682, 90.402, 90.071, 89.312, 88.557, 87.952, 88.385, 88.211, 88.484, 88.826, 89.321, 89.321, 88.987, 89.438, 89.961, 89.999, 90.031, 89.51, 90.045, 89.887, 89.113, 89.773, 90.464, 90.072, 90.772, 79.024]
},{
		name: 'DfRes 61000',
		data: [91.515, 91.218, 91.445, 91.188, 90.829, 90.559, 90.436, 89.462, 88.742, 88.202, 88.677, 88.578, 89.016, 89.11, 89.595, 89.904, 89.381, 89.682, 90.402, 90.3, 90.356, 89.796, 90.49, 90.313, 89.67, 90.013, 90.646, 90.677, 91.223, 81.041]
},{
		name: 'Kernel Deinterlacer',
		data: [87.925, 89.084, 88.572, 88.214, 87.647, 87.837, 87.491, 86.552, 85.781, 85.05, 84.28, 84.472, 85.252, 84.6, 85.518, 85.803, 85.428, 85.095, 85.865, 85.353, 85.734, 85.785, 85.458, 85.292, 85.55, 86.051, 86.653, 86.749, 87.449, 87.326]
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