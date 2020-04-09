$(function(){   

    var wCroll = 0,
        count = 0;
        
        $(window).on('scroll',function(e){       

            wCroll = $(this).scrollTop();          
                   
        //    if(wCroll > count){//내림               
        //         $('header h1').addClass('active');
        //         $('header nav').addClass('active');           
        //    }else{           
        //         $('header h1').removeClass('active');  
        //         $('header nav').removeClass('active');                       
        //     }

            count = wCroll;
        });      
        
        $('.main .visual').animate({
            height: 90 + '%'
        },2000,function(){
            $('.main .visual img').eq(1).css({
                zIndex: 0,
                display: 'block'
            });                   
        });   
       
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
});
