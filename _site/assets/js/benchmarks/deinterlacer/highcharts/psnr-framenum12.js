$(function () {
    $(document).ready(function() {
            Highcharts.chart('detailed', {

            title: {
                text: 'PSNR to Frame Number: sequence № 12'
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
		data: [36.3385989360173, 34.26875312633843, 35.07440164168911, 33.905848821006515, 33.47665162208313, 34.604807179381865, 34.82864533711119, 35.568070727551024, 36.03258005151317, 36.82734972494956, 36.80193499889804, 35.964056078790186, 35.307641520444115]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [37.230598004128865, 35.250047073965774, 36.4611200475571, 35.31268531604302, 34.769898420362786, 36.37188743873371, 36.409540259876536, 37.0893728207374, 37.41255314287908, 38.488114753928414, 38.23366741996097, 39.31261574269125, 36.8618417034054]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [36.564014317188814, 35.08767155555449, 35.96608453196612, 35.126588999622506, 34.58654449122201, 35.84796360847634, 35.90785268846263, 36.4752586532393, 36.73750323447807, 37.96267412234732, 37.87246869739532, 38.257490702916286, 36.36600963357243]
},{
		name: 'Kernel Deinterlacer',
		data: [38.814099631889796, 34.92354763854388, 35.61518167287665, 34.66402951329985, 34.44104145484622, 35.46943160649964, 35.548953064250625, 35.981791505217046, 36.30860027317564, 37.287523271676704, 36.83443391191511, 36.98951065781739, 36.07317868350072]
},{
		name: 'NNEDI',
		data: [39.9273390195784, 36.98254375991424, 38.348898455499146, 38.06376695196585, 37.95214933286975, 39.63289387348186, 39.51610659356645, 39.77815359460672, 39.38906100803559, 40.58880944723504, 39.98523822771792, 40.40502378222297, 39.21416533722449]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [39.48457650125589, 36.5413238469991, 37.68477810863464, 37.29398561773442, 37.154171184842454, 38.806336823062736, 38.73452501988603, 39.04541356404553, 38.83797641695689, 39.927136622794855, 39.4833706966819, 39.794773031555756, 38.56569728620417]
},{
		name: 'Bob',
		data: [38.817357103652746, 35.840284301551186, 36.806323553108406, 35.686593530666634, 35.389977716469815, 36.71275274860478, 36.74388203091529, 37.44208740428418, 37.77705312127329, 38.95404673626497, 38.63882799130022, 39.160425929040855, 37.33080101392769]
},{
		name: 'MSU Deinterlacer',
		data: [35.657101554908316, 35.8905922258195, 36.969538104259094, 36.4656225408106, 36.318437871160434, 37.70447336975782, 37.847430652955865, 38.251807366378344, 38.265926075930665, 39.10287173003524, 38.55597323819784, 38.56971870469345, 37.46662445290894]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [36.634740611052926, 33.98207515378287, 34.627476959422324, 33.51815233341455, 33.26099284784628, 34.34992480189296, 34.39216140611481, 34.95320275804622, 35.134391695093214, 35.99191368717624, 35.77201852162232, 35.735751844743284, 34.862733551683995]
},{
		name: 'Muksun Deinterlacer',
		data: [36.54348117619108, 34.45704853612203, 35.11467142364124, 34.45490658234542, 34.37274280627857, 35.35040267950967, 35.40539396619237, 35.88343613633733, 36.08814174535935, 36.81199944659978, 36.59223331346332, 37.061168966060684, 35.677968898175074]
},{
		name: 'PAL Interpolation',
		data: [36.28400812160145, 32.578773438397256, 33.18393022320271, 31.977071740923147, 31.8534688550054, 32.6757909946665, 32.760487446720504, 32.98826698546988, 33.22014077675804, 34.04521689434865, 33.850368156147674, 34.274148275910484, 33.307639325762636]
},{
		name: 'Elemental Live Low Latency Interpolation',
		data: [38.7413542524576, 35.861706076628664, 36.79084236573946, 35.70671985597782, 35.41007032322393, 36.69797741007811, 36.72072132622994, 37.390941868494004, 37.710082324263, 38.841530838755034, 38.540926667213824, 39.039528887760135, 37.28770018306846]
},{
		name: 'Elemental Live Motion Adaptive Interpolation',
		data: [37.686125494030144, 35.41845971808156, 36.20327126534888, 35.68334193033238, 35.59590970472369, 36.81412804191282, 37.000323518019925, 37.14136080236912, 37.055444091937716, 37.77830237605453, 37.2878508179295, 37.75518574326903, 36.78497529200077]
},{
		name: 'Studio Coast Pty vMix',
		data: [34.42783422004166, 32.52909806435325, 33.04938288321473, 32.2390448062038, 32.15849639251523, 33.18668621314877, 33.228361544448774, 33.70166670831699, 33.71290748967297, 34.47850135695284, 34.08130626768259, 34.17300617617429, 33.413857676893834]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [27.584271766078444, 27.52727752653573, 27.460259516363138, 28.141441825384284, 26.7196223542877, 27.022286359395967, 27.212896411065007, 27.106320144956733, 27.677285992064398, 28.59325219058799, 28.72992389370738, 29.91446277547518, 27.80744172965849]
},{
		name: 'Adobe Premiere Pro Built-In',
		data: [38.40773172352544, 35.62417734971106, 36.513679017116544, 35.689451214473145, 35.40353111394001, 36.618537426173575, 36.645051959127, 37.31081291784829, 37.559691133517255, 38.5538824394271, 38.16229558151885, 38.719012595536796, 37.10065453932626]
},{
		name: 'Elemental Live Motion Adaptive Blend',
		data: [26.376271582670608, 26.16645821772449, 25.72102607891185, 26.05444132805246, 27.079631365059317, 27.083113596038324, 26.782692580671462, 26.0391862884293, 25.90145463773869, 26.19231760823409, 25.899335235320365, 26.582086404422068, 26.32316791027275]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [36.52667659841657, 20.474071646878702, 32.46911404123019, 20.381083645097533, 30.82944150238514, 21.39349595084077, 29.90093346258788, 20.242551089434983, 28.94815828257171, 20.349900174211346, 28.15553535413701, 20.73293037087903, 25.86699100988924]
},{
		name: 'VapourSynth EEDI3',
		data: [39.794539546984566, 36.880051903911635, 38.30640125299906, 38.04939104767894, 38.0589297985599, 39.555455112376315, 39.41307433795617, 39.746372571399824, 39.43296241198604, 40.481659410250394, 39.946378878849536, 40.45226815232604, 39.17645703543987]
},{
		name: 'VapourSynth TDeintMod',
		data: [39.188636331881156, 35.864091152435456, 36.94846278202228, 35.86166334928634, 35.549379682715475, 36.958713260712095, 36.948336919638024, 37.70180157669847, 38.00726499425651, 39.28264599539896, 39.04474814443802, 39.48237021312978, 37.569842866884386]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [38.81311041704437, 35.50623686110611, 36.360021288097506, 35.34197598826013, 35.077788451152394, 36.19851538416136, 36.331021977353224, 36.83830250826732, 37.242148034551576, 38.33756061179263, 38.042027904431954, 38.45170213783091, 36.878367630337465]
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