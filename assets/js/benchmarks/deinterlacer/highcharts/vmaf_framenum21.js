$(function () {
    $(document).ready(function() {
            Highcharts.chart('detailed', {

            title: {
                text: 'VMAF to Frame Number: Sequence # 21'
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
		data: [72.97, 91.558, 89.758, 87.729, 91.237, 86.432, 91.123, 90.965, 89.555, 94.116, 89.084, 93.042, 91.902, 90.707, 92.886, 90.052, 91.259, 91.846, 89.203, 93.347, 89.257, 91.234, 90.201, 88.192, 92.586, 89.399, 91.485, 91.306, 89.107, 94.223]
},{
		name: 'PAL Interpolation',
		data: [59.673, 65.945, 66.009, 63.819, 69.327, 61.533, 67.179, 67.445, 65.222, 72.946, 65.277, 71.383, 70.297, 67.651, 73.047, 66.9, 70.704, 70.972, 66.75, 73.781, 66.223, 69.663, 69.518, 65.065, 72.363, 66.601, 69.417, 69.609, 66.251, 73.908]
},{
		name: 'VapourSynth EEDI3',
		data: [83.173, 86.341, 84.775, 83.476, 85.605, 82.504, 85.823, 86.328, 86.154, 88.675, 85.955, 87.715, 87.419, 86.989, 87.341, 86.865, 86.136, 86.961, 85.811, 87.66, 85.954, 86.338, 85.236, 84.915, 86.801, 86.057, 86.386, 86.239, 85.826, 88.199]
},{
		name: 'Bob',
		data: [79.355, 82.132, 80.718, 79.61, 81.408, 78.564, 81.441, 82.092, 82.17, 84.459, 82.394, 83.784, 83.601, 83.287, 84.053, 83.041, 82.735, 83.297, 82.229, 84.529, 82.181, 82.912, 81.785, 81.129, 83.587, 82.264, 82.671, 82.678, 82.016, 84.409]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [62.633, 81.695, 80.264, 78.747, 81.691, 76.501, 81.866, 80.544, 79.364, 83.177, 77.068, 82.781, 80.87, 79.077, 82.837, 77.163, 80.758, 80.502, 77.64, 83.178, 76.905, 81.292, 79.381, 77.221, 82.747, 77.255, 81.227, 79.178, 76.716, 83.395]
},{
		name: 'YADIF',
		data: [74.474, 79.561, 77.956, 76.208, 79.48, 74.683, 78.903, 78.737, 77.019, 80.91, 75.243, 79.32, 77.884, 76.205, 79.23, 75.334, 77.31, 78.056, 75.16, 79.936, 75.348, 77.734, 76.889, 74.281, 79.649, 75.652, 77.636, 77.133, 74.644, 75.324]
},{
		name: 'MSU Deinterlacer',
		data: [80.809, 87.823, 87.159, 86.615, 89.23, 83.35, 90.264, 87.987, 87.466, 89.593, 83.623, 90.684, 88.426, 86.995, 88.547, 83.522, 88.601, 87.548, 85.027, 89.378, 83.544, 88.996, 86.543, 84.063, 88.721, 83.915, 88.626, 85.853, 83.429, 84.882]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [62.717, 81.138, 79.587, 77.666, 81.903, 75.781, 81.261, 80.981, 79.449, 84.185, 78.304, 83.133, 81.749, 80.225, 83.386, 79.085, 81.209, 82.198, 78.973, 83.694, 78.931, 81.532, 80.675, 77.802, 83.388, 79.569, 81.356, 81.081, 78.611, 85.12]
},{
		name: 'VapourSynth TDeintMod',
		data: [83.739, 87.168, 85.486, 84.014, 86.235, 82.863, 86.511, 87.007, 86.928, 89.553, 86.685, 88.428, 87.906, 87.563, 88.557, 87.382, 86.959, 87.764, 86.432, 88.847, 86.581, 87.327, 86.249, 85.633, 87.892, 86.832, 87.276, 87.326, 86.624, 89.255]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [68.46, 86.256, 84.684, 82.982, 85.961, 81.785, 85.94, 85.724, 84.631, 88.412, 84.491, 87.764, 86.933, 85.964, 88.277, 85.392, 86.663, 87.261, 84.833, 88.971, 84.602, 86.754, 85.707, 83.66, 88.149, 84.725, 86.525, 86.368, 84.282, 88.786]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [81.076, 84.48, 83.396, 81.729, 84.372, 80.758, 84.337, 84.837, 83.94, 86.626, 83.752, 85.251, 85.371, 84.283, 85.925, 84.405, 84.009, 85.191, 83.222, 86.431, 83.397, 84.338, 83.816, 82.244, 85.822, 83.926, 84.215, 84.811, 83.476, 86.866]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [81.531, 87.748, 85.848, 83.919, 87.197, 82.743, 87.099, 86.276, 85.106, 89.106, 83.277, 87.388, 85.678, 83.832, 87.388, 83.594, 85.09, 85.567, 82.687, 87.858, 82.922, 85.347, 84.299, 82.029, 87.188, 83.327, 85.296, 85.16, 82.977, 90.198]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [21.061, 33.106, 62.442, 25.322, 71.498, 18.558, 72.399, 25.884, 74.589, 28.224, 72.036, 26.26, 72.723, 20.487, 73.683, 19.001, 70.993, 19.347, 70.914, 20.791, 67.337, 21.006, 71.807, 18.94, 73.03, 15.95, 71.076, 14.035, 72.029, 33.713]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [83.765, 86.937, 85.583, 84.32, 86.562, 83.17, 86.836, 87.12, 86.791, 89.49, 86.299, 88.051, 87.544, 87.182, 87.86, 87.104, 86.328, 87.527, 86.226, 88.195, 86.25, 86.745, 85.703, 85.396, 87.42, 86.507, 86.84, 86.901, 86.221, 88.918]
},{
		name: 'Muksun Deinterlacer',
		data: [62.717, 81.138, 79.587, 77.666, 81.903, 75.781, 81.261, 80.981, 79.449, 84.185, 78.304, 83.133, 81.749, 80.225, 83.386, 79.085, 81.209, 82.198, 78.973, 83.694, 78.931, 81.532, 80.675, 77.802, 83.388, 79.569, 81.356, 81.081, 78.611, 85.12]
},{
		name: 'Kernel Deinterlacer',
		data: [68.46, 85.684, 84.351, 82.588, 85.618, 81.424, 85.454, 85.33, 84.083, 87.929, 83.965, 87.097, 86.403, 85.358, 87.715, 84.912, 85.98, 86.814, 84.262, 88.39, 84.126, 86.085, 85.263, 83.178, 87.622, 84.304, 85.911, 85.9, 83.768, 88.142]
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