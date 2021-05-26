$(function () {
    $(document).ready(function() {
            Highcharts.chart('detailed', {

            title: {
                text: 'SSIM to Frame Number: sequence № 38'
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
		data: [0.9887547561608168, 0.9934643114439516, 0.9940239599018692, 0.9958596329074524, 0.9972469179788696, 0.9972622662228144, 0.99755519856444, 0.9977229108104096, 0.9980149532426028, 0.9973141461417022, 0.9976178609613644, 0.9970916897332166, 0.995994050339126]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [0.990441806609054, 0.9940468081494264, 0.9944009678572446, 0.9956203203452316, 0.9966258928956784, 0.9966545646877476, 0.9969326286439696, 0.9970259361745749, 0.9971817697739572, 0.9966244191386272, 0.997023398972629, 0.9972152272866652, 0.9958161450445672]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [0.9849672230402644, 0.9899962769383008, 0.9935310287446848, 0.9946443879204157, 0.9955731245465296, 0.9960149558616609, 0.9962973145273434, 0.9964597591695524, 0.9964132601272758, 0.9962952396117928, 0.9966107937900276, 0.9965115057612688, 0.9944429058365932]
},{
		name: 'Kernel Deinterlacer',
		data: [0.9937769178837648, 0.9603952758448246, 0.9672975579577412, 0.9628834166633649, 0.976924955365178, 0.9900007454993276, 0.9766718107464172, 0.9774692300041379, 0.9638822523333844, 0.9828777722320624, 0.978790629649624, 0.9798213107804024, 0.9758993229133524]
},{
		name: 'NNEDI',
		data: [0.9942518599070655, 0.9952394740429392, 0.9954854182374976, 0.9962218793565776, 0.9969333980591244, 0.9969873576813704, 0.9972463162534352, 0.9973628917424996, 0.9973591083068912, 0.9968723989049572, 0.9971657256582488, 0.997224542205196, 0.9965291975296502]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [0.9930053097393298, 0.9937947495685584, 0.9940754700818706, 0.9945543464966636, 0.9951693612730812, 0.99518342070762, 0.9952512396976751, 0.9951966826458314, 0.9950637426548884, 0.9952468383147646, 0.9954434714615914, 0.9952356883690794, 0.9947683600842462]
},{
		name: 'Bob',
		data: [0.9936586963953976, 0.9950802178128504, 0.9956899271589756, 0.9966601719228428, 0.9976843559300618, 0.9977533654001752, 0.9980828584727396, 0.9982407327970748, 0.9982508969777, 0.9976866448367292, 0.997964479861367, 0.9980775529492318, 0.997069158376262]
},{
		name: 'MSU Deinterlacer',
		data: [0.9821377810076908, 0.9924693697124454, 0.9936857431601832, 0.9953153342807356, 0.9968388831945164, 0.9968207067852496, 0.9971917060087572, 0.9973185988577498, 0.9972061539897126, 0.9963063016287448, 0.996694061294778, 0.996846414242481, 0.9949025878469206]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [0.9619582675488986, 0.956091637909984, 0.9565739573693256, 0.9566122005911124, 0.9769424043500518, 0.9816976416976544, 0.9714885232667656, 0.9752835275455594, 0.9721411992475962, 0.9793975823842872, 0.9726462754086276, 0.9817338563213902, 0.9702139228034378]
},{
		name: 'Muksun Deinterlacer',
		data: [0.9557853507585627, 0.9583401663679688, 0.9584720277867852, 0.9594832337135669, 0.9736063751952541, 0.974662703871633, 0.9755142799338676, 0.9791146971814954, 0.9795841885027944, 0.9761690802206804, 0.9715210421533356, 0.9798762406668502, 0.9701774488627328]
},{
		name: 'PAL Interpolation',
		data: [0.9922374907593896, 0.9161955914793856, 0.9289948736213114, 0.9321139703206264, 0.965981214405486, 0.9873053651893784, 0.9793609211958026, 0.975613361332636, 0.9798591286719526, 0.9860244437500094, 0.9731014719502932, 0.9780935502838772, 0.9662401152466791]
},{
		name: 'Elemental Live Low Latency Interpolation',
		data: [0.9887635123609247, 0.9898754673946559, 0.9904654221451139, 0.9911548118802984, 0.991830794522876, 0.991886538655578, 0.9919475858513386, 0.9920891533375872, 0.9918921728463118, 0.9919371707582753, 0.9925022506039992, 0.9922101078824824, 0.9913795823532868]
},{
		name: 'Elemental Live Motion Adaptive Interpolation',
		data: [0.9862511944377322, 0.9861685916914884, 0.9867328175834996, 0.987627971058998, 0.9867958267941958, 0.98751255999399, 0.9889486731142284, 0.9894920488734796, 0.9893935169880862, 0.9902347347621256, 0.9908649852451026, 0.9902357512791052, 0.9883548893185026]
},{
		name: 'Studio Coast Pty vMix',
		data: [0.9659976331537716, 0.9714676963035904, 0.9736555421688844, 0.9771045655366962, 0.9820829448029552, 0.9810174165008748, 0.9813226186960478, 0.9832755514750046, 0.9838681091391608, 0.9825216904502544, 0.9832049199128214, 0.9834065615548552, 0.9790771041412428]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [0.9520473358925622, 0.9672042214482988, 0.9751647799598696, 0.9750318095524196, 0.9834863243267564, 0.9875477097090394, 0.9883413795532962, 0.9889519934362336, 0.9905462665168604, 0.9907936491953908, 0.9885836581499696, 0.9888432225861776, 0.9813785291939064]
},{
		name: 'Adobe Premiere Pro Built-In',
		data: [0.987207611414246, 0.9880099861057514, 0.988815674325612, 0.9887674150465892, 0.987369316254492, 0.9832383075401834, 0.9807735203389276, 0.975778825517624, 0.977990856050117, 0.976953776081006, 0.9789890453097386, 0.9771087592644394, 0.9825835911040603]
},{
		name: 'Elemental Live Motion Adaptive Blend',
		data: [0.8650046526137317, 0.7961118627539809, 0.8252235590756377, 0.7760642476169965, 0.6338052305233959, 0.6830409250352836, 0.6716087113889162, 0.6360738376712605, 0.5880836387641435, 0.5841655143336635, 0.6987344003672421, 0.5200332992432494, 0.689829156615625]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [0.9796008301044132, 0.6285592954606586, 0.9606921473965152, 0.5786678060592959, 0.7719575105856575, 0.3811308171011518, 0.7103547734742184, 0.31314860995752397, 0.6005513090512402, 0.17965221330524422, 0.6508460472797009, 0.05250475672346983, 0.5673055097082574]
},{
		name: 'VapourSynth EEDI3',
		data: [0.9945728780552748, 0.9957026280637506, 0.995975508871622, 0.996670816251242, 0.9976038199405974, 0.9975750025472244, 0.997822305551742, 0.9980219185697711, 0.9980444070309362, 0.9975165799183996, 0.9978044116498964, 0.9978971847191196, 0.9971006217641316]
},{
		name: 'VapourSynth TDeintMod',
		data: [0.9946444308844652, 0.9957471255010872, 0.99607124736344, 0.9968272562115518, 0.9975160726481892, 0.9976391464827182, 0.997871316796238, 0.9980258491386024, 0.9980319566655864, 0.9975115286026709, 0.997815970568905, 0.9974552659426056, 0.9970964305671716]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [0.9935823198850436, 0.9865214774108628, 0.988979790843628, 0.9894212882626396, 0.9918188907113794, 0.9952071583145892, 0.992003910979834, 0.9929807492984823, 0.9891073603973918, 0.9932518801907994, 0.9928827856643616, 0.9936860997687508, 0.9916203093106468]
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