$.js = function (el) {
    return $('[data-js=' + el + ']')
};

function carousel() {
  $.js('timeline-carousel').slick({
    infinite: false,
    arrows: true,
     arrows: true,
    prevArrow: '<div class="slick-prev"> <div class="btn mr-3 btn-warning d-flex justify-content-center align-items-center"> <div><img src="images/previous.png" width="64" height="64"></div></div></div>',
    nextArrow: '<div class="slick-next"> <div class="btn btn-warning d-flex justify-content-center align-items-center"><div><img src="images/next.png" width="64" height="64"></div></div></div>',
    dots: false,
    autoplay: false,
    speed: 1100,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
  });
}

carousel();