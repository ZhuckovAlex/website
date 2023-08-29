$(document).ready(function(){
	$('.header__burger').click(function(event){
		
        $('.header__burger,.header__menu').toggleClass('active');
        
        $('body').toggleClass('lock');
	});
  });
/*-----------------------*/
$(function(){
  $('.slider').slick({
          infinite: true,
          arrows:true,
          slidesToShow: 3,
          slidesToScroll: 1,
          dots:true,

    responsive:[
    {
      breakpoint: 768,
      settings: {
         slidesToShow:2
      }},
       {
      breakpoint: 520,
      settings: {
         slidesToShow:1
      }
    }]
});
}); 
/*--------------------*/
