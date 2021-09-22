$(function () {
    $(document).ready(function() {
            Highcharts.chart('detailed', {

            title: {
                text: 'PSNR to Frame Number: Sequence # 1'
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
		data: [50.308, 46.962, 44.851, 42.988, 41.207, 39.677, 38.32, 37.175, 36.23, 35.793, 35.715, 35.762, 35.727, 35.758, 35.819, 35.777, 35.752, 35.776, 35.702, 35.735, 35.756, 35.77, 35.641, 35.642, 35.53, 35.472, 35.764, 35.868, 35.896, 35.93]
},{
		name: 'DfRes 119000',
		data: [50.777, 47.57, 45.522, 43.486, 41.879, 40.37, 38.957, 37.856, 36.858, 36.314, 36.388, 36.325, 36.148, 36.489, 36.669, 36.634, 36.458, 36.773, 36.671, 36.763, 36.828, 36.552, 36.72, 36.705, 36.227, 36.245, 36.454, 36.313, 36.524, 33.483]
},{
		name: 'PAL Interpolation',
		data: [40.066, 39.203, 38.423, 37.493, 36.536, 35.464, 34.38, 33.464, 32.613, 32.311, 32.016, 32.077, 32.065, 32.024, 32.013, 31.985, 31.957, 32.077, 32.0, 32.026, 31.97, 31.966, 31.8, 31.855, 31.688, 31.753, 31.981, 32.171, 32.162, 32.285]
},{
		name: 'Vapoursynth EEDI3',
		data: [50.595, 47.076, 44.911, 43.03, 41.208, 39.627, 38.213, 37.03, 36.067, 35.62, 35.497, 35.487, 35.457, 35.476, 35.541, 35.496, 35.481, 35.499, 35.424, 35.446, 35.429, 35.482, 35.298, 35.312, 35.205, 35.162, 35.473, 35.583, 35.619, 35.706]
},{
		name: 'Bob',
		data: [50.267, 46.762, 44.554, 42.633, 40.807, 39.239, 37.84, 36.675, 35.662, 35.238, 35.088, 35.071, 35.022, 35.037, 35.11, 35.049, 35.047, 35.052, 34.976, 34.972, 34.973, 35.018, 34.825, 34.813, 34.743, 34.673, 35.008, 35.152, 35.193, 35.315]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [45.293, 43.079, 41.575, 40.115, 38.759, 37.362, 36.127, 35.066, 34.082, 33.63, 33.572, 33.569, 33.469, 33.515, 33.452, 33.528, 33.397, 33.593, 33.441, 33.522, 33.517, 33.516, 33.347, 33.324, 33.079, 33.128, 33.366, 33.58, 33.579, 33.8]
},{
		name: 'DfRes 122000 G2e 3',
		data: [50.811, 47.643, 45.588, 43.617, 41.997, 40.5, 39.113, 38.004, 37.045, 36.52, 36.601, 36.559, 36.385, 36.714, 36.877, 36.827, 36.656, 36.984, 36.869, 36.964, 37.019, 36.764, 36.92, 36.899, 36.45, 36.435, 36.623, 36.535, 36.7, 33.275]
},{
		name: 'YADIF',
		data: [49.303, 45.953, 43.729, 41.776, 40.083, 38.516, 37.073, 35.903, 34.95, 34.528, 34.389, 34.443, 34.427, 34.471, 34.611, 34.513, 34.496, 34.6, 34.548, 34.693, 34.608, 34.606, 34.545, 34.538, 34.289, 34.372, 34.622, 34.706, 34.842, 34.568]
},{
		name: 'MSU Deinterlacer',
		data: [49.183, 46.319, 44.328, 42.398, 40.807, 39.413, 38.141, 37.029, 36.051, 35.445, 35.483, 35.377, 35.179, 35.544, 35.628, 35.633, 35.37, 35.773, 35.704, 35.757, 35.816, 35.521, 35.633, 35.696, 35.225, 35.226, 35.406, 35.378, 35.68, 35.233]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [45.258, 43.622, 42.296, 40.919, 39.548, 38.164, 36.842, 35.759, 34.798, 34.374, 34.243, 34.304, 34.298, 34.284, 34.328, 34.301, 34.323, 34.341, 34.289, 34.39, 34.304, 34.363, 34.225, 34.214, 34.081, 34.15, 34.456, 34.532, 34.665, 34.806]
},{
		name: 'Vapoursynth TDeintMod',
		data: [49.61, 46.543, 44.438, 42.519, 40.706, 39.151, 37.784, 36.604, 35.654, 35.236, 35.104, 35.106, 35.072, 35.08, 35.153, 35.101, 35.078, 35.122, 35.016, 35.026, 35.014, 35.071, 34.87, 34.873, 34.797, 34.724, 35.024, 35.152, 35.173, 35.236]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [50.261, 46.531, 44.355, 42.471, 40.679, 39.117, 37.712, 36.54, 35.54, 35.107, 34.938, 34.906, 34.836, 34.847, 34.937, 34.89, 34.87, 34.877, 34.82, 34.855, 34.847, 34.863, 34.68, 34.689, 34.599, 34.496, 34.818, 34.912, 35.003, 35.068]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [49.432, 46.376, 44.105, 42.191, 40.415, 38.823, 37.384, 36.204, 35.195, 34.754, 34.644, 34.588, 34.533, 34.565, 34.638, 34.618, 34.502, 34.622, 34.538, 34.568, 34.546, 34.576, 34.51, 34.465, 34.284, 34.2, 34.416, 34.591, 34.663, 34.772]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [49.445, 46.222, 44.048, 42.088, 40.403, 38.886, 37.49, 36.309, 35.372, 34.977, 34.986, 34.976, 34.891, 35.013, 35.114, 35.04, 34.946, 35.112, 35.032, 35.064, 35.066, 34.985, 35.067, 34.985, 34.649, 34.617, 34.841, 34.996, 35.098, 35.132]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [38.693, 33.995, 41.866, 30.534, 39.023, 27.339, 36.148, 25.361, 33.974, 23.9, 33.393, 24.661, 33.397, 24.693, 33.41, 24.983, 33.154, 25.038, 33.14, 24.937, 33.113, 25.246, 33.119, 25.427, 33.026, 24.577, 33.184, 23.651, 33.47, 24.507]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [50.373, 46.908, 44.841, 42.997, 41.209, 39.661, 38.3, 37.176, 36.206, 35.757, 35.705, 35.744, 35.742, 35.797, 35.835, 35.801, 35.774, 35.845, 35.757, 35.828, 35.786, 35.865, 35.7, 35.736, 35.595, 35.53, 35.765, 35.879, 35.909, 35.986]
},{
		name: 'Muksun Deinterlacer',
		data: [45.258, 43.622, 42.296, 40.919, 39.548, 38.164, 36.842, 35.759, 34.798, 34.374, 34.243, 34.304, 34.298, 34.284, 34.328, 34.301, 34.323, 34.341, 34.289, 34.39, 34.304, 34.363, 34.225, 34.214, 34.081, 34.15, 34.456, 34.532, 34.665, 34.806]
},{
		name: 'DfRes 121000 G2e 3',
		data: [50.857, 47.611, 45.58, 43.616, 42.003, 40.514, 39.111, 38.019, 37.027, 36.499, 36.559, 36.52, 36.324, 36.678, 36.828, 36.77, 36.615, 36.923, 36.828, 36.919, 36.98, 36.728, 36.869, 36.851, 36.418, 36.424, 36.621, 36.528, 36.682, 33.333]
},{
		name: 'DfRes 61000',
		data: [50.541, 47.45, 45.393, 43.501, 41.82, 40.313, 39.001, 37.831, 36.865, 36.38, 36.445, 36.435, 36.289, 36.583, 36.689, 36.651, 36.519, 36.775, 36.706, 36.782, 36.804, 36.591, 36.745, 36.727, 36.323, 36.257, 36.461, 36.418, 36.563, 33.7]
},{
		name: 'Kernel Deinterlacer',
		data: [50.261, 45.169, 43.491, 41.923, 40.274, 38.85, 37.51, 36.384, 35.412, 34.957, 34.8, 34.777, 34.695, 34.702, 34.797, 34.756, 34.719, 34.728, 34.676, 34.714, 34.702, 34.711, 34.533, 34.539, 34.455, 34.338, 34.663, 34.669, 34.81, 34.89]
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