//Add scrolled class to header
$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  if (scroll >= 40) {
    $("header").addClass("scrolled");
  } else {
    $("header").removeClass("scrolled");
  }
});
//Add scrolled class to section
$(window).scroll(function () {
  let sScroll = $(window).scrollTop();
  if (sScroll >= 40) {
    $("section").addClass("s-scrolled");
  } else {
    $("section").removeClass("s-scrolled");
  }
});

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      let hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1200,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

// Fade in effect
$(document).ready(function () {
  setTimeout(() => {
    $(".loading").fadeOut("slow");
    setTimeout(() => {
      $(".loading").addClass("content-loaded");
    }, 300);
  }, 750);
});
