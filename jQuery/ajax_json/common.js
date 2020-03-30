$(function(){
  $.ajax({
      url : 'data.json',
      type : 'GET',
      dataType : 'json',
      success : function(data){ // data.json에 들어가있는 모든 데이터를 가져옴       
          // console.log(data.event[0])
          // console.log(data.event.length)
          
          // for(var i = 0; i < data.event.length; i++){
          //   console.log(data.event[i])
          // } // for in 문과 값 동일          

          // for(var i of data.event){
          //   console.log(i)
          // } // i가 value값을 의미함
          
          for(var i in data.event){
            // var imgNode = document.createElement('img'); // 문서에 img태그를 생성
            // imgNode.src = data.event[i]; // <img src="../img/img-01.jpg"> 가 만들어진 상태

            var imgNode = "<img src = " + data.event[i] + ">"; // << 코드가 많을 때 권장, 위에꺼랑 같은 내용           
            $('section').append(imgNode);
          }
          
      }
  });
  
});