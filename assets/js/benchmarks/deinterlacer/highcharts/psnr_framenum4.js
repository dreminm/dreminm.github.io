$(function () {
    $(document).ready(function() {
            Highcharts.chart('detailed', {

            title: {
                text: 'PSNR to Frame Number: Sequence # 4'
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
		data: [38.497, 40.177, 39.526, 40.727, 43.439, 43.087, 42.401, 43.029, 41.468, 41.64, 41.771, 41.376, 41.4, 40.636, 40.9, 39.206, 40.038, 40.904, 38.702, 40.188, 41.08, 40.636, 39.064, 40.128, 39.098, 39.564, 39.928, 41.846, 40.921, 42.55]
},{
		name: 'PAL Interpolation',
		data: [33.426, 32.222, 31.715, 32.898, 35.342, 36.051, 34.959, 35.543, 33.664, 33.277, 33.203, 33.608, 33.426, 33.308, 34.053, 33.568, 32.803, 33.61, 31.917, 32.538, 33.158, 33.703, 32.104, 31.718, 32.044, 32.752, 32.837, 34.244, 33.385, 34.333]
},{
		name: 'VapourSynth EEDI3',
		data: [38.119, 39.958, 38.933, 40.354, 43.585, 43.211, 42.278, 42.977, 41.283, 41.351, 41.444, 41.207, 41.111, 40.68, 40.798, 39.119, 39.675, 40.68, 38.169, 39.854, 40.859, 40.342, 38.647, 39.606, 38.674, 39.31, 39.544, 41.671, 40.646, 42.32]
},{
		name: 'Bob',
		data: [36.826, 38.393, 37.452, 38.981, 42.834, 42.394, 41.125, 41.844, 40.067, 39.986, 40.114, 40.174, 39.727, 39.79, 39.319, 38.231, 38.267, 39.249, 36.745, 38.383, 39.309, 38.929, 37.145, 37.734, 37.211, 37.848, 37.985, 40.091, 39.181, 41.015]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [33.931, 35.04, 33.956, 35.292, 37.876, 37.778, 36.876, 37.432, 35.957, 35.87, 35.801, 36.181, 35.772, 35.765, 36.049, 35.059, 34.805, 35.685, 33.791, 35.012, 35.553, 35.501, 33.947, 34.168, 34.435, 34.723, 34.778, 36.313, 35.217, 36.569]
},{
		name: 'YADIF',
		data: [35.626, 36.532, 36.502, 37.729, 41.653, 41.161, 39.939, 41.014, 38.489, 38.713, 38.621, 38.718, 38.422, 37.847, 39.029, 37.323, 37.129, 38.768, 36.085, 37.704, 38.18, 37.987, 36.318, 36.566, 36.278, 37.354, 37.404, 39.411, 37.971, 38.776]
},{
		name: 'MSU Deinterlacer',
		data: [36.416, 37.91, 37.507, 38.216, 40.716, 40.622, 39.555, 40.035, 38.24, 38.857, 38.904, 38.536, 38.249, 37.893, 38.399, 37.431, 37.441, 37.858, 36.882, 38.119, 37.974, 38.335, 36.948, 37.083, 36.425, 37.236, 37.91, 38.771, 37.801, 37.937]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [33.981, 34.553, 34.639, 35.661, 39.189, 39.006, 37.904, 38.902, 36.44, 36.592, 36.398, 36.755, 37.02, 35.801, 37.243, 36.184, 35.281, 36.9, 34.328, 35.509, 36.055, 36.658, 34.455, 34.266, 34.891, 35.884, 35.947, 37.494, 36.264, 38.002]
},{
		name: 'VapourSynth TDeintMod',
		data: [37.39, 39.347, 38.164, 39.687, 43.117, 42.767, 41.629, 42.188, 40.813, 40.753, 40.9, 40.728, 40.3, 40.381, 39.81, 38.528, 39.009, 39.756, 37.288, 39.161, 40.189, 39.445, 37.847, 38.815, 37.753, 38.429, 38.571, 40.63, 39.978, 41.716]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [36.797, 38.001, 36.986, 38.546, 41.775, 41.765, 40.765, 41.337, 39.789, 39.512, 39.706, 39.738, 39.307, 39.308, 38.965, 37.829, 37.868, 38.734, 36.411, 37.819, 38.566, 38.408, 36.81, 37.322, 36.679, 37.362, 37.494, 39.47, 38.767, 40.526]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [36.28, 38.631, 36.917, 38.791, 41.685, 42.084, 41.04, 41.474, 40.211, 39.926, 39.937, 40.011, 39.721, 39.471, 39.122, 37.756, 37.734, 38.443, 36.416, 37.707, 38.017, 38.225, 36.786, 36.918, 36.683, 37.032, 37.538, 39.315, 38.857, 40.708]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [37.046, 38.745, 37.792, 39.222, 42.613, 42.138, 41.114, 41.688, 40.3, 40.391, 40.273, 40.236, 39.552, 39.626, 39.401, 38.148, 38.251, 39.156, 36.888, 38.674, 39.117, 38.88, 37.573, 37.94, 37.53, 37.896, 38.206, 40.171, 39.261, 41.471]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [23.395, 22.516, 30.58, 22.686, 33.748, 18.901, 34.656, 18.701, 35.054, 22.767, 35.376, 20.893, 35.689, 19.973, 35.602, 19.525, 34.241, 19.817, 33.385, 20.488, 33.28, 19.126, 33.078, 21.477, 33.385, 19.865, 34.17, 19.611, 34.312, 20.148]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [38.244, 39.86, 39.073, 40.279, 43.077, 42.798, 42.072, 42.701, 41.142, 41.389, 41.477, 41.357, 41.046, 40.461, 40.733, 39.077, 39.79, 40.688, 38.465, 39.848, 40.651, 40.31, 38.596, 39.351, 38.796, 39.279, 39.613, 41.172, 40.56, 42.112]
},{
		name: 'Muksun Deinterlacer',
		data: [33.981, 34.553, 34.639, 35.661, 39.189, 39.006, 37.904, 38.902, 36.44, 36.592, 36.398, 36.755, 37.02, 35.801, 37.243, 36.184, 35.281, 36.9, 34.328, 35.509, 36.055, 36.658, 34.455, 34.266, 34.891, 35.884, 35.947, 37.494, 36.264, 38.002]
},{
		name: 'Kernel Deinterlacer',
		data: [36.797, 37.376, 36.466, 37.78, 40.01, 40.289, 39.733, 39.874, 39.025, 38.629, 38.655, 38.506, 38.433, 38.33, 38.004, 37.153, 37.224, 37.821, 35.98, 37.134, 37.672, 37.593, 36.338, 36.67, 36.086, 36.725, 36.909, 38.463, 38.09, 39.29]
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