$(function(){   

    var wCroll = 0, countTitle = 0;
        
        $(window).on('scroll',function(e){       

            wCroll = $(this).scrollTop(); 
            countTitle = $('.title figure').scrollTop();    
                   
           if(wCroll > countTitle){//내림               
                $('.title figure figcaption').addClass('active');                          
           }else{           
                $('.title figure figcaption').removeClass('active');                       
            }
        
            countTitle = wCroll;
        });      
        
        $('.main .visual').animate({
            height: 90 + '%'
        },2500,function(){
            $('.main .visual img').eq(1).css({
                zIndex: 0,
                display: 'block'
            });                   
        });   
       
        var i = 0;
        var liLen = $('.subLeft ul li').length;
        $('.leftBtn').hide();
        $('.leftBtn').on('click',function(){
            i--;
            slide();
        });
        $('.rightBtn').on('click',function(){
            i++;
            slide();           
        });

        function slide(){   
            $('.subLeft ul').css({
                left: -100 * i +  '%'
            });
                     
            if(i == liLen -1){
                $('.rightBtn').hide();                
            }else{
                $('.rightBtn').show();
            }   

            if(i == 0){
                $('.leftBtn').hide();                
            }else{
                $('.leftBtn').show();
            }          
        };
        
});

window.addEventListener('DOMContentLoaded',function(){
    function numberCounter(target_frame, target_number) {
        this.count = 0; this.diff = 0;
        this.target_count = parseInt(target_number);
        this.target_frame = document.getElementById(target_frame);
        this.timer = null;
        this.counter();
        };
    
        numberCounter.prototype.counter = function() {
            var self = this;
            this.diff = this.target_count - this.count;
        
            if(this.diff > 0) {
                self.count += Math.ceil(this.diff / 5);
            }
        
            this.target_frame.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        
            if(this.count < this.target_count) {
                this.timer = setTimeout(function() { self.counter(); }, 50);
            } else {
                clearTimeout(this.timer);
            }
        };        
    
        new numberCounter("counter1", 45678);
        new numberCounter("counter2", 56789);
})