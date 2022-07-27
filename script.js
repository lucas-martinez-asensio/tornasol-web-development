const main = document.querySelector(".container-main");
const menu = document.querySelector(".nvgt-btn__container");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu-opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
// menu.addEventListener("mouseout", toggleMenu);
