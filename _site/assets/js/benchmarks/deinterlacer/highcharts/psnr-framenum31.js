$(function () {
    $(document).ready(function() {
            Highcharts.chart('detailed', {

            title: {
                text: 'PSNR to Frame Number: sequence № 31'
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
		data: [25.277849935968035, 25.458975583322783, 25.574618477343112, 25.454354272286796, 25.710891480451867, 25.521510472347888, 26.325302286868318, 27.003063810361933, 26.597010970049592, 27.199556041324634, 26.69075357243825, 26.71519076952355, 26.93428498904686, 26.936928849969235, 26.30884779694052, 26.24727595388289]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [26.191290194976286, 26.31790388566268, 26.463619967064748, 26.306458506315238, 26.602447146162817, 26.39291131862393, 27.329309751448694, 28.14089866761858, 27.625985487059026, 28.349407273691302, 27.761562306597487, 27.746597299807966, 28.06620337734823, 28.158213425833626, 27.702223180689035, 27.277002119259976]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [26.482783153970946, 26.46532862357523, 26.249076361552248, 26.10379326567137, 26.372165348442486, 26.150821463081698, 27.05473760771372, 27.778287950614, 27.37934871744389, 28.096348160176877, 27.55931426379989, 27.47285826232915, 27.767364202712113, 27.823232771702386, 27.51044492921161, 27.084393672133174]
},{
		name: 'Kernel Deinterlacer',
		data: [26.541628995553594, 26.83778599864029, 26.82462263042387, 26.67394615029933, 26.958729314769357, 26.71745421054112, 27.652703429166607, 28.42098715883745, 27.897298686398287, 28.62861340558921, 28.05375841140711, 27.980684391320054, 28.26929915291728, 28.27326675298869, 27.92812876634615, 27.577260497013224]
},{
		name: 'NNEDI',
		data: [26.548655111477647, 26.886070373733308, 27.041558089283875, 26.849637596229, 27.166273195466733, 26.878596537390752, 27.938776595243578, 28.807303913187702, 28.19345355051816, 28.98731675693953, 28.32613659500668, 28.24745461355913, 28.590190966050223, 28.563405148190398, 28.190179677097248, 27.814333914624928]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [26.485459773215947, 26.64921576404632, 26.824741097413387, 26.672553272708683, 26.96420898883256, 26.6864425988691, 27.75509125679584, 28.606327268247405, 28.05939180376019, 28.846533629591367, 28.148700921796934, 28.110545485101603, 28.40800036655584, 28.40259984671225, 28.02964515108758, 27.643297148315664]
},{
		name: 'Bob',
		data: [26.541615486524442, 26.86460980785893, 27.029525925148448, 26.882220157630023, 27.171216041058308, 26.923732717170648, 27.905917117849878, 28.720352396762408, 28.135652920812163, 28.87760269933959, 28.270279137022012, 28.201056982023374, 28.49119044983069, 28.4880260460982, 28.141934929205767, 27.776328854288987]
},{
		name: 'MSU Deinterlacer',
		data: [26.52920332606355, 27.977066443738924, 28.180446073747163, 27.91516358064693, 28.352033867090373, 28.00309436053968, 29.1754582690971, 30.20665792357258, 29.96356028745597, 31.06961314229313, 30.740677721510252, 30.372254619581472, 31.44739422142582, 31.263449292777977, 30.30135302520927, 29.433161743650018]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [25.786465818271523, 25.9565003275818, 26.063915256503968, 25.98285094089873, 26.22045492729185, 26.027538080716504, 26.871371659885412, 27.52063156592245, 27.068402406478853, 27.713545123731574, 27.160795124042355, 27.14960209720105, 27.374676385801372, 27.35165133794825, 27.10060781077305, 26.756600590869922]
},{
		name: 'Muksun Deinterlacer',
		data: [25.34860930635336, 25.536680206349896, 25.65529471415213, 25.53697556015905, 25.76333055523046, 25.52690308554201, 26.356773329028922, 26.99339974200706, 26.547837746050742, 27.14616089482305, 26.629754773559302, 26.646387814917244, 26.86107296704101, 26.839109370332054, 26.588218385895967, 26.265100563429485]
},{
		name: 'PAL Interpolation',
		data: [25.256582478376323, 25.274651754395183, 24.944384673312307, 24.89166192426387, 25.1097650721672, 24.91952805020857, 25.62824566912211, 26.204540478979354, 25.81304374870793, 26.35779777937356, 25.947705167000986, 25.858988659691047, 25.968941478471606, 25.990002717313317, 25.78715141929965, 25.596866071378866]
},{
		name: 'Elemental Live Low Latency Interpolation',
		data: [26.687332814746693, 27.010855874989968, 27.175904862610768, 27.028539500824515, 27.315594871197625, 27.06868039600302, 28.04867829891085, 28.863309157188052, 28.27875583573844, 29.02066886081579, 28.412074619694103, 28.346118242156386, 28.63429649277679, 28.632926383166, 28.28844342552805, 27.920811975756468]
},{
		name: 'Elemental Live Motion Adaptive Interpolation',
		data: [26.075641649477124, 26.371519159634943, 26.512344762421503, 26.396413678815573, 26.64593960739464, 26.39997298123356, 27.260584412522782, 27.980015397841488, 27.504929421175298, 28.140440063752784, 27.58717908559065, 27.574319010777952, 27.807350595027245, 27.811212748283413, 27.48087672382484, 27.169915953184923]
},{
		name: 'Studio Coast Pty vMix',
		data: [24.315032909055216, 24.626387669505053, 24.78370978296207, 24.651923422347668, 24.927211156233557, 24.751275402217225, 25.566845339849515, 26.171503940982905, 25.78134238915516, 26.31839511071787, 25.871653690783788, 25.8236352413926, 26.083350223793612, 26.052503184253712, 25.79616247881772, 25.434728796137854]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [33.08631576976302, 22.09649416064022, 21.982147312418114, 22.36500792896207, 22.16104427100277, 22.373436815007114, 22.8232269907385, 23.16090333614479, 23.74858278605823, 24.048786175569983, 23.587538341798908, 23.61480819945306, 23.912691316794557, 23.911132149210296, 23.888294857985702, 23.784027360769826]
},{
		name: 'Adobe Premiere Pro Built-In',
		data: [26.08318491603333, 26.376341359327675, 26.51120865805752, 26.382974740924748, 26.64118327783023, 26.39184519525183, 27.300956322647338, 28.01383957568227, 27.521092565324825, 28.169270567994694, 27.627184903550035, 27.579618679372665, 27.82954281906795, 27.80757436434501, 27.514938046128297, 27.183383732769226]
},{
		name: 'Elemental Live Motion Adaptive Blend',
		data: [24.870821207414476, 23.972277647699013, 23.81279473772315, 23.74016231389637, 23.84674879086525, 23.848416877179194, 24.307187040196872, 24.83225532929609, 24.967344811692037, 25.62324089542396, 25.596554887652804, 25.817927618953863, 26.260338421760476, 26.419459549002966, 26.477002436050768, 24.959502170987157]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [21.196272645629954, 25.506007104317952, 19.29759290127876, 23.77320659676657, 19.30335979894228, 23.032584571132695, 19.650630910388838, 23.333216875709372, 20.472693945531574, 23.79227939894557, 21.280247954231008, 23.705177076529203, 22.18715863015799, 24.045124915666793, 22.624357430027572, 22.213327383683747]
},{
		name: 'VapourSynth EEDI3',
		data: [26.545926810545048, 26.882045707333265, 27.05120570072981, 26.87280189104837, 27.16365068363687, 26.878843957366477, 27.91635905382193, 28.777017811245347, 28.14715499447659, 28.93889198307765, 28.287098279858093, 28.22226897424532, 28.532937997816905, 28.525476206260887, 28.145857607348088, 27.792502510587372]
},{
		name: 'VapourSynth TDeintMod',
		data: [26.21160580894893, 26.558143779362478, 26.7345071762408, 26.55637044023521, 26.869814501121727, 26.583777504309364, 27.66294518678068, 28.549723072154087, 27.910749876503534, 28.73819908563444, 28.054849616600148, 27.974150096576327, 28.294562747160622, 28.295390258977694, 27.872961021806297, 27.524516678160825]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [26.54328268736445, 26.874584512341226, 26.875608030921608, 26.721192987608514, 27.010179906548352, 26.763083265348616, 27.718818622455807, 28.506573461344296, 27.96920601216896, 28.69893768663051, 28.123523071741648, 28.04902619070484, 28.333134333773398, 28.335596972139268, 27.988242606638646, 27.63406602318201]
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