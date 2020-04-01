$(function(){   

    var wCroll = 0,
        count = 0;
        
        $(window).on('scroll',function(e){       

            wCroll = $(this).scrollTop();          
                   
           if(wCroll > count){//내림               
                $('header h1').addClass('active');
                $('header nav').addClass('active');
                $('.main').addClass('active');
           }else{           
                $('header h1').removeClass('active');  
                $('header nav').removeClass('active'); 
                $('.main').removeClass('active');        
            }

            count = wCroll;
        }); 
        
        idx = 0;

        $('.btn a').eq(1).on('click',function(){
            if(idx < $('.first ul li').length -1){
                idx++
            }  $('.first ul').css({
                    top : -100 * idx + '%'
                }); 
                     
        });

        $('.btn a').eq(0).on('click',function(){
            if(idx != 0){
                idx--
            }  $('.first ul').css({
                    top : -100 * idx + '%'
                }); 
        });
        
       console.log( $('.first ul li').index() )
});


// window.addEventListener('DOMContentLoade',function(){    ; 
//     document.documentElement.style.overflowY = 'hidden';
// })


