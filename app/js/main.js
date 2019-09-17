$(window).load(function() {
    $('.posters_slider').slick({
        arrows:true,
        draggable:false,
        dots: true,
        dotsClass:'posters_slider_dots',
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right'),
      });

  
  var header = $('.accordion-header');

  function accordion() {
    $(this).toggleClass('active');
    $(this).next().slideToggle('normal');
  }
  
  header.click(accordion);

});