$(function () {
    $(document).ready(function() {
            Highcharts.chart('detailed', {

            title: {
                text: 'PSNR to Frame Number: Sequence # 16'
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
		data: [27.428, 27.471, 27.489, 27.553, 27.406, 27.374, 27.386, 27.396, 27.163, 27.246, 27.458, 27.465, 27.61, 27.559, 27.584, 27.568, 27.572, 27.532, 27.557, 27.618, 27.802, 27.825, 27.829, 27.894, 27.822, 27.749, 27.734, 27.777, 27.646, 27.707]
},{
		name: 'DfRes 119000',
		data: [27.034, 27.189, 27.161, 27.214, 27.283, 27.452, 27.496, 27.452, 27.242, 27.271, 27.497, 27.343, 27.48, 27.41, 27.379, 27.272, 27.351, 27.456, 27.526, 27.494, 27.651, 27.53, 27.605, 27.706, 27.844, 27.874, 28.01, 28.108, 27.973, 26.601]
},{
		name: 'PAL Interpolation',
		data: [25.459, 25.207, 25.207, 25.239, 25.272, 25.213, 25.258, 25.27, 25.193, 25.285, 25.423, 25.473, 25.572, 25.557, 25.587, 25.6, 25.599, 25.549, 25.609, 25.675, 25.906, 25.929, 25.936, 25.965, 25.904, 25.814, 25.778, 25.837, 25.683, 25.76]
},{
		name: 'Vapoursynth EEDI3',
		data: [27.475, 27.508, 27.541, 27.588, 27.452, 27.414, 27.443, 27.434, 27.241, 27.315, 27.502, 27.528, 27.668, 27.627, 27.652, 27.646, 27.647, 27.597, 27.632, 27.697, 27.891, 27.914, 27.918, 27.979, 27.913, 27.846, 27.814, 27.858, 27.72, 27.792]
},{
		name: 'Bob',
		data: [27.306, 27.334, 27.362, 27.413, 27.285, 27.245, 27.281, 27.287, 27.104, 27.17, 27.33, 27.355, 27.489, 27.465, 27.492, 27.484, 27.478, 27.428, 27.46, 27.529, 27.738, 27.777, 27.771, 27.84, 27.781, 27.694, 27.667, 27.712, 27.572, 27.653]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [26.047, 26.034, 26.058, 26.091, 26.054, 26.072, 26.082, 26.092, 25.966, 25.994, 26.106, 26.191, 26.326, 26.244, 26.256, 26.12, 26.205, 26.054, 26.191, 26.196, 26.52, 26.55, 26.594, 26.6, 26.567, 26.527, 26.529, 26.624, 26.476, 26.542]
},{
		name: 'DfRes 122000 G2e 3',
		data: [27.454, 27.537, 27.512, 27.596, 27.711, 27.872, 27.899, 27.852, 27.686, 27.662, 27.903, 27.756, 27.891, 27.788, 27.758, 27.683, 27.785, 27.887, 27.904, 27.915, 28.048, 27.966, 28.033, 28.092, 28.197, 28.212, 28.339, 28.401, 28.26, 26.189]
},{
		name: 'YADIF',
		data: [25.925, 26.02, 26.033, 26.084, 26.03, 26.003, 26.062, 26.084, 25.975, 26.072, 26.236, 26.24, 26.449, 26.413, 26.436, 26.442, 26.422, 26.413, 26.445, 26.506, 26.77, 26.783, 26.796, 26.862, 26.766, 26.659, 26.607, 26.648, 26.482, 25.959]
},{
		name: 'MSU Deinterlacer',
		data: [28.255, 29.117, 29.239, 29.362, 29.001, 29.029, 29.645, 29.976, 30.671, 30.7, 30.663, 30.066, 29.465, 28.932, 28.896, 28.804, 28.847, 29.421, 30.071, 30.977, 30.998, 30.212, 30.789, 30.691, 30.26, 30.118, 30.522, 30.432, 30.186, 29.057]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [26.1, 26.128, 26.126, 26.184, 26.13, 26.112, 26.161, 26.198, 26.053, 26.154, 26.324, 26.35, 26.54, 26.488, 26.51, 26.51, 26.497, 26.466, 26.503, 26.594, 26.894, 26.918, 26.935, 27.005, 26.865, 26.739, 26.69, 26.704, 26.544, 26.624]
},{
		name: 'Vapoursynth TDeintMod',
		data: [27.099, 27.154, 27.186, 27.242, 27.097, 27.054, 27.085, 27.087, 26.871, 26.94, 27.13, 27.158, 27.292, 27.26, 27.275, 27.263, 27.257, 27.207, 27.242, 27.312, 27.503, 27.528, 27.542, 27.583, 27.527, 27.458, 27.434, 27.475, 27.333, 27.404]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [27.285, 27.123, 27.148, 27.194, 27.088, 27.047, 27.077, 27.089, 26.895, 26.958, 27.084, 27.143, 27.226, 27.197, 27.254, 27.151, 27.181, 27.123, 27.185, 27.179, 27.475, 27.567, 27.546, 27.629, 27.557, 27.461, 27.464, 27.52, 27.391, 27.456]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [26.044, 26.639, 26.67, 26.678, 26.609, 26.586, 26.611, 26.618, 26.424, 26.49, 26.666, 26.688, 26.827, 26.822, 26.813, 26.806, 26.806, 26.776, 26.797, 26.851, 27.031, 27.088, 27.08, 27.131, 27.101, 27.051, 27.028, 27.067, 26.908, 26.978]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [26.676, 26.827, 26.838, 26.894, 26.813, 26.796, 26.832, 26.824, 26.637, 26.684, 26.884, 26.863, 27.009, 26.987, 26.982, 26.984, 26.995, 26.965, 26.993, 27.05, 27.227, 27.225, 27.265, 27.317, 27.304, 27.224, 27.239, 27.301, 27.149, 27.234]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [19.549, 18.48, 20.66, 17.986, 21.338, 17.707, 21.45, 17.262, 21.907, 17.254, 21.712, 17.178, 22.328, 17.102, 22.218, 17.112, 22.068, 17.003, 22.012, 17.004, 22.112, 16.935, 22.36, 16.906, 22.656, 17.275, 23.426, 17.735, 23.31, 17.471]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [27.105, 27.161, 27.183, 27.228, 27.11, 27.095, 27.126, 27.134, 26.935, 27.035, 27.263, 27.285, 27.452, 27.405, 27.43, 27.406, 27.401, 27.354, 27.396, 27.428, 27.609, 27.61, 27.633, 27.677, 27.612, 27.54, 27.543, 27.586, 27.434, 27.505]
},{
		name: 'Muksun Deinterlacer',
		data: [26.1, 26.128, 26.126, 26.184, 26.13, 26.112, 26.161, 26.198, 26.053, 26.154, 26.324, 26.35, 26.54, 26.488, 26.51, 26.51, 26.497, 26.466, 26.503, 26.594, 26.894, 26.918, 26.935, 27.005, 26.865, 26.739, 26.69, 26.704, 26.544, 26.624]
},{
		name: 'DfRes 121000 G2e 3',
		data: [27.4, 27.486, 27.45, 27.551, 27.659, 27.819, 27.863, 27.83, 27.64, 27.614, 27.845, 27.706, 27.818, 27.721, 27.679, 27.608, 27.704, 27.817, 27.848, 27.866, 27.986, 27.902, 27.965, 28.029, 28.159, 28.172, 28.307, 28.377, 28.228, 26.438]
},{
		name: 'DfRes 61000',
		data: [27.627, 27.667, 27.652, 27.723, 27.719, 27.794, 27.802, 27.803, 27.598, 27.62, 27.851, 27.769, 27.919, 27.851, 27.829, 27.797, 27.873, 27.898, 27.917, 27.956, 28.093, 28.047, 28.099, 28.155, 28.166, 28.145, 28.198, 28.266, 28.112, 26.46]
},{
		name: 'Kernel Deinterlacer',
		data: [27.285, 27.071, 27.096, 27.139, 27.038, 26.988, 27.011, 27.01, 26.796, 26.808, 26.806, 26.935, 26.887, 26.808, 26.911, 26.603, 26.711, 26.591, 26.729, 26.606, 27.194, 27.411, 27.396, 27.477, 27.38, 27.144, 27.299, 27.403, 27.327, 27.336]
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