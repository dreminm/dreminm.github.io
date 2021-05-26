$(function () {
    $(document).ready(function() {
            Highcharts.chart('detailed', {

            title: {
                text: 'SSIM to Frame Number: sequence № 16'
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
		data: [0.9728766244308672, 0.9667057922448252, 0.9705399900728324, 0.965836454850048, 0.9678569762092788, 0.9644122951772498, 0.96678617710245, 0.963027597752755, 0.964341298170415, 0.9602938635644446, 0.9622142980547608, 0.958163949504346, 0.9606525045436916, 0.9559985940246778, 0.9561849372961324, 0.95258055657561, 0.9533516354217106, 0.9498050822780604, 0.9508676824534802, 0.9467397697831644, 0.9477836442920022, 0.9445462321384543, 0.9455703754616724, 0.9413998551041708, 0.9472124391974058, 0.9574299450281802]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [0.9869853189212024, 0.983499849079376, 0.9862895470783678, 0.9826957206140218, 0.9848088928848064, 0.9819779143762329, 0.9836042576316116, 0.9807024225576392, 0.9817530269279487, 0.9789333494959348, 0.9806411216208372, 0.9779144155750112, 0.980013288486119, 0.9763499344724677, 0.9765558584324092, 0.9746355496230574, 0.9751255281699641, 0.9725487948288276, 0.9735417645572706, 0.9706099659687571, 0.9719235657196732, 0.9696757479231886, 0.970463296983622, 0.9678516391882822, 0.9628678614348752, 0.9772787453020604]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [0.9844779431881828, 0.9770009866052688, 0.9802476622752728, 0.9763770730144088, 0.978114635824613, 0.9750995141818144, 0.9758794081761836, 0.9736615900503238, 0.9750525000030305, 0.971911884763322, 0.9735597881578784, 0.9696730085398084, 0.9722789443420952, 0.9692761125813626, 0.9697603740211509, 0.9665480293629282, 0.9671036132598654, 0.964063552938486, 0.9652583098203172, 0.9620286329970741, 0.9630151685721158, 0.9602210462725396, 0.960602048459274, 0.9578619186407332, 0.9609777136708512, 0.9700020583887564]
},{
		name: 'Kernel Deinterlacer',
		data: [0.9741575916218952, 0.9698993756425428, 0.9726824029507056, 0.9690291866184428, 0.9702195181759016, 0.968072577871726, 0.9692960625558542, 0.9670050225470309, 0.9685385915238904, 0.9650679863196469, 0.9668442052715744, 0.9628198747611076, 0.9651553322562528, 0.9613609652583556, 0.9613409708805309, 0.9589091634785576, 0.9594428223791368, 0.9562500694398184, 0.9568351392275416, 0.9534108445555594, 0.954054926875756, 0.951811748214854, 0.9516025573955036, 0.9482943754939316, 0.95172178475686, 0.9621529238429192]
},{
		name: 'NNEDI',
		data: [0.9813474538422852, 0.9770558582782158, 0.9809808547945364, 0.9768161572406774, 0.9797066041193748, 0.9768591170300848, 0.9791954978862486, 0.9760163834610032, 0.977644310523422, 0.9744275448073312, 0.9767649212384659, 0.9730532369173908, 0.9758129525501071, 0.9715218406663474, 0.9716876895295488, 0.96887344035017, 0.9695781589250148, 0.9662537657633916, 0.9673599664152388, 0.9632116305542842, 0.9649352129304736, 0.9614362204760584, 0.9625752217380394, 0.9586563815332372, 0.9624908571397752, 0.9717704511484291]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [0.9806347624843312, 0.9771161634992536, 0.9804275694067678, 0.9764594561050198, 0.9793004454493222, 0.9764522546202588, 0.9785531241167144, 0.9759548403330855, 0.977265870929803, 0.9742211948299968, 0.9764818762703698, 0.9727358040999459, 0.9754828018439348, 0.9717692525454666, 0.9717790862721856, 0.9692781453292508, 0.9696112510886816, 0.9666347985020942, 0.9677297155375364, 0.9638878573061817, 0.9653635771273438, 0.962248132652554, 0.9633248885660493, 0.9595612555968226, 0.963555393652366, 0.9718331807266136]
},{
		name: 'Bob',
		data: [0.9741991721794364, 0.9703019637868296, 0.9737848683878932, 0.969903130936771, 0.9724408834972668, 0.9700496498826132, 0.9722443394100464, 0.969184150020396, 0.9709005894507396, 0.9676936193921374, 0.970144847620703, 0.9667365698173508, 0.9692895984575556, 0.9652627604602108, 0.9650444378071852, 0.9624930748531436, 0.963122088852966, 0.9601841240059502, 0.9610127022958196, 0.9572795784966608, 0.9584817996196784, 0.9554949264049518, 0.9563405254415858, 0.9526321803826616, 0.9560496381974344, 0.9652108487863196]
},{
		name: 'MSU Deinterlacer',
		data: [0.9831578957437004, 0.9797277674606782, 0.9817039513027209, 0.9788005956318052, 0.9796902236962066, 0.977098577633922, 0.977608837031516, 0.9746317387909632, 0.9748750007532428, 0.9719638544507596, 0.9731314392541112, 0.9706134881187474, 0.9713199668071651, 0.9686960746065201, 0.9685775649230328, 0.9666164935580068, 0.9676802564134154, 0.9645590131563591, 0.9656832742157336, 0.9633961697494956, 0.9644113729847644, 0.96276168109809, 0.9632618700404127, 0.961338870700534, 0.9538102229627818, 0.9706046480433872]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [0.9541057760099384, 0.9534945769160292, 0.953666067525166, 0.9510322877304536, 0.9505178767912658, 0.949823740452948, 0.9498794608300996, 0.9498873881639908, 0.9486749553390966, 0.9463735704775478, 0.947964622860704, 0.9431216958658885, 0.945423096326328, 0.9442156725823708, 0.943119402310057, 0.9411424695465758, 0.9400952677739915, 0.9389490266065944, 0.939257848417906, 0.9369317281486502, 0.9361101092602302, 0.9355600787145688, 0.9338913635678732, 0.9317164779419668, 0.9346783971904662, 0.9439853182940284]
},{
		name: 'Muksun Deinterlacer',
		data: [0.9612027261041312, 0.9584029555554546, 0.9604278419063564, 0.956990752765412, 0.9581694438017816, 0.9559216300401586, 0.9573607557392578, 0.95500607380887, 0.9551763261927508, 0.951983315380762, 0.953710776030391, 0.9500124733839246, 0.9521258381409192, 0.9488582456151436, 0.947891077771592, 0.9452491629107208, 0.9452662405374171, 0.942816571634112, 0.9432273891146674, 0.9399351520206476, 0.9402559487848652, 0.9380023261295568, 0.93783772350185, 0.9346733580317046, 0.937743020934822, 0.9491298850334908]
},{
		name: 'PAL Interpolation',
		data: [0.9692399036455214, 0.8877968894420905, 0.8897592667624286, 0.8877717589981129, 0.8900460194102877, 0.8887613848798921, 0.8866849636512069, 0.8872262499927797, 0.8905760692394766, 0.8879700520203596, 0.8892589883732416, 0.8824598281586306, 0.8840185759823459, 0.8820525230604905, 0.8840097891408185, 0.8826307176963268, 0.8795269645742041, 0.8779947776833302, 0.8765850789819623, 0.8744238406693455, 0.8730439302599605, 0.8703482854938682, 0.8705693544184293, 0.8697672116216912, 0.8715530149560579, 0.8853630175645141]
},{
		name: 'Elemental Live Low Latency Interpolation',
		data: [0.9728438279528128, 0.9691456933599368, 0.972443106066376, 0.9687117618912116, 0.9711412995872298, 0.9689148160140704, 0.9709556924791464, 0.9680381207191044, 0.9696336145533924, 0.9665950554513256, 0.9688870220203496, 0.9656413924239066, 0.9680415835498236, 0.9642003735490228, 0.9639260826974008, 0.9614917754634956, 0.9620181683344614, 0.9592486955456458, 0.9599665414120256, 0.9563523889050476, 0.9574612193813726, 0.954584463852578, 0.9553559993874238, 0.9517474985093294, 0.9550791084718704, 0.9640970120631344]
},{
		name: 'Elemental Live Motion Adaptive Interpolation',
		data: [0.9687772438587258, 0.9648612388802364, 0.9693614681114772, 0.965665548791362, 0.9685520573334068, 0.9668904412839312, 0.9688861596924554, 0.9661165132473029, 0.9668760712600564, 0.9632940235308824, 0.9651723079381525, 0.9614346323763152, 0.9634207673967486, 0.9595963115177012, 0.9592505816461392, 0.9563609108604044, 0.9569769818491176, 0.953862982699972, 0.954567715489751, 0.950868487615259, 0.951605016840687, 0.94876538557722, 0.9491978933324564, 0.9454158584271672, 0.945395156472498, 0.9596468702411772]
},{
		name: 'Studio Coast Pty vMix',
		data: [0.8998211045280162, 0.8938675636986128, 0.8992359907171086, 0.8938000667587206, 0.8967620172951356, 0.8941857671017569, 0.8981695599583347, 0.8930487340590089, 0.8959908266292507, 0.8903831643231991, 0.8954520736303089, 0.8898804019001401, 0.8942156062215983, 0.8877328920535102, 0.8867414339918617, 0.8820167233754853, 0.8827787336424254, 0.8789347208690681, 0.8801823426588867, 0.8737025483959809, 0.8748327585031255, 0.8696611785555586, 0.8709037929151408, 0.8644756647694827, 0.8694692026691603, 0.8862497947688353]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [0.8367459789337908, 0.8364032866095705, 0.8374355081937276, 0.8352992344946323, 0.8347607870094347, 0.8342210610803771, 0.8361560913972252, 0.8354158602378827, 0.8334551472672436, 0.831933940154874, 0.8321900125234774, 0.8327961116031678, 0.8312193414892136, 0.8294799665205589, 0.8249904110429662, 0.8201199625715603, 0.8212275086381499, 0.8204533235238459, 0.8165026100255598, 0.8142313220198476, 0.8110481816581294, 0.8109009793353484, 0.8058558584350155, 0.8041975398486528, 0.8028865262706141, 0.8251970620353947]
},{
		name: 'Adobe Premiere Pro Built-In',
		data: [0.9682554238385505, 0.9642047173430224, 0.9677317966950962, 0.9636093111245462, 0.9661764328114116, 0.9634968437413984, 0.9657491493705392, 0.9624146473891696, 0.9639025333797192, 0.9604821310870084, 0.9628293252265367, 0.9591551035607608, 0.9616868050295904, 0.9575325247588624, 0.9571876482737708, 0.9541663382693144, 0.9549609162622, 0.9518717624532196, 0.952758214506459, 0.9489391456319124, 0.9500559329754084, 0.9468533564546414, 0.9478540598498106, 0.9439314337070708, 0.9473270045753498, 0.9577253023326148]
},{
		name: 'Elemental Live Motion Adaptive Blend',
		data: [0.9638911100332156, 0.9633955179049384, 0.9653282274166666, 0.958842268055234, 0.95463607263273, 0.9499510655527924, 0.9498766494676808, 0.9432164755226328, 0.9405808330738056, 0.9329720626646569, 0.9351043265257776, 0.9325404414222472, 0.9359083648015144, 0.937341195681898, 0.9314568819724404, 0.9294988069086668, 0.9336842771365184, 0.9290581999294122, 0.9340487605699668, 0.9281114756397968, 0.9308083056834612, 0.9315695578094384, 0.9292258835218972, 0.9308887971701753, 0.9321628048792466, 0.9401639344790724]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [0.947718876173863, 0.9145750700571162, 0.9645944862026684, 0.9055442676325308, 0.9608941117865358, 0.8888081197216299, 0.9573618979554888, 0.8742163047069628, 0.9544883088575884, 0.8538123172620672, 0.9495432349898786, 0.8506475475364796, 0.947461250355106, 0.8609889935614146, 0.9438377044833112, 0.8478294355976557, 0.94070130036461, 0.8489483470293776, 0.9381739081556856, 0.8483153432998206, 0.9344783217546688, 0.8552667301932774, 0.9315406046882492, 0.856437329079848, 0.9304879458725932, 0.908266870292737]
},{
		name: 'VapourSynth EEDI3',
		data: [0.978127441722755, 0.973934795478418, 0.9778608252983124, 0.9735081650636609, 0.9765868239855888, 0.9736381774429552, 0.9760524909192779, 0.9728886846475816, 0.97451538200379, 0.9711520237720984, 0.9736395055509524, 0.9700188903630298, 0.9726850505879584, 0.9684722685120138, 0.968416645073568, 0.965547919429788, 0.9659580621854064, 0.9628340049939657, 0.9640384638612728, 0.9599349121215276, 0.9612987309388984, 0.9577805066838596, 0.9589620549867792, 0.9551379194473149, 0.9587241994188384, 0.9684685577795844]
},{
		name: 'VapourSynth TDeintMod',
		data: [0.9824411701979848, 0.9781180503363744, 0.9819984164245597, 0.9777166108653976, 0.9807402583793796, 0.9777333466135636, 0.9801800852448423, 0.9768783828994866, 0.9786730809346168, 0.9752558129773382, 0.9778401953804868, 0.9740305029721924, 0.9769777401421212, 0.9725277551697143, 0.97262114659971, 0.9698555666148396, 0.9705459139856644, 0.9673300838192752, 0.968386016587532, 0.9641913572099362, 0.9658728521889016, 0.9624928120123571, 0.9636838193859754, 0.9596395254905092, 0.9635954939356652, 0.9727730398547368]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [0.9741158246481232, 0.9711221616074136, 0.9749771939995404, 0.9708712391984351, 0.9730130611343282, 0.9703905501946729, 0.9721612975271386, 0.9689850984802879, 0.9712589067802814, 0.9677483657221798, 0.9701975767768976, 0.9658116056664556, 0.9685474893575484, 0.9643701050943212, 0.9650094493475893, 0.9620958565004996, 0.962821883210935, 0.9592163764762052, 0.9602824549974692, 0.9563052233303764, 0.9575288142535768, 0.9543864813056948, 0.9550557855254954, 0.9511966612653534, 0.9548000518215616, 0.9648907805688952]
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