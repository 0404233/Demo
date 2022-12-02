function ibg() {

  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}

ibg();


// $(document).ready(function() {
//     $('.icon-menu').click(function(event) {
//         $('.menu__icon,.icon-menu').toggleClass('active');
//     });
//     $('body').toggleClass('lock')
// });


$('.menu__link').click(function (event) {
  event.stopPropagation()
  $('.icon-menu').toggleClass('active');
  $('.menu__body').toggleClass('active');
  $('body').toggleClass('lock');
})


$('.icon-menu').click(function (event) {
  event.stopPropagation()
  $(this).toggleClass('active');
  $('.menu__body').toggleClass('active');
  $('body').toggleClass('lock');
})


// Slider

// $(document).ready(function(){
//   $('.your-class').slick({
//     infinite: true,
//     dots: true,
//     slidesToShow: 2,
//     slidesToScroll: 1

//   });
// });

// Adaptive


$('.slider').slick({
  infinite: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  focusOnSelect: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});