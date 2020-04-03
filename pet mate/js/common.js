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
        // function visual(){
        //     $('.visual').animate({
        //         height : 90 + '%'
        //      },1500);

        //      $('.visual img').eq(1).animate({
        //         zIdex : 0
        //      },1500);
        // };
        
        // function visual()
        
        
        
});


// window.addEventListener('DOMContentLoade',function(){    ; 
//     document.documentElement.style.overflowY = 'hidden';
// })


