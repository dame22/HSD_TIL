$(function(){
    $('header').load("header.html nav"); // 문서뒤에 넣고자하는 해당 엘리먼트 입력
    $('footer').load("header.html .foot");
    $('section').load("main.html");

    $('body').addClass('active');


    

    setTimeout(function(){    
        $('header nav a').on('click',function(e){
            e.preventDefault();

            var link = $(this).attr('href'); //클릭한 a의 href 속성

            $('section').removeClass('active');
            
            setTimeout(function(){
                location.href = link;
            },500)          
            
            
        });
    },10);




});