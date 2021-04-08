function progbar(){
    var st = $(window).scrollTop();
    var cr = $(window).height();
    var to = $(document.body).height();
    //console.log(st + ' ' + cr + ' ' + to);

    var percent = (st + cr) / to;
    if(percent > 1){percent = 1;}
    percent = (percent * 100) + '%';

    $('.view-progress').attr('style', 'width: ' + percent + ';');
}

$(document).ready(function(){progbar();})
$(document).scroll(function(){progbar();})
