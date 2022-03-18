function click1(){
    $('i.toggle').attr('style', 'background-image: url("/assets/images/fa/times.svg");');
    $('.site-nav').addClass('on');
    $('.main').addClass('on');
    $('.site-header').addClass('on');
}

function click2(){
    $('i.toggle').attr('style', '');
    $('.site-nav').removeClass('on');
    $('.main').removeClass('on');
    $('.site-header').removeClass('on');
}

$('i.toggle').click(function(){
    if($('i.toggle').css('background-image').match('bars.svg')){
        click1();
    }else{
        click2();
    }
});

$('.site-header.site-nav').mouseleave(function(){
    $('i.toggle').attr('style', '');
});

$('.main').click(function(){
    $('.site-nav').removeClass('on');

    if($('.main').css('transform') == 'matrix(1, 0, 0, 1, -250, 0)'){
        $('.main').removeClass('on');
        $('.site-header').removeClass('on');
        $('i.toggle').attr('style', '');
    }
})

