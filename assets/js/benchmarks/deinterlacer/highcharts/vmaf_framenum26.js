$(function () {
    $(document).ready(function() {
            Highcharts.chart('detailed', {

            title: {
                text: 'VMAF to Frame Number: Sequence # 26'
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
		data: [69.796, 76.353, 76.046, 76.126, 75.46, 75.414, 75.092, 75.709, 75.175, 75.208, 73.851, 73.546, 74.975, 74.535, 74.918, 74.63, 78.283, 77.157, 77.141, 76.906, 77.097, 77.463, 77.265, 77.129, 77.34, 77.418, 77.159, 77.051, 77.371, 77.232]
},{
		name: 'PAL Interpolation',
		data: [62.276, 66.64, 59.887, 66.349, 60.153, 65.591, 61.584, 65.847, 60.907, 66.443, 59.835, 66.306, 59.833, 66.185, 61.584, 66.08, 64.631, 63.309, 65.704, 63.777, 65.327, 63.24, 65.206, 65.143, 64.477, 66.088, 64.581, 66.072, 64.78, 65.355]
},{
		name: 'VapourSynth EEDI3',
		data: [75.054, 70.218, 75.524, 69.914, 74.917, 69.334, 74.294, 69.485, 74.338, 69.212, 73.322, 68.438, 74.46, 69.039, 73.726, 69.177, 74.117, 73.13, 73.195, 72.926, 73.47, 73.911, 73.094, 73.527, 73.294, 73.568, 73.274, 73.153, 73.691, 73.256]
},{
		name: 'Bob',
		data: [71.187, 66.431, 71.743, 66.099, 71.073, 65.484, 70.487, 65.736, 70.534, 65.638, 69.657, 64.811, 70.611, 65.38, 69.866, 65.398, 70.376, 69.393, 69.468, 69.276, 69.82, 70.166, 69.327, 69.738, 69.499, 69.755, 69.497, 69.493, 70.072, 69.601]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [63.017, 81.86, 69.956, 81.535, 68.762, 80.892, 70.347, 81.082, 70.445, 80.948, 69.723, 82.253, 69.4, 80.232, 70.633, 81.208, 72.844, 73.187, 76.394, 72.558, 75.381, 71.953, 74.842, 73.611, 74.475, 75.777, 73.469, 76.609, 73.082, 75.743]
},{
		name: 'YADIF',
		data: [73.684, 64.8, 70.371, 65.469, 70.127, 66.275, 70.804, 65.45, 70.642, 65.067, 70.507, 63.819, 70.338, 65.833, 70.837, 66.267, 70.077, 71.791, 70.727, 71.068, 70.815, 70.423, 72.188, 71.188, 71.833, 71.602, 71.653, 72.076, 71.919, 75.748]
},{
		name: 'MSU Deinterlacer',
		data: [78.981, 85.323, 87.936, 86.645, 86.945, 86.462, 86.694, 86.501, 86.796, 86.053, 86.436, 85.586, 87.092, 86.159, 86.877, 86.428, 86.789, 86.39, 85.866, 85.927, 85.718, 85.374, 86.485, 85.186, 86.22, 86.106, 86.234, 86.497, 86.184, 76.612]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [58.86, 65.917, 64.885, 65.921, 64.124, 65.275, 64.096, 65.273, 64.193, 65.374, 63.099, 63.56, 63.883, 64.497, 63.812, 64.618, 67.222, 66.288, 66.248, 65.877, 66.306, 66.359, 66.405, 66.33, 66.515, 66.505, 66.057, 66.414, 66.6, 66.562]
},{
		name: 'VapourSynth TDeintMod',
		data: [75.981, 71.268, 76.736, 71.472, 76.601, 71.013, 76.123, 71.27, 75.917, 70.859, 74.733, 70.062, 75.82, 70.71, 75.556, 71.194, 76.466, 75.602, 76.182, 75.596, 76.347, 76.06, 75.55, 76.12, 76.009, 77.216, 76.58, 76.615, 76.73, 76.177]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [65.602, 73.441, 72.3, 73.268, 71.817, 72.363, 72.016, 72.722, 71.858, 72.507, 70.461, 72.621, 71.111, 72.119, 71.458, 72.456, 74.99, 73.642, 75.417, 73.794, 75.241, 74.221, 74.328, 74.728, 74.146, 75.005, 74.165, 75.403, 74.665, 74.797]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [75.802, 73.074, 75.441, 72.856, 74.731, 72.056, 75.007, 72.433, 75.024, 72.371, 74.04, 72.096, 74.487, 72.486, 74.521, 72.534, 74.725, 74.045, 74.881, 73.933, 74.881, 74.279, 74.669, 74.843, 74.48, 75.427, 74.446, 75.32, 74.68, 75.161]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [80.247, 74.421, 79.781, 74.895, 79.281, 75.082, 79.333, 74.649, 79.254, 73.945, 79.158, 72.725, 79.554, 74.373, 79.405, 74.787, 79.116, 79.904, 79.14, 79.478, 79.393, 79.481, 80.588, 79.211, 80.331, 80.17, 80.276, 80.494, 80.148, 74.85]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [56.779, 85.061, 78.703, 88.601, 79.974, 88.879, 81.599, 89.145, 82.254, 89.24, 80.629, 88.393, 81.126, 88.082, 82.484, 88.524, 85.836, 61.467, 85.159, 61.935, 83.436, 59.418, 83.515, 62.342, 82.904, 66.567, 82.837, 68.195, 82.958, 68.752]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [75.945, 72.906, 76.698, 72.757, 75.805, 71.789, 75.718, 72.259, 75.695, 71.941, 74.718, 71.144, 75.662, 71.646, 75.002, 71.959, 75.421, 74.641, 74.798, 74.374, 74.949, 75.057, 74.664, 74.677, 74.94, 75.287, 74.824, 74.876, 74.942, 74.896]
},{
		name: 'Muksun Deinterlacer',
		data: [58.86, 65.917, 64.885, 65.921, 64.124, 65.275, 64.096, 65.273, 64.193, 65.374, 63.099, 63.56, 63.883, 64.497, 63.812, 64.618, 67.222, 66.288, 66.248, 65.877, 66.306, 66.359, 66.405, 66.33, 66.515, 66.505, 66.057, 66.414, 66.6, 66.562]
},{
		name: 'Kernel Deinterlacer',
		data: [65.602, 74.462, 72.325, 74.047, 71.975, 73.099, 72.671, 73.377, 72.203, 73.293, 70.643, 75.056, 71.21, 73.454, 71.858, 73.838, 75.254, 74.023, 77.441, 74.163, 76.954, 74.374, 75.229, 75.665, 74.703, 76.816, 74.851, 77.439, 75.326, 76.033]
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