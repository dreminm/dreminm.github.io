$(function () {
    $(document).ready(function() {
            Highcharts.chart('detailed', {

            title: {
                text: 'SSIM to Frame Number: Sequence # 11'
            },

            subtitle: {
                text: ''
            },

            yAxis: {
                title: {
                    text: 'SSIM'
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
		data: [0.82, 0.818, 0.806, 0.797, 0.786, 0.781, 0.774, 0.768, 0.763, 0.764, 0.755, 0.754, 0.755, 0.761, 0.761, 0.77, 0.756, 0.754, 0.751, 0.757, 0.754, 0.763, 0.775, 0.773, 0.77, 0.776, 0.777, 0.784, 0.781, 0.781]
},{
		name: 'PAL Interpolation',
		data: [0.753, 0.687, 0.67, 0.659, 0.651, 0.646, 0.648, 0.647, 0.649, 0.653, 0.66, 0.66, 0.657, 0.657, 0.657, 0.659, 0.653, 0.674, 0.67, 0.653, 0.657, 0.682, 0.663, 0.661, 0.66, 0.664, 0.664, 0.665, 0.659, 0.663]
},{
		name: 'VapourSynth EEDI3',
		data: [0.812, 0.811, 0.799, 0.791, 0.781, 0.776, 0.771, 0.771, 0.766, 0.77, 0.763, 0.758, 0.758, 0.763, 0.763, 0.771, 0.755, 0.753, 0.746, 0.752, 0.747, 0.757, 0.772, 0.77, 0.767, 0.773, 0.772, 0.78, 0.777, 0.779]
},{
		name: 'Bob',
		data: [0.774, 0.769, 0.758, 0.75, 0.74, 0.738, 0.732, 0.729, 0.728, 0.731, 0.717, 0.722, 0.723, 0.73, 0.727, 0.738, 0.724, 0.724, 0.721, 0.73, 0.728, 0.738, 0.752, 0.751, 0.75, 0.755, 0.758, 0.764, 0.761, 0.76]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [0.763, 0.713, 0.696, 0.708, 0.713, 0.718, 0.718, 0.714, 0.712, 0.716, 0.71, 0.707, 0.708, 0.712, 0.709, 0.714, 0.702, 0.7, 0.698, 0.704, 0.702, 0.71, 0.72, 0.718, 0.718, 0.726, 0.726, 0.725, 0.727, 0.725]
},{
		name: 'YADIF',
		data: [0.735, 0.726, 0.717, 0.711, 0.704, 0.706, 0.705, 0.705, 0.709, 0.71, 0.695, 0.7, 0.702, 0.705, 0.703, 0.706, 0.7, 0.697, 0.697, 0.699, 0.701, 0.709, 0.714, 0.712, 0.712, 0.717, 0.715, 0.718, 0.715, 0.688]
},{
		name: 'MSU Deinterlacer',
		data: [0.786, 0.786, 0.776, 0.768, 0.758, 0.755, 0.751, 0.747, 0.745, 0.746, 0.734, 0.737, 0.74, 0.745, 0.744, 0.753, 0.742, 0.74, 0.738, 0.743, 0.742, 0.751, 0.764, 0.762, 0.762, 0.767, 0.768, 0.774, 0.77, 0.766]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [0.744, 0.737, 0.724, 0.714, 0.706, 0.702, 0.7, 0.699, 0.702, 0.705, 0.693, 0.699, 0.699, 0.7, 0.695, 0.699, 0.693, 0.691, 0.689, 0.692, 0.692, 0.698, 0.707, 0.703, 0.703, 0.707, 0.708, 0.712, 0.709, 0.707]
},{
		name: 'VapourSynth TDeintMod',
		data: [0.759, 0.752, 0.741, 0.733, 0.723, 0.722, 0.715, 0.712, 0.712, 0.715, 0.698, 0.705, 0.706, 0.714, 0.709, 0.722, 0.708, 0.708, 0.706, 0.716, 0.714, 0.725, 0.74, 0.739, 0.738, 0.744, 0.747, 0.753, 0.751, 0.75]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [0.774, 0.739, 0.733, 0.729, 0.722, 0.723, 0.718, 0.712, 0.714, 0.716, 0.7, 0.71, 0.711, 0.719, 0.713, 0.725, 0.714, 0.72, 0.718, 0.72, 0.718, 0.732, 0.736, 0.741, 0.74, 0.746, 0.749, 0.753, 0.752, 0.754]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [0.671, 0.675, 0.679, 0.683, 0.681, 0.688, 0.682, 0.675, 0.682, 0.682, 0.666, 0.679, 0.682, 0.688, 0.683, 0.694, 0.686, 0.695, 0.695, 0.697, 0.695, 0.709, 0.708, 0.717, 0.716, 0.725, 0.727, 0.726, 0.729, 0.733]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [0.738, 0.725, 0.717, 0.712, 0.705, 0.706, 0.702, 0.7, 0.702, 0.702, 0.685, 0.691, 0.695, 0.701, 0.698, 0.708, 0.696, 0.696, 0.695, 0.703, 0.703, 0.716, 0.727, 0.728, 0.726, 0.735, 0.733, 0.736, 0.736, 0.745]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [0.485, 0.095, 0.741, 0.065, 0.725, 0.054, 0.72, 0.062, 0.721, 0.065, 0.711, 0.043, 0.717, 0.041, 0.715, 0.054, 0.712, 0.039, 0.709, 0.029, 0.711, 0.04, 0.723, 0.042, 0.718, 0.072, 0.724, 0.047, 0.725, 0.064]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [0.795, 0.79, 0.78, 0.771, 0.761, 0.758, 0.752, 0.747, 0.743, 0.745, 0.734, 0.734, 0.736, 0.743, 0.742, 0.753, 0.738, 0.737, 0.733, 0.741, 0.737, 0.747, 0.761, 0.759, 0.757, 0.762, 0.764, 0.77, 0.768, 0.768]
},{
		name: 'Muksun Deinterlacer',
		data: [0.744, 0.737, 0.724, 0.714, 0.706, 0.702, 0.7, 0.699, 0.702, 0.705, 0.693, 0.699, 0.699, 0.7, 0.695, 0.699, 0.693, 0.691, 0.689, 0.692, 0.692, 0.698, 0.707, 0.703, 0.703, 0.707, 0.708, 0.712, 0.709, 0.707]
},{
		name: 'Kernel Deinterlacer',
		data: [0.774, 0.735, 0.728, 0.725, 0.718, 0.719, 0.714, 0.708, 0.71, 0.713, 0.697, 0.707, 0.709, 0.716, 0.71, 0.722, 0.71, 0.717, 0.715, 0.717, 0.716, 0.73, 0.732, 0.737, 0.736, 0.743, 0.746, 0.748, 0.748, 0.75]
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