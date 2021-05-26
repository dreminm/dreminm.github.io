$(function () {
    $(document).ready(function() {
            Highcharts.chart('detailed', {

            title: {
                text: 'SSIM to Frame Number: sequence № 23'
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
		data: [0.9958957552917868, 0.996218104698578, 0.9963763205334036, 0.9960468020969566, 0.9957795795034972, 0.995900136578016, 0.996481338865979, 0.995990407685756, 0.9961287963577998, 0.996388545354257, 0.996350378024742, 0.9950803545716198, 0.996053043296866]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [0.99478500360234, 0.9958665147557888, 0.9960478928037312, 0.995597733942729, 0.9954078324458544, 0.9954628548859096, 0.9960594770314728, 0.9957686822875784, 0.9958740937765062, 0.9959738903666391, 0.9959748354982324, 0.9944650991883764, 0.9956069925487632]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [0.9936792879300448, 0.9938616402000612, 0.9937800698695052, 0.9935047764028307, 0.9933248836360696, 0.9932561944243792, 0.9937368677071464, 0.9935681864749829, 0.9937681761692498, 0.9937002725423029, 0.9937943708084866, 0.9937142404956999, 0.99364074722173]
},{
		name: 'Kernel Deinterlacer',
		data: [0.9950533552882284, 0.9682178586770309, 0.9730404855435136, 0.9784141161126314, 0.972030701768112, 0.97588971024886, 0.9767526554360434, 0.9772514384048102, 0.9801398403512396, 0.9814544184959056, 0.9790572397262688, 0.9723642955352568, 0.977472176298992]
},{
		name: 'NNEDI',
		data: [0.9947897985484638, 0.9948052827994316, 0.9948891834629832, 0.9946483837650778, 0.9944799274287396, 0.994492498957452, 0.9949852295628332, 0.9946058243188453, 0.9946943932665756, 0.9949382334226748, 0.994947857527848, 0.9948977598742056, 0.9947645310779276]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [0.9941717613480824, 0.9941083031222872, 0.9941146223266072, 0.9937607971655621, 0.993948074540684, 0.9939012860064786, 0.9942505243532652, 0.9939514022067836, 0.9940042735577302, 0.9940693828287376, 0.9942631167587512, 0.9941415814565164, 0.9940570938059572]
},{
		name: 'Bob',
		data: [0.994986598734706, 0.9950197033745942, 0.9949685353912856, 0.9947032883651762, 0.9945248970944744, 0.9945527638551032, 0.9950410808281972, 0.994831464513112, 0.9948333728310308, 0.9950695655311824, 0.9950560360510956, 0.9949291992170269, 0.9948763754822488]
},{
		name: 'MSU Deinterlacer',
		data: [0.9875271059146884, 0.995805577600484, 0.995954882339696, 0.9957832763643156, 0.9956718215851804, 0.995671352912478, 0.9960606370504343, 0.995868675112688, 0.9959378268057218, 0.9962791993946759, 0.9963650058912512, 0.9960262836688414, 0.9952459703867046]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [0.9854596650099976, 0.9670330386348056, 0.9700955202348784, 0.9758543931966828, 0.9699651904825276, 0.974751978815659, 0.975106615623364, 0.9767636550631068, 0.9753792301162144, 0.9795177016412632, 0.9752771875270696, 0.9720818273947152, 0.974773833645024]
},{
		name: 'Muksun Deinterlacer',
		data: [0.9768923690780618, 0.9762250232554044, 0.9756675047448559, 0.9772497733547412, 0.9743613250972868, 0.9756029270790962, 0.9777687844661496, 0.9781565909695288, 0.97664228083998, 0.9781273832293604, 0.9769963959129322, 0.9769235620984944, 0.9767178266771576]
},{
		name: 'PAL Interpolation',
		data: [0.9960763317476016, 0.9695508096525324, 0.9684668636550744, 0.9681233287930066, 0.96574705476037, 0.960396644097524, 0.9660948399048832, 0.9709251534689332, 0.9705742793834252, 0.9755223979197774, 0.9759627401979408, 0.9678112365488528, 0.97127097334416]
},{
		name: 'Elemental Live Low Latency Interpolation',
		data: [0.9904503993382368, 0.9903703091405408, 0.990432527676852, 0.9902162477311096, 0.9899846301972208, 0.9900182322650474, 0.9904836595787698, 0.9902652473143724, 0.9901447221865964, 0.9903650121267004, 0.9905341949613756, 0.9905084092549372, 0.9903144659809798]
},{
		name: 'Elemental Live Motion Adaptive Interpolation',
		data: [0.9892861506488844, 0.9890949121584108, 0.9895297694042554, 0.9895420868715002, 0.988901394213438, 0.9886939875562056, 0.9880005019982157, 0.9869325160915212, 0.988474747445962, 0.987940384266652, 0.9882094326196652, 0.9893130313389664, 0.9886599095511398]
},{
		name: 'Studio Coast Pty vMix',
		data: [0.9811822682510916, 0.9811176151193628, 0.981301816395375, 0.9806545099357804, 0.9805297585236727, 0.9805844293951134, 0.9815486813417575, 0.9809920790652256, 0.9812874752699694, 0.9811387948269488, 0.9807989168950276, 0.9806237715685155, 0.9809800097156534]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [0.98535338564664, 0.9852095919963378, 0.9854495656246216, 0.9850444126242409, 0.9842557242918156, 0.9833241940228872, 0.9848647873271, 0.9852724699892144, 0.9851553271210528, 0.9847232362930316, 0.9851183647860796, 0.9850887761273692, 0.984904986320866]
},{
		name: 'Adobe Premiere Pro Built-In',
		data: [0.9598457493955692, 0.9608760560829231, 0.9584875860532536, 0.9584105886469816, 0.9604699803607664, 0.9608600929846494, 0.9575620837825108, 0.9624805022320444, 0.9600864668628176, 0.9636060561845932, 0.9594872541897872, 0.9614262138101576, 0.9602998858821712]
},{
		name: 'Elemental Live Motion Adaptive Blend',
		data: [0.7504869674886041, 0.7607468989814092, 0.7636384331402368, 0.6962717514795671, 0.7593546571428281, 0.7415605134366643, 0.7379199064060438, 0.7126636424685213, 0.7476392796627657, 0.7014361372667036, 0.7446594068138501, 0.7127445888452123, 0.7357601819277004]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [0.6149326036409821, 0.9721754343795764, 0.5909208945881181, 0.9006893122961214, 0.5305796330640925, 0.7709630905737691, 0.4811888737251738, 0.6776093867884168, 0.4933772985290038, 0.6464164265497359, 0.4840306070154946, 0.6421964001359546, 0.6504233301072032]
},{
		name: 'VapourSynth EEDI3',
		data: [0.9949528059853486, 0.99500771330062, 0.9949042748226238, 0.9946433961625089, 0.9945064350475376, 0.9945332812015064, 0.99503754758407, 0.9947766018082296, 0.9947691222104864, 0.995048488084091, 0.9950436723732125, 0.9949698311667844, 0.9948494308122516]
},{
		name: 'VapourSynth TDeintMod',
		data: [0.996101931553562, 0.996269852690634, 0.9961542993248828, 0.995917176680008, 0.9957393343541818, 0.9956891430623378, 0.9962074809602608, 0.9960481175295028, 0.995960526949106, 0.9961781925746046, 0.9962089790603662, 0.9960485679149138, 0.99604363355453]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [0.9949684344299164, 0.9879550859947716, 0.9894948945595065, 0.9912678572302516, 0.9889722401381263, 0.9903328740759714, 0.9905769552491724, 0.9903474175999074, 0.9912899530229936, 0.9923774317459472, 0.9913464221476068, 0.9896248448308336, 0.9907128675854172]
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