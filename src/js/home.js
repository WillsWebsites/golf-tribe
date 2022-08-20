// Modal popups
function modalFunction() {
  let popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  popup.parentElement.classList.toggle("popupOpened");
}

function modalFunction2() {
  let popup = document.getElementById("myPopup2");
  popup.classList.toggle("show");
  popup.parentElement.classList.toggle("popupOpened");
}

function modalFunction3() {
  let popup = document.getElementById("myPopup3");
  popup.classList.toggle("show");
  popup.parentElement.classList.toggle("popupOpened");
}

// Adding parallax effect for background images
$('.hero').parallax({
  imageSrc: new URL("../img/IMG_0485.jpg", import.meta.url),
});
$('.pricing').parallax({
  imageSrc: new URL("../img/pricing-cards-bw.jpg", import.meta.url),
});
