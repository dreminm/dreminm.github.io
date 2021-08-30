$(function () {
    $(document).ready(function() {
            Highcharts.chart('detailed', {

            title: {
                text: 'VMAF to Frame Number: Sequence # 15'
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
		data: [93.99, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 93.593, 94.649, 91.794, 91.894, 90.873, 90.281, 90.208, 90.125, 90.036, 89.93, 89.847, 89.762, 89.702, 89.631, 89.585, 89.546, 89.505, 89.479, 89.457, 89.456]
},{
		name: 'PAL Interpolation',
		data: [90.939, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 96.135, 95.658, 97.781, 88.578, 92.119, 87.474, 90.444, 91.039, 92.094, 96.194, 96.739, 96.874, 96.93, 97.062, 97.161, 97.227, 97.281, 97.301, 97.305, 97.319, 97.31, 97.307, 97.321]
},{
		name: 'VapourSynth EEDI3',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 94.712, 92.759, 90.464, 90.065, 88.95, 88.133, 87.493, 87.478, 87.421, 87.356, 87.287, 87.245, 87.192, 87.142, 87.094, 87.058, 87.026, 86.997, 86.981, 86.966, 86.958]
},{
		name: 'Bob',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 92.283, 90.31, 87.887, 87.878, 86.7, 85.971, 85.366, 85.338, 85.284, 85.215, 85.156, 85.103, 85.065, 85.022, 84.99, 84.958, 84.933, 84.912, 84.894, 84.88, 84.877]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [91.556, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 89.254, 85.12, 91.156, 90.746, 90.175, 90.035, 94.578, 92.921, 96.939, 97.4, 97.446, 97.54, 97.547, 97.575, 97.593, 97.628, 97.599, 97.577, 97.56, 97.55, 97.519, 97.498, 97.5]
},{
		name: 'YADIF',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 94.465, 93.523, 92.97, 93.414, 94.791, 94.57, 96.96, 97.677, 97.683, 97.655, 97.626, 97.592, 97.564, 97.547, 97.526, 97.508, 97.498, 97.487, 97.476, 97.465, 97.458]
},{
		name: 'MSU Deinterlacer',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 95.071, 95.0, 94.212, 95.322, 94.218, 94.656, 95.874, 96.579, 97.101, 97.354, 97.464, 97.545, 97.543, 97.516, 97.531, 97.521, 97.507, 97.505, 97.484, 97.466, 96.18]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [93.654, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 98.728, 100.0, 90.935, 90.982, 89.093, 89.201, 88.214, 87.817, 87.854, 87.885, 87.935, 87.957, 88.003, 87.98, 87.984, 87.95, 87.918, 87.884, 87.857, 87.804, 87.775, 87.803]
},{
		name: 'VapourSynth TDeintMod',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 93.661, 93.027, 92.497, 92.929, 94.411, 94.459, 96.712, 97.395, 97.594, 97.56, 97.549, 97.566, 97.528, 97.534, 97.501, 97.48, 97.458, 97.451, 97.434, 97.428, 97.431]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [89.833, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 88.578, 83.336, 89.04, 89.251, 84.382, 89.436, 90.219, 92.764, 93.572, 97.023, 97.681, 97.604, 97.544, 97.521, 97.458, 97.444, 97.453, 97.427, 97.464, 97.477, 97.478, 97.49, 97.49]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 99.896, 100.0, 100.0, 91.53, 90.108, 87.97, 88.487, 88.693, 88.301, 88.858, 89.751, 89.764, 89.707, 89.651, 89.592, 89.553, 89.515, 89.479, 89.446, 89.421, 89.405, 89.383, 89.373, 89.367]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 97.075, 97.421, 97.86, 94.135, 92.438, 93.188, 93.605, 95.056, 95.166, 97.273, 97.817, 97.801, 97.764, 97.721, 97.677, 97.635, 97.606, 97.578, 97.551, 97.531, 97.513, 97.494, 97.481, 86.722]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [17.007, 4.304, 100.0, 27.474, 100.0, 0.0, 100.0, 0.0, 89.093, 17.023, 81.293, 41.637, 85.059, 66.825, 88.583, 90.04, 93.794, 94.263, 95.06, 95.287, 95.408, 95.792, 95.67, 96.014, 95.759, 96.095, 95.835, 96.066, 95.817, 95.983]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 95.297, 94.261, 92.676, 92.016, 92.869, 91.3, 92.023, 92.123, 92.081, 92.043, 91.972, 91.92, 91.873, 91.839, 91.817, 91.787, 91.772, 91.754, 91.73, 91.714, 91.7]
},{
		name: 'Muksun Deinterlacer',
		data: [93.654, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 98.728, 100.0, 90.935, 90.982, 89.093, 89.201, 88.214, 87.817, 87.854, 87.885, 87.935, 87.957, 88.003, 87.98, 87.984, 87.95, 87.918, 87.884, 87.857, 87.804, 87.775, 87.803]
},{
		name: 'Kernel Deinterlacer',
		data: [89.833, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 87.543, 82.913, 88.896, 88.968, 84.177, 89.378, 90.192, 92.923, 93.737, 97.165, 97.835, 97.791, 97.72, 97.705, 97.627, 97.599, 97.569, 97.561, 97.551, 97.54, 97.513, 97.498, 97.498]
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