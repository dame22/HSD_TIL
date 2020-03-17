window.addEventListener('DOMContentLoaded',function(){
    var ex1 = document.querySelector('#ex1');
    var menuTrigger = ex1.querySelector('.menu-trigger');
    var nav = ex1.querySelector('.nav')

    menuTrigger.addEventListener('click',function(){
        this.classList.toggle('active-1');
        nav.classList.toggle('active')
    })
})