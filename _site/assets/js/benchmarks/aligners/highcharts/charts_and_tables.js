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
            type: 'scatter',
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

    var column_options = {
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

    function drawFilters(method = null) {
        $.getJSON('../assets/json/benchmarks/aligners/Results.json', function (data) {
            var keys = ['Local_only_time', 'Global_only_time', 'Mixed_only_time'];
            for (let iter=0; iter<keys.length; ++iter) {
                var filter_data = [];
                for (const [key, value] of Object.entries(data[keys[iter]])) {
                    filter_data.push(key);
                }
                var select = document.getElementById('filter-chart-'+keys[iter].split('_')[0].toLowerCase());
                for (let i = 0; i < filter_data.length; ++i) {
                    var opt = document.createElement('option');
                    opt.value = filter_data[i];
                    opt.innerHTML = filter_data[i];
                    select.appendChild(opt);
                }
            }
        });
    }

    function drawLocal(method = 'TMK', redraw = true) {
        $.getJSON('../assets/json/benchmarks/aligners/Results.json', function (data) {
            let total = 0;
            let new_flag = true;
            let presets = ['Light', 'Medium-1', 'Medium-2', 'Hard'];
            let keys = ['Local_only_time', 'Local_geom', 'Local_color', 'Local_color_geom']
            let divs = ['chart-local-light', 'chart-local-medium-geom', 'chart-local-medium-color', 'chart-local-hard'];
            for (let iter = 0; iter < presets.length; ++iter) {
                let table_data = [];
                let line1 = $.extend(true, {}, line_options);
                let line2 = $.extend(true, {}, line_options);
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
                let target_key = 0;
                let key_flag = true;
                let err_series = [];
                let err_keys = [];
                for (const [key, value] of Object.entries(data[keys[iter]])) {
                    line1.series.push({name: key, data: value["accuracy"]});
                    err_keys.push(key);
                    err_series.push(value["errors"]);
                    table_data.push([key, value["accuracy"][0].toFixed(4), value["accuracy"][3].toFixed(4), value["accuracy"][10].toFixed(4)]);
                    if (key == method){
                        key_flag = false;
                    }
                    if (new_flag) {
                        total++;
                    }
                    if (key_flag) {
                        ++target_key;
                    }
                }
                let sort_arr = [];
                for (let i = 0; i < err_series[target_key].length; ++i){
                    sort_arr.push([i, err_series[target_key][i]]);
                }
                sort_arr.sort(function(a, b){
                    if (typeof(a[1]) != "number"){
                        return 1;
                    }
                    if (typeof(b[1]) != "number"){
                        return -1;
                    }
                    return a[1]-b[1];
                });
                for (let i = 0; i < err_series.length; ++i){
                    let new_err_series = [];
                    for (let j = 0; j < sort_arr.length; ++j){
                        let value = err_series[i][sort_arr[j][0]];
                        if (typeof(value) != 'number'){
                            value = null;
                        }
                        new_err_series.push(value);
                    }
                    line2.series.push({name: err_keys[i], data: new_err_series});
                }
                new_flag = false;
                new Highcharts.Chart(line1);
                new Highcharts.Chart(line2);
                if (redraw) {
                    $('#table' + divs[iter].slice(5)).DataTable({
                        paging: false,
                        searching: false,
                        info: false,
                        data: table_data,
                    });
                }
            }
        });
    }

    function drawGlobal(method = null) {
        $.getJSON('../assets/json/benchmarks/aligners/Results.json', function (data) {
            var total = 0;
            var new_flag = true;
            let presets = ['Light', 'Medium-1', 'Medium-2', 'Hard'];
            let keys = ['Global_only_time', 'Global_geom', 'Global_color', 'Global_color_geom']
            let divs = ['chart-global-light', 'chart-global-medium-geom', 'chart-global-medium-color', 'chart-global-hard'];
            for (let iter = 0; iter < presets.length; ++iter) {
                let table_data = [];
                var line = $.extend(true, {}, line_options);
                line.title.text = presets[iter].concat(' ', 'preset');
                line.subtitle.text = 'F1 score';
                line.chart.renderTo = divs[iter];
                line.xAxis.title.text = 'Test pair';
                line.yAxis.title.text = 'F1-score';
                for (const [key, value] of Object.entries(data[keys[iter]])) {
                    var amount = 0;
                    var new_data1 = [];
                    var new_data2 = [];
                    for (let i = 0; i < value["points"].length; ++i) {
                        if (typeof (value["points"][i]) == "number") {
                            new_data1.push(value["points"][i]);
                        } else {
                            new_data2.push(value["points"][i]);
                        }
                        amount = i;
                    }
                    line.series.push({name: key, id: 'mainSeries', dataSorting: {enabled: true}, data: new_data1});
                    table_data.push([key, data[keys[iter]][key]["f1"].toFixed(4), data[keys[iter]][key]["precision"].toFixed(4), data[keys[iter]][key]["recall"].toFixed(4)]);
                }
                new Highcharts.Chart(line);
                $('#table' + divs[iter].slice(5)).DataTable({
                    paging: false,
                    searching: false,
                    info: false,
                    data: table_data,
                });
            }
        });
    }

    function drawMixed(method = null) {
        $.getJSON('../assets/json/benchmarks/aligners/Results.json', function (data) {
            var total = 0;
            var new_flag = true;
            let presets = ['Light', 'Medium-1', 'Medium-2', 'Hard'];
            let keys = ['Mixed_only_time', 'Mixed_geom', 'Mixed_color', 'Mixed_color_geom']
            let divs = ['chart-mixed-light', 'chart-mixed-medium-geom', 'chart-mixed-medium-color', 'chart-mixed-hard'];
            for (let iter = 0; iter < presets.length; ++iter) {
                let table_data = [];
                var line = $.extend(true, {}, line_options);
                line.title.text = presets[iter].concat(' ', 'preset');
                line.subtitle.text = 'F1 score';
                line.chart.renderTo = divs[iter];
                line.xAxis.title.text = 'Test pair';
                line.yAxis.title.text = 'F1-score';
                for (const [key, value] of Object.entries(data[keys[iter]])) {
                    var amount = 0;
                    var new_data1 = [];
                    var new_data2 = [];
                    for (let i = 0; i < value["points"].length; ++i) {
                        if (typeof (value["points"][i]) == "number") {
                            new_data1.push(value["points"][i]);
                        } else {
                            new_data2.push(value["points"][i]);
                        }
                        amount = i;
                    }
                    line.series.push({name: key, id: 'mainSeries', dataSorting: {enabled: true}, data: new_data1});
                    table_data.push([key, data[keys[iter]][key]["f1"].toFixed(4), data[keys[iter]][key]["precision"].toFixed(4), data[keys[iter]][key]["recall"].toFixed(4)]);
                }
                new Highcharts.Chart(line);
                $('#table' + divs[iter].slice(5)).DataTable({
                    paging: false,
                    searching: false,
                    info: false,
                    data: table_data,
                });
            }
        });
    }
    function drawOther() {
        $.getJSON('../assets/json/benchmarks/aligners/categories_stat.json', function (data) {
            var column = $.extend(true, {}, column_options);
            column.title.text = 'Categories';
            column.subtitle.text = '';
            column.chart.renderTo = 'videos-selection';
            column.yAxis.title.text = 'Number of videos';
            var bars = [];
            var cats = [];
            for (const [key, value] of Object.entries(data)) {
                cats.push(key);
                bars.push(value);
            }
            column.xAxis.categories = cats;
            column.series.push({name: "Amount", data: bars});
            var chart = new Highcharts.Chart(column);
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
            for (let i = 0; i < divs.length; ++i) {
                for (let j = 0; j < presets.length; ++j) {
                    var column = $.extend(true, {}, column_options);
                    column.subtitle.text = presets[j] + ' distortions distribution';
                    column.title.text = divs[i] + ' time distortions';
                    column.chart.renderTo = renders[i][j];
                    column.yAxis.title.text = 'Amount of videos with this distortion';
                    var bars = [];
                    var cats = [];
                    for (const [key, value] of Object.entries(data[keys[i][j]])) {
                        if (value > 0) {
                            cats.push(key);
                            bars.push(value);
                        }
                    }
                    column.xAxis.categories = cats;
                    column.series.push({name: 'Amount', data: bars});
                    var chart = new Highcharts.Chart(column);
                }
            }
        });

        $.getJSON('../assets/json/benchmarks/aligners/siti_site.json', function (data) {
            var scatter = $.extend(true, {}, scatter_options);
            scatter.chart.renderTo = 'SITI';
            scatter.title.text = 'SI/TI';
            for (const [key, value] of Object.entries(data)) {
                var new_data = [];
                for (let i = 0; i < value.length; ++i) {
                    new_data.push({x: value[i][1], y: value[i][2], name: value[i][0]})
                }
                scatter.series.push({name: key, data: new_data});
            }
            var chart = new Highcharts.Chart(scatter);
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
    $('#filter-chart-local').change(function() {
        drawLocal($(this).val(), false);
    });
    drawLocal();
    drawGlobal();
    drawMixed();
    drawOther();
    drawFilters();
});
