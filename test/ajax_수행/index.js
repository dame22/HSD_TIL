$(function () {
    $.ajax({
        url: 'data.xml',
        dataType: 'xml',
        type: 'get',      
        success: function(data){
            
            var full, thum, title;

            $(data).find('item').each(function(i){
                full = $(this).find('item').text();
                thum = $(this).find('thum').text();
                title = $(this).find('title').text();

                
            })
           
            
            

            
        }
