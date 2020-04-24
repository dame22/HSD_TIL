// JavaScript Document

$(document).ready(function(){
  var cnt=3; //탭메뉴 개수
  $('.tabs .contlist:eq(0)').show(); 
  $('.tabs .tab1').css('background','url(images/tab1on.jpg)');
  
  $('.tabs .tab').each(function (index) {  //0 1 2
    $(this).click(function(){    
       //index=1     
      $(".tabs .contlist").hide();
          //모든 탭의 내용을 안보이게 처리해라
	  $(".tabs .contlist:eq("+index+")").show();
         //해당 클릭한 탭에 내용만 보여라
	  for(var i=1;i<=cnt;i++){
           $('.tab'+i).css('background','url(images/tab'+i+'.jpg)');
           //모든 탭메뉴를 비활성화 상태(똥색이미지)로 바꾼
      }
      $(this).css('background','url(images/tab'+(index+1)+'on.jpg)'); 
        
   });
  });
});
