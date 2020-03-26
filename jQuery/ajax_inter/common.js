// json :: 객체형태의 문서 >> json = {"name" : "홍길동"}
// xml :: 태그형태의 문서 >> <imgSrc> ../img/img-01.jpg </imgSrc> 

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
      },2000);
            
    },
    success : function(data){ 
        setTimeout(function(){
          var imgTag ='';
          $(data).find('item').each(function(i){
            if(i < 3){
              imgTag = "<img src =" +  $(this).text()+ ">"
              $('section').append(imgTag);
            }
          });
          // $('section').html(imgTag);     // <<   이용시 할당연산자 없이 +=로  
          $('section').fadeIn();
        },2000)

        
    },
    error : function(){
        alert('FAIL'); // 문서로드 실패
    } 



  });
});