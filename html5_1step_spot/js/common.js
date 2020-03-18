$(function(){
    $('nav li').on('mouseenter',function(){        
         $(this).find('div').stop().slideDown(); // 모든 li태그 안에 div 자식요소를 찾음
    });

    $('nav li').on('mouseleave',function(){        
        $(this).find('div').stop().slideUp();
   });

   
//    // 선택자별로 액션
//    $('nav li').on({
//        mouseenter : nav1,
//        mouseleave : nav2,
//        click : nav
//     });
//     function nav1(){
     
//     }
//     function nav2(){
        
//     }



   $('.trigger_menu').on('click',function(){
       $(this).toggleClass('active');
        $('header p > span').toggleClass('active');
       
    //    if($(this).toggleClass('active')){
    //     $('header p > span').show().animate({
    //         top:40, opacity:1
    //      },);
    //    }else{
    //     $('header p > span').show().animate({
    //         top:60, opacity:0
    //      },);
    //    }
      
   });   
    
});

