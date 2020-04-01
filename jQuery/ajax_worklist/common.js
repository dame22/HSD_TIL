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

            if( !$('section').hasClass('work') ){
              funMain(i); // i에는 work의 index값이 들어가있음
            }else{
              funSub(i);
            };   
            
            
          });  

          function funMain(idx){ // < i 값을 전달 받음
            workMain = " <figure><a href=sub.html#" + idx + "><img src=" + thum + "><figcaption> " + name + "</figcaption></a></figure>";
            $('section').append(workMain);
          };

          function funSub(){
            workList = "<li>";
            workList += "<firgure>";
            workList += "<img src=" + thum + ">";
            workList += "<figcaption>";
            workList += "<span>" + name + "</span>";
            workList += "<span>" + time + "</span>";
            workList += "</figcaption>";
            workList += "</firgure>";
            workList += "</li>";

            $('section ul').append(workList);
          }

          var url = location.hash.substr(1); // url 주소에 #(hash)의 값을 가져옴, n번째부터 시작하는 내용 추출
          // console.log(url);
          $('section ul li').eq(url).addClass('active');

          $('section ul li').on('click',function(){
            var idx = $(this).index();
            detail(idx);            
            
          });

          function detail(fIdx){
              var detail = $(data).find('work').eq(fIdx).find('detail').text();
              var nameDetail = $(data).find('work').eq(fIdx).find('name').text();
              var timeDetail = $(data).find('work').eq(fIdx).find('time').text();
              var linkDetail = $(data).find('work').eq(fIdx).find('link').text();
                          
              $('article img').attr('src',detail);
              $('article figcaption span').eq(0).text(nameDetail);
              $('article figcaption span').eq(1).text(timeDetail);
              $('article figcaption a').attr('href',linkDetail);
          }

          detail(url);
      }
  });
  
});