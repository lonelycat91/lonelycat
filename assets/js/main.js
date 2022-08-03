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

    $('.slide-blog').slick({
      centerMode: true,
      centerPadding: '250px',
      // autoplay: true,
      slidesToShow: 1,
      infinite : true,
      // autoplaySpeed: 2000,
      arrow: true,
      prevArrow:"<button type='button' class='slick-prev pull-left'><i class='bi bi-arrow-left-circle-fill'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><i class='bi bi-arrow-right-circle-fill'></i></button>",
      responsive: [
        {
          breakpoint: 740,
          settings: {
            centerPadding: '0px',
          },
        },
        {
          breakpoint: 1200,
          settings: {
            centerPadding: '0px',
          },
        },
      ],
  });

  const menuBtn = document.querySelector('.menu-btn');
  let menuOpen = false;
  menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
      $('.mobile-menu').addClass('open');
    } else {
      menuBtn.classList.remove('open');
      menuOpen = false;
      $('.mobile-menu').removeClass('open');
    }
  });

  });