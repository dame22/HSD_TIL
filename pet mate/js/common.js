$(function(){
    start();
    function start(){
        $('#main .pets').addClass('active');
    }
   
    $('#main .txt strong').on('click',function(){
        var exoffTop = $('#explain').offset().top;

        $('html').animate({
            scrollTop : exoffTop
        })
    });

    var wCroll = '';
    var exCroll = $('#explain').offset().top;
    var serviceCroll = $('#service').offset().top;
    var bln = true;
    $(window).on('scroll',function(){          
        wCroll =  $(window).scrollTop();

        if(exCroll/2 < wCroll){
            $('#explain .right').addClass('active'); 
                                 
        }else{
            $('#explain .right').removeClass('active');
        }
        if(serviceCroll-100<wCroll){
            $('#explain .right').removeClass('active');
        }   

        if(serviceCroll < wCroll){
            // $('#service .right div').addClass('active'); 
            if(bln == true){
                bln = false
                counting();
            } 
            
            $('#service figure').addClass('active')
            for(var i=0; i < $('#service figure').length; i++){
                $('#service figure figcaption').eq(i).css({
                    transitionDelay : 0 + '.' + i * 3 + 's'
                })
            }
        }
        
    });

    function counting(){
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
    };
    
    $('#main header .menu').on('click',function(){
        $('#main header nav').addClass('active');
    });
    $('#main header nav p').on('click',function(){
        $('#main header nav').removeClass('active');
    });
     
    $('#download .top a').on('click',function(e){
        e.preventDefault();
        $('#download #popup').addClass('active')
    });
    $('.message .close').on('click',function(){
        $('#download #popup').removeClass('active')
    });

    $('.send button').eq(0).on('click',function(){
        console.log('send')      
        if($('.send input:checkbox[id="agree"]').is(':checked')){
            alert('문자가 발송되었습니다.')
        }else{
            alert('개인정보 수집 및 이용 동의에 체크해주세요.')
        }   
    })
    $('.send button').eq(1).on('click',function(){
        $('.send ul').toggleClass('active');
    })

})
