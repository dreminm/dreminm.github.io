$(document).ready(function () {
    var line_options = {
        chart: {
            zoomType: 'xy',
            spacingBottom: 15,
            spacingTop: 10,
            spacingLeft: 10,
            spacingRight: 10,
            renderTo: 'container',
            width: null,
            height: null
        },
        title: {
            text: 'iii'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            title: {
                enabled: true,
                text: ''
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: ''
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
                pointStart: 0
            }
        },
        navigation: {
            buttonOptions: {
                enabled: false
            }
        },
        series: [],

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
    };

    var bar_options = {
        chart: {
            type: 'column',
            renderTo: 'container',
        },
        title: {
            text: ''
        },
        xAxis: {
        },
        credits: {
            enabled: false
        },
        series: []
    };
    function redrawCharts(filters){
        $.getJSON('../assets/json/benchmarks/aligners/Local_color_shift.json', function (data) {
            $.getJSON('../assets/json/benchmarks/aligners/dist_to_pairs_Local_color.json', function (dist_to_files) {
                line_options.series = [];
                line_options.chart.renderTo = 'div1-time-shift-filters';
                line_options.title.text = 'Div1 time_shift';
                line_options.xAxis.title.text = 'Maximum accepted error [frames]';
                line_options.yAxis.title.text = 'Accuracy';
                for (const [key, value] of Object.entries(data)){
                    var total = 0;
                    var accuracy = [];
                    var flag = true;
                    for (const [key2, value2] of Object.entries(value)) {
                        const files = key2.split('|');
                        var allowed = true;
                        if (filters != null) {
                            for (let i = 0; i < files.length; ++i) {
                                for (let j = 0; j < dist_to_files[files[i]].length; ++j) {
                                    if (!filters.includes(dist_to_files[files[i]][j])) {
                                        allowed = false;
                                    }
                                }
                            }
                        }
                        if (allowed) {
                            total += 1;
                            if (flag) {
                                accuracy = value2["data"];
                                flag = false;
                            } else {
                                for (let i = 0; i < accuracy.length; ++i) {
                                    accuracy[i] += value2["data"][i];
                                }
                            }
                        }
                    }
                    for (let i = 0; i < accuracy.length; i++){
                        accuracy[i] /= total;
                    }
                    line_options.series.push({name: key, data: accuracy});
                }
                var chart = new Highcharts.Chart(line_options);
            });
        });

        $.getJSON('../assets/json/benchmarks/aligners/Div2_f1.json', function (data) {
            $.getJSON('../assets/json/benchmarks/aligners/dist_to_files_div2.json', function (dist_to_files) {
                bar_options.title.text = 'Div2 f1';
                bar_options.chart.renderTo = 'div2-f1-filters';
                bar_options.series = [];
                var points = [];
                for (const [key, value] of Object.entries(data)) {
                    const files = key.split('|');
                    var allowed = true;
                    if (filters != null) {
                        for (let i = 0; i < files.length; ++i) {
                            for (let j = 0; j < dist_to_files[files[i]].length; ++j) {
                                if (!filters.includes(dist_to_files[files[i]][j])) {
                                    allowed = false;
                                }
                            }
                        }
                    }
                    if (allowed) {
                        var f1 = parseFloat(value.tp) / (parseFloat(value.tp) + 0.5 * (parseFloat(value.fp) + parseFloat(value.fn)));
                        points.push(f1);
                    }
                }
                bar_options.series.push({name: "IVAN", data: points});
                var chart = new Highcharts.Chart(bar_options);
            });
        });

        $.getJSON('../assets/json/benchmarks/aligners/Div3_f1.json', function (data) {
            $.getJSON('../assets/json/benchmarks/aligners/dist_to_files_div3.json', function (dist_to_files) {
                bar_options.title.text = 'Div3 f1';
                bar_options.chart.renderTo = 'div3-f1-filters';
                bar_options.series = [];
                var points = [];
                for (const [key, value] of Object.entries(data)) {
                    const files = key.split('|');
                    var allowed = true;
                    if (filters != null) {
                        for (let i = 0; i < files.length; ++i) {
                            for (let j = 0; j < dist_to_files[files[i]].length; ++j) {
                                if (!filters.includes(dist_to_files[files[i]][j])) {
                                    allowed = false;
                                }
                            }
                        }
                    }
                    if (allowed) {
                        var f1 = parseFloat(value.tp) / (parseFloat(value.tp) + 0.5 * (parseFloat(value.fp) + parseFloat(value.fn)));
                        points.push(f1);
                    }
                }
                bar_options.series.push({name: "IVAN", data: points});
                var chart = new Highcharts.Chart(bar_options);
            });
        });




        $.getJSON('../assets/json/benchmarks/aligners/Div1_test_shift.json', function (data) {
            $.getJSON('../assets/json/benchmarks/aligners/dist_to_files_div1.json', function (dist_to_files) {
                line_options.series = [];
                line_options.chart.renderTo = 'div1-time-shift-test';
                line_options.title.text = 'Div1 time_shift test';
                line_options.xAxis.title.text = 'Maximum accepted error [frames]';
                line_options.yAxis.title.text = 'Accuracy';
                for (const [key, value] of Object.entries(data)){
                    var total = 0;
                    var accuracy = [];
                    var flag = true;
                    console.log(key, value);
                    for (const [key2, value2] of Object.entries(value)) {
                        const files = key2.split('|');
                        total += 1;
                        if (flag) {
                            accuracy = value2["data"];
                            flag = false;
                        } else {
                            for (let i = 0; i < accuracy.length; ++i) {
                                accuracy[i] += value2["data"][i];
                            }
                        }
                    }
                    for (let i = 0; i < accuracy.length; i++){
                        accuracy[i] /= total;
                    }
                    line_options.series.push({name: key, data: accuracy});
                }
                var chart = new Highcharts.Chart(line_options);
            });
        });

        $.getJSON('../assets/json/benchmarks/aligners/Div2_test_f1.json', function (data) {
            $.getJSON('../assets/json/benchmarks/aligners/dist_to_files_div2.json', function (dist_to_files) {
                console.log('DIV2');
                bar_options.title.text = 'Div2 f1 test';
                bar_options.chart.renderTo = 'div2-f1-test';
                bar_options.series = [];
                var points = [];
                for (const [key, value] of Object.entries(data)) {
                    const files = key.split('|');
                    var allowed = true;
                    if (filters != null) {
                        for (let i = 0; i < files.length; ++i) {
                            for (let j = 0; j < dist_to_files[files[i]].length; ++j) {
                                if (!filters.includes(dist_to_files[files[i]][j])) {
                                    allowed = false;
                                }
                            }
                        }
                    }
                    if (allowed) {
                        var f1 = parseFloat(value.tp) / (parseFloat(value.tp) + 0.5 * (parseFloat(value.fp) + parseFloat(value.fn)));
                        points.push(f1);
                        console.log(key);
                    }
                }
                bar_options.series.push({name: "IVAN", data: points});
                var chart = new Highcharts.Chart(bar_options);
            });
        });

        $.getJSON('../assets/json/benchmarks/aligners/Div3_test_f1.json', function (data) {
            $.getJSON('../assets/json/benchmarks/aligners/dist_to_files_div3.json', function (dist_to_files) {
                console.log('DIV3');
                bar_options.title.text = 'Div3 f1 test';
                bar_options.chart.renderTo = 'div3-f1-test';
                bar_options.series = [];
                var points = [];
                for (const [key, value] of Object.entries(data)) {
                    const files = key.split('|');
                    var allowed = true;
                    if (filters != null) {
                        for (let i = 0; i < files.length; ++i) {
                            for (let j = 0; j < dist_to_files[files[i]].length; ++j) {
                                if (!filters.includes(dist_to_files[files[i]][j])) {
                                    allowed = false;
                                }
                            }
                        }
                    }
                    if (allowed) {
                        var f1 = parseFloat(value.tp) / (parseFloat(value.tp) + 0.5 * (parseFloat(value.fp) + parseFloat(value.fn)));
                        points.push(f1);
                        console.log(key);
                    }
                }
                bar_options.series.push({name: "IVAN", data: points});
                var chart = new Highcharts.Chart(bar_options);
            });
        });


    }
    redrawCharts(null);
    document.getElementById('distortions-block').hidden = true;
    $("#all-distortions").change(function () {
        document.getElementById('distortions-block').hidden = true;
        redrawCharts(null);
    });
    $("#concrete-distortions").change(function () {
        $(".distortions-filter").prop("checked", true);
        document.getElementById('distortions-block').hidden = false;
    });
    $("#submit-distortions").click(function () {
        var filters = [];
        $("input.distortions-filter").each(function(){
            if ($(this)[0].checked === true) {
                filters.push($(this)[0].id);
            }
        });
        console.log(filters);
        redrawCharts(filters);
    });
});