
$(document).ready(function(){
    $(".phone-mask").mask("+7(999)999-99-99");
    $(".birthday-mask").mask("99.99.9999");

    let timer;

    $('.subscribe-form input').on('keyup', function(e){
        $('.subscribe-form button').attr('disabled', 'true');
        !$('.subscribe-form button').hasClass('disabled') && $('.subscribe-form button').addClass('disabled');
        clearTimeout(timer);
        timer=setTimeout(function(){
            if (/^\w+@[a-zA_]+\.[a-zA-Z]{2,3}$/.test(e.target.value)){
                $('.subscribe-form button').attr('disabled','false');
                $('.subscribe-form button').removeClass('disabled');
            }
        },1000);
    })

    $('.registration-form-elem select').change(function(e){
         $(this).css('color','#000000')
    })

    $('.menu ul li').click(function (e) {
        let targetId=e.target.hash;
        e.preventDefault(); 
        let top = $(targetId).offset().top; 
        let documentHeight = document.body.clientHeight;
        let aboutUsHeight = $(targetId).height();
        $('html,body').scrollTop(top - documentHeight/2+aboutUsHeight/2);
   });
    
    $(document).on('scroll',function(e){
        if(window.pageYOffset>20 &&  $(window).innerWidth() > 904){
            !$('.menu-panel').hasClass('scrolled-menu') &&  $('.menu-panel').addClass('scrolled-menu');
        }else{
            $('.menu-panel').removeClass('scrolled-menu');
        }
    });

    function makePageUnactive(){
        $('.menu').addClass('active');
        $('.overlay').addClass('active');
        $(document.body).css('overflowY', 'hidden');
    }

    function makePageActive(){
        $('.menu').removeClass('active');
        $('.overlay').removeClass('active');
        $(document.body).css('overflowY', 'auto');
    }

    function showMore(){
        $('.raiting-form__table').addClass('show-full-table');
        $('.show-more').hide();
        $('.show-less').show();
    }

    function showLess(){
        $('.raiting-form__table').removeClass('show-full-table');
        $('.show-less').hide();
        $('.show-more').show();
    }

    $('.nav-toggle').on('click',function(){
        makePageUnactive();
     })
 
    $('.menu').on('click',function(e){
        makePageActive();
     })
    $('.overlay').on('click', function(){
         if($('.menu').hasClass('active')){
             makePageActive();
         }
     })

    $('.show-more').on('click', function(e){
        e.preventDefault();
       showMore();
    })

    $('.show-less').on('click', function(e){
        e.preventDefault();
        showLess();
    })

    $('.filter-buttons a').on('click', function(e){
        e.preventDefault();
        $('.'+e.target.className).removeClass('active-button');
        $(e.target).addClass('active-button')
    })
});
