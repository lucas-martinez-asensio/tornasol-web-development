/* Function toggleMenu:
    Open and close menu navigator.
    Get navigator, opend and close button from DOM 
    AddEventListener to both buttons
    Toggle between open & close menu

*/
const menu = document.querySelector(".nvgt-btn__container");
const shadowMenu = document.querySelector(".shadow-nvgt");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");
const homeBtn = document.querySelector(".home-btn");
const buyBtn = document.querySelector(".buy-btn");
const deliveryBtn = document.querySelector(".delivery-btn");
const sizeBtn = document.querySelector(".size-btn");
const contactBtn = document.querySelector(".contact-btn");
const designBtn = document.querySelector(".design-btn");
const productsBtn = document.querySelector(".products-btn");

function toggleMenu() {
  shadowMenu.classList.toggle("menu-opened");
  menu.classList.toggle("menu-opened");
}

shadowMenu.addEventListener("click", toggleMenu);
openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
homeBtn.addEventListener("click", toggleMenu);
buyBtn.addEventListener("click", toggleMenu);
deliveryBtn.addEventListener("click", toggleMenu);
sizeBtn.addEventListener("click", toggleMenu);
contactBtn.addEventListener("click", toggleMenu);
designBtn.addEventListener("click", toggleMenu);
productsBtn.addEventListener("click", toggleMenu);

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
