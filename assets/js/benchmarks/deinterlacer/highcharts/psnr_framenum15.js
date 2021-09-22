$(function () {
    $(document).ready(function() {
            Highcharts.chart('detailed', {

            title: {
                text: 'PSNR to Frame Number: Sequence # 15'
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
		data: [52.07, 47.668, 51.213, 42.887, 44.251, 39.754, 40.815, 41.191, 39.512, 39.211, 38.364, 39.82, 39.098, 39.243, 39.658, 39.504, 39.476, 39.455, 39.443, 39.427, 39.423, 39.415, 39.407, 39.399, 39.395, 39.39, 39.389, 39.386, 39.386, 39.385]
},{
		name: 'DfRes 119000',
		data: [50.988, 47.112, 48.928, 40.649, 44.166, 37.113, 39.492, 39.227, 38.144, 37.568, 38.401, 41.269, 39.601, 43.808, 45.992, 52.296, 52.59, 52.767, 52.931, 53.096, 53.201, 53.322, 53.494, 53.596, 53.672, 53.791, 53.876, 53.905, 53.983, 41.905]
},{
		name: 'PAL Interpolation',
		data: [44.721, 40.053, 42.561, 36.425, 37.089, 32.922, 34.757, 32.937, 32.325, 33.487, 33.844, 34.446, 33.685, 34.556, 36.329, 36.86, 46.564, 49.204, 49.516, 49.762, 50.317, 50.848, 51.262, 51.895, 52.416, 52.897, 53.383, 53.869, 54.28, 54.451]
},{
		name: 'Vapoursynth EEDI3',
		data: [51.801, 46.584, 47.784, 41.848, 42.322, 38.005, 38.759, 39.382, 37.808, 37.901, 36.973, 37.54, 37.351, 37.198, 37.373, 37.186, 37.157, 37.142, 37.129, 37.115, 37.11, 37.102, 37.092, 37.085, 37.078, 37.074, 37.073, 37.071, 37.069, 37.066]
},{
		name: 'Bob',
		data: [48.466, 43.827, 45.991, 39.357, 40.44, 36.336, 37.366, 37.702, 36.385, 36.597, 35.771, 36.041, 35.992, 35.775, 35.892, 35.748, 35.72, 35.705, 35.691, 35.678, 35.672, 35.664, 35.657, 35.649, 35.645, 35.64, 35.638, 35.636, 35.634, 35.633]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [41.044, 35.311, 40.303, 36.358, 35.616, 32.804, 30.266, 25.721, 24.089, 26.851, 34.764, 34.367, 34.659, 38.744, 37.752, 48.798, 52.793, 53.446, 54.327, 54.99, 56.051, 57.141, 58.246, 59.253, 60.458, 61.543, 62.661, 63.975, 65.26, 66.583]
},{
		name: 'DfRes 122000 G2e 3',
		data: [49.688, 46.939, 48.004, 40.775, 43.644, 37.108, 39.543, 39.798, 38.542, 37.899, 38.262, 41.628, 40.248, 43.644, 46.758, 51.464, 51.765, 51.866, 51.966, 52.082, 52.204, 52.329, 52.435, 52.573, 52.626, 52.682, 52.786, 52.856, 52.97, 40.583]
},{
		name: 'YADIF',
		data: [50.09, 46.463, 47.221, 40.489, 42.197, 37.601, 37.971, 38.974, 37.476, 37.875, 37.444, 38.715, 39.296, 40.953, 42.11, 49.559, 62.044, 64.078, 64.426, 64.807, 65.467, 66.053, 66.612, 67.199, 68.004, 68.896, 69.701, 70.789, 71.675, 72.738]
},{
		name: 'MSU Deinterlacer',
		data: [44.085, 42.129, 42.447, 42.179, 39.103, 37.946, 37.087, 39.368, 38.437, 37.331, 38.236, 39.507, 40.618, 38.565, 42.419, 44.972, 46.511, 48.598, 50.524, 52.201, 53.858, 54.901, 55.085, 55.773, 56.193, 56.191, 56.739, 56.834, 56.927, 47.95]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [51.881, 47.812, 47.482, 42.335, 42.666, 38.185, 38.595, 39.581, 37.7, 37.934, 37.068, 37.417, 37.389, 37.419, 37.441, 37.288, 37.204, 37.233, 37.236, 37.263, 37.288, 37.258, 37.269, 37.284, 37.291, 37.276, 37.285, 37.247, 37.24, 37.284]
},{
		name: 'Vapoursynth TDeintMod',
		data: [48.022, 43.472, 46.931, 39.721, 41.157, 36.228, 37.984, 37.708, 36.424, 35.861, 36.711, 37.985, 38.052, 40.092, 41.708, 47.021, 51.191, 54.052, 54.513, 55.126, 57.172, 58.082, 60.742, 61.126, 61.515, 61.805, 62.537, 63.423, 64.322, 65.328]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [48.45, 43.819, 45.63, 37.576, 37.665, 33.653, 30.67, 25.715, 23.247, 26.479, 35.989, 31.992, 36.56, 36.212, 39.161, 40.659, 47.825, 53.865, 53.815, 54.061, 54.695, 55.162, 55.617, 56.864, 57.612, 59.204, 60.481, 62.353, 64.91, 65.882]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [48.703, 43.812, 45.49, 39.305, 40.075, 36.268, 37.291, 37.3, 36.421, 36.517, 36.129, 36.562, 36.765, 37.905, 38.295, 39.47, 40.62, 40.685, 40.672, 40.657, 40.656, 40.651, 40.644, 40.637, 40.634, 40.633, 40.632, 40.632, 40.634, 40.634]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [48.715, 43.691, 46.26, 38.279, 39.968, 35.396, 31.048, 29.565, 28.58, 37.309, 36.131, 38.412, 38.818, 40.654, 43.015, 51.314, 60.63, 61.58, 61.932, 62.48, 63.092, 63.72, 64.375, 65.094, 65.881, 66.79, 67.761, 68.949, 69.946, 36.537]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [15.949, 11.16, 25.016, 8.353, 31.159, 7.881, 35.487, 12.952, 34.488, 16.121, 34.129, 21.923, 35.805, 25.158, 39.067, 37.506, 44.522, 45.512, 45.919, 46.649, 46.147, 47.187, 46.426, 47.52, 46.643, 47.725, 46.758, 47.784, 46.79, 47.624]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [49.973, 47.227, 49.179, 42.601, 43.562, 38.304, 38.56, 39.571, 38.128, 38.911, 38.765, 39.074, 38.406, 40.978, 40.839, 42.081, 42.293, 42.277, 42.271, 42.234, 42.228, 42.21, 42.214, 42.221, 42.225, 42.234, 42.241, 42.239, 42.243, 42.241]
},{
		name: 'Muksun Deinterlacer',
		data: [51.881, 47.812, 47.482, 42.335, 42.666, 38.185, 38.595, 39.581, 37.7, 37.934, 37.068, 37.417, 37.389, 37.419, 37.441, 37.288, 37.204, 37.233, 37.236, 37.263, 37.288, 37.258, 37.269, 37.284, 37.291, 37.276, 37.285, 37.247, 37.24, 37.284]
},{
		name: 'DfRes 121000 G2e 3',
		data: [49.874, 47.25, 48.132, 40.959, 43.627, 37.089, 39.695, 39.587, 38.499, 37.895, 38.323, 41.557, 39.685, 43.826, 46.194, 51.236, 51.547, 51.62, 51.762, 51.882, 51.982, 52.13, 52.166, 52.31, 52.373, 52.418, 52.451, 52.545, 52.629, 40.211]
},{
		name: 'DfRes 61000',
		data: [49.602, 44.731, 47.971, 40.281, 43.542, 36.003, 38.761, 38.778, 38.101, 38.141, 38.237, 41.869, 39.915, 43.577, 47.056, 51.835, 52.075, 52.165, 52.254, 52.305, 52.319, 52.362, 52.429, 52.487, 52.528, 52.564, 52.593, 52.634, 52.657, 41.019]
},{
		name: 'Kernel Deinterlacer',
		data: [48.45, 43.78, 45.303, 37.481, 37.555, 33.361, 29.746, 25.358, 22.951, 26.267, 35.831, 31.807, 36.437, 36.159, 39.233, 40.895, 48.223, 55.339, 55.875, 56.254, 57.629, 57.903, 58.702, 59.319, 60.546, 62.143, 63.635, 64.984, 65.857, 66.798]
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