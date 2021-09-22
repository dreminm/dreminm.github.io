$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'Correlation of metrics with Subjective assessment'},
            subtitle: {text: ''},
            chart: {
                renderTo: 'container'
            },
            legend: {
                enabled: false
            },
            xAxis: {
                categories: []
            },
            chart: {
                height: 550,
            },
            yAxis: {min: 0.15, max: 0.92, title: {text: ''}},
            plotOptions: {column: {dataLabels: {enabled: true}}},
            series: [],
            legend: {
                borderRadius: 0,
                borderColor: 'silver',
                enabled: true,
                margin: 30,
                itemMarginTop: 2,
                itemMarginBottom: 2,
                layout: 'horizontal',
            },
            credits: {
                text: 'videoprocessing.ai',
                href: 'https://videoprocessing.ai/'
            }
        };

        
        bar_options.xAxis.categories = ['ERQAv1.0', 'VMAF', 'VMAF (clipped)***', 'LPIPS', 'VMAF NEG', 'YUV-MS-SSIM', 'Y-PSNR',];
        bar_options.series.push({ type: 'column', name: 'Spearman', data: [0.87, 0.85, 0.84, 0.83, 0.83, 0.34, 0.17] }); 
            bar_options.series.push({ type: 'column', name: 'Pearson', data: [0.80, 0.79, 0.8, 0.79, 0.74, 0.30, 0.17] }); 
        Highcharts.chart('correlation_plot', bar_options);
        });
});