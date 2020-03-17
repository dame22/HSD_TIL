$(function(){
    $('.slideList img').not(':first').hide(); // not(':first') :: 첫 번째를 제외한다

    var idx = 0, inter;
    function loop(){
        inter = setInterval(function(){
        
            $('.slideList img').eq(idx).fadeOut(2000);
            idx++;
            if(idx == 3){idx = 0;}
            $('.slideList img').eq(idx).fadeIn(2000);    
    },4000)

    }
    loop();
       
});

window.addEventListener('DOMContentLoaded',function(){
  
});
