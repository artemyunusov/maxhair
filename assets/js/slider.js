$('.product-slider').slick({
  slidesToShow: 4,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});

$('.review-slider').slick({
  slidesToShow: 3,
  arrows: false,
  dots: false,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        centerMode: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        centerMode: false,
        slidesToShow: 1
      }
    }
  ]
});