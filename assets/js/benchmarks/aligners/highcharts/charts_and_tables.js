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

    function drawCharts() {
        $.getJSON('../assets/json/benchmarks/aligners/Results.json', function (data) {
            var total = 0;
            var new_flag = true;
            let presets = ['Light', 'Medium-1', 'Medium-2', 'Hard'];
            var table_data = [];
            var names = [];
            let keys = ['Local_only_time', 'Local_geom', 'Local_color', 'Local_color_geom']
            let divs = ['div1-time-shift-light', 'div1-time-shift-medium-1', 'div1-time-shift-medium-2', 'div1-time-shift-hard'];
            for (let iter = 0; iter < presets.length; ++iter) {
                var line1 = $.extend(true, {}, line_options);
                var line2 = $.extend(true, {}, line_options);
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
                for (const [key, value] of Object.entries(data[keys[iter]])) {
                    if (new_flag) {
                        total++;
                        names.push(key);
                    }
                    line1.series.push({name: key, data: value["accuracy"]});
                    line2.series.push({name: key, data: value["errors"]});
                    table_data.push(value["accuracy"][0].toFixed(4), value["accuracy"][3].toFixed(4), value["accuracy"][10].toFixed(4));
                }
                new_flag = false;
                new Highcharts.Chart(line1);
                new Highcharts.Chart(line2);
            }
            var new_table_data = [];
            for (let i = 0; i < total; ++i) {
                var buffer = [];
                for (let j = 0; j < total; ++j) {
                    buffer.push(table_data[j * table_data.length / total + i*3], table_data[j * table_data.length / total + i*3 + 1], table_data[j * table_data.length / total + i*3 +2]);
                }
                new_table_data.push([names[i], ...buffer]);
            }
            $('#local-table').DataTable({
                paging: false,
                searching: false,
                info: false,
                data: new_table_data,
            });
            keys = ['Global_only_time', 'Global_geom', 'Global_color', 'Global_color_geom']
            divs = ['div2-f1-light', 'div2-f1-medium-1', 'div2-f1-medium-2', 'div2-f1-hard'];
            table_data = [];
            for (let iter = 0; iter < presets.length; ++iter) {
                var line = $.extend(true, {}, line_options);
                line.title.text = 'Global time distortions';
                //line2.subtitle.text = presets[iter].concat(' ', 'preset');
                line.chart.renderTo = divs[iter];
                line.xAxis.title.text = 'Test pair';
                line.yAxis.title.text = 'F1-score';
                var points = [];
                line.series.push({name: "VideoIndexer", data: data[keys[iter]]["points"]});
                table_data.push(data[keys[iter]]["f1"].toFixed(4), data[keys[iter]]["precision"].toFixed(4), data[keys[iter]]["recall"].toFixed(4));
                new Highcharts.Chart(line);
            }
            $('#global-table').DataTable({
                paging: false,
                searching: false,
                info: false,
                data: [['VideoIndexer', ...table_data]],
            });
            keys = ['Mixed_only_time', 'Mixed_geom', 'Mixed_color', 'Mixed_color_geom']
            divs = ['div3-f1-light', 'div3-f1-medium-1', 'div3-f1-medium-2', 'div3-f1-hard'];
            table_data = [];
            for (let iter = 0; iter < presets.length; ++iter) {
                var line = $.extend(true, {}, line_options);
                line.title.text = 'Mixed time distortions';
                //line2.subtitle.text = presets[iter].concat(' ', 'preset');
                line.chart.renderTo = divs[iter];
                line.xAxis.title.text = 'Test pair';
                line.yAxis.title.text = 'F1-score';
                var points = [];
                line.series.push({name: "VideoIndexer", data: data[keys[iter]]["points"]});
                table_data.push(data[keys[iter]]["f1"].toFixed(4), data[keys[iter]]["precision"].toFixed(4), data[keys[iter]]["recall"].toFixed(4));
                new Highcharts.Chart(line);
            }
            $('#mixed-table').DataTable({
                paging: false,
                searching: false,
                info: false,
                data: [['VideoIndexer', ...table_data]],
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
                bar_options.xAxis.categories = cats;
                bar_options.series.push({name: "Amount", data: bars});
                var chart = new Highcharts.Chart(bar_options);
            }
        });

        $.getJSON('../assets/json/benchmarks/aligners/dists_res.json', function (data) {
            let presets = ['Light', 'Medium-1', 'Medium-2', 'Hard'];
            let divs = ['Local', 'Global', 'Mixed'];
            let renders = [['local-light-distortions-distribution', 'local-medium-1-distortions-distribution', 'local-medium-2-distortions-distribution', 'local-hard-distortions-distribution'],
                ['global-light-distortions-distribution', 'global-medium-1-distortions-distribution', 'global-medium-2-distortions-distribution', 'global-hard-distortions-distribution'],
                ['mixed-light-distortions-distribution', 'mixed-medium-1-distortions-distribution', 'mixed-medium-2-distortions-distribution', 'mixed-hard-distortions-distribution']];
            let keys = [['Local_only_time', 'Local_geom', 'Local_color', 'Local_color_geom'],
                ['Global_only_time', 'Global_geom', 'Global_color', 'Global_color_geom'],
                ['Mixed_only_time', 'Mixed_geom', 'Mixed_color', 'Mixed_color_geom']];
            for (let i = 0; i<divs.length; ++i) {
                for (let j = 0; j < presets.length; ++j) {
                    bar_options.series = [];
                    bar_options.xAxis.categories = [];
                    bar_options.subtitle.text = presets[j]+' distortions distribution';
                    bar_options.title.text = divs[i]+' time distortions';
                    bar_options.chart.renderTo = renders[i][j];
                    bar_options.yAxis.title.text = 'Amount of videos with this distortion';
                    var bars = [];
                    var cats = [];
                    for (const [key, value] of Object.entries(data[keys[i][j]])) {
                        if (value > 0) {
                            cats.push(key);
                            bars.push(value);
                        }
                    }
                    bar_options.xAxis.categories = cats;
                    bar_options.series.push({name: 'Amount', data: bars});
                    var chart = new Highcharts.Chart(bar_options);
                }
            }
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
            var scatter = $.extend(true, {}, scatter_options);
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
});
