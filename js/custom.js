$(function(){
  $('html').smoothScroll(300);
  $(window).on('scroll',function(){
    var windowTop=$(window).scrollTop();
    if(windowTop>=100){
      $('header').addClass('active');
    }else{
      $('header').removeClass('active');
    }
  })

  // portfolio swiper style
  var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    
  });
})