$(function(){


$('.menu-trigger').on('click',function(){ // bugger
    $('.tab').toggleClass('active');
    $('.visual').toggleClass('active');
    
});



var headerHeight = $('header').offset().top;

$(window).on('scroll',function(){ // navi fixed
    var Wscroll = $(this).scrollTop();        
    

    if(headerHeight < Wscroll){
        $('header').addClass('active')
    }else{
        $('header').removeClass('active')
    }


    var winH = $(window).height();
    sTop = $(this).scrollTop();

    $('figure').each(function(i){ // content scroll
        var figureoff = $('figure').eq(i).offset().top;

        if(figureoff - winH < sTop){
            $('figure').eq(i).css({
                opacity : 1,
                marginTop : 0

            })
        }
    })



})
    $(window).trigger('figure')

    $('article div').each(function(i){ // button hover
        $('article div').eq(i).on('mouseenter',function(){
            $('article div').eq(i).addClass('active')
        })
        $('article div').eq(i).on('mouseleave',function(){
            $('article div').eq(i).removeClass('active')
        })
    })
    

 
})

