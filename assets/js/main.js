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

  /* particle JS */
  particlesJS("particles-js", {"particles":{"number":{"value":100,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":true,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":4,"direction":"none","random":true,"straight":false,"out_mode":"bounce","bounce":false,"attract":{"enable":true,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":200,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});


  });