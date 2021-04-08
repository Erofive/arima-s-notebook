// 判断平台
if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {}
else {
    // click event
    $(document).click(function(event){
        console.log(event.pageX + ' ' + event.pageY);
    })

    // on document load
    $(document).ready(function(event){
        // console.log(event.pageX + ' ' + event.pageY);
        $('body').append('<div class="mouse-ring"></div>');

        let posX = event.pageX - 25 - 2;
        let posY = event.pageY - 25 - 2;
        $('.mouse-ring').attr('style', 'left: ' + posX + 'px; top: ' + posY + 'px; display: none;');
    })

    // move event
    $(document).mousemove(function(event){
        let curadius = $('.mouse-ring').css('width').substring(0, 2) / 2 - 2;
        //console.log(event.pageX + ' ' + event.pageY);
        let posX = event.pageX - curadius;
        let posY = event.pageY - curadius;
        $('.mouse-ring').attr('style', 'left: ' + posX + 'px; top: ' + posY + 'px;');
    });

    $(document).scroll(function(event){
        let curadius = $('.mouse-ring').css('width').substring(0, 2) / 2 - 2;
        let posX = event.pageX - curadius;
        let posY = event.pageY - curadius;
        $('.mouse-ring').attr('style', 'left: ' + posX + 'px; top: ' + posY + 'px;');
    });

    $('a, .site-cont-bar').mousemove(function(){
        $('.mouse-ring').addClass('on');
    })

    $('a, .site-cont-bar').mouseleave(function(){
        $('.mouse-ring').removeClass('on');
    })
}

