const header = document.querySelector(".header");
const hamburger = document.querySelector(".header__menu--hamburger");
const navMenu = document.querySelector(".nav__container");
const ham__checkbox = document.querySelector("#hamburger-checkbox");
hamburger.addEventListener("click", (e) => {
  e.target.classList.toggle("icon-close");
  navMenu.classList.toggle("nav-open");
});
