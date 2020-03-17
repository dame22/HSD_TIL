
  window.addEventListener('DOMContentLoaded',function(){
    
    var textInput = document.querySelectorAll('.input')  
    var value = document.querySelectorAll('.value');
    var btn = document.querySelector('.btn')

    btn.children[0].addEventListener('click',function(){
        var Allsum = parseInt(textInput[1].value) + parseInt(textInput[2].value) + parseInt(textInput[3].value)  
            value[0].textContent = textInput[0].value;
            value[1].textContent = Allsum
            value[2].textContent = Allsum/3       
        
            
            if(value[2].textContent < 60){
                value[3].textContent = '불합격'
                }else(
                value[3].textContent = '합격')
    })

    btn.children[1].addEventListener('click',function(){
        for(i = 0; i < textInput.length; i++){
            textInput[i].value = '';            
        }
    })

  })


