// click event
$(document).click(function(event){
    //console.log(event.pageX + ' ' + event.pageY);
})

// on document load
$(document).ready(function(event){
    // platform
    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {}
    else {
        //console.log(event.pageX + ' ' + event.pageY);
        $('body').append('<div class="mouse-ring"></div>');
    }
})

// move event
$(document).mousemove(function(event){
    let height2top = $(window).scrollTop();
    setTimeout(function(){
        let curadius = $('.mouse-ring').css('width').slice(0, 2) / 2 - 2; // get ring width
        //console.log(event.pageX + ' ' + event.pageY);
        let posX = event.pageX - curadius;
        let posY = event.pageY - curadius;
        posY -= height2top // window relative height
        $('.mouse-ring').attr('style', 'left: ' + posX + 'px; top: ' + posY + 'px;');
    }, 40); // 40ms delay
});

$('a, .site-cont-bar').mousemove(function(event){
    $('.mouse-ring').addClass('on');
})

$('a, .site-cont-bar').mouseleave(function(event){
    $('.mouse-ring').removeClass('on');
})
