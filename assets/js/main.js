$(document).ready(function(){
    $('.slide-doitackhac').slick({
        autoplay: true,
        slidesToShow: 5,
        infinite : true,
        autoplaySpeed: 2000,
        arrow: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='bi bi-arrow-left-circle-fill'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='bi bi-arrow-right-circle-fill'></i></button>",
        responsive: [
            {
              breakpoint: 740,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              },
            },
          ],
    });
  });