$(function () {
    $(document).ready(function() {
            Highcharts.chart('detailed', {

            title: {
                text: 'PSNR to Frame Number: sequence № 3'
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
		data: [45.016156230288715, 44.622319271823635, 45.41668598682306, 45.79188747289685, 43.709534560255996, 43.589792446396636, 43.778443029943276, 44.13097846267745, 45.47933591477785, 46.77822830713295, 44.86345265888463, 44.87501810714278, 44.83765270408698]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [49.33618378812477, 49.3992049953766, 50.5171591132612, 51.37169217516861, 47.01528456270115, 46.269940853673155, 47.36859139623662, 48.786242867320794, 50.802229781068704, 51.29887434473184, 49.76158135502008, 47.40333412383815, 49.11085994637681]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [46.5020412481552, 46.589365433583104, 47.59222685094962, 48.70521172642314, 46.89478702395735, 44.99876941521713, 45.49215623625294, 46.683441866162404, 46.984314474797344, 47.94657278041125, 49.766947609033224, 46.06937587567461, 47.01876754505144]
},{
		name: 'Kernel Deinterlacer',
		data: [46.23263378898966, 44.50948130023549, 45.76815602446339, 47.91695229826449, 43.13828614291849, 42.90977843699401, 43.68263734564288, 44.716130141542784, 45.751857345907275, 47.61557520517135, 46.371009570977144, 44.28490066841449, 45.241449855793455]
},{
		name: 'NNEDI',
		data: [47.380876245770295, 47.16206875706553, 47.318512654731045, 47.17928168702961, 47.357447052607775, 47.30746126289917, 47.496527370597256, 47.34179505652655, 47.569557303952685, 47.418793892985114, 47.59253768348767, 47.38431045888749, 47.37576411887836]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [46.10664236919487, 46.197387242904256, 46.354606496193, 46.409070500887175, 46.2356651797615, 46.01202529521655, 46.102695158543966, 46.218299913803186, 46.599646327371985, 46.55419476930543, 46.76621137081995, 46.265862918409006, 46.31852562853424]
},{
		name: 'Bob',
		data: [46.32078654754324, 46.161810841090364, 46.22903270339033, 46.175551935826604, 46.2757547779697, 46.29117926817862, 46.41066428064918, 46.3333388414819, 46.50007978176949, 46.405434194855964, 46.53266580161849, 46.38230899048032, 46.33488399707119]
},{
		name: 'MSU Deinterlacer',
		data: [47.96459451361038, 51.783789361539675, 52.94436333898727, 53.981916026141654, 51.20121216721592, 50.41313103694952, 48.80728117667077, 50.54398913438125, 52.88325740585988, 54.046020595069635, 52.828765850938865, 49.581063829697676, 51.414948703088534]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [41.554370438293866, 43.394542323973894, 44.87859814969427, 48.37767140317293, 40.921834585600585, 39.974216302792115, 40.01895579665923, 42.151787987952545, 46.17819502674136, 48.13800383305015, 45.30809116770196, 42.17050289346868, 43.58889749242514]
},{
		name: 'Muksun Deinterlacer',
		data: [42.70217068353751, 43.865076838438604, 44.76643115844056, 46.849718807771985, 42.93851296984879, 41.229011645844075, 41.48515413422136, 43.174296435818555, 45.66687985237198, 46.857621113535096, 45.59105993935515, 43.09352382983364, 44.018288117418116]
},{
		name: 'PAL Interpolation',
		data: [45.18303913075991, 37.16445152852686, 37.87238995750697, 39.46270477513053, 39.57466602437878, 36.69969093386929, 36.66618262496897, 36.59000125460992, 37.07979524083288, 40.33658171066253, 43.348116363353355, 37.464361496555135, 38.95349842009626]
},{
		name: 'Elemental Live Low Latency Interpolation',
		data: [45.51583097464504, 45.408737879810275, 45.44806002324864, 45.40750037753924, 45.48394823824499, 45.4899517052405, 45.564570934417155, 45.52224857097485, 45.6751283755645, 45.635426665267566, 45.72167032478639, 45.60883641408254, 45.54015920698514]
},{
		name: 'Elemental Live Motion Adaptive Interpolation',
		data: [43.985268204263804, 44.039039988071096, 44.35231030386119, 45.23218813524532, 44.1011607846636, 42.76683046396367, 43.494311390263654, 44.4291116717163, 45.84942401123189, 46.8508588612541, 45.627767427004564, 44.1395411464644, 44.57231769900031]
},{
		name: 'Studio Coast Pty vMix',
		data: [39.43615800786456, 39.34907494888135, 39.359598875020644, 39.37123228586636, 39.39006541275496, 39.42603242490517, 39.45926890527461, 39.46756435464568, 39.533308021103466, 39.54994912204197, 39.596931348595604, 39.53901567962636, 39.456516615548395]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [27.1554469421412, 27.16943620953931, 27.184154585062753, 27.201239945380497, 27.208403352100106, 27.21156104211101, 27.241718665091664, 27.262702585655013, 27.26546330059729, 27.302039179972745, 27.31494164575513, 27.313432184215454, 27.23587830313518]
},{
		name: 'Adobe Premiere Pro Built-In',
		data: [44.65981591051859, 44.539187181346016, 44.568545208251535, 44.58881112163292, 44.661801687393606, 44.67518033563027, 44.788329957904175, 44.780948999301756, 44.8861173260494, 44.820169293006096, 44.90134120713151, 44.78893436593852, 44.721598549508684]
},{
		name: 'Elemental Live Motion Adaptive Blend',
		data: [44.881743021432754, 45.989324359616326, 46.87811096898324, 48.525572379946134, 43.262605599394206, 39.74250970065197, 41.53547279280272, 44.120234539833234, 46.82259413857892, 47.621445929380855, 45.66758415102744, 45.430480687397754, 45.03980652242046]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [40.81929230660586, 43.32252039679633, 44.00216676968446, 46.11140744291611, 39.856497873498654, 40.659213031476604, 37.74886051505982, 41.9805861714531, 45.30158798723713, 45.95962900586344, 43.71754723680273, 45.52135842543973, 42.91672226356949]
},{
		name: 'VapourSynth EEDI3',
		data: [47.227664382175405, 47.01857597210782, 47.13229903568066, 47.02463213190904, 47.196835051723596, 47.15302793546108, 47.33653615992207, 47.200686280728966, 47.430232440448684, 47.287051227669544, 47.456023379244925, 47.24970773528916, 47.22610597769674]
},{
		name: 'VapourSynth TDeintMod',
		data: [47.442482227938264, 47.26103978837428, 47.47559862406885, 47.419281009971215, 47.349328826851156, 46.93654152089099, 47.15735098690622, 47.58724176946806, 47.65676843212994, 47.77148064888518, 48.03127918861865, 46.874450626082925, 47.41357030418214]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [46.18752346667371, 45.23987746048883, 46.007269066313846, 47.00423745819069, 46.066484364036405, 45.02240414176198, 45.140495600670725, 45.3246355098668, 45.42051513810875, 46.75661254732593, 47.968861953726616, 45.342903850426865, 45.95681837979925]
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