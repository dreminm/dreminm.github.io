$(function () {
    $(document).ready(function() {
            Highcharts.chart('vidnum_plot', {

            title: {
                text: 'Mean VMAF to Sequence Number'
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
                        text: 'Sequence Number'
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
		data: [99.87035369873047, 91.76808166503906, 99.77607727050781, 99.90560913085938, 99.77214050292969, 99.07877349853516, 88.76454162597656, 86.3855209350586, 99.85302734375, 97.80392456054688, 95.91411590576172, 57.40816116333008, 94.69599151611328, 99.80623626708984, 96.1583023071289, 93.44475555419922, 94.1287612915039, 97.46585083007812, 98.80089569091797, 99.83889770507812, 90.77867889404297, 90.19206237792969, 99.78854370117188, 98.53903198242188, 97.96517181396484, 87.5064468383789, 75.9615478515625, 79.52827453613281]
},{
		name: 'PAL Interpolation',
		data: [84.741943359375, 75.7600326538086, 86.68573760986328, 95.66986846923828, 93.09773254394531, 92.62176513671875, 72.76923370361328, 70.78426361083984, 99.57616424560547, 85.35066986083984, 89.95036315917969, 38.806602478027344, 84.59809875488281, 85.7239761352539, 84.39128875732422, 96.05304718017578, 78.99146270751953, 82.6590576171875, 95.92579650878906, 88.24736022949219, 74.13521575927734, 68.1492919921875, 95.78089904785156, 95.83875274658203, 83.33541870117188, 88.30049896240234, 64.10631561279297, 62.484004974365234]
},{
		name: 'VapourSynth EEDI3',
		data: [99.55294698079427, 88.26162974039714, 99.29482905069987, 100.0, 100.0, 96.8670778910319, 83.39307988484701, 84.14578170776367, 100.0, 95.88086293538412, 93.78884531656901, 57.52959518432617, 65.07790336608886, 99.72513173421224, 95.08645782470703, 91.75919748942057, 91.64965082804362, 94.43741149902344, 94.19950307210287, 99.40704116821288, 78.25034866333007, 86.1219357808431, 99.64999059041341, 97.44519805908203, 96.07062301635742, 86.12236938476562, 72.60187530517578, 77.10588912963867]
},{
		name: 'Bob',
		data: [98.55410207112631, 84.49135258992513, 98.37745946248373, 99.89750010172526, 99.3799929300944, 93.82852172851562, 78.07026189168295, 78.39208424886068, 100.0, 91.56042658487955, 90.51841379801432, 54.468630981445315, 62.446816762288414, 97.06886774698893, 93.73325220743816, 90.23406448364258, 87.35337626139322, 91.04454549153645, 91.77191645304362, 97.56051610310872, 75.21887435913087, 82.35098495483399, 97.62412821451822, 95.5730473836263, 88.96981658935547, 81.70490417480468, 68.85379053751628, 73.71739374796549]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [94.54828643798828, 83.49835205078125, 88.74714660644531, 98.3683853149414, 98.75916290283203, 94.45987701416016, 80.09397888183594, 80.8026351928711, 99.69873809814453, 90.56053924560547, 94.97319793701172, 46.85185623168945, 99.13014221191406, 95.42465209960938, 88.7593765258789, 95.9337158203125, 84.05182647705078, 92.45355224609375, 98.29156494140625, 95.84274291992188, 87.38233947753906, 79.45577239990234, 97.03641510009766, 97.70506286621094, 89.58817291259766, 88.77342987060547, 74.74053955078125, 72.77078247070312]
},{
		name: 'YADIF',
		data: [97.37082468668619, 84.59286193847656, 95.27416076660157, 98.57803624471029, 99.63531010945638, 94.42012736002604, 86.19208958943685, 82.35051803588867, 100.0, 91.92175496419271, 94.61944478352865, 44.69560216267904, 60.79280840555827, 94.85072402954101, 92.8652104695638, 97.5485237121582, 81.99334309895833, 93.81439361572265, 93.86391576131184, 96.74743270874023, 70.35229034423828, 77.19658533732097, 97.68926391601562, 97.11502126057943, 89.4542241414388, 89.3943692525228, 69.77994155883789, 69.61595077514649]
},{
		name: 'MSU Deinterlacer',
		data: [98.60555419921874, 85.5028917948405, 95.014230855306, 99.53751703898112, 99.2953707377116, 96.0786496480306, 94.00506820678712, 89.98423639933269, 100.0, 92.74934285481771, 95.95474192301432, 53.00388056437175, 72.60502548217774, 98.6409189860026, 92.17073287963868, 97.55499064127604, 95.45553461710612, 94.47544301350912, 96.18037490844726, 97.98983205159506, 90.22575861612955, 86.70724894205729, 97.12347844441732, 98.34979298909505, 97.80678304036458, 94.40167872111003, 85.75007502237956, 84.77029546101888]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [95.37036895751953, 85.88497161865234, 90.45899963378906, 98.39942169189453, 99.09880065917969, 95.32930755615234, 77.77796173095703, 78.73529815673828, 99.70256805419922, 91.55709075927734, 92.50857543945312, 43.59507751464844, 86.84666442871094, 93.78682708740234, 90.09044647216797, 91.97370910644531, 85.54134368896484, 89.4216079711914, 97.01520538330078, 96.6257553100586, 78.73648834228516, 80.15636444091797, 97.13278198242188, 96.87793731689453, 90.24899291992188, 76.4078369140625, 65.23582458496094, 67.91582489013672]
},{
		name: 'VapourSynth TDeintMod',
		data: [99.80437850952148, 88.759592183431, 99.46315561930338, 100.0, 100.0, 96.9569798787435, 87.5381696065267, 83.97267583211263, 100.0, 96.05752970377604, 94.68636169433594, 56.526406606038414, 65.63351262410482, 99.90365498860677, 96.25086898803711, 97.42019399007161, 91.11722259521484, 97.77326838175456, 97.52157135009766, 99.73863525390625, 79.03050740559895, 86.90080134073894, 97.40120010375976, 97.97212575276693, 94.7885373433431, 90.44128723144532, 74.75219802856445, 78.8154401143392]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [99.62224578857422, 86.54922485351562, 99.2171401977539, 99.67678833007812, 99.5484619140625, 95.55489349365234, 84.181884765625, 80.95014190673828, 99.74518585205078, 93.4963150024414, 91.92190551757812, 54.22640609741211, 90.19204711914062, 99.50253295898438, 92.9731216430664, 95.16557312011719, 88.90713500976562, 93.81502532958984, 97.64535522460938, 99.29789733886719, 88.35575103759766, 85.36483001708984, 98.16472625732422, 97.39510345458984, 94.13739776611328, 86.50666809082031, 73.08876037597656, 75.98966979980469]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [99.07430674235026, 85.62548548380533, 98.88758112589518, 99.95207824707032, 99.88554712931315, 95.23436431884765, 89.6918935139974, 83.24667612711589, 100.0, 93.456702931722, 93.69162165323893, 54.41426124572754, 66.64723154703776, 98.98595835367838, 94.34606374104818, 92.575021870931, 88.28026479085287, 93.20178044637045, 93.88846232096354, 98.79103444417318, 77.10234400431315, 84.21005477905274, 99.04618072509766, 97.12696584065755, 92.18300247192383, 89.81779505411784, 74.1576550801595, 75.98184585571289]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [99.79824905395508, 88.19046198527018, 99.2307512919108, 99.87718149820964, 99.98938725789388, 97.15117009480794, 92.15042572021484, 86.31502049763998, 100.0, 96.05953445434571, 95.98809382120768, 52.70830408732096, 67.97292683919271, 99.78713912963867, 95.64872868855794, 96.97026596069335, 88.28197072347005, 97.70163040161133, 96.59974670410156, 99.77352396647136, 81.46884562174479, 85.255837504069, 98.8476557413737, 98.16885274251302, 94.14769083658854, 92.45645573933919, 78.11565831502278, 78.00023727416992]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [68.34546661376953, 49.978851318359375, 53.14748001098633, 63.26491165161133, 58.05162811279297, 52.87153625488281, 69.8392105102539, 75.90314483642578, 58.98533630371094, 52.24142074584961, 86.40586853027344, 33.179447174072266, 90.32427978515625, 61.55105972290039, 76.0220718383789, 74.83927154541016, 31.652708053588867, 58.486385345458984, 81.43968963623047, 53.59971618652344, 73.31828308105469, 45.274635314941406, 95.11337280273438, 80.00513458251953, 50.89181900024414, 87.24945831298828, 78.82646942138672, 43.40163803100586]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [99.60214818318686, 89.46383183797201, 99.3326291402181, 100.0, 100.0, 98.2235112508138, 90.3938585917155, 85.321449025472, 100.0, 96.63103942871093, 96.19490585327148, 56.04244486490885, 67.29607772827148, 99.80465621948242, 95.17292607625326, 94.55225448608398, 91.30010096232097, 95.37011922200521, 96.71655832926432, 99.8234987894694, 76.07457936604818, 86.65969365437826, 98.61475168863932, 98.27714640299479, 95.80066223144532, 88.07666778564453, 74.33294906616212, 77.90771687825521]
},{
		name: 'Muksun Deinterlacer',
		data: [95.37036895751953, 85.88497161865234, 90.45899963378906, 98.39942169189453, 99.09880065917969, 95.32930755615234, 77.77796173095703, 78.73529815673828, 99.70256805419922, 91.55709075927734, 92.50857543945312, 43.59507751464844, 86.84666442871094, 93.78682708740234, 90.09044647216797, 91.97370910644531, 85.54134368896484, 89.4216079711914, 97.01520538330078, 96.6257553100586, 78.73648834228516, 80.15636444091797, 97.13278198242188, 96.87793731689453, 90.24899291992188, 76.4078369140625, 65.23582458496094, 67.91582489013672]
},{
		name: 'Kernel Deinterlacer',
		data: [98.93309783935547, 86.2622299194336, 93.12495422363281, 99.09297943115234, 99.5484619140625, 95.27488708496094, 84.98241424560547, 80.98014831542969, 99.74518585205078, 92.17613983154297, 91.7258071899414, 53.622169494628906, 90.25680541992188, 98.51876831054688, 90.17507934570312, 95.15768432617188, 87.12706756591797, 93.86382293701172, 97.56813049316406, 98.57876586914062, 88.33148956298828, 84.87052154541016, 97.52604675292969, 97.8155746459961, 93.51045227050781, 88.3018798828125, 73.91278839111328, 76.01985931396484]
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