// Modal popups
$('.popup').on('click touchend', function() {
  $('.popup').removeClass('show');
  $('.popuptext').removeClass('popupOpened');
  $(this).addClass('show');
  $(this).find('.popuptext').addClass('popupOpened');
});

// Adding parallax effect for background images
$('.hero').parallax({
  imageSrc: new URL("../img/IMG_0485.jpg", import.meta.url),
});
$('.pricing').parallax({
  imageSrc: new URL("../img/pricing-cards-bw.jpg", import.meta.url),
});
