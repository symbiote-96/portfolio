const menu = document.querySelector(".nav-menu");
const openMenu = document.querySelector(".btn-menu_open");
const closeMenu = document.querySelector(".btn-menu_close");

function toggleMenu() {
  menu.classList.toggle("nav-menu_opened");
}

openMenu.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

menuLinks.forEach(menuLink => {
  menuLink.addEventListener("click", function() {
    menu.classList.remove("nav-menu_opened");
  })
})