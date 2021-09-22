$(function () {
    $(document).ready(function() {
            Highcharts.chart('framenum_plot', {

            title: {
                text: 'Mean VMAF to Frame Number'
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
		data: [85.877, 94.209, 93.337, 93.279, 93.973, 93.914, 94.275, 93.182, 93.114, 93.856, 93.279, 93.405, 92.93, 92.831, 93.527, 93.112, 93.427, 92.611, 93.035, 93.673, 93.722, 93.891, 93.01, 92.87, 93.695, 93.587, 94.038, 93.367, 93.276, 95.087]
},{
		name: 'DfRes 119000',
		data: [94.318, 94.548, 94.491, 94.324, 94.473, 94.737, 94.702, 94.509, 94.045, 94.193, 93.745, 93.929, 94.12, 94.179, 94.161, 94.14, 93.968, 94.403, 94.513, 94.663, 94.729, 94.421, 94.529, 94.48, 94.553, 94.314, 94.449, 94.264, 94.554, 91.097]
},{
		name: 'PAL Interpolation',
		data: [78.027, 81.566, 80.237, 81.382, 82.783, 82.673, 83.286, 82.639, 81.942, 82.898, 81.485, 81.775, 81.0, 81.956, 82.665, 82.422, 83.459, 82.667, 82.611, 83.706, 84.167, 84.589, 83.229, 83.586, 83.951, 83.337, 83.908, 82.952, 82.938, 86.022]
},{
		name: 'Vapoursynth EEDI3',
		data: [91.328, 90.359, 90.398, 90.283, 90.509, 90.315, 90.706, 90.259, 90.278, 89.974, 89.753, 89.208, 89.95, 89.59, 89.954, 89.328, 89.033, 89.581, 90.223, 90.274, 90.478, 90.161, 90.241, 90.084, 90.147, 90.131, 90.062, 89.605, 90.188, 91.269]
},{
		name: 'Bob',
		data: [88.195, 87.251, 87.352, 87.357, 87.894, 87.537, 88.133, 87.545, 87.461, 87.141, 86.865, 86.27, 86.919, 86.622, 86.895, 86.405, 86.013, 86.827, 87.344, 87.48, 87.787, 87.38, 87.375, 87.325, 87.485, 87.265, 87.144, 86.741, 87.031, 88.207]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [79.498, 87.438, 86.62, 88.296, 89.048, 89.489, 89.22, 88.433, 88.024, 89.17, 88.593, 88.799, 87.747, 89.156, 89.235, 89.643, 89.613, 88.737, 89.273, 89.7, 90.446, 89.848, 89.134, 89.992, 90.364, 90.016, 89.843, 90.232, 89.235, 91.624]
},{
		name: 'DfRes 122000 G2e 3',
		data: [94.919, 95.108, 95.051, 94.918, 95.031, 95.299, 95.252, 95.058, 94.679, 94.819, 94.574, 94.642, 94.766, 94.866, 94.829, 94.836, 94.605, 95.024, 95.154, 95.224, 95.311, 94.964, 95.145, 95.123, 95.152, 95.072, 95.127, 94.903, 95.216, 90.781]
},{
		name: 'YADIF',
		data: [87.041, 86.807, 86.863, 86.952, 87.397, 87.116, 87.684, 87.272, 87.119, 86.928, 86.77, 86.269, 86.939, 86.804, 86.926, 86.621, 86.713, 87.261, 87.548, 87.916, 88.273, 87.595, 88.085, 87.608, 87.728, 87.175, 87.139, 86.982, 87.285, 88.39]
},{
		name: 'MSU Deinterlacer',
		data: [90.591, 91.423, 91.579, 91.901, 92.161, 92.24, 92.851, 92.676, 92.361, 92.382, 92.135, 91.947, 91.882, 92.24, 91.82, 91.941, 91.903, 92.388, 92.733, 92.862, 92.988, 92.544, 92.688, 92.595, 92.792, 92.446, 92.19, 91.552, 92.176, 90.234]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [78.028, 87.071, 86.082, 86.589, 87.364, 87.369, 87.955, 86.775, 86.506, 87.39, 86.468, 86.65, 86.395, 86.276, 87.03, 86.5, 86.945, 86.317, 86.921, 87.795, 88.041, 88.18, 87.124, 87.07, 87.981, 87.593, 87.814, 87.702, 86.722, 89.527]
},{
		name: 'Vapoursynth TDeintMod',
		data: [91.453, 90.575, 90.846, 90.821, 91.217, 90.96, 91.351, 90.953, 91.012, 90.678, 90.473, 90.049, 90.726, 90.467, 90.811, 90.313, 90.256, 90.819, 91.393, 91.541, 91.638, 91.277, 91.391, 91.328, 91.385, 91.45, 91.436, 90.96, 91.417, 92.319]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [81.563, 91.251, 90.346, 90.502, 91.414, 91.469, 91.809, 90.239, 89.717, 90.739, 90.245, 90.141, 89.963, 89.904, 91.078, 90.414, 90.917, 90.563, 91.037, 91.682, 92.033, 92.251, 91.198, 91.1, 91.928, 91.729, 91.811, 91.343, 91.082, 93.239]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [90.463, 89.218, 89.498, 89.614, 90.035, 89.949, 89.977, 89.707, 89.814, 89.396, 89.167, 88.517, 89.227, 89.143, 89.438, 88.891, 88.564, 89.443, 89.906, 89.993, 90.384, 89.674, 89.806, 89.941, 90.012, 89.711, 89.461, 89.259, 89.714, 90.831]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [90.677, 90.767, 91.033, 91.034, 91.381, 91.429, 91.551, 91.111, 91.189, 91.036, 90.888, 90.371, 90.999, 90.807, 91.238, 90.763, 90.959, 91.157, 91.427, 91.725, 92.023, 91.477, 91.786, 91.581, 91.761, 91.739, 91.777, 91.471, 91.857, 92.262]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [48.86, 44.168, 78.656, 43.676, 84.624, 47.117, 85.999, 43.596, 85.301, 46.631, 84.701, 46.809, 84.002, 46.047, 85.434, 49.264, 84.981, 47.001, 84.631, 41.255, 85.361, 43.184, 83.677, 44.292, 85.697, 48.764, 86.06, 55.012, 86.095, 52.189]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [91.572, 90.913, 91.001, 90.869, 91.173, 91.062, 91.288, 90.976, 90.98, 90.602, 90.593, 90.301, 90.676, 90.489, 90.616, 90.538, 90.41, 90.765, 91.085, 91.146, 91.338, 90.871, 91.056, 91.042, 91.049, 91.064, 91.072, 90.773, 91.267, 92.327]
},{
		name: 'Muksun Deinterlacer',
		data: [78.028, 87.071, 86.082, 86.589, 87.364, 87.369, 87.955, 86.775, 86.506, 87.39, 86.468, 86.65, 86.395, 86.276, 87.03, 86.5, 86.945, 86.317, 86.921, 87.795, 88.041, 88.18, 87.124, 87.07, 87.981, 87.593, 87.814, 87.702, 86.722, 89.527]
},{
		name: 'DfRes 121000 G2e 3',
		data: [94.885, 95.078, 95.008, 94.888, 94.951, 95.196, 95.2, 94.984, 94.643, 94.692, 94.445, 94.494, 94.666, 94.731, 94.719, 94.722, 94.528, 94.913, 95.081, 95.155, 95.214, 94.911, 95.043, 95.04, 95.051, 94.917, 95.05, 94.81, 95.126, 90.904]
},{
		name: 'DfRes 61000',
		data: [94.726, 95.134, 95.042, 95.003, 95.054, 95.343, 95.251, 95.112, 94.67, 94.861, 94.588, 94.512, 94.686, 94.899, 94.839, 94.885, 94.467, 95.052, 95.17, 95.253, 95.371, 95.04, 95.169, 95.146, 95.202, 95.155, 95.193, 94.959, 95.31, 90.852]
},{
		name: 'Kernel Deinterlacer',
		data: [81.563, 90.409, 89.768, 89.999, 90.823, 90.969, 91.292, 89.788, 89.164, 90.17, 89.726, 89.812, 89.547, 89.38, 90.543, 89.691, 90.698, 90.092, 90.386, 90.928, 91.48, 91.592, 90.681, 90.774, 91.5, 91.168, 91.187, 91.173, 90.363, 92.837]
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