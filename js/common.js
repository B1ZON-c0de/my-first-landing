$(function () {
  new WOW().init();

  // mnu mobile open
  $('.hamburger').click(function () {
    $(this).toggleClass('is-active');

    if ($(this).hasClass('is-active')) {
      $('.mnu_top').slideDown(300);
    } else {
      $('.mnu_top').slideUp(300);
    }
  });

  // reviews tabs

  $('.nav_rev > div').click(function () {
    const revID = $(this).data('revid');

    $('.nav_rev > div').not(this).removeClass('active');
    $('.nav_rev > div').not(this).addClass('active');

    $('.item_rev').not(revID).removeClass('active');
    $(revID).not(this).addClass('active');
  });

  // reviews tabs

  // Якорь
  $('.yakor').on('click', function (event) {
    var $anchor = $(this);
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr('href')).offset().top - 57,
        },
        {
          duration: 2000,
          specialEasing: {
            width: 'linear',
            height: 'easeInOutCubic',
          },
        }
      );
    event.preventDefault();
  });
  // Якорь
});
