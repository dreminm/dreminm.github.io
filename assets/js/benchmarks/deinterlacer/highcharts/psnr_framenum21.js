$(function () {
    $(document).ready(function() {
            Highcharts.chart('detailed', {

            title: {
                text: 'PSNR to Frame Number: Sequence # 21'
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
		data: [27.437, 29.516, 28.72, 27.84, 29.203, 27.289, 29.258, 28.792, 28.04, 29.316, 27.253, 28.955, 28.702, 27.829, 29.265, 27.468, 28.639, 28.736, 27.567, 29.322, 27.463, 28.704, 28.384, 27.245, 29.183, 27.396, 28.775, 28.664, 27.019, 29.164]
},{
		name: 'DfRes 119000',
		data: [28.707, 30.787, 30.205, 28.719, 30.235, 28.964, 30.419, 29.116, 28.107, 29.468, 27.283, 29.05, 28.728, 27.853, 29.432, 27.452, 28.716, 28.772, 27.579, 29.487, 27.469, 28.783, 28.482, 27.251, 29.377, 27.396, 28.833, 28.721, 27.036, 28.042]
},{
		name: 'PAL Interpolation',
		data: [26.142, 26.591, 26.015, 25.496, 26.458, 24.928, 26.454, 26.1, 25.602, 26.66, 25.005, 26.532, 26.227, 25.56, 26.781, 25.226, 26.354, 26.349, 25.366, 26.846, 25.248, 26.313, 26.081, 25.056, 26.705, 25.213, 26.389, 26.258, 24.985, 26.824]
},{
		name: 'Vapoursynth EEDI3',
		data: [27.444, 29.582, 28.75, 27.855, 29.243, 27.288, 29.302, 28.799, 28.038, 29.311, 27.252, 28.965, 28.721, 27.83, 29.259, 27.465, 28.653, 28.743, 27.568, 29.29, 27.463, 28.691, 28.39, 27.246, 29.139, 27.404, 28.782, 28.659, 27.041, 29.169]
},{
		name: 'Bob',
		data: [27.493, 29.547, 28.748, 27.901, 29.225, 27.333, 29.266, 28.827, 28.093, 29.445, 27.324, 29.077, 28.808, 27.905, 29.446, 27.537, 28.789, 28.863, 27.647, 29.502, 27.53, 28.839, 28.53, 27.314, 29.342, 27.462, 28.88, 28.768, 27.091, 29.27]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [26.371, 28.347, 27.77, 26.835, 28.287, 26.327, 28.15, 27.778, 26.876, 28.383, 26.196, 27.955, 27.754, 26.72, 28.418, 26.416, 27.686, 27.845, 26.489, 28.447, 26.435, 27.706, 27.571, 26.181, 28.325, 26.39, 27.749, 27.762, 25.979, 28.264]
},{
		name: 'DfRes 122000 G2e 3',
		data: [28.869, 30.952, 30.394, 28.878, 30.382, 29.194, 30.579, 29.287, 28.266, 29.627, 27.461, 29.205, 28.927, 28.023, 29.588, 27.633, 28.87, 28.971, 27.743, 29.659, 27.649, 28.934, 28.66, 27.422, 29.52, 27.576, 29.001, 28.915, 27.207, 27.877]
},{
		name: 'YADIF',
		data: [26.369, 28.631, 27.771, 26.904, 28.434, 26.26, 28.361, 27.767, 26.948, 28.413, 26.12, 28.096, 27.724, 26.754, 28.397, 26.348, 27.791, 27.872, 26.506, 28.52, 26.4, 27.797, 27.522, 26.151, 28.4, 26.362, 27.899, 27.758, 25.97, 28.044]
},{
		name: 'MSU Deinterlacer',
		data: [27.991, 30.438, 30.345, 29.654, 30.808, 28.933, 31.138, 30.261, 29.703, 30.389, 28.312, 30.376, 29.811, 29.156, 30.33, 28.407, 29.841, 29.73, 28.806, 30.383, 28.604, 30.126, 29.6, 28.588, 30.344, 28.582, 30.112, 29.547, 27.953, 28.918]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [26.256, 28.322, 27.61, 26.768, 28.299, 26.096, 28.154, 27.716, 26.867, 28.338, 26.084, 27.955, 27.669, 26.685, 28.297, 26.325, 27.648, 27.791, 26.437, 28.397, 26.37, 27.651, 27.45, 26.094, 28.284, 26.342, 27.744, 27.689, 25.923, 28.254]
},{
		name: 'Vapoursynth TDeintMod',
		data: [27.145, 29.255, 28.426, 27.53, 28.887, 26.994, 28.958, 28.491, 27.745, 29.084, 26.972, 28.703, 28.444, 27.541, 29.068, 27.187, 28.397, 28.49, 27.285, 29.127, 27.174, 28.47, 28.148, 26.964, 28.968, 27.099, 28.519, 28.406, 26.725, 28.9]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [27.461, 29.307, 28.544, 27.757, 28.942, 27.185, 29.039, 28.596, 27.929, 29.155, 27.183, 28.865, 28.58, 27.752, 29.15, 27.388, 28.594, 28.623, 27.514, 29.198, 27.376, 28.646, 28.298, 27.187, 29.063, 27.319, 28.697, 28.525, 26.972, 29.011]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [26.577, 29.02, 28.516, 27.36, 28.838, 27.03, 28.789, 28.443, 27.396, 28.94, 26.874, 28.411, 28.398, 27.2, 28.925, 27.082, 28.125, 28.427, 26.973, 28.922, 27.068, 28.152, 28.129, 26.662, 28.766, 27.041, 28.181, 28.351, 26.506, 28.755]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [27.09, 29.584, 28.676, 27.642, 29.326, 27.157, 29.309, 28.545, 27.638, 29.347, 26.817, 28.83, 28.484, 27.415, 29.347, 27.022, 28.533, 28.559, 27.147, 29.405, 27.032, 28.579, 28.259, 26.821, 29.247, 26.98, 28.62, 28.533, 26.621, 28.713]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [22.466, 21.932, 25.833, 20.321, 26.915, 20.464, 26.927, 21.351, 26.262, 21.313, 25.37, 19.957, 26.755, 18.587, 27.16, 19.076, 26.378, 20.705, 26.482, 20.937, 25.681, 19.516, 26.697, 18.652, 26.91, 19.44, 26.475, 20.566, 25.63, 20.443]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [27.411, 29.478, 28.738, 27.789, 29.205, 27.305, 29.244, 28.8, 27.988, 29.322, 27.249, 28.916, 28.712, 27.788, 29.278, 27.455, 28.588, 28.736, 27.51, 29.325, 27.438, 28.662, 28.402, 27.192, 29.18, 27.374, 28.708, 28.653, 26.967, 29.124]
},{
		name: 'Muksun Deinterlacer',
		data: [26.256, 28.322, 27.61, 26.768, 28.299, 26.096, 28.154, 27.716, 26.867, 28.338, 26.084, 27.955, 27.669, 26.685, 28.297, 26.325, 27.648, 27.791, 26.437, 28.397, 26.37, 27.651, 27.45, 26.094, 28.284, 26.342, 27.744, 27.689, 25.923, 28.254]
},{
		name: 'DfRes 121000 G2e 3',
		data: [28.963, 31.046, 30.543, 28.981, 30.43, 29.341, 30.709, 29.274, 28.255, 29.536, 27.415, 29.137, 28.858, 27.971, 29.511, 27.584, 28.801, 28.893, 27.692, 29.577, 27.597, 28.869, 28.583, 27.379, 29.443, 27.535, 28.924, 28.829, 27.141, 27.948]
},{
		name: 'DfRes 61000',
		data: [28.463, 30.773, 29.99, 28.61, 30.324, 28.608, 30.395, 29.218, 28.202, 29.694, 27.386, 29.225, 28.927, 27.99, 29.666, 27.582, 28.911, 28.977, 27.689, 29.736, 27.579, 28.963, 28.667, 27.37, 29.597, 27.517, 29.034, 28.941, 27.148, 27.699]
},{
		name: 'Kernel Deinterlacer',
		data: [27.461, 29.213, 28.492, 27.674, 28.878, 27.133, 28.951, 28.528, 27.83, 29.075, 27.116, 28.762, 28.513, 27.66, 29.073, 27.322, 28.497, 28.563, 27.43, 29.119, 27.313, 28.548, 28.242, 27.113, 28.986, 27.259, 28.594, 28.466, 26.905, 28.942]
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