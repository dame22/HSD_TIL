// ex1 필드값을 받아 계산 및 삭제하기
window.addEventListener('DOMContentLoaded',function(){
    var ex1 = document.querySelector('#ex1');
    var txtInput = ex1.querySelectorAll('.txt-input');
    var addBtn = ex1.querySelector('.add-button');
    var delBtn = ex1.querySelector('.del-button');
    var menuList = ex1.querySelector('.menu-list');

    addBtn.addEventListener('click',function(){
        var sum = parseInt(txtInput[0].value) + parseInt(txtInput[1].value);
        
           menuList.children[0].textContent = sum;
           menuList.children[1].textContent = sum / 2;        
            
    });
    
    delBtn.addEventListener('click',function(){
        // txtInput[0].value = '';
        // txtInput[1].value = '';

        for(i = 0; i < txtInput.length; i++){
            txtInput[i].value = '';
        }
    });
    
    
});


// ex2 Node에 클래스 넣기(className)
window.addEventListener('DOMContentLoaded',function(){
    var ex2 = document.querySelector('.ex2');
    var classList = ex2.querySelector('.class-list');

    classList.addEventListener('click',function(){
        //classList.className = 'red';
        this.className = 'red';
    })
})



//ex3 Node에 클래스 추가하기(classList.add)
window.addEventListener('DOMContentLoaded',function(){
    var ex3 = document.querySelector('.ex3');
    var classList = ex3.querySelector('.class-list');

    classList.addEventListener('click',function(){
        this.classList.add('active');
    })
})



//ex4 Node에 토글 클래스 만들기(classList.toggle) : toggle >> className을 넣었다뺏다함
window.addEventListener('DOMContentLoaded',function(){    
    var ex4 = document.querySelector('.ex4');
    var toggleClass = ex4.querySelector('.toggle');
    
    ex4.addEventListener('click',function(){
        //this.children[2].classList.toggle('on');
        toggleClass.classList.toggle('on');
        
        toggleClass.textContent = toggleClass.className;      
        
        //console.log(  toggleClass.classList.contains('on')  ); - 권장
        console.log(  toggleClass.className == 'toggle on'  );
        
        
    });
    
    
});





//ex5 Ex5 - 클래스를 이용한 FAQ(classList.toggle)
window.addEventListener('DOMContentLoaded',function(){
    var ex5 = document.querySelector('.ex5');
    var li = ex5.querySelectorAll('.ex5 li');
    var div = ex5.querySelectorAll('.ex5 li div');
    var faq = ex5.querySelector('.faq')
    
    // console.log(div) > div[0]. div[1], div[2]
    // 복수개의 div
    // 복수개의 li
 
// 누르면 열림
    faq.addEventListener('click',function(e){
        var liDiv = e.target.querySelector('div');
       liDiv.classList.toggle('on');
    });



// ===========================열리고 다른걸 누르면 열린게 닫힘===================================
    

    //  faq.addEventListener('click',function(e){   
    //    //console.log(e.target.nodeName == 'LI')  // 클릭하는 타겟의 이름을 알고싶을 때 (li가 맞는지..) - 무조건 대문자로 입력
 
    //    // for문으로 div를 다 닫아놓은 후 on 명령
    //    for(var i = 0; i < div.length; i++){
    //         div[i].classList.remove('on');
    //    }
    //    var liDiv = e.target.querySelector('div');
    //    liDiv.classList.toggle('on');
    // });


// ===========================열리고 다른걸 누르면 열린게 닫힘 -2===================================


//    for(var i = 0; i < li.length; i++){
//     li[i].addEventListener('click',function(e){  

//        for(var i = 0; i < div.length; i++){
//         div[i].classList.remove('on');        
//    }
//         var liDiv = this.querySelector('div');
//         liDiv.classList.toggle('on');
//     })
// }; 

       
    
});