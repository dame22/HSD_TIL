$(function(){
    $('li').on('mouseenter',function(){        
         $(this).find('div').stop().slideDown(); // 모든 li태그 안에 div 자식요소를 찾음
    });

    $('li').on('mouseleave',function(){        
        $(this).find('div').stop().slideUp();
   });

   $('header p').on('mouseover',function(){
       $('header p span').animate({
          
       },600);
   });
    
});