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
        credits: {enabled: true,href: "https://videoprocessing.ai/benchmarks/", text: "https://videoprocessing.ai/benchmarks/"},
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
                    },
                }
            }]
        },
        title: {
            text: ''
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
            showLastLabel: true,
            min: 0,
        },
        yAxis: {
            title: {
                text: ''
            },
            min: 0,
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
    };

    var bar_options = {
        chart: {
            type: 'column',
            renderTo: 'container',
        },
        annotation: {
            xAxis: {
                text: "Better"
            }
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            title: {
                text: ''
            }
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false,
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        },
        series: []
    };



    var scatter_options = {
        chart: {
            type: 'scatter',
            renderTo: 'container',
            zoomType: 'xy'
        },
        credits: {enabled: true,href: "https://videoprocessing.ai/benchmarks/", text: "https://videoprocessing.ai/benchmarks/"},
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'SI'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'TI'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{point.key}</b><br>',
                    pointFormat: '{point.x} SI, {point.y} TI'
                }
            }
        },
        series: []
    };

    function drawCharts(){
        $.getJSON('../assets/json/benchmarks/aligners/dist_to_files_div1.json', function (dist_to_files) {
            const filters = [["fps_drop", "fps_freeze", "shift", "add_noise"], ["fps_drop", "fps_freeze", "shift", "add_logo", "add_subtitles", "add_blur", "add_gamma", "rbr"], ["fps_drop", "fps_freeze", "shift", "add_logo", "add_subtitles", "add_crop", "add_graphics", "add_datamoshing", "add_watermark", "add_noise", "add_blur", "add_gamma", "rbr"]];
            const presets = ['Light', 'Medium', 'Hard'];
            $.getJSON('../assets/json/benchmarks/aligners/Div1_shift.json', function (data) {
                const divs = ['div1-time-shift-light', 'div1-time-shift-medium', 'div1-time-shift-hard'];
                for (let iter = 0; iter < filters.length; ++iter) {
                    var line1 = $.extend( true, {}, line_options);
                    var line2 = $.extend( true, {}, line_options);
                    line1.chart.renderTo = divs[iter];
                    line1.title.text = presets[iter].concat(' ', 'preset');
                    line1.subtitle.text = 'Accuracy';
                    line1.xAxis.title.text = 'Maximum accepted error [frames]';
                    line1.yAxis.title.text = 'Accuracy';

                    line2.title.text = presets[iter].concat(' ', 'preset');
                    line2.subtitle.text = 'Error on test pairs';
                    line2.chart.renderTo = divs[iter].concat('-', 'error');
                    line2.xAxis.title.text = 'Test pair';
                    line2.yAxis.title.text = 'Shift error [frames]';

                    for (const [key, value] of Object.entries(data)) {
                        var total = 0;
                        var accuracy = [];
                        var errors = [];
                        var new_pair = true;
                        for (const [key2, value2] of Object.entries(value)) {
                            const files = key2.split('|');
                            var allowed = true;
                            var error_flag = true;
                            if (filters[iter] != null) {
                                for (let i = 0; i < files.length; ++i) {
                                    for (let j = 0; j < dist_to_files[files[i]].length; ++j) {
                                        if (!filters[iter].includes(dist_to_files[files[i]][j])) {
                                            allowed = false;
                                        }
                                    }
                                }
                            }
                            if (allowed) {
                                total += 1;
                                if (new_pair) {
                                    accuracy = value2["data"];
                                    new_pair = false;
                                } else {
                                    for (let i = 0; i < accuracy.length; ++i) {
                                        if (value2["data"][i] > 0 && error_flag) {
                                            errors.push(i);
                                            error_flag = false;
                                        }
                                        accuracy[i] += value2["data"][i];
                                    }
                                }
                            }
                        }
                        for (let i = 0; i < accuracy.length; i++) {
                            accuracy[i] /= total;
                        }
                        line1.series.push({name: key, data: accuracy});
                        line2.series.push({name: key, data: errors});
                    }
                    new Highcharts.Chart(line1);
                    new Highcharts.Chart(line2);
                }
            });
        });


        $.getJSON('../assets/json/benchmarks/aligners/dist_to_files_div2.json', function (dist_to_files) {
            //const filters = [["fps_drop", "fps_freeze", "shift", "add_noise"], ["fps_drop", "fps_freeze", "shift", "add_logo", "add_subtitles", "add_blur", "add_gamma", "rbr"], ["fps_drop", "fps_freeze", "shift", "add_logo", "add_subtitles", "add_crop", "add_graphics", "add_datamoshing", "add_watermark", "add_noise", "add_blur", "add_gamma", "rbr"]];
            const filters=[["fps_drop", "fps_freeze", "shift", "add_noise"]];
            const presets = ['Light', 'Medium', 'Hard'];
            $.getJSON('../assets/json/benchmarks/aligners/Div2_f1.json', function (data) {
                const divs = ['div2-f1-light', 'div2-f1-medium', 'div2-f1-hard'];
                for (let iter = 0; iter < filters.length; ++iter) {
                    var line = $.extend( true, {}, line_options);

                    line.title.text = 'Global time distortions';
                    //line2.subtitle.text = presets[iter].concat(' ', 'preset');
                    line.chart.renderTo = divs[iter];
                    line.xAxis.title.text = 'Test pair';
                    line.yAxis.title.text = 'F1-score';

                    var points = [];
                    for (const [key, value] of Object.entries(data)) {
                        const files = key.split('|');
                        var allowed = true;
                        if (filters[iter] != null) {
                            for (let i = 0; i < files.length; ++i) {
                                for (let j = 0; j < dist_to_files[files[i]].length; ++j) {
                                    if (!filters[iter].includes(dist_to_files[files[i]][j])) {
                                        allowed = true;
                                    }
                                }
                            }
                        }
                        console.log(allowed);
                        if (allowed) {
                            var f1 = parseFloat(value.tp) / (parseFloat(value.tp) + 0.5 * (parseFloat(value.fp) + parseFloat(value.fn)));
                            points.push(f1);
                        }
                    }
                    line.series.push({name: "IVAN", data: points});
                    new Highcharts.Chart(line);
                }
            });
        });


        $.getJSON('../assets/json/benchmarks/aligners/dist_to_files_div3.json', function (dist_to_files) {
            //const filters = [["fps_drop", "fps_freeze", "shift", "add_noise"], ["fps_drop", "fps_freeze", "shift", "add_logo", "add_subtitles", "add_blur", "add_gamma", "rbr"], ["fps_drop", "fps_freeze", "shift", "add_logo", "add_subtitles", "add_crop", "add_graphics", "add_datamoshing", "add_watermark", "add_noise", "add_blur", "add_gamma", "rbr"]];
            const filters=[["fps_drop", "fps_freeze", "shift", "add_noise"]];
            const presets = ['Light', 'Medium', 'Hard'];
            $.getJSON('../assets/json/benchmarks/aligners/Div3_f1.json', function (data) {
                const divs = ['div3-f1-light', 'div3-f1-medium', 'div3-f1-hard'];
                for (let iter = 0; iter < filters.length; ++iter) {
                    var line = $.extend( true, {}, line_options);

                    line.title.text = 'Mixed time distortions';
                    //line2.subtitle.text = presets[iter].concat(' ', 'preset');
                    line.chart.renderTo = divs[iter];
                    line.xAxis.title.text = 'Test pair';
                    line.yAxis.title.text = 'F1-score';
                    var points = [];
                    for (const [key, value] of Object.entries(data)) {
                        const files = key.split('|');
                        var allowed = true;
                        if (filters[iter] != null) {
                            for (let i = 0; i < files.length; ++i) {
                                for (let j = 0; j < dist_to_files[files[i]].length; ++j) {
                                    if (!filters[iter].includes(dist_to_files[files[i]][j])) {
                                        allowed = true;
                                    }
                                }
                            }
                        }
                        console.log(allowed);
                        if (allowed) {
                            var f1 = parseFloat(value.tp) / (parseFloat(value.tp) + 0.5 * (parseFloat(value.fp) + parseFloat(value.fn)));
                            points.push(f1);
                        }
                    }
                    line.series.push({name: "IVAN", data: points.sort(function(a, b){return b - a})});
                    new Highcharts.Chart(line);
                }
            });
        });


        $.getJSON('../assets/json/benchmarks/aligners/categories_stat.json', function (data) {
            bar_options.series = [];
            bar_options.xAxis.categories = [];
            bar_options.title.text = 'Categories';
            bar_options.subtitle.text = '';
            bar_options.chart.renderTo = 'videos-selection';
            bar_options.yAxis.title.text = 'Number of videos';
            var bars = [];
            var cats = [];
            for (const [key, value] of Object.entries(data)) {
                cats.push(key);
                bars.push(value);
            }
            bar_options.xAxis.categories = cats;
            bar_options.series.push({name: "Amount", data: bars});
            var chart = new Highcharts.Chart(bar_options);
        });

        $.getJSON('../assets/json/benchmarks/aligners/div1_dists_distr.json', function (data) {
            bar_options.series = [];
            bar_options.xAxis.categories = [];
            bar_options.subtitle.text = 'Distortions distribution';
            bar_options.title.text = 'Local time distortions';
            bar_options.chart.renderTo = 'div1-distortions-distribution';
            bar_options.yAxis.title.text = 'Amount of videos with this distortion';
            var bars = [];
            var cats = [];
            for (const [key, value] of Object.entries(data)) {
                cats.push(key);
                bars.push(value);
            }
            bar_options.xAxis.categories = cats;
            bar_options.series.push({name: 'Amount', data: bars});
            var chart = new Highcharts.Chart(bar_options);
        });

        $.getJSON('../assets/json/benchmarks/aligners/div2_dists_distr.json', function (data) {
            bar_options.series = [];
            bar_options.xAxis.categories = [];
            bar_options.subtitle.text = 'Distortions distribution';
            bar_options.title.text = 'Global time distortions';
            bar_options.chart.renderTo = 'div2-distortions-distribution';
            bar_options.yAxis.title.text = 'Amount of videos with this distortion';
            var bars = [];
            var cats = [];
            for (const [key, value] of Object.entries(data)) {
                cats.push(key);
                bars.push(value);
            }
            bar_options.xAxis.categories = cats;
            bar_options.series.push({name: 'Amount', data: bars});
            var chart = new Highcharts.Chart(bar_options);
        });

        $.getJSON('../assets/json/benchmarks/aligners/div3_dists_distr.json', function (data) {
            bar_options.series = [];
            bar_options.xAxis.categories = [];
            bar_options.subtitle.text = 'Distortions distribution';
            bar_options.title.text = 'Mixed time distortions';
            bar_options.chart.renderTo = 'div3-distortions-distribution';
            bar_options.yAxis.title.text = 'Amount of videos with this distortion';
            var bars = [];
            var cats = [];
            for (const [key, value] of Object.entries(data)) {
                cats.push(key);
                bars.push(value);
            }
            bar_options.xAxis.categories = cats;
            bar_options.series.push({name: 'Amount', data: bars});
            var chart = new Highcharts.Chart(bar_options);
        });



        $.getJSON('../assets/json/benchmarks/aligners/siti_site.json', function (data) {
            scatter_options.series = [];
            scatter_options.chart.renderTo = 'SITI';
            scatter_options.title.text = 'SI/TI';
            for (const [key, value] of Object.entries(data)) {
                var new_data = [];
                for (let i = 0; i < value.length; ++i) {
                    new_data.push({x: value[i][1], y: value[i][2], name: value[i][0]})
                }
                scatter_options.series.push({name: key, data: new_data});
            }
            var chart = new Highcharts.Chart(scatter_options);
        });

        $.getJSON('../assets/json/benchmarks/aligners/filtered_siti_site.json', function (data) {
            var scatter = $.extend( true, {}, scatter_options);
            scatter.chart.renderTo = 'filtered-SITI';
            scatter.title.text = 'Filtered SI/TI';
            scatter.legend.enabled = false;
            var new_data = [];
            for (const [key, value] of Object.entries(data)) {
                new_data.push({x: value[0], y: value[1], name: key})
            }
            scatter.series.push({data: new_data});
            var chart = new Highcharts.Chart(scatter);
        });
    }
    drawCharts();

    $('#local-table').DataTable({
        paging: false,
        searching: false,
        info: false,
    });
    $('#global-table').DataTable({
        paging: false,
        searching: false,
        info: false,
    });
    $('#mixed-table').DataTable({
        paging: false,
        searching: false,
        info: false,
    });
});