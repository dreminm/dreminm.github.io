function toggleMenuHandler() {
    var header = document.querySelector('.navbar');
    header.classList.toggle('unfolded');
}

window.addEventListener('load', function () {
    var menuToggleButton = document.querySelector('.navbar > .navbar-header > .menu-toggle-button');
    menuToggleButton.addEventListener('click', toggleMenuHandler);
});

/* VQMT image examples */
var updateThumbPanel = function(panel) {
    if(!panel.loaded) return;
    panel.cells.forEach(function(cell){
        var offX = $(cell.imgClone).width()/2 - $(cell.imgCrop).width()*panel.cropX;
        var offY = $(cell.imgClone).height()/2 - $(cell.imgCrop).height()*panel.cropY;
        var maxOffX = $(cell.imgClone).width() - $(cell.imgCrop).width();
        var maxOffY = $(cell.imgClone).height() - $(cell.imgCrop).height();
        offX = Math.min(0, Math.max(maxOffX, offX));
        offY = Math.min(0, Math.max(maxOffY, offY));
        $(cell.imgCrop).css({
            'left': offX + 'px',
            'top': offY + 'px'
        });
    });
};

var showThumbPanel = function(panel) {
    if(!panel.loadStarted) {
        panel.cells.forEach(function(cell){
            var src = $(cell.baseImg).attr('fullimage');
            $('<img/>').attr({'src': src}).on('load', function(){
                $(cell.imgCrop).attr({'src': src});
                cell.loaded = true;
                checkLoadedThumbPanel(panel);
            });
        });
        panel.loadStarted = true;
    }
    $(panel).addClass('shown');
};

var moveThumbPanel = function(panel, x, y) {
    panel.cropX = x;
    panel.cropY = y;
    updateThumbPanel(panel);
};

var hideThumbPanel = function(panel) {
    $(panel).removeClass('shown');
};

var checkLoadedThumbPanel = function(panel) {
    if(panel.loaded) return;
    if(panel.cells.some(function(cell) {
        if(!cell.loaded) return true;
        return false;
    })) 
        return;
    panel.loaded = true;
    $(panel).addClass('loaded');
    updateThumbPanel(panel);
};

$(document).ready(function(){
    $('.thumb-cells').each(function(i, elem){
        var thumbPanel = $('<div></div>');
        thumbPanel.addClass('thumb-cells');
        thumbPanel.addClass('thumb-panel');
        var loadingBox = $('<div></div>')
        loadingBox.addClass('loading-box')
        loadingBox.text("Loading...");
        $(elem).append(thumbPanel);
        $(thumbPanel).append(loadingBox);

        thumbPanel[0].loaded = false;
        thumbPanel[0].loadStarted = false;
        thumbPanel[0].cells = []

        $(elem).children('.cell').each(function(i, cell){
            cell.baseImg = $(cell).children('img')[0];
            cell.loaded = false;
            thumbPanel[0].cells.push(cell);

            $(cell.baseImg).on('mouseenter', function(event) {
                showThumbPanel(thumbPanel[0]);
                //var parentOffset = $(this).parent().offset(); 
                //moveThumbPanel(cell, event.pageX - parentOffset.pageX, event.pageY - parentOffset.pageY);
            });
            $(cell.baseImg).on('mousemove', function() {
                var offset = $(this).offset(); 
                moveThumbPanel(thumbPanel[0], (event.pageX - offset.left) / $(this).width(), (event.pageY - offset.top) / $(this).height());
            });
            $(cell.baseImg).on('mouseleave', function() {
                hideThumbPanel(thumbPanel[0]);
            });

            cell.thumbPanel = thumbPanel[0];

            var imgClone = $('<img />');
            imgClone.addClass('clone');
            var imgCrop = $('<img />');
            imgCrop.addClass('crop');

            cell.imgClone = imgClone[0];
            cell.imgCrop = imgCrop[0];

            var imgBox = $('<div></div>');
            imgClone.attr('src', $(cell.baseImg).attr('src'));
            imgBox.addClass('cell');
            imgBox.append(imgClone);
            imgBox.append(imgCrop);
            thumbPanel.append(imgBox);
        });
    });

    var updateChoose = function(choose) {
        var value = $(choose).val();
        var metric = $(choose).attr('metric');
        var dataset = $(choose).attr('dataset');
        $(choose).closest('div.sample-choose').parent().find('div.sample-group[formetric="' + metric + '"][fordataset="' + dataset + '"]').each(function() {
            $(this).toggleClass('selected', $(this).attr('fordist') == value);
        });
    }

    $('select.sample-choose,div.sample-choose>select').change(function(){
        updateChoose(this);
        
    });
});

$(function(){
  $('.vqmt-drop-down-label').click(function(){
    var li = $( this ).closest('.vqmt-drop-down-list>li');
    if (li.hasClass('selected')) {
      li.removeClass('selected').find('.vqmt-drop-down-content').eq(0).slideUp( 250 );
    }
    else {
      li.addClass('selected').find('.vqmt-drop-down-content').eq(0).slideDown( 250 );
    }
  });
});