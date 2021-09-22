$(function () {
    $(document).ready(function() {
            Highcharts.chart('detailed', {

            title: {
                text: 'VMAF to Frame Number: Sequence # 18'
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
		data: [96.732, 100.0, 100.0, 100.0, 96.823, 96.788, 100.0, 100.0, 100.0, 96.886, 96.856, 100.0, 100.0, 100.0, 96.844, 96.859, 100.0, 100.0, 100.0, 96.549, 96.547, 100.0, 100.0, 100.0, 96.578, 96.564, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'DfRes 119000',
		data: [97.211, 97.344, 97.297, 97.39, 97.483, 97.365, 97.294, 97.311, 97.479, 97.497, 97.387, 97.348, 97.334, 97.348, 97.437, 97.374, 97.28, 97.32, 97.357, 97.442, 97.447, 97.274, 97.33, 97.253, 97.317, 97.33, 97.273, 97.297, 97.265, 100.0]
},{
		name: 'PAL Interpolation',
		data: [93.446, 100.0, 100.0, 100.0, 87.55, 84.999, 100.0, 100.0, 100.0, 90.364, 88.616, 100.0, 100.0, 100.0, 88.592, 87.481, 100.0, 100.0, 100.0, 88.986, 87.92, 100.0, 100.0, 100.0, 89.983, 89.836, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'Vapoursynth EEDI3',
		data: [94.234, 94.934, 94.991, 94.696, 94.606, 94.646, 94.465, 94.371, 94.335, 94.208, 94.255, 93.972, 94.105, 94.195, 94.257, 94.295, 93.962, 93.734, 94.143, 93.764, 93.781, 93.665, 93.884, 93.473, 93.068, 93.184, 92.859, 92.865, 93.035, 100.0]
},{
		name: 'Bob',
		data: [92.015, 91.94, 91.545, 91.673, 92.126, 92.177, 92.613, 92.534, 92.242, 92.073, 92.115, 91.675, 91.8, 91.853, 91.713, 91.766, 91.381, 90.984, 91.524, 91.009, 91.049, 90.706, 90.942, 90.923, 90.593, 90.677, 90.327, 90.532, 90.65, 100.0]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [97.392, 100.0, 100.0, 100.0, 91.719, 97.346, 100.0, 100.0, 100.0, 94.122, 97.419, 100.0, 100.0, 100.0, 92.988, 97.38, 100.0, 100.0, 100.0, 92.227, 97.364, 100.0, 100.0, 100.0, 93.387, 97.403, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'DfRes 122000 G2e 3',
		data: [97.062, 97.332, 97.284, 97.072, 97.189, 97.352, 97.3, 97.339, 97.233, 97.235, 97.391, 97.362, 97.353, 97.054, 97.161, 97.365, 97.292, 97.362, 97.087, 97.187, 97.46, 97.333, 97.374, 96.949, 97.054, 97.349, 97.316, 97.303, 96.982, 100.0]
},{
		name: 'YADIF',
		data: [93.775, 93.25, 92.351, 93.012, 94.057, 94.502, 94.117, 94.201, 94.013, 94.094, 94.743, 93.466, 93.628, 93.56, 93.971, 94.387, 93.341, 92.805, 93.611, 93.852, 93.941, 93.22, 93.167, 93.074, 93.353, 94.211, 93.332, 93.167, 93.716, 100.0]
},{
		name: 'MSU Deinterlacer',
		data: [94.773, 96.441, 96.677, 95.5, 95.497, 95.97, 95.49, 97.163, 96.252, 96.585, 96.061, 96.247, 96.859, 96.489, 96.183, 95.799, 95.671, 96.333, 95.762, 96.446, 96.316, 95.783, 96.244, 95.801, 95.578, 95.636, 95.537, 96.523, 95.795, 100.0]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [94.242, 100.0, 100.0, 100.0, 89.573, 94.484, 100.0, 100.0, 100.0, 89.895, 93.964, 100.0, 100.0, 100.0, 90.142, 93.94, 100.0, 100.0, 100.0, 89.709, 93.279, 100.0, 100.0, 100.0, 89.18, 92.046, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'Vapoursynth TDeintMod',
		data: [97.397, 97.291, 97.112, 96.879, 97.343, 97.427, 97.512, 97.709, 97.585, 97.699, 97.661, 97.732, 97.698, 97.587, 97.376, 97.482, 97.19, 97.344, 97.41, 97.382, 97.468, 97.231, 97.34, 97.381, 97.335, 97.573, 97.621, 97.385, 97.497, 100.0]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [91.943, 100.0, 100.0, 100.0, 92.766, 94.367, 100.0, 100.0, 100.0, 93.077, 95.501, 100.0, 100.0, 100.0, 92.763, 94.804, 100.0, 100.0, 100.0, 92.236, 94.567, 100.0, 100.0, 100.0, 92.371, 94.963, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [94.551, 94.375, 94.001, 93.124, 93.604, 94.278, 94.492, 94.476, 94.037, 93.751, 94.206, 93.97, 94.223, 93.788, 93.637, 94.15, 93.783, 93.405, 93.46, 93.115, 93.698, 93.531, 93.601, 92.87, 92.497, 93.069, 93.008, 93.115, 92.839, 100.0]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [96.805, 97.165, 95.559, 96.609, 96.895, 97.416, 96.993, 96.076, 96.82, 96.781, 97.147, 96.691, 95.557, 96.628, 96.834, 97.01, 96.459, 95.058, 96.617, 96.82, 96.848, 96.466, 95.276, 96.314, 96.222, 96.614, 96.342, 95.398, 96.574, 100.0]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [96.072, 100.0, 100.0, 15.025, 88.266, 97.187, 100.0, 100.0, 100.0, 9.982, 93.393, 100.0, 100.0, 22.463, 90.508, 96.565, 100.0, 100.0, 100.0, 5.215, 92.338, 100.0, 100.0, 21.616, 89.775, 96.684, 100.0, 100.0, 100.0, 28.103]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [97.095, 96.576, 96.532, 96.14, 96.211, 96.484, 97.258, 97.674, 96.334, 96.365, 97.513, 97.83, 97.647, 96.395, 96.214, 96.873, 96.145, 96.469, 95.973, 95.884, 96.549, 95.966, 96.294, 95.792, 95.921, 97.402, 97.421, 97.04, 95.498, 100.0]
},{
		name: 'Muksun Deinterlacer',
		data: [94.242, 100.0, 100.0, 100.0, 89.573, 94.484, 100.0, 100.0, 100.0, 89.895, 93.964, 100.0, 100.0, 100.0, 90.142, 93.94, 100.0, 100.0, 100.0, 89.709, 93.279, 100.0, 100.0, 100.0, 89.18, 92.046, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'DfRes 121000 G2e 3',
		data: [96.951, 97.267, 97.195, 97.216, 97.33, 97.185, 97.264, 97.247, 97.346, 97.334, 97.16, 97.216, 97.263, 97.156, 97.255, 97.112, 97.141, 97.234, 97.18, 97.275, 97.205, 97.157, 97.249, 97.065, 97.127, 97.09, 97.12, 97.165, 97.028, 100.0]
},{
		name: 'DfRes 61000',
		data: [97.321, 97.68, 97.448, 97.384, 97.449, 97.764, 97.907, 97.635, 97.749, 97.567, 97.714, 97.921, 97.594, 97.576, 97.465, 97.648, 97.611, 97.538, 97.494, 97.411, 97.612, 97.638, 97.551, 97.406, 97.366, 97.521, 97.68, 97.467, 97.493, 100.0]
},{
		name: 'Kernel Deinterlacer',
		data: [91.943, 100.0, 100.0, 100.0, 91.598, 94.644, 100.0, 100.0, 100.0, 92.217, 95.752, 100.0, 100.0, 100.0, 91.996, 95.167, 100.0, 100.0, 100.0, 91.77, 94.848, 100.0, 100.0, 100.0, 91.809, 95.301, 100.0, 100.0, 100.0, 100.0]
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