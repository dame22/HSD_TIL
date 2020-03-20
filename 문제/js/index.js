$(function(){
    $('.ly-pop div a:last').hide()

    $('.ly-pop figure p img').on('click',function(){
        $('.ly-pop').hide(); 
          
    })
       
    var idx = 0;
    $('.container .gallery li').on('click',function(){
        var gallerySrc = $(this).find('img').attr('src');
        var galleryTxt = $(this).find('figcaption').text();        
    
        
       idx = $(this).index();
       imgChange();

        // $('.ly-pop figure').find('img').attr('src',gallerySrc);
        // $('.ly-pop figure').find('figcaption').text(galleryTxt); 
        //  imgChange() 에서 작동하기 때문에 없어도됨

        $('.ly-pop').css({
            display: 'flex'
        });      

        //console.log(idx)
    }) 

    var liLen = $('.container .gallery li').length;


    function imgChange(){
        var gallerySrc = $('.container .gallery li').eq(idx).find('img').attr('src');
        var galleryTxt = $('.container .gallery li').eq(idx).find('figcaption').text();        

        $('.ly-pop figure').find('img').attr('src',gallerySrc);
        $('.ly-pop figure').find('figcaption').text(galleryTxt);  

        if(idx == liLen -1){ // idx : 0~5 | liLen : 6
            $('.ly-pop div a:first').hide()
        }else{
            $('.ly-pop div a:first').show()
        }

        if(idx == 0){
            $('.ly-pop div a:last').hide()
        }else{
            $('.ly-pop div a:last').show()
        }
    }
        
    
    $('.ly-pop div a').eq(0).on('click',function(){//next
        ++idx;
        imgChange()  
                  
    })

    $('.ly-pop div a').eq(1).on('click',function(){
        --idx;
        imgChange()    
    })

    

    
});





/*
1) 이미지를 클릭하여 팝업창을 노출하시오. (10점)
2) 팝업창의 정보는 클릭한 이미지의 정보로 대체하시오. (20점) 
3) 팝업창의 Next, Prev버튼을 클릭하면 갤러리의 정보를 갱신하시오.
     - 클릭한 이미지를 기준으로 이전 또는 다음 갤러리 정보를 출력하시오. (20점)
     - 갤러리 이미지가 처음 상태면 Prev버튼을 display:none처리하시오. (10점)
     - 갤러리 이미지가 마지막 상태면 Next버튼을 display:none처리하시오. (10점)
*/