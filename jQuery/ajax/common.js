// json :: 객체형태의 문서 >> json = {"name" : "홍길동"}
// xml :: 태그형태의 문서 >> <imgSrc> ../img/img-01.jpg </imgSrc> 
// $.ajax :: 외부의 파일을 호출할 수 있는 메소드

$(function(){
  $.ajax({
    url : 'data.xml',
    type : 'GET', //POST
    dataType : 'xml',
    // beforeSend : function(){ 문서로드시 발생 :: ex) 로딩바 },
    // complete : function(){ 문서로드 완료 :: ex) 로딩바 사라짐 },
    success : function(data){ // 문서로드 성공 :: 데이터 표시
        // console.log(data) // 로드한 전체 문서내용 확인가능, data말고 아무거나 써도됨

        var imgTag;
        $(data).find('item').each(function(i){
            imgTag = "<img src =" +  $(this).text()+ ">"
            $('section').append(imgTag);
        });
    },
    error : function(){
        alert('FAIL'); // 문서로드 실패
    } 



  });
});