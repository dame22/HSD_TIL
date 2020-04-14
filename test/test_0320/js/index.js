$(function(){
    $('.ly-pop').hide(); 

    $('.ly-pop figure p img').on('click',function(){
        $('.ly-pop').hide();           
    })
       
    var idx = 0;

    $('.container .gallery li').on('click',function(){
        // var gallerySrc = $(this).find('img').attr('src');
        // var galleryTxt = $(this).find('figcaption').text(); 

        // $('.ly-pop figure').find('img').attr('src',gallerySrc);
        // $('.ly-pop figure').find('figcaption').text(galleryTxt); 
        //  imgChange() 에서 작동하기 때문에 없어도됨
        
       idx = $(this).index();
       imgChange();
        

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
            $('.ly-pop div a:last').hide()
        }else{
            $('.ly-pop div a:last').show()
        }

        if(idx == 0){
            $('.ly-pop div a:first').hide()
        }else{
            $('.ly-pop div a:first').show()
        }
    }
        
    
    $('.ly-pop div a').eq(1).on('click',function(){//next
        ++idx;
        imgChange()  
                  
    })

    $('.ly-pop div a').eq(0).on('click',function(){
        --idx;
        imgChange()    
    })

    

    
});





// java script

// window.addEventListener('DOMContentLoaded',function(){

//     var lyPop = document.querySelector('.ly-pop');
//     lyPop.style.display = 'none';

//     var popImgNode = document.querySelector(".ly-pop p img");
//     var popTxtNode = document.querySelector(".ly-pop figcaption");

//     //추출할 노드선택
//     var gallery = document.querySelector('.gallery');
//     // var li = document.querySelectorAll('.gallery li');
//     var target;

//     gallery.addEventListener('click',function(e){
//         target = e.target;
        
//         for(;target.nodeName != 'LI'; target = target.parentNode);
//         // parentNode :: 부모 Node

//         var imgNode = target.querySelector('img');
//         var txtNode = target.querySelector('figcaption');
        
//         popImgNode.src = imgNode.src;
//         popTxtNode.textContent = txtNode.textContent;
//         lyPop.style.display = 'flex';
        
//     });

//     lyPop.addEventListener('click',function(){
//         this.style.display = 'none';
//     });


//     var button = lyPop.querySelectorAll('div a');

//     button[0].addEventListener('click',function(e){
//         e.preventDefault(); // a속성 차단
//         e.stopPropagation(); // 다른 이벤트를 차단시키고 해당 이벤트를 우선시함
        
//         changeGallery("previousElementSibling");
        
//     });

//     button[1].addEventListener('click',function(e){//next
//         e.preventDefault();
//         e.stopPropagation();
        
//         changeGallery("nextElementSibling");
//     });


//     function changeGallery(nextBack){
//         try{

//             var imgNode = eval("target." + nextBack + ".querySelector('img')");
//             var txtNode = eval("target." + nextBack + ".querySelector('figcaption')");
//             // 현재 target에는 LI가 들어가있음, LI의 다음 형제를 가르킴

//             popImgNode.src = imgNode.src;
//             popTxtNode.textContent = txtNode.textContent;

//             target = eval("target." + nextBack);

//             console.log('데이터가 바뀌고 있음')
    
//         }catch{ // 에러발생 시 실행
//             console.log('더이상 데이터가 없습니다.');
//         }finally{ // 에러가 발생하든 안하든 무조건 실행
//             console.log('무조건 실행될 구문')
//         }
//     }        

// });

