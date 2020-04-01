function jsop(data){
  console.log(data.event)

    for(var i in data.event){    
      var imgNode = "<img src = " + data.event[i] + ">";          
      $('section').append(imgNode);
    }
}         
      
  
