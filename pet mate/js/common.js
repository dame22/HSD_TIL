$(function(){   

    var wCroll = 0,
        count = 0;
        
        $(window).on('scroll',function(e){       

            wCroll = $(this).scrollTop();          
                   
           if(wCroll > count){//내림               
                $('header h1').addClass('active');
                $('header nav').addClass('active');           
           }else{           
                $('header h1').removeClass('active');  
                $('header nav').removeClass('active');                       
            }

            count = wCroll;
        });      
        
        $('.main .visual').animate({
            height: 90 + '%'
        },1500,function(){
            $('.main .visual img').eq(1).css({
                zIndex: 0,
                display: 'block'
            });                     
        });
      
           
       
        
});


// window.addEventListener('DOMContentLoade',function(){    ; 
//     document.documentElement.style.overflowY = 'hidden';
// })


