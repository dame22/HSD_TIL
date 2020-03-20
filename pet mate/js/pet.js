$(function(){
    $('.slideList img').not(':first').hide(); // not(':first') :: 첫 번째를 제외한다

    var idx = 0;
    function loop(){
        setInterval(function(){
        
            $('.slideList img').eq(idx).fadeOut(2000);
            idx++;
            if(idx == 3){idx = 0;}
            $('.slideList img').eq(idx).fadeIn(2000);    
    },4000)

    }
    loop();
       
});


