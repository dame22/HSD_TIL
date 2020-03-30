// json :: 객체형태의 문서 >> json = {"name" : "홍길동"} // js
// xml :: 태그형태의 문서 >> <imgSrc> ../img/img-01.jpg </imgSrc> // jquery

$(function(){
  $.ajax({
    url : 'data.xml',
    type : 'GET', //POST
    dataType : 'xml',    
    beforeSend : function(){
      $('.loading').fadeIn();
    },
    complete : function(){
      setTimeout(function(){
        $('.loading').fadeOut();
      },1000);
            
    },
    success : function(data){ 

        var imgTag='';
        var itemRow=3,
            first=0,
            last=itemRow; 

        setTimeout(function(){
            function getItem(){
              // console.log(first);
              // console.log(last);

              $(data).find('item').each(function(i){
                if(first <= i && i < last){
                  imgTag = "<img src="+$(this).text()+">";
                  $('section').append(imgTag);
                  $('section img').eq(i).hide().fadeIn();
                }
              });
            }
              getItem(); // 버튼을 누르지 않았을 때 실행

              //$('section').html(imgTag);
              $('section').fadeIn();
              $('button').on('click',function(){
                first += itemRow;
                last += itemRow;
                getItem();
              });
        },2000);

        
    },
    error : function(){
        alert('FAIL'); // 문서로드 실패
    } 



  });
});