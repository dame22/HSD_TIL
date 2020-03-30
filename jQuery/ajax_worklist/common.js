$(function(){
  $.ajax({
      url : 'data.xml',
      type : 'GET',
      dataType : 'xml',
      success : function(data){    
          // console.log(data);
          // console.log(data.portfolio);
          // console.log(data.portfolio[0]);
          // console.log(data.portfolio[0].work1);
          // console.log(data.portfolio[0].work1[0]);
          // console.log(data.portfolio[0].work1[0].thum);
          
          var thum, name, time;
          var workMain, workList = '';
          $(data).find('work').each(function(i){
            thum = $(this).find('thum').text();
            name = $(this).find('name').text();
            time = $(this).find('time').text();

            if( !$('.work') ){ funMain() };   
            
            workList += "<li>";
            workList += "<firgure>";
            workList += "<img src=" + thum + ">";
            workList += "<figcaption>";
            workList += "<span>" + name + "</span>";
            workList += "<span>" + time + "</span>";
            workList += "</figcaption>";
            workList += "</firgure>";
            workList += "</li>";

            
          });       
          
          $('section ul').append(workList);

          function funMain(){
            workMain = " <figure><img src=" + thum + "><figcaption> " + name + "</figcaption></figure>";
            $('section').append(workMain);
          };
      }
  });
  
});