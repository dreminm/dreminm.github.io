$(function () {
    $(document).ready(function() {
            Highcharts.chart('detailed', {

            title: {
                text: 'VMAF to Frame Number: Sequence # 13'
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
		data: [94.187, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'DfRes 119000',
		data: [98.069, 98.7, 99.532, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 98.911]
},{
		name: 'PAL Interpolation',
		data: [81.86, 81.017, 77.443, 77.192, 79.283, 79.207, 81.262, 82.356, 83.815, 85.065, 85.619, 85.998, 87.482, 88.764, 88.778, 89.433, 88.652, 88.608, 88.194, 88.097, 87.924, 87.866, 87.444, 88.015, 87.747, 87.838, 87.319, 88.508, 90.333, 90.601]
},{
		name: 'Vapoursynth EEDI3',
		data: [97.617, 97.205, 97.881, 99.631, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 99.42]
},{
		name: 'Bob',
		data: [95.597, 94.38, 94.54, 96.072, 96.738, 96.393, 97.066, 97.284, 97.389, 98.04, 97.552, 97.112, 98.198, 99.094, 99.032, 99.893, 98.6, 97.891, 97.975, 97.83, 97.894, 97.88, 96.365, 96.622, 96.318, 96.04, 95.803, 96.954, 96.02, 95.493]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [81.902, 83.936, 86.771, 89.125, 91.32, 91.749, 92.967, 93.544, 94.493, 95.917, 96.061, 96.308, 97.727, 98.71, 99.148, 99.759, 98.662, 98.583, 98.266, 98.26, 98.281, 97.945, 98.021, 98.009, 98.067, 98.212, 97.061, 97.898, 97.98, 98.057]
},{
		name: 'DfRes 122000 G2e 3',
		data: [98.416, 99.027, 99.886, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 98.473]
},{
		name: 'YADIF',
		data: [94.687, 93.647, 93.466, 94.95, 95.417, 94.807, 95.058, 94.956, 95.053, 95.673, 95.025, 94.314, 95.459, 96.081, 96.027, 96.535, 95.541, 94.946, 94.979, 94.785, 94.775, 94.883, 94.446, 94.647, 94.757, 93.685, 93.75, 94.789, 93.954, 94.429]
},{
		name: 'MSU Deinterlacer',
		data: [94.774, 92.562, 93.391, 95.749, 97.022, 97.147, 98.331, 98.669, 98.853, 99.526, 99.229, 98.697, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 95.279]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [78.225, 82.301, 86.115, 88.872, 91.222, 91.867, 92.853, 93.519, 94.306, 95.609, 95.686, 95.548, 96.944, 97.728, 97.474, 98.188, 96.836, 96.775, 96.52, 96.292, 96.555, 95.864, 95.115, 95.215, 94.664, 94.768, 94.408, 94.759, 94.662, 94.715]
},{
		name: 'Vapoursynth TDeintMod',
		data: [99.413, 98.431, 99.266, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [91.743, 97.704, 97.557, 98.65, 99.829, 99.592, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [96.083, 95.317, 95.942, 97.248, 98.172, 97.89, 98.107, 98.238, 98.484, 99.455, 99.297, 99.164, 99.936, 100.0, 100.0, 100.0, 100.0, 100.0, 99.926, 99.983, 99.974, 100.0, 99.497, 100.0, 99.954, 99.737, 98.853, 100.0, 99.421, 98.9]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [97.169, 97.704, 98.741, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [58.366, 30.119, 89.096, 29.717, 93.921, 28.401, 92.672, 24.175, 90.342, 29.633, 90.808, 34.622, 91.952, 34.483, 90.367, 36.357, 83.909, 41.063, 82.349, 42.164, 81.263, 42.777, 82.201, 45.492, 82.677, 47.683, 81.569, 49.896, 88.303, 50.154]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [97.831, 97.813, 98.495, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'Muksun Deinterlacer',
		data: [78.225, 82.301, 86.115, 88.872, 91.222, 91.867, 92.853, 93.519, 94.306, 95.609, 95.686, 95.548, 96.944, 97.728, 97.474, 98.188, 96.836, 96.775, 96.52, 96.292, 96.555, 95.864, 95.115, 95.215, 94.664, 94.768, 94.408, 94.759, 94.662, 94.715]
},{
		name: 'DfRes 121000 G2e 3',
		data: [98.146, 98.812, 99.893, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 99.093]
},{
		name: 'DfRes 61000',
		data: [97.527, 98.295, 99.573, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 97.819]
},{
		name: 'Kernel Deinterlacer',
		data: [91.743, 90.846, 92.831, 93.732, 95.596, 95.96, 97.298, 98.167, 99.389, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
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