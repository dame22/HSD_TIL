// $(function(){
//     $('.ly-pop').hide(); 

//     $('.ly-pop figure p img').on('click',function(){
//         $('.ly-pop').hide(); 
          
//     })
       
//     var idx = 0;
//     $('.container .gallery li').on('click',function(){
//         var gallerySrc = $(this).find('img').attr('src');
//         var galleryTxt = $(this).find('figcaption').text();        
    
        
//        idx = $(this).index();
//        imgChange();

//         // $('.ly-pop figure').find('img').attr('src',gallerySrc);
//         // $('.ly-pop figure').find('figcaption').text(galleryTxt); 
//         //  imgChange() 에서 작동하기 때문에 없어도됨

//         $('.ly-pop').css({
//             display: 'flex'
//         });      

//         //console.log(idx)
//     }) 

//     var liLen = $('.container .gallery li').length;


//     function imgChange(){
//         var gallerySrc = $('.container .gallery li').eq(idx).find('img').attr('src');
//         var galleryTxt = $('.container .gallery li').eq(idx).find('figcaption').text();        

//         $('.ly-pop figure').find('img').attr('src',gallerySrc);
//         $('.ly-pop figure').find('figcaption').text(galleryTxt);  

//         if(idx == liLen -1){ // idx : 0~5 | liLen : 6
//             $('.ly-pop div a:first').hide()
//         }else{
//             $('.ly-pop div a:first').show()
//         }

//         if(idx == 0){
//             $('.ly-pop div a:last').hide()
//         }else{
//             $('.ly-pop div a:last').show()
//         }
//     }
        
    
//     $('.ly-pop div a').eq(0).on('click',function(){//next
//         ++idx;
//         imgChange()  
                  
//     })

//     $('.ly-pop div a').eq(1).on('click',function(){
//         --idx;
//         imgChange()    
//     })

    

    
// });



// java script

window.addEventListener('DOMContentLoaded',function(){

    var lyPop = document.querySelector('.ly-pop');
    lyPop.style.display = 'none';
    
    var popImgNode = document.querySelector('.ly-pop p img');
    var popTxt = document.querySelector('.ly-pop figcaption');

    var gallery = document.querySelector('.gallery');
    var li = document.querySelectorAll('.gallery li');    
    var target;

    gallery.addEventListener('click',function(e){
        var target = e.target;
        for(;target.nodeName != 'LI'; target = target.parentNode);
       
        var imgNode = target.querySelector('img');
        var txtNode = target.querySelector('figcaption');
      
        popImgNode.src = imgNode.src;
        popTxt.textContent = txtNode.textContent;

        lyPop.style.display = 'flex';


    });     
    
    
    for(i = 0; i < li.length; i++){
        li[i].addEventListener('click',function(){
            
        });
    }
    

})

