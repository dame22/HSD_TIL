window.addEventListener('DOMContentLoaded',function(){

    var all = document.querySelector('nav');
    var img = document.querySelector('section img');
    
    
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET","data.json");
    xhr.send(null);
    xhr.onload = function(){
        var data = JSON.parse(xhr.responseText);
        
        //pushState
        //onpopstate
        //window.onpopstate = function(){}

        all.addEventListener('click',function(e){
            var target = e.target;
            var idx = target.dataset.id; // a의 dataset-id 값을 가져옴
            // img.src = data.event[idx]; // json 값을 가져옴
            view(idx);

            history.pushState({page:idx},'title','page='+idx);//''안에 입력하는 값은 브라우저에 남음 :('object','title','hash')
            // hash 브라우저 상단 url에 남는 #해시태그 : string
            // object 객체형태의 값
            // 뒤로가기를 누르면 사이트에서 벗어나지않음..이전 url 값으로 돌아감 

            // console.log(history.state);
            // console.log(history) //length 값 >> 사이트내에서 이동한 값
            // console.log(history.state.page)
        });

        function view(i){ // idx 값을 받아서 넣음
            img.src = data.event[i];
        };

        window.addEventListener('popstate',function(){ //on빼고입력, 뒤로가기 눌렀을 때 이전 내역 컨텐츠 표시
            // img.src = data.event[history.state.page];
            view(history.state.page);
        });


        // localhost.href = "history.html" > 기존에 작성한 데이터가 다 사라짐
        // history.back(); 뒤로가기 > 기존에 작성한 데이터가 남아있음
        // history.forward(); 앞으로가기
        // history.go(1); 입력한 값만큼 가기 -1 > 1만큼 뒤로가기
        
        
    }
    
    
});