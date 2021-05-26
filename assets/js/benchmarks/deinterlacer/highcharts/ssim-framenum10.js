$(function () {
    $(document).ready(function() {
            Highcharts.chart('detailed', {

            title: {
                text: 'SSIM to Frame Number: sequence № 10'
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
		data: [0.9659911616260431, 0.9644406031617924, 0.9701500211070369, 0.9653829341680592, 0.9596899234778342, 0.9558257495945685, 0.9583176508697666, 0.9587927206207748, 0.9669602958152702, 0.9579265957950659, 0.9640284152184058, 0.9611731063113828, 0.9580832001360008, 0.9547561617554572, 0.9604209589435144, 0.9613443801123764, 0.9627098129438773, 0.9574982705150092, 0.9604844939162313, 0.9615251788037152, 0.9651330690257068, 0.9582872611929286, 0.957788208020667, 0.9558042769439646, 0.9614410478454658, 0.9609582199168364]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [0.9822889273805032, 0.9815885394218244, 0.9853218065556772, 0.9832880292494844, 0.9814559559109528, 0.9773265455013608, 0.979602114108082, 0.980002181461748, 0.9848329680426878, 0.9793922121959404, 0.9840406616276344, 0.9814476604291348, 0.9801588314741284, 0.9769494909603996, 0.9817596051694564, 0.9802532090870696, 0.9826824400909722, 0.9785594620527752, 0.9813384528643588, 0.9801808398699704, 0.9834440973746641, 0.9795153962844992, 0.9798985553530696, 0.9774951012075278, 0.9772756065247666, 0.9808039476079474]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [0.97419618289233, 0.9724456881906691, 0.979102386510934, 0.977283638218903, 0.975721465689792, 0.9699394480774219, 0.9697768221842528, 0.9686359878888856, 0.977546403957828, 0.9745684384801132, 0.9754909814221288, 0.9759449301335028, 0.9696819754424252, 0.9649522345132164, 0.9708692332005658, 0.971486998477206, 0.975694079453781, 0.9697163110068064, 0.9702605550142048, 0.9710747609373264, 0.9764831726387992, 0.9712578043447904, 0.9687603790750732, 0.9661310862172788, 0.9715707618981736, 0.9723436690346564]
},{
		name: 'Kernel Deinterlacer',
		data: [0.9735062072505836, 0.9682302185039534, 0.9762403186938252, 0.9751884600354702, 0.9695175049888088, 0.96318692765366, 0.9648867937239516, 0.9635249691754474, 0.9740079382220441, 0.9700642743148864, 0.9702996291463156, 0.9723095524946788, 0.9655166537958398, 0.9607494792028894, 0.9658370960848752, 0.9678831649251738, 0.97213840404925, 0.9660782930516182, 0.966339041974387, 0.967943666531532, 0.9727054485098652, 0.9680808791966952, 0.9652606653816932, 0.9630157189744414, 0.9676204776717674, 0.9684052713421464]
},{
		name: 'NNEDI',
		data: [0.9785571218559781, 0.9758508104588004, 0.9796418867875396, 0.976943252592606, 0.980047543051982, 0.9767679021403991, 0.9796456274890232, 0.9764787498429556, 0.9799586086872388, 0.976704955156054, 0.9800001715803012, 0.9769858898689652, 0.9793266745852308, 0.9762558130957488, 0.9792115758503472, 0.9763795548879454, 0.9791305779268415, 0.9758668577048992, 0.9784037664206632, 0.9755891080539444, 0.9787295495836188, 0.975489795253289, 0.9774750563347628, 0.9747355289340596, 0.9783593609555952, 0.9777014295639516]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [0.9781806975695244, 0.9769499969850444, 0.980394334154974, 0.9780712185016592, 0.9808505707221716, 0.9766864854941436, 0.9779147019697976, 0.9759666370132078, 0.9804867982990402, 0.9778469564339092, 0.9807786177229308, 0.977803681107036, 0.9780533121485998, 0.9746044694201059, 0.9789329357959118, 0.9768507578949636, 0.9795624174725291, 0.9757600814375996, 0.9780713815490826, 0.9762725805510182, 0.9794091684373416, 0.9758064857358942, 0.976936084749346, 0.9741825256404126, 0.9780375038580258, 0.9777764160265708]
},{
		name: 'Bob',
		data: [0.9734987405407656, 0.9709290928592379, 0.974651740817138, 0.9721882136019212, 0.9751187362442194, 0.9720432547794928, 0.9745955881408312, 0.9716258535535616, 0.9749093489191508, 0.9718652846286728, 0.9748666129039852, 0.9721796185954462, 0.9743174927758992, 0.9713392277041976, 0.9741372264677944, 0.9715935984800562, 0.9741317087366684, 0.970894945292596, 0.9731735156831894, 0.9706068776573696, 0.9735495575259706, 0.9705636218349076, 0.9723134114918972, 0.9698319152947364, 0.9731572500487587, 0.9727232973831386]
},{
		name: 'MSU Deinterlacer',
		data: [0.9797749314219178, 0.9841990134682022, 0.9866380733187894, 0.9863079516502602, 0.9854970707849724, 0.9826449305297996, 0.9820734622426979, 0.9837849834716916, 0.9864438125352021, 0.9841843143323266, 0.9862971335452816, 0.9840302073415114, 0.982586857437066, 0.9802380937124584, 0.9846910786078183, 0.983765121995514, 0.98472194366922, 0.982795533237642, 0.9842240559975232, 0.983575520501764, 0.9850567956368672, 0.982605130016077, 0.9831891228812724, 0.9826272734278924, 0.9811857491759371, 0.983725526437588]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [0.9538826182404692, 0.9587435505711488, 0.9661679015735151, 0.9659392083592891, 0.9516829686695916, 0.9445112496068384, 0.9437814516212962, 0.9519314486193796, 0.965050064300176, 0.9564981197750174, 0.958958984809794, 0.9615129405374055, 0.9483133084381088, 0.9404257660822308, 0.9539984100457164, 0.9570106169113688, 0.9617714065383108, 0.9520096550286712, 0.95391799600748, 0.9580796745955538, 0.9618916585899856, 0.9562012385451361, 0.9517300870987656, 0.9492593566571608, 0.9556060464101832, 0.955155029105304]
},{
		name: 'Muksun Deinterlacer',
		data: [0.9525152053609436, 0.9541160882825396, 0.9595703712376122, 0.9586748943730096, 0.9530526681399044, 0.9460431016919202, 0.94841674726563, 0.9509246916627292, 0.95964989278696, 0.9534012992371328, 0.956242221229536, 0.9560766738530768, 0.9503348955572596, 0.9446006455727012, 0.9532754311150592, 0.9534275328112488, 0.9574103228159752, 0.9505551592020972, 0.9525239150555548, 0.95352438804119, 0.9569837685574992, 0.9520417020877922, 0.9510261561785, 0.9483287236796778, 0.9531294152176564, 0.9530338364405282]
},{
		name: 'PAL Interpolation',
		data: [0.9594508048530392, 0.90682258469959, 0.9388928056868772, 0.9337410793161068, 0.9181950780362592, 0.8916549581417038, 0.8895956181644782, 0.8883603076504266, 0.914418497248381, 0.922513554013472, 0.9022137708462172, 0.9231018412832891, 0.9052944536633628, 0.8862063542953874, 0.8929732035708107, 0.9022067401204016, 0.9150017629284596, 0.9025537699998568, 0.8983108652009762, 0.9054488599477256, 0.9208652936888652, 0.9175535498708328, 0.8998568087493563, 0.8925030095128179, 0.8995242751518626, 0.9090903938656222]
},{
		name: 'Elemental Live Low Latency Interpolation',
		data: [0.9716664587517668, 0.969193626600396, 0.9727871162656156, 0.970435725776729, 0.9732603056245496, 0.9702950864160296, 0.9727212452249964, 0.9698461161335501, 0.973023176674444, 0.9701218638640532, 0.9729786860649658, 0.9704540705193266, 0.9724953002307832, 0.9696258923288512, 0.9722800396757584, 0.9698495654467172, 0.9723552192431908, 0.9691694181379692, 0.971395900863686, 0.9689421808990678, 0.9717719661501092, 0.9689265799799768, 0.970616051556588, 0.9682369256457524, 0.9713849762095099, 0.9709533397713754]
},{
		name: 'Elemental Live Motion Adaptive Interpolation',
		data: [0.9618319140258936, 0.9602086669942508, 0.965815686661318, 0.9664678738207708, 0.9654506684351352, 0.9601754904331248, 0.9624756361538308, 0.9628059777317396, 0.9689737492303908, 0.9643948942511921, 0.9667678311302944, 0.9665583804022398, 0.9631340116256906, 0.959541421074674, 0.9645116530706312, 0.9643870202793826, 0.9673774488009722, 0.962733378340082, 0.9644140141497224, 0.9649095703391892, 0.9678112454279408, 0.9636174548389068, 0.9634818883950188, 0.9614557251133672, 0.9618264045820408, 0.964045120212312]
},{
		name: 'Studio Coast Pty vMix',
		data: [0.9158419349500672, 0.9107954443111392, 0.9184317943899016, 0.9133595089135196, 0.9194257174741464, 0.913289063815836, 0.9180554173628004, 0.912400088746822, 0.9189008685838022, 0.9128486888572872, 0.9188908455116904, 0.9132575123288532, 0.9172280170243314, 0.9117052172125436, 0.917384256778032, 0.9122711021556222, 0.9170594131674258, 0.9112451534342364, 0.9155235587228584, 0.910446876832996, 0.9158949225689, 0.9101984694812036, 0.9145305538993518, 0.9088826351398404, 0.915303012816851, 0.9145268029792022]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [0.8743009050989697, 0.8735967155112787, 0.8753028994698334, 0.8757128279829347, 0.8776456469279296, 0.8748424839310222, 0.8768787786180751, 0.8731064643629449, 0.8778275628540659, 0.8770407873529049, 0.8784013908418987, 0.8770018974139568, 0.8759066311557033, 0.8756984918256342, 0.8755098904813178, 0.8755916375581139, 0.8765677124494112, 0.8725585196703253, 0.8731160275132698, 0.8741953662180196, 0.8735480292132372, 0.8729090670452416, 0.8716057156050466, 0.8696142910351862, 0.8734920299703658, 0.8748788708042674]
},{
		name: 'Adobe Premiere Pro Built-In',
		data: [0.9585339379828954, 0.9559972727555066, 0.9597242528953658, 0.9572997096291852, 0.9605763426403364, 0.957577056144604, 0.9599461947279748, 0.9570123737543476, 0.9602355047159652, 0.9571268755510604, 0.9601041155483412, 0.9574674840352756, 0.959714001490698, 0.9568531282784416, 0.9599569021764396, 0.9574897488002762, 0.9600527449778612, 0.9568436640248922, 0.9589965388956864, 0.9562876923495792, 0.959229768440346, 0.9561841084456976, 0.9582528883976223, 0.9557214537416008, 0.9588375172371014, 0.9582408511054838]
},{
		name: 'Elemental Live Motion Adaptive Blend',
		data: [0.9331356642309024, 0.9354068863236435, 0.9356798500231426, 0.9342333372419244, 0.9315732315996672, 0.9229513616580344, 0.9229819547332104, 0.9225525602144452, 0.9343024100561106, 0.9323509083924424, 0.933032853568682, 0.9317050998909576, 0.9159936108630428, 0.9115244037181698, 0.9295708559275522, 0.9290230666030468, 0.9317415486043242, 0.9244607055298965, 0.9238877768617864, 0.9283860947498892, 0.9311594283164296, 0.9255647411222864, 0.9176313188826728, 0.9161429707884132, 0.9227780221783796, 0.9271108264831622]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [0.8317327191606889, 0.9442234911121352, 0.844758555084446, 0.9521651923188872, 0.8351355469173891, 0.9401602243442037, 0.817506677003175, 0.9430493846735072, 0.839057579172886, 0.9450157825274452, 0.8385511577353032, 0.9443773313372223, 0.7989919457105126, 0.934503535323396, 0.831669132140869, 0.9391676610153838, 0.8349622594693373, 0.9370358618755088, 0.8185462217796935, 0.9365875905186924, 0.8337291528885864, 0.9361723934384618, 0.8033809772760324, 0.9324134908431572, 0.8068430031038314, 0.8807894746708299]
},{
		name: 'VapourSynth EEDI3',
		data: [0.977791545747079, 0.9751590216716376, 0.978947382555293, 0.9763432493465014, 0.9793956268798358, 0.9762122202860208, 0.9789603194248506, 0.9758653535720004, 0.9792808774191214, 0.9761196306208892, 0.9792923631405744, 0.9763448338741996, 0.9786293838187148, 0.9755896985242296, 0.9784950826569538, 0.975732438287412, 0.9784875186357492, 0.9751797580080996, 0.977683943766288, 0.9749264503365428, 0.9779890251845484, 0.9748431380153992, 0.9767022608597644, 0.9740850728989248, 0.9776094814190456, 0.977026627077987]
},{
		name: 'VapourSynth TDeintMod',
		data: [0.9793566755779336, 0.976709285484546, 0.9811783891839396, 0.9787311474694144, 0.979836132670056, 0.976283782014114, 0.9791984901848056, 0.9767154948749688, 0.9805168667970566, 0.9769766290656228, 0.980523602717948, 0.9772895235250492, 0.9791002136207894, 0.975864111442272, 0.9792355242821494, 0.9764056901944214, 0.979288838629722, 0.9757602445736429, 0.9785004431307772, 0.9758159285937592, 0.9790880927072296, 0.975546874302614, 0.977285241680624, 0.9744543385232856, 0.97804204603914, 0.9779081442914352]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [0.9734236041796108, 0.9691817898125412, 0.9775696780090566, 0.975514581195615, 0.9746308238761684, 0.9685814563834758, 0.9698765865354744, 0.965553746208794, 0.9747275021873564, 0.972728330758034, 0.9727557048163874, 0.9736122453340992, 0.9699890146906214, 0.9649940129913988, 0.9680251885527429, 0.969108484640876, 0.9732713965147978, 0.9683689453824821, 0.9687078718221764, 0.9685403732024184, 0.9740152873881832, 0.9695122879838988, 0.9679508579138181, 0.9651271652340144, 0.9696428665785151, 0.9706163920877025]
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