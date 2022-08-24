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
})
