//ex3
window.addEventListener('DOMContentLoaded',function(){
    var ex3 = document.querySelector('.ex3')
    var txtInput = ex3.querySelector('.txt-input');
    var btnInput = ex3.querySelector('.btn-input');
    var delInput = ex3.querySelector('.del-input');
    var txtList = ex3.querySelector('.txt-list');
    var target = null;

    btnInput.addEventListener('click',function(){
        var txtValue = txtInput.value;
        txtList.innerHTML += "<p>" + txtValue + "</p>";
    });     

    txtList.addEventListener('click',function(e){
        target = e.target;
        // target.remove(); = target.textContext = ''; || 내용 삭제

        target.style.border = "1px solid #f00"
        
    });

    delInput.addEventListener('click',function(){
        target.remove();
    });

});



// ex2
window.addEventListener('DOMContentLoaded',function(){
    var ex2 = document.querySelector('.ex2')
    var txtInput = ex2.querySelector('.txt-input');
    var btnInput = ex2.querySelector('.btn-input');
    var txtList = ex2.querySelector('.txt-list');

    btnInput.addEventListener('click',function(){
        /* 방법1 : 값을 화면에 뿌리기만 할 때 
        var txtValue = txtInput.value;
        txtList.textContent += txtInput.value
        */
        

        // 방법2 : 입력한 값을 추후에 삭제할 일이 생길 때
        var txtValue = txtInput.value;
        var txtNode = document.createTextNode(txtValue);
        // 하나의 텍스트를 넣을 수 있는 공간 확보
        // document.createElement('span') : 태그를 넣음

        txtList.append(txtNode);
        // append : 추가 || appendChild : create로 만들어진 내용만 들어감
        

        /* 방법3
        var txtValue = txtInput.value;
        txtList.innerHTML += "<p>" + txtValue + "</p>";
         */

    });    
});




// ex1
// 선택자.추가이벤트('이벤트명(클릭, 호버 등..)',function(){ 이벤트처리 });
window.addEventListener('DOMContentLoaded',function(){
    var ex1 = document.querySelector('.ex1');
    var txt = ex1.querySelector('.txt');

    txt.textContent += "안녕~~!!";
    txt.style.color = 'red'

    txt.style.fontSize = '3em'
});

// window.onload = function(){}
// onload || css,이미지, 동영상 등 모든 콘텐츠가 실행된 후에 작동