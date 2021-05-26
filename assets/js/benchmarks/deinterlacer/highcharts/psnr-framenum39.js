$(function () {
    $(document).ready(function() {
            Highcharts.chart('detailed', {

            title: {
                text: 'PSNR to Frame Number: sequence № 39'
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
		data: [42.875320647991096, 42.84847356573054, 41.07800008617141, 39.212083584861034, 43.7999832715741, 45.609250087864254, 45.99434524989274, 43.472291762191375, 39.38084782781593, 40.019404514609, 39.866369129695244, 38.84242884288331, 41.91656654760666]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [43.96512882760405, 44.25681607676317, 43.104742001323146, 41.72187332445647, 45.114967497989255, 46.52004950762781, 46.77325666179706, 44.980706556151496, 42.82014113137122, 42.301481987054785, 42.07602184576621, 45.826833097510146, 44.121834876284574]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [45.01123339596525, 44.88804953129606, 43.64012479191741, 42.041265791354206, 44.618525408017284, 46.17154029041955, 46.86224930027557, 45.69395325992246, 44.04311718215603, 42.948663408519465, 42.56055718788276, 43.44823725957408, 44.32729306727501]
},{
		name: 'Kernel Deinterlacer',
		data: [45.93950043710772, 39.31561886869254, 38.39508499015726, 38.95159057789636, 38.78371716978876, 39.746555171001305, 40.518582701407595, 40.150069408280814, 39.039129751312586, 38.45866804657521, 38.35274420452056, 38.65872259099169, 39.69249865981104]
},{
		name: 'NNEDI',
		data: [47.524397104659634, 46.56328009869054, 45.374974305426576, 43.959893502338474, 47.067876585748785, 48.52210110907244, 48.557935172085145, 47.198039566759434, 45.300413383698704, 44.521506773091815, 44.40638964998886, 45.80086700071604, 46.233139521023034]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [46.66566379398874, 45.842209130966204, 44.863101295370654, 43.560461722873285, 46.29075833396992, 47.434681776494806, 47.41946769337058, 46.26679273249818, 44.85206263705612, 44.04240552100958, 43.92875346973342, 45.2701591762579, 45.53637644029912]
},{
		name: 'Bob',
		data: [46.047856889377286, 45.28008181405389, 43.94046089377422, 42.62362607386602, 46.02436614873349, 47.43258582991726, 47.74363212077724, 46.04906667045274, 44.11996256008099, 43.2467430435672, 43.10982278274885, 44.40756607631965, 45.00214757530574]
},{
		name: 'MSU Deinterlacer',
		data: [41.14050083924415, 44.079800613236074, 42.63708842029921, 42.02286751708353, 43.84226330457382, 45.25524306427233, 45.55167068517945, 44.042842635451926, 42.173091901034496, 44.363726555857966, 45.16254312512042, 44.085481278704336, 43.69642666167147]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [39.60351170013653, 37.988256935885275, 37.51533226009792, 36.747202266677476, 38.79021005433332, 39.276380722721896, 39.26658076240321, 38.423751853627024, 37.67466490204869, 37.47002346407853, 37.35201425171729, 38.03276737032262, 38.178391378670824]
},{
		name: 'Muksun Deinterlacer',
		data: [40.20805094995664, 39.92364193589346, 39.05846697427304, 37.78265826922427, 40.49861785421557, 41.22168927954522, 41.48836412707119, 40.53119399320668, 38.08798699526733, 38.45629441977778, 38.36594322564793, 39.34784242798249, 39.58089587100513]
},{
		name: 'PAL Interpolation',
		data: [44.06470783360432, 35.303836994815704, 34.715822551952265, 33.50517695022618, 35.0542632262289, 36.34655242728354, 36.940821622296035, 36.259307655005, 34.23098151445076, 33.940869190602356, 34.076318706225926, 34.58170571720296, 35.751697032491165]
},{
		name: 'Elemental Live Low Latency Interpolation',
		data: [45.18508258224888, 44.550715731960814, 43.449011135275505, 42.305234500320594, 45.14683766370303, 46.22163301383209, 46.420499177841975, 45.18537913793492, 43.64416750905058, 42.85432313064892, 42.73100314346276, 43.85744282326817, 44.295944129129026]
},{
		name: 'Elemental Live Motion Adaptive Interpolation',
		data: [43.5529290477493, 42.804863158726576, 41.25633764202485, 39.606701763208925, 42.50124566033686, 43.608702199124444, 43.65274297697203, 42.584273604224734, 39.6418560408328, 39.77986965757453, 39.598811019205954, 41.79957131154241, 41.69899200679362]
},{
		name: 'Studio Coast Pty vMix',
		data: [38.055666301516645, 37.12957224703571, 36.064060754969866, 35.27647778722505, 37.858559630763054, 39.1632692868962, 38.83613636217368, 37.11053764747106, 35.95909254737069, 35.81803340464805, 35.77414935111032, 36.813408600382935, 36.98824699346361]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [29.45208759751218, 29.009878072042127, 28.825391701575608, 28.199787932014342, 28.63937149187255, 29.143681293069267, 29.25315441377825, 28.616337408927745, 27.687442301716928, 27.552336480586806, 27.428899543673673, 27.727602076753982, 28.461330859460286]
},{
		name: 'Adobe Premiere Pro Built-In',
		data: [44.6017778075185, 44.0235591767587, 42.670769827051934, 41.14268219093513, 44.61929884459815, 45.80846005430012, 46.162085024378136, 44.6609104247426, 41.62691224772577, 41.94745653253531, 41.83744612800102, 43.06810930636399, 43.51412229707579]
},{
		name: 'Elemental Live Motion Adaptive Blend',
		data: [29.291404381138268, 29.381105653032474, 28.725184476365627, 32.614481355096174, 27.828650305726065, 27.132698315338203, 26.55653375898137, 27.771167769905915, 30.96243618439445, 29.184564292325035, 29.38606713916257, 29.44494186937213, 29.023269625069858]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [23.34642342575389, 38.91179933203338, 22.852252325960585, 35.810403355866974, 21.997275826480273, 34.89728656355612, 20.66202657287958, 31.62194868626898, 25.253660970778352, 32.40628658901616, 23.67540796744557, 30.315525355792357, 28.47919141431936]
},{
		name: 'VapourSynth EEDI3',
		data: [47.547454083573676, 46.70818991843478, 45.411057188021424, 43.99323627656908, 47.20056793850755, 48.61964145649088, 48.70938765592222, 47.48128122159972, 45.492789404651404, 44.53367633116992, 44.371385235486535, 45.73695424203135, 46.31713507937153]
},{
		name: 'VapourSynth TDeintMod',
		data: [47.8645997967954, 46.85080426910802, 45.63514017255352, 44.25524816823085, 47.53390640069102, 49.00883222496895, 49.040160197200365, 47.42839875052996, 45.78322166302797, 45.012399740142705, 44.84859292016336, 46.25495452819656, 46.626354902634056]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [45.91127448360435, 43.79314075478094, 42.528708172245395, 41.72716408226877, 43.8108880867991, 44.92115325896535, 45.62275888967372, 44.538916968376846, 42.98106827857544, 42.15290937233033, 41.96888481127585, 42.884636472485965, 43.570125302615175]
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