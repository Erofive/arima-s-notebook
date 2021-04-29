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
    setTimeout(function(){
        let curadius = $('.mouse-ring').css('width').slice(0, 2) / 2 - 2;
        //console.log(event.pageX + ' ' + event.pageY);
        let posX = event.pageX - curadius;
        let posY = event.pageY - curadius;
        $('.mouse-ring').attr('style', 'left: ' + posX + 'px; top: ' + posY + 'px;');
    }, 40);
});

$('a, .site-cont-bar').mousemove(function(event){
    $('.mouse-ring').addClass('on');
    let posX = event.pageX;
    let posY = event.pageY;
    $('.mouse-ring').attr('style', 'left: ' + posX + 'px; top: ' + posY + 'px;');
})

$('a, .site-cont-bar').mouseleave(function(event){
    $('.mouse-ring').removeClass('on');
    let posX = event.pageX - curadius;
    let posY = event.pageY - curadius;
    $('.mouse-ring').attr('style', 'left: ' + posX + 'px; top: ' + posY + 'px;');
})
