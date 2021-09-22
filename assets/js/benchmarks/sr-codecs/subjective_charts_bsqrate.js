$(function () {

    (function (H) {
        var aWidth = 30, aCap = 15, aHead = 90, bottomMargin = 74, rightMargin = 80, delta = 8;          
        var gAnnotation = function(Ax,Ay,Bx,By,Tx,Ty,Tfi, opts, rnd, objects) {
            if (!opts) return;
            if (true || (opts.direction && opts.direction == 'inverse')) {
                var t;
                t = Ax; Ax = Bx; Bx = t;
                t = Ay; Ay = By; By = t;
            }
            if (!opts.double) {
                var ar = rnd.path(drawArrow(Ax, Ay, Bx, By, aWidth, aCap, aHead));
                ar.attr({stroke: 'black','stroke-width': 2}).add();
                objects.push(ar);
                if (opts.text) {
                    var txt = rnd.text(opts.text, Tx, Ty);
                    txt.attr({'text-anchor': "middle", "rotation":Tfi}).css({'font-size': '16px'}).add();
                    objects.push(txt);
                }
            } else {
                var center = (Bx-Ax + delta)/2;
                var Ax_1 = Bx, Bx_1 = Ax;
                var ar1 = rnd.path(drawArrow(Ax_1-center, Ay, Bx_1, By, aWidth, aCap, aHead));
                var ar2 = rnd.path(drawArrow(Ax+center, Ay, Bx, By, aWidth, aCap, aHead));
                ar1.attr({stroke: 'black','stroke-width': 2}).add();
                ar2.attr({stroke: 'black','stroke-width': 2}).add();
                objects.push(ar1);
                objects.push(ar2);
                if (opts.text) {
                    var txt1 = rnd.text(opts.text[0], Tx-center/2, Ty);
                    var txt2 = rnd.text(opts.text[1], Tx+center/2, Ty);
                    txt1.attr({'text-anchor': "middle", "rotation":Tfi}).css({'font-size': '16px'}).add();
                    txt2.attr({'text-anchor': "middle", "rotation":Tfi}).css({'font-size': '16px'}).add();
                    objects.push(txt1);
                    objects.push(txt2);
                }
            }
        };
        var drawArrow = function(sX,eY,eX,sY,width,cap,head) {
            var fwdX = eX - sX, fwdY = eY - sY;
            var len = Math.sqrt(fwdX*fwdX + fwdY*fwdY);
            fwdX /= len; fwdY /= len;
            var ortX = fwdY, ortY = -fwdX;
            return [
                'M', sX - ortX*width/2, sY - ortY*width/2,
                'L', sX + ortX*width/2, sY + ortY*width/2,
                'L', sX + ortX*width/2 + fwdX*(len-head), sY + ortY*width/2 + fwdY*(len-head),
                'L', sX + ortX*(width/2+cap) + fwdX*(len-head), sY + ortY*(width/2+cap) + fwdY*(len-head),
                'L', eX, eY,
                'L', sX - ortX*(width/2+cap) + fwdX*(len-head), sY - ortY*(width/2+cap) + fwdY*(len-head),
                'L', sX - ortX*(width/2) + fwdX*(len-head), sY - ortY*(width/2) + fwdY*(len-head),
                'L', sX - ortX*(width/2) , sY - ortY*(width/2) ,
            ];
        };
        H.wrap(H.Chart.prototype, 'getAxisMargins', function (proceed) {
            var opts = this.userOptions.annotation;
            if( opts ) {
                if( opts.yAxis ) {
                    this.marginRight =rightMargin;
                }
                if( opts.xAxis ) {
                    this.marginBottom =bottomMargin;
                }
            }
            proceed.apply(this, Array.prototype.slice.call(arguments, 1));
        });
        H.wrap(H.Chart.prototype, 'drawChartBox', function (proceed) {
            var rnd = this.renderer;
            if (this.annotation !== undefined) {
                this.annotation.forEach(function(it) { it.destroy() } )
            }
            this.annotation = [];
            proceed.apply(this, Array.prototype.slice.call(arguments, 1));
            if(!this.userOptions.annotation) return;
            gAnnotation(
                this.plotLeft, this.plotTop + this.plotHeight + 80,
                this.plotLeft + this.plotWidth, this.plotTop + this.plotHeight + 80,
                this.plotLeft + this.plotWidth / 2, this.plotTop + this.plotHeight+80 + 4, 0,
                this.userOptions.annotation.xAxis, rnd, this.annotation
            );
            gAnnotation(
                this.plotLeft + this.plotWidth + 50, this.plotTop + this.plotHeight,
                this.plotLeft + this.plotWidth + 50, this.plotTop,
                this.plotLeft + this.plotWidth + 50 + 4, this.plotTop + this.plotHeight/2, 270,
                this.userOptions.annotation.yAxis, rnd, this.annotation);
        });
                    
    }(Highcharts));

    


    $(document).ready(function() {
        var bar_options = {
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
            chart: {
                height: 500,
                type: 'bar',
                zoomType: 'xy',
                events: {
                    load() {
                      let chart = this,
                        tickLength = chart.xAxis[0].tickPositions.length;
              
                      chart.series.forEach(s => {
                        s.points.forEach(p => {
                          if (p.y == 1) {
                            p.update({
                              color: '#F5A52C'
                            })
                          } else if (p.y == parseInt(p.y, 10)){
                            p.update({
                                color: '#A7A1AD'
                            })
                          } 
                        })
                      })
                    }
                  }
            },
            legend: {
                enabled: false
            },
            xAxis: {
                title: {
                    text: ''
                }
            },
            yAxis: {min: 0, title: {text: ''}},
            plotOptions: {bar: {dataLabels: {enabled: true}}},
            series: [],
            credits: {
                text: 'videoprocessing.ai',
                href: 'https://videoprocessing.ai/'
                },
        };

        var video_select = document.getElementById("subjective_charts_selector_video");
        
        var video_to_name = ['animation_clip_1', 'animation_clip_2', 'skiing_1', 'skiing_2', 'street_show_1', 'street_show_2'];
        
        var print_video_to_name = ['animation clip (1)', 'animation clip (2)', 'skiing (1)', 'skiing (2)', 'street show (1)', 'street show (2)'];

        var video_name = video_to_name[video_select.selectedIndex];

        function getName(alg) {

            if (alg == "only_compressed") {
                return "only compressed";
            }
            if (alg == "waifu2xAnime") {
                return "waifu2x-anime";
            }
            if (alg == "waifu2xCunet") {
                return "waifu2x-cunet";
            }
            if (alg == "topaz-amq-12") {
                return "amq-12";
            } 
            if (alg == "topaz-ahq-11") {
                return "ahq-11";
            }
            if (alg == "topaz-amqs-1") {
                return "amqs-1";
            }
            return alg;
        }

        $.getJSON('../assets/json/benchmarks/sr-codecs/subjective_results.json', function (data) {
        	let array = [];
            let labels = [];
            $.each(data[video_name], function( alg, val ) {
                if (alg != "only_compressed_540") {
                    labels.push(getName(alg));
                    let value = parseFloat(val['bsqrate']);
                    value /= 100;
                    value = value.toFixed(3);
                    array.push(parseFloat(value));
                }
            });

            for (let i = 0; i < array.length; ++i) {
                for (let j = 0; j < array.length; ++j) {
                    if (array[i] < array[j]) {
                        let tmp = array[j];
                        array[j] = array[i];
                        array[i] = tmp;

                        tmp = labels[j];
                        labels[j] = labels[i];
                        labels[i] = tmp;
                    }
                }
            }

            bar_options.title.text = "BSQ-rate, Sequence: " + print_video_to_name[video_select.selectedIndex] + ", Codec: x264, Metric: Subjective assessment";
            bar_options.subtitle.text = "";
            bar_options.series.push({name: '', data: array});
            bar_options.xAxis.categories = labels;
        	bar_options.yAxis.title.text = "BSQ-rate (Subjective assessment)";
            Highcharts.chart('subjective_charts_bsqrate', bar_options);
        });		
    });
});
