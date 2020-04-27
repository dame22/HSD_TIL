$(function(){

    var idx = 0;
    $('.select p').on('click',function(){
        idx = $(this).index();

        if(idx == 1){
            $('section').eq(0).hide();
            $('section').eq(1).show();            
        }else{
            $('section').eq(0).show();
            $('section').eq(1).hide();  
        };    
    });
});