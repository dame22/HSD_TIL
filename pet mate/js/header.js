$(function(){
    $('header').load('header.html');

    setTimeout(function(){
        $('header .menu').on('click',function(){
            $('header nav').addClass('active');
        });
        $('header nav .btn').on('click',function(){
            $('header nav').removeClass('active');
        });
    },500);
    
})