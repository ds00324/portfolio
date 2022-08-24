$(function(){
    AOS.init();
    $(window).on('scroll',function(){
        var windowTop=$(window).scrollTop();
        if(windowTop>=100){
        $('header').addClass('active');
        }else{
        $('header').removeClass('active');
        }
    })
    var swiper = new Swiper('.swiper-container', {
    speed: 600,
    parallax: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    });
    $('.li_home').on('click',function(){
        $('html, body').animate({scrollTop :0},800);
    })
    $('.li_about').on('click',function(){
        $('html, body').animate({scrollTop :570},800);
    })
    $('.li_portfolio').on('click',function(){
        $('html, body').animate({scrollTop :1860},800);
    })
    $('.li_contact').on('click',function(){
        $('html, body').animate({scrollTop :3000},800);
    })
    $(document).ready(function(){
        var i = 0;
        var x = 'Do Youn portfolio.';
        var y = "";
        function typeWriter(){
            if(i < x.length){
                $("#typing").text(y+=x[i]);
                i++;

                setTimeout(typeWriter, 200);
            }
        }
        typeWriter();
    })
})
