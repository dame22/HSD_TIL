// ex1
window.addEventListener('DOMContentLoaded',function(){
    var ex1 = document.querySelector('#ex1'),
        menuTrigger = ex1.querySelector('.menu-trigger'),
        nav = ex1.querySelector('.nav');
    
    menuTrigger.addEventListener('click',function(){
        this.classList.toggle('active-1');
        nav.classList.toggle('active');

        // // 방법2
        // this.classList.toggle('active-1');
        // if(this.classList.contains('active-1')){ // menuTrigger에 active-1 클래스가 있는지 찾음
        //     nav.classList.add('active');
        // }else{
        //     nav.classList.remove('active');
        // }
        // //menuTrigger 클래스에 active-1 가 들어가있을 경우 nav에 active를 넣는다
    })
    
});


// ex2
window.addEventListener('DOMContentLoaded',function(){
    var ex2 = document.querySelector('#ex2'),
        tab = ex2.querySelector('.tab'), //li 잡을 경우 반복문을 사용해야함
        tabCon = ex2.querySelectorAll('.tab-con')

    // 현장에선 주로 for 사용
    // tab.addEventListener('click',function(e){
    //     var target = e.target; // li
    //     var data = e.target.dataset.id; // li의 data-id를 가르킴
        
    //     for(var i = 0; i < tabCon.length; i++){
    //         tab.children[i].className = '';
    //         tabCon[i].className = ''; 
    //     }
    //     target.className = 'active';
    //     tabCon[data].className = 'active';       

    // })

    var tabLi = ex2.querySelectorAll('.tab li')
    let j = 0;

    for(let i = 0; i < tabCon.length; i++){ 
        tabLi[i].addEventListener('click',function(){
            
            tabLi[j].classList.remove('active');
            tabCon[j].classList.remove('active');

            this.className = 'active';
            tabCon[i].className = 'active';

            j = i; // 값을 마지막에 쓴 이유는 i에 담겨있는 값을 이용하기 위해서...?
         
        });
    }


})
// var i 의 경우 값이 계속 갱신되어 마지막 값이 계속 i에 담겨있음

/* let
값이 갱신되지않고 배열처럼 갖고있음
(let i = 0; i < 3; i++) >> i에는 0 1 2 3이 남아있음
let a = 0;
    a = 10; << 값 변경 O

function(){
    let a = 0; >> 지역변수이기 때문에 가능
}
*/

/* 
const >> let 처럼 중복값 X
const a = 0;
      a = 1; >> 값변경 X
- 값 변경 방법 - 
const ca = {
    a : 0, >> 01
    b : 1, >> 10
}
ca.a = 01;
ca.b = 10;
*/



// ex3

window.addEventListener('DOMContentLoaded',function(){
    var ex3 = document.querySelector('#ex3');
    var detailImg = ex3.querySelector('.detail img');
    var thum = ex3.querySelector('.thum');

    thum.addEventListener('click',function(e){
        for(var i = 0; i < thum.children.length; i++){
            thum.children[i].classList.remove('active');
        }
        detailImg.src = e.target.src;
        e.target.classList.add('active');
    })
})