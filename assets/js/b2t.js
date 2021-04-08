$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 50){
            $('.b2t').addClass('on');
        }else{
            $('.b2t').removeClass('on');
        }
    });
    $(".b2t").click(function() {
        $('body,html').animate({
            scrollTop: 0
        },
        300);
        return false;
    });
})