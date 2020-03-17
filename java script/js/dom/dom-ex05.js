

window.addEventListener('DOMContentLoaded',function(){
    var ex1 = document.querySelector('#ex1');
    var thum = ex1.querySelector('.thum');    
    var popup = document.querySelector('.popup');

    
    thum.addEventListener('click',function(e){
        for(i = 0; i < thum.children.length; i++){
            thum.children[i].classList.remove('active')
        } // 클릭을 했을 때 remove 가 되야하기때문에 안에 넣음

        // console.log(event.target);
        e.target.classList.add('active');   
        popup.children[0].src = e.target.src;
        // console.log(popup.children[0].src);
        popup.style.display = 'flex';
    
    popup.addEventListener('click',function(){
        popup.style.display = 'none';
    })        
    
    })
});


    








    
    