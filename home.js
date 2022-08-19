//Tab divider
function setupTabs() {
  document.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => {
      let sideBar = button.parentElement;
      let tabContainer = sideBar.parentElement;
      let tabNumber = button.dataset.forTab;
      let tabToActivate = document.querySelector(
        `.tab-text[data-tab="${tabNumber}"]`
      );

      sideBar.querySelectorAll(".tab").forEach((button) => {
        button.classList.remove("tab--active");
      });
      tabContainer.querySelectorAll(".tab-text").forEach((tab) => {
        tab.classList.remove("tab-text--active");
      });

      button.classList.add("tab--active");
      tabToActivate.classList.add("tab-text--active");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupTabs();

  document.querySelectorAll(".tab-container").forEach((tabContainer) => {
    tabContainer.querySelector(".tab-sidebar .tab").click();
  });
});

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


$('#section_0').parallax({imageSrc: new URL('./IMG_0485.jpg', import.meta.url)});
$('#section_4').parallax({imageSrc: new URL('./pricing-cards-bw.jpg', import.meta.url)})