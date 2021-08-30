$(function () {
    $(document).ready(function() {
            Highcharts.chart('vidnum_plot', {

            title: {
                text: 'Mean PSNR to Sequence Number'
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
		data: [38.42469024658203, 37.61012268066406, 48.945281982421875, 46.60306167602539, 40.79752731323242, 37.55787658691406, 30.356773376464844, 37.667686462402344, 43.21028518676758, 45.33940505981445, 52.85307693481445, 18.668331146240234, 24.01022720336914, 39.49978256225586, 40.98931884765625, 40.867671966552734, 27.573925018310547, 43.171173095703125, 48.640316009521484, 44.29081344604492, 25.72673988342285, 28.371417999267578, 42.83687973022461, 39.36781311035156, 31.094676971435547, 30.089832305908203, 26.165130615234375, 28.03925323486328]
},{
		name: 'PAL Interpolation',
		data: [34.774269104003906, 33.32746887207031, 38.12748718261719, 36.01796340942383, 33.38035583496094, 34.973018646240234, 29.714197158813477, 34.23699188232422, 37.60529327392578, 38.64939498901367, 43.26726150512695, 16.707611083984375, 22.58134651184082, 31.9977970123291, 37.03191375732422, 43.255367279052734, 25.558578491210938, 37.2401008605957, 39.74264907836914, 35.45492172241211, 21.90876579284668, 25.992109298706055, 43.39459228515625, 37.20454406738281, 27.699045181274414, 31.745258331298828, 24.044414520263672, 25.599573135375977]
},{
		name: 'VapourSynth EEDI3',
		data: [38.452384567260744, 37.414907201131186, 49.394086074829104, 46.965519460042316, 40.546807352701826, 37.14863166809082, 29.953720156351725, 37.278703435262045, 43.485630925496416, 45.55524393717448, 49.46289253234863, 18.47376448313395, 23.779133860270182, 39.60322405497233, 42.13996849060059, 38.839316304524736, 27.641729863484702, 42.92138303120931, 50.586690521240236, 43.88459854125976, 25.496903800964354, 28.37804495493571, 45.48681157430013, 39.372669728597, 31.472819137573243, 29.880322202046713, 26.098849550882974, 27.984029261271157]
},{
		name: 'Bob',
		data: [38.4831049601237, 36.993784713745114, 48.68314030965169, 45.49297955830892, 39.21162452697754, 36.87110239664714, 29.200423940022787, 36.513003794352215, 43.443860371907554, 44.495391082763675, 47.136152013142905, 18.21089070638021, 23.699839146931968, 38.77102928161621, 42.15783500671387, 37.23150100708008, 27.483325831095378, 42.54360084533691, 49.648996353149414, 43.04131711324056, 25.045565923055012, 28.460113779703775, 51.645131556193036, 39.298604075113936, 29.6624350865682, 29.270893351236978, 26.01082770029704, 27.984030977884927]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [36.751766204833984, 35.146080017089844, 40.85699462890625, 35.203128814697266, 35.50444030761719, 34.99325942993164, 30.927671432495117, 36.5528564453125, 38.54297637939453, 41.0119743347168, 49.94043731689453, 17.554780960083008, 25.710783004760742, 34.54641342163086, 37.78899002075195, 46.13909912109375, 26.263530731201172, 39.75226593017578, 57.0528450012207, 38.03752136230469, 25.817472457885742, 27.380369186401367, 45.90714645385742, 36.87982940673828, 28.5504207611084, 31.83870506286621, 26.17005157470703, 26.969240188598633]
},{
		name: 'YADIF',
		data: [38.42745043436686, 36.42342542012533, 45.79927393595378, 40.570370483398435, 38.1082883199056, 37.217172114054364, 32.699906539916995, 37.683858235677086, 41.74916254679362, 44.531363296508786, 52.19207445780436, 17.600585746765137, 22.973620160420737, 36.77760785420735, 41.70774892171224, 53.56411387125651, 26.35419527689616, 42.962053298950195, 51.694604365030926, 41.39102439880371, 23.54236272176107, 27.40968462626139, 47.30253295898437, 39.75706532796224, 29.929624430338542, 33.0011620203654, 25.772818565368652, 26.55443172454834]
},{
		name: 'MSU Deinterlacer',
		data: [38.54814860026042, 37.31246452331543, 45.85043525695801, 40.955199813842775, 38.14017601013184, 37.60278244018555, 36.5875441233317, 41.44372418721517, 41.55099868774414, 44.629391479492185, 53.16430066426595, 18.4351048151652, 26.808105659484863, 40.4218329111735, 41.45933252970378, 46.423842112223305, 29.813374837239582, 43.21566200256348, 52.308950932820636, 41.57754783630371, 34.060791397094725, 29.572882461547852, 48.03999773661295, 39.882638931274414, 32.92289320627848, 37.3574270884196, 31.58138370513916, 29.913683891296387]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [36.970680236816406, 35.949275970458984, 41.95558166503906, 38.480709075927734, 36.273399353027344, 36.207889556884766, 28.932193756103516, 36.17842483520508, 40.07529830932617, 42.135162353515625, 47.90752410888672, 17.29366111755371, 22.321094512939453, 34.443389892578125, 38.4176139831543, 38.99501037597656, 26.468124389648438, 39.746238708496094, 48.14860534667969, 38.83148193359375, 22.06853675842285, 27.31717872619629, 45.97340393066406, 37.003475189208984, 29.36095428466797, 27.18675994873047, 24.518144607543945, 26.453760147094727]
},{
		name: 'VapourSynth TDeintMod',
		data: [38.69608472188314, 36.96784604390462, 49.2159720102946, 46.998600769042966, 39.83628870646159, 36.937905629475914, 31.03645814259847, 37.199208958943686, 43.294730758666994, 44.38026351928711, 50.037044779459634, 17.753284072875978, 23.626985613505045, 39.24675661722819, 43.67451082865397, 49.20046717325847, 27.266581281026205, 43.79832369486491, 53.93473612467448, 43.826796468098955, 25.474047724405924, 28.10354340871175, 47.482628122965494, 39.185332489013675, 29.73322467803955, 32.43391068776449, 26.186446889241537, 27.739254506429038]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [38.732784271240234, 36.835567474365234, 46.15922164916992, 39.839054107666016, 38.74544906616211, 36.69301986694336, 30.16758155822754, 37.19711685180664, 42.41572570800781, 43.93455123901367, 48.28122329711914, 18.101797103881836, 23.54234504699707, 38.17763900756836, 38.458892822265625, 45.860816955566406, 27.2564640045166, 42.46554183959961, 50.615699768066406, 42.25174331665039, 24.849740982055664, 28.261802673339844, 47.832027435302734, 39.234134674072266, 29.62324333190918, 31.186141967773438, 26.026880264282227, 27.818368911743164]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [38.65305760701497, 36.52394256591797, 47.52547098795573, 43.18380864461263, 38.78120829264323, 36.519693756103514, 32.93164927164714, 36.95548082987467, 42.70521596272786, 44.23874486287435, 50.738009516398115, 17.652971585591633, 25.167083994547525, 38.22273508707682, 41.941235605875654, 39.84433263142903, 26.7893580754598, 42.87577044169108, 50.8935240427653, 42.670877075195314, 25.905407269795734, 27.92860902150472, 45.76160748799642, 39.08916384379069, 29.25498415629069, 33.493965276082356, 26.628624725341798, 27.190891329447428]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [38.659193674723305, 36.82831230163574, 48.25285046895345, 43.61359036763509, 39.30994122823079, 36.992495981852215, 35.20689373016357, 38.159937922159834, 42.39184226989746, 44.81891835530599, 53.313141377766925, 17.70621280670166, 24.500426801045737, 38.95650126139323, 43.144504419962566, 50.19737033843994, 27.000651105244955, 44.31795959472656, 52.63405469258626, 43.60576108296712, 27.302291043599446, 28.17593256632487, 48.28529485066732, 39.25366414388021, 30.022851753234864, 34.890239524841306, 27.403335444132487, 27.603646405537923]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [32.49537658691406, 30.365291595458984, 33.66780090332031, 25.693574905395508, 26.881439208984375, 26.779605865478516, 28.460233688354492, 34.70231246948242, 25.50273323059082, 33.37251663208008, 43.46451950073242, 14.639745712280273, 23.572656631469727, 28.165258407592773, 35.76554489135742, 34.84528350830078, 19.650564193725586, 33.21708679199219, 39.203094482421875, 29.770183563232422, 23.01721954345703, 23.173351287841797, 40.609954833984375, 29.965139389038086, 22.463197708129883, 31.027748107910156, 26.323131561279297, 22.4624080657959]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [38.31292241414388, 37.63361511230469, 48.231828180948895, 44.73876584370931, 40.46727104187012, 38.059962590535484, 32.49825661977132, 37.473777516682944, 43.0243891398112, 44.91843452453613, 51.536556243896484, 18.339771715799966, 24.301940155029296, 39.40982259114583, 42.63095499674479, 41.91756057739258, 27.35608698527018, 43.44639155069987, 47.93347434997558, 43.82212498982747, 25.210101064046224, 28.35132090250651, 42.01355272928874, 39.34999389648438, 30.65254561106364, 30.872149848937987, 26.50959758758545, 27.849108695983887]
},{
		name: 'Muksun Deinterlacer',
		data: [36.970680236816406, 35.949275970458984, 41.95558166503906, 38.480709075927734, 36.273399353027344, 36.207889556884766, 28.932193756103516, 36.17842483520508, 40.07529830932617, 42.135162353515625, 47.90752410888672, 17.29366111755371, 22.321094512939453, 34.443389892578125, 38.4176139831543, 38.99501037597656, 26.468124389648438, 39.746238708496094, 48.14860534667969, 38.83148193359375, 22.06853675842285, 27.31717872619629, 45.97340393066406, 37.003475189208984, 29.36095428466797, 27.18675994873047, 24.518144607543945, 26.453760147094727]
},{
		name: 'Kernel Deinterlacer',
		data: [38.27732467651367, 36.596763610839844, 41.670875549316406, 36.31455612182617, 37.901939392089844, 36.38874053955078, 30.719608306884766, 37.22975158691406, 39.50725555419922, 42.963199615478516, 47.57945251464844, 18.06413459777832, 23.550601959228516, 37.0537109375, 37.09942626953125, 46.793949127197266, 27.039901733398438, 41.28511428833008, 49.06559371948242, 40.552188873291016, 24.884553909301758, 28.18857765197754, 46.81986618041992, 38.91004943847656, 29.552019119262695, 32.00784683227539, 26.156688690185547, 27.755651473999023]
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