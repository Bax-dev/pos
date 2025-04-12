import $ from 'jquery';

export const initNavbarToggle = () => {
  if ($('.menu-trigger').length) {
    $(".menu-trigger").off('click').on('click', function (e) {
      e.preventDefault();    
      e.stopPropagation();      

      $(this).toggleClass('active');
      $('.header-area .nav').stop(true, true).slideToggle(200);
    });
  }

  $(document).off('click').on('click', function (e) {
    if (!$(e.target).closest('.header-area').length) {
      $('.header-area .nav').slideUp(200);
      $('.menu-trigger').removeClass('active');
    }
  });
};
