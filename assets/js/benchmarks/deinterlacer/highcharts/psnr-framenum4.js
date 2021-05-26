$(function () {
    $(document).ready(function() {
            Highcharts.chart('detailed', {

            title: {
                text: 'PSNR to Frame Number: sequence № 4'
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
		data: [47.905479385850974, 51.78807524901197, 51.58935677307, 53.579666192464096, 52.165861415562134, 50.3548727716121, 52.08034619416693, 53.02056230489357, 52.59944354439894, 51.65875923031853, 52.70357805664585, 52.55946133616821, 49.99644363625022, 53.22266934646949, 52.87590019408657, 51.87336504206463]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [47.53928202144189, 53.41120230539357, 53.759320875374144, 54.78910415860987, 54.623692038931466, 51.58908741551009, 53.135163084495105, 54.91199293569961, 54.60185401092914, 53.42246403835578, 55.626636531310176, 54.31615164734403, 50.92422677212929, 54.330777364421365, 56.74518796047435, 53.581742877361314]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [51.33240264971796, 52.71778532760787, 52.691900775687294, 53.69234352285201, 53.22530836507554, 52.16874218809839, 52.16599400585992, 53.100541820528, 53.67172538427713, 52.37493092886514, 53.647420954971714, 53.06056671124829, 51.403025787308934, 53.31586446822278, 54.07573001516157, 52.84295219369883]
},{
		name: 'Kernel Deinterlacer',
		data: [52.879674130751326, 36.203677488387974, 40.30881719286019, 43.897007821437064, 39.9418401358755, 44.16609751931056, 37.128757204750976, 47.493733930776116, 47.51803759599868, 42.415925920859145, 48.449405337345716, 44.91383284149375, 39.42364440217197, 44.579378166684116, 45.092507153358795, 43.627489122804135]
},{
		name: 'NNEDI',
		data: [53.35662500995554, 55.20204533504725, 54.727160126396726, 56.795084977709685, 55.33485406735682, 54.10072272949009, 53.76072951307202, 55.818289179846545, 56.50876847836444, 54.21859794238284, 56.21418394404075, 55.26539690167698, 52.949975733025596, 55.48503232725502, 56.67368412158137, 55.094076692480115]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [50.507746805334826, 51.185263613610324, 51.693935556655155, 51.227586351038454, 51.01711346474556, 50.338828234979076, 51.16280961062599, 51.33182049051959, 51.15623469599772, 51.008548602819815, 50.75387268911581, 51.29022583651749, 50.684207297860134, 51.666940331573116, 51.1038411657253, 51.075264983141224]
},{
		name: 'Bob',
		data: [52.86372600767316, 54.97506006860479, 54.8891862322903, 56.799552933225755, 55.10377027003492, 53.84308181027645, 54.056679801212205, 55.445872113813095, 56.082567070759055, 53.744611098296396, 55.48042226597111, 55.132332153338794, 52.2324297780682, 55.3332371014728, 56.38432443769216, 54.824456876181955]
},{
		name: 'MSU Deinterlacer',
		data: [36.58841811690196, 53.28866366010624, 48.644996869067676, 54.23184841928054, 53.77832232727063, 53.188359586598864, 51.9615105298465, 52.36410364470296, 55.449293324779426, 50.45610269698897, 54.906257593887844, 50.33180322717646, 52.009917877299, 48.792736116891795, 55.423637934984505, 51.42773146171889]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [43.66417637921073, 36.267546546090266, 39.87653460440649, 43.65794590002487, 38.73122060248382, 43.850828185190075, 36.506347492040895, 42.76235980924962, 46.579381351229976, 41.073560226596996, 45.81027508466076, 43.295114977486705, 39.6896168793719, 42.28798663123146, 44.48647626922856, 41.90262472923353]
},{
		name: 'Muksun Deinterlacer',
		data: [42.882340356263946, 40.05052613173714, 40.882889036072775, 44.52524235405775, 42.47096200040901, 44.210776575392075, 41.582561531514266, 42.361440425504476, 46.36671707001946, 41.3498752438761, 44.787801291112814, 44.174216881902005, 42.35697062211394, 43.361533701480596, 44.643162878723004, 43.067134406678626]
},{
		name: 'PAL Interpolation',
		data: [39.721703925665544, 37.08732091511791, 37.79413083482615, 39.05717241333037, 39.422389692992724, 40.758979217631186, 35.65035275590755, 37.548579105896415, 38.802066670783525, 36.086807613203774, 40.77669112073696, 39.33170559473909, 37.24623921724334, 39.31057725387456, 40.779859882642754, 38.624971747639464]
},{
		name: 'Elemental Live Low Latency Interpolation',
		data: [49.67535247358047, 51.349099582052936, 50.4181889215078, 52.75980634546933, 51.564132990201244, 50.89252053721055, 49.78253172313007, 51.32925204305018, 52.076541371574656, 49.909335414271496, 51.63752827916493, 51.027759690909065, 49.29509007882386, 50.820333685175065, 52.6088478552028, 51.00975473275496]
},{
		name: 'Elemental Live Motion Adaptive Interpolation',
		data: [45.917164418214256, 44.38259644837024, 42.85285549656607, 47.850357332199394, 44.26769630930674, 43.83160249980197, 39.64061911712812, 48.29987635672802, 48.44684800313453, 42.254574561051506, 48.676514808885095, 45.61744730931662, 39.627296575241644, 44.18939573011985, 49.86855850107403, 45.0482268978092]
},{
		name: 'Studio Coast Pty vMix',
		data: [42.48072479230608, 44.62866284336446, 43.35087176331622, 46.64869064820653, 42.25560748045951, 43.84297568453209, 42.69308206205472, 43.9672650355668, 46.33310208759213, 42.19674844073274, 46.29793487655426, 43.53842071483752, 42.870991487966464, 43.68234706672765, 46.5560103153165, 44.08956235330224]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [41.572993934455326, 42.69857600080272, 44.826768638948344, 44.149240128309685, 40.23324346210542, 44.978550255608454, 40.74127583720063, 42.366551317123616, 45.995663187228295, 43.26583126055351, 44.88630187554839, 44.651989041408775, 43.553287450457894, 45.526007570786035, 45.909196997912424, 43.690365130563315]
},{
		name: 'Adobe Premiere Pro Built-In',
		data: [47.450205393390036, 48.53780582836565, 46.74982428904414, 48.04011256024037, 47.00617530206189, 48.46294258066942, 47.85882205496192, 47.1270349935623, 49.48452043650661, 46.33550068293949, 49.840230212658206, 47.563855513272884, 47.63745292053052, 46.64898544853376, 49.596064308384626, 47.88930216834146]
},{
		name: 'Elemental Live Motion Adaptive Blend',
		data: [29.53934048155274, 30.12554229646389, 33.40092101647918, 34.021624961498254, 32.47669745921958, 29.753733191578807, 24.448044970370532, 35.09812891370641, 37.28961747532003, 28.462730268714505, 33.552197881157554, 30.807262102546982, 29.13539072944248, 29.872921695671373, 34.015055893839744, 31.466613955837477]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [43.48144089705646, 24.39670455228703, 38.43576232059034, 28.38470009401557, 39.300220931095204, 24.094985563024665, 31.451953211188542, 29.28202831634116, 39.56916539051056, 22.83549347162865, 38.90690411454099, 25.153423696212048, 34.27161625800304, 24.429939394178692, 36.068253297700785, 32.004172767224915]
},{
		name: 'VapourSynth EEDI3',
		data: [54.06185509542946, 56.141540018485536, 55.79979665621886, 58.041193632914506, 56.137792601514214, 54.744382932477855, 54.82473241240207, 56.61644180748368, 57.46158704747064, 54.9583118045578, 56.87961019943239, 56.20858365236536, 53.45724655470995, 56.29744600135286, 57.69554731531126, 55.95507118214177]
},{
		name: 'VapourSynth TDeintMod',
		data: [52.08316557558867, 51.46189430615464, 51.96200641475217, 55.80376584802871, 55.43150538718477, 53.213776167028676, 54.032240117708064, 55.838330674854625, 56.11910386700841, 51.055890398735784, 54.040978464836435, 54.48714327168098, 51.18081424301962, 54.43804002825268, 56.676754944488074, 53.85502731395482]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [52.802624789496384, 41.4455046691033, 49.303524146966076, 50.82819584199786, 44.54017474664784, 50.31717733658179, 45.20775885956859, 52.49621936770266, 52.53094582857946, 48.54282078871015, 51.881339386608744, 50.20572481575049, 46.30005030793272, 48.68005948445421, 50.60476603900461, 49.04579242727365]
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