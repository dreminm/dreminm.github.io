$(function () {
    $(document).ready(function() {
            Highcharts.chart('framenum_plot', {

            title: {
                text: 'Mean SSIM to Frame Number'
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
		name: 'YADIF',
		data: [0.9645796756264355, 0.9650633320216182, 0.965528116299781, 0.9655541789503944, 0.9656306505620688, 0.965746913460908, 0.9667225011092409, 0.965707198430746, 0.9661555885558701, 0.965875423012433, 0.9661457138868677, 0.962257058620024]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [0.9739069659223828, 0.9754558634817553, 0.9755755812071868, 0.9755761338579754, 0.9756904672293825, 0.9756545626646913, 0.9764221666152266, 0.9758819641089429, 0.9764610039779562, 0.9762144192920903, 0.9767190595094984, 0.9753371738712084]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [0.966441170802792, 0.9688445242400938, 0.9685523711565628, 0.9683523341591245, 0.9683641056704584, 0.9684014975887705, 0.9688718027378862, 0.9685745677179869, 0.9695253326576821, 0.9690938554472602, 0.9702047090568765, 0.9685634011674861]
},{
		name: 'Kernel Deinterlacer',
		data: [0.9741947936140931, 0.9559060583879875, 0.9579750279688903, 0.9585873218472075, 0.9573376059283539, 0.9585439410567729, 0.9575843616723718, 0.9592594070981493, 0.9603811609921117, 0.9595194649356318, 0.9602312196031862, 0.9584644624764591]
},{
		name: 'NNEDI',
		data: [0.9770340696745368, 0.97652521369748, 0.9775519485292813, 0.977041861544493, 0.9777442418057302, 0.9772617845846835, 0.9788486005571203, 0.9777981255177274, 0.9781812996945904, 0.9778483975113078, 0.9780986856649395, 0.9772174576176977]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [0.975876820342281, 0.9752541676700638, 0.9761833746183057, 0.9758022978104615, 0.9762695683528652, 0.9758911293630812, 0.9773403131179507, 0.9764975364328942, 0.9769241686046211, 0.9766973934156858, 0.9767916262789054, 0.9759551455091587]
},{
		name: 'Bob',
		data: [0.9741811732346225, 0.9736763370879805, 0.9746425918723596, 0.9741856759064185, 0.9749154083792881, 0.9745200204124285, 0.9760197552023536, 0.9749746137479723, 0.9753452694652441, 0.9750280005036414, 0.9752448395036964, 0.974466311402127]
},{
		name: 'MSU Deinterlacer',
		data: [0.9753313347202719, 0.982423840018907, 0.9832757344017986, 0.9836319343499461, 0.983914213279148, 0.983689885680756, 0.9834114882507103, 0.9829183739923819, 0.9834052586470833, 0.9839231263002384, 0.9844208018585393, 0.9827461210256627]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [0.952415795847487, 0.9465313323615059, 0.9485189992492782, 0.9496569913093621, 0.9484040219124283, 0.9495773376555542, 0.948497902668883, 0.9502120238275931, 0.9522532863941491, 0.9506566240830736, 0.9513279659699622, 0.9496408027564103]
},{
		name: 'Muksun Deinterlacer',
		data: [0.9478399381201914, 0.9473006130576602, 0.9488220099585127, 0.9493215659049014, 0.9492581569479848, 0.9495465250651568, 0.9501637108191752, 0.9498280775653951, 0.9516727580385401, 0.9503997074197083, 0.9507720121878445, 0.9498924019774437]
},{
		name: 'PAL Interpolation',
		data: [0.9617790301740443, 0.9070623456957548, 0.908474795846088, 0.9079351254316081, 0.9093858425538549, 0.9095147046419274, 0.9099266070981205, 0.909226420369252, 0.9117881147430822, 0.9106263422011365, 0.9104203302920949, 0.9097981857417313]
},{
		name: 'Elemental Live Low Latency Interpolation',
		data: [0.9710104765601704, 0.9705517980583614, 0.9715141108283749, 0.9711137862787057, 0.9717411013718411, 0.9713653080602425, 0.9727917208443293, 0.9718055088393024, 0.9721795968987192, 0.9718770107202834, 0.9720714052511731, 0.971322756993261]
},{
		name: 'Elemental Live Motion Adaptive Interpolation',
		data: [0.9647093948121885, 0.9635673981254509, 0.9645647109410447, 0.9649000023759653, 0.9644063157487915, 0.9639080608156251, 0.963742827125506, 0.9640871345978292, 0.9647731983602382, 0.9634119395658567, 0.9643580339611265, 0.9641367307632398]
},{
		name: 'Studio Coast Pty vMix',
		data: [0.9284117183816489, 0.9277551210428585, 0.9293522569549266, 0.928735217837904, 0.9300596179577327, 0.9298121380167927, 0.9321293002307736, 0.9298926855562769, 0.9305472741604817, 0.9302496908732809, 0.9304682869007094, 0.929528097346151]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [0.9063714437802263, 0.8999203520849341, 0.8996689790360198, 0.900579108822399, 0.9011392718989549, 0.9025131859992621, 0.9037244407130061, 0.9036844326222202, 0.9029759680309599, 0.9027777870393402, 0.9025164703416465, 0.9025845334436047]
},{
		name: 'Adobe Premiere Pro Built-In',
		data: [0.9576151660614041, 0.9571239466923857, 0.9579666895236423, 0.9577817578577351, 0.9581682503755099, 0.9580047012891457, 0.9593154032228945, 0.9582306916600741, 0.958474932967089, 0.9581156501015462, 0.9583020427804355, 0.9576904066431131]
},{
		name: 'Elemental Live Motion Adaptive Blend',
		data: [0.8781917218517776, 0.8776710911293846, 0.8768560364903358, 0.8748900610499784, 0.8676002246150398, 0.8653138853341286, 0.854920686818525, 0.8597329282786058, 0.865886835063651, 0.8643764218323813, 0.8714612539779256, 0.8646804984321946]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [0.8283371031487988, 0.8544656435974526, 0.8233976474399329, 0.8354433753822713, 0.8049867137977864, 0.8117283131815887, 0.781171554450806, 0.7948312221121073, 0.7876742306562549, 0.7916083350033193, 0.7957216789948081, 0.7841923735826173]
},{
		name: 'VapourSynth EEDI3',
		data: [0.9765880760290637, 0.9760882156991346, 0.9771307379556162, 0.9766147141169202, 0.9773370221088203, 0.9768666290381514, 0.9784152706591962, 0.9773509297376407, 0.9777238685791447, 0.9773703869260721, 0.9776082891472097, 0.9767696084337005]
},{
		name: 'VapourSynth TDeintMod',
		data: [0.9763709962648598, 0.9758196317068897, 0.9770539264247476, 0.9766318563375522, 0.9772643397589382, 0.9767902502284878, 0.978338950426463, 0.9774662464608971, 0.9777644813992834, 0.9773780074256437, 0.9776621477013354, 0.9764859790496413]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [0.974127496407931, 0.9678040282135362, 0.9698408433796276, 0.9695895222551034, 0.9694901816184439, 0.9695521791899946, 0.9704994727028465, 0.969975284697848, 0.9706320249090237, 0.9700935461872893, 0.9708366814444196, 0.969494709506467]
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