$(function () {
    $(document).ready(function() {
            Highcharts.chart('detailed', {

            title: {
                text: 'PSNR to Frame Number: sequence № 36'
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
		name: 'YADIF',
		data: [29.83385927307184, 29.964109562534556, 30.052402221919685, 30.042264147459502, 29.9971461140504, 29.65969321550189, 29.276650825385648, 29.55868041361281, 29.86495343653795, 29.80529984129959, 29.710296977110925, 28.226015615602652, 28.531101507925968, 27.996646380018397, 27.41719735010744, 29.329087792142616]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [30.83674258797144, 31.335010892859145, 31.363092786352034, 31.318293148365797, 31.2877634904985, 30.85081326897561, 30.49729758615269, 30.85752196446427, 31.22112928200969, 31.501582228342237, 31.326160282565297, 29.54254765829626, 30.161276116310223, 29.458193553278576, 29.76068770493305, 30.754540836758316]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [30.28344639096188, 31.05801149001188, 30.975684638680764, 31.00175290772873, 30.971140534172783, 30.56855888749651, 30.23065933845444, 30.549779813863577, 30.903592756754016, 31.01892022046902, 30.658444731241268, 29.125117372288987, 29.95004745657407, 29.10163154232843, 29.23279778218898, 30.375305724214353]
},{
		name: 'Kernel Deinterlacer',
		data: [31.41581744809691, 30.905840359336338, 31.11820119905653, 31.13884107335115, 31.14135707871768, 30.894710330913014, 30.536243643474602, 30.752334546841606, 31.122784475595, 31.047617007284998, 30.99804021828744, 29.373732075176786, 29.91736426562231, 29.25361551038861, 29.49506546691383, 30.60743764660379]
},{
		name: 'NNEDI',
		data: [32.42179825833629, 32.40470418894126, 32.68332355070209, 32.778072463797336, 32.803621532145876, 32.385240293994, 31.899353990076232, 32.24700315520095, 32.832085690629036, 32.652928282200875, 32.62481528133077, 30.32054289675849, 30.976326096027645, 30.16141136691596, 30.43359496997301, 31.974988134468656]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [32.171433218402285, 32.15150110599052, 32.3714312309862, 32.50098062980439, 32.45583855305551, 32.14455211176378, 31.61856547489086, 31.940752607069477, 32.491933636361075, 32.37553828941837, 32.2778798835043, 30.068242752567755, 30.781741658305947, 29.932962166552443, 30.143398653639952, 31.695116798154192]
},{
		name: 'Bob',
		data: [31.454650211117848, 31.415542622503878, 31.64381754131266, 31.701729795526013, 31.697426487568336, 31.37908802193999, 31.001200281796688, 31.240696125357555, 31.652168507273068, 31.547940958097538, 31.527571445947828, 29.733574137011512, 30.27344128070393, 29.60132659346943, 29.86661931448597, 31.049119554940816]
},{
		name: 'MSU Deinterlacer',
		data: [31.19818693886169, 33.131954225470665, 33.572751610060784, 34.06546562236405, 34.091424859194824, 33.85442074518733, 33.26644394928955, 33.513263766874864, 34.155477529422825, 34.39949947535117, 34.559551468410184, 31.742132077686467, 33.602829460197356, 32.61448576560389, 32.53910145688346, 33.353799263390606]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [29.667501077983246, 29.841470760189107, 29.696882393940616, 29.757429028673833, 29.777855908643268, 29.39233268385696, 29.050603508132188, 29.346646086235637, 29.652878633788475, 29.65153336659827, 29.467964583206356, 28.18733743323285, 28.698624628219317, 28.141143743614244, 28.338382539233493, 29.24457242503653]
},{
		name: 'Muksun Deinterlacer',
		data: [29.71824928691738, 29.678699439842553, 29.79077360859227, 29.8133810143138, 29.820320155193638, 29.478092808044387, 29.080367240853754, 29.35752832914947, 29.635510154303113, 29.49685975754743, 29.44926558010027, 27.919945034947578, 28.269717376692014, 27.715572656701497, 27.829571738942818, 29.1369236121428]
},{
		name: 'PAL Interpolation',
		data: [28.943864804325727, 28.040180145038427, 28.063421548036608, 28.088078639734288, 28.132386864601344, 27.860252171718656, 27.565117299836412, 27.751686985575084, 27.931993426469894, 27.81584595273979, 27.789885273669558, 26.698399093805932, 27.044511316020184, 26.608390589288557, 26.69732665302629, 27.668756050925783]
},{
		name: 'Elemental Live Low Latency Interpolation',
		data: [31.541653089527486, 31.50419405923151, 31.73444714552811, 31.79314694959846, 31.789377451105178, 31.47323041912898, 31.098883557021217, 31.34067265564081, 31.752593360703134, 31.651903188440123, 31.632227525961696, 29.85211658455004, 30.38376519960968, 29.717751701130176, 29.97850662313889, 31.149631300687698]
},{
		name: 'Elemental Live Motion Adaptive Interpolation',
		data: [30.811158079424327, 30.7487581894619, 30.935778745634146, 30.99999167794711, 30.921210682602318, 30.60586120293519, 30.223170818312077, 30.49869393989494, 30.85907635054044, 30.743081838804866, 30.72279409302034, 29.071097335497345, 29.471784908934602, 28.87894292338725, 29.07307084982141, 30.30429810908122]
},{
		name: 'Studio Coast Pty vMix',
		data: [27.830866960556694, 27.863587674128052, 27.97788616066081, 27.89264193099376, 27.917045547703648, 27.757336360944137, 27.45194149797084, 27.655352893206288, 27.892083101292506, 27.79196322169216, 27.736789498082214, 26.616517384135772, 27.021870202369513, 26.510474687708555, 26.772405981629657, 27.512584206871637]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [25.33448624822073, 25.41332326906123, 25.136522656075226, 25.29510070044289, 24.95234208914373, 25.13313988900235, 24.84153874895016, 25.039486176646022, 24.797291360985216, 24.984986074234467, 24.522751697976407, 24.540184165327496, 24.30465370013355, 24.099458894006357, 23.96535144672649, 24.82404114112882]
},{
		name: 'Adobe Premiere Pro Built-In',
		data: [30.87590218155304, 30.845143135228422, 31.061387166411983, 31.08680764824394, 31.07824358446268, 30.72185715426442, 30.334540793781372, 30.599190866206932, 30.991296423711816, 30.83954538114043, 30.799239868497597, 29.119677159755163, 29.50948380278784, 28.919371357560788, 29.068378488449284, 30.39000433413705]
},{
		name: 'Elemental Live Motion Adaptive Blend',
		data: [25.45285875609736, 25.622928353877374, 25.162127782878514, 25.097049703521265, 24.80430507776468, 25.123403896127048, 25.02895901301225, 25.096423646614532, 25.363594649186176, 25.524690240480204, 25.266025783772275, 24.787610521254805, 25.23632603198141, 24.937916330885468, 24.80073784746665, 25.153663842328]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [29.607035403797788, 20.25789533645221, 26.96939394910911, 19.665879213735963, 25.030176476566357, 19.78558251379849, 24.12757024166796, 19.756526648913287, 23.711558828745343, 20.1414554425668, 23.149583678116308, 19.70205303682092, 23.04877708103109, 19.849626844833416, 22.84181375349633, 22.50966189664343]
},{
		name: 'VapourSynth EEDI3',
		data: [31.966820097540545, 31.955112875582262, 32.26318713525422, 32.34742804818823, 32.35959167242053, 31.97351946022898, 31.544799954035405, 31.861666900597747, 32.420538167176204, 32.285697915736236, 32.27501844215614, 30.13275674844789, 30.771950119070386, 29.97737774037388, 30.25462066394289, 31.62600572938343]
},{
		name: 'VapourSynth TDeintMod',
		data: [31.59111957337429, 31.57296649776755, 31.838428806981764, 31.94160310834959, 31.95645154065314, 31.58857619294142, 31.172454363288196, 31.48115818157404, 32.000967240515386, 31.880044428210372, 31.870768469374962, 29.738809760677594, 30.388814764926344, 29.60576079358571, 29.90558295812996, 31.235567112023354]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [31.413605994587744, 31.098367791392967, 31.315096599749683, 31.32975511159604, 31.33393353175188, 31.066358085962648, 30.701597446080697, 30.922647980352092, 31.309388941897286, 31.22630642044559, 31.18962660240825, 29.48893629243247, 30.041424261090924, 29.357980666204515, 29.608687037368426, 30.760247517554756]
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