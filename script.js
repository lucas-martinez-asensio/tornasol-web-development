/* Function toggleMenu:
    Open and close menu navigator.
    Get navigator, opend and close button from DOM 
    AddEventListener to both buttons
    Toggle between open & close menu

*/
const menu = document.querySelector(".nvgt-btn__container");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu-opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

/* Initial Navigator transparency:
    Switch Nav background from transparent to solid when scrolling

*/

window.onscroll = function () {
  scrollTransparency();
};

const header = document.querySelector(".nvgt");
const card = document.querySelector(".category__container");

var distance_category;

function scrollTransparency() {
  distance_category =
    card.getBoundingClientRect().top - header.getBoundingClientRect().bottom;
  if (distance_category <= 200) {
    header.classList.add("nav_transparency");
  } else if (distance_category > 200) {
    header.classList.remove("nav_transparency");
  }
}
