// JavaScript Document
$(document).ready(function () {
	var article = $('.faq .article'); //모든 리스트
	
	
	$('.faq .article .trigger').click(function(){ 
        //각각의 질문을 클릭하면
	var myArticle = $(this).parents('.article'); 
          //클릭한 질문에 해당하는 리스트
	
	if(myArticle.hasClass('hide')){  
         //해당 리스트의 내장이 닫혀있는 상태냐?
	    article.find('.a').slideUp(100);
        article.removeClass('show').addClass('hide'); 
        
	    myArticle.removeClass('hide').addClass('show');  
	    myArticle.find('.a').slideDown(100);  
	 } else {  //해당 리스트의 내장이 열려있는 상태냐?
	   myArticle.removeClass('show').addClass('hide');  
	   myArticle.find('.a').slideUp(100);  
	}  
  });  
    
   //모두 여닫기 기능 추가
    $('.all').toggle(function(){ 
	    article.find('.a').slideDown(100);
	    article.removeClass('hide').addClass('show');
        $(this).text('모두닫기▲');
	},function(){ 
	    article.find('.a').slideUp(100);
	    article.removeClass('show').addClass('hide');
        $(this).text('모두열기▼');
	}); 
    
}); 






