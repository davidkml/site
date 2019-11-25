const navbarBurger = document.querySelector(".navbar-burger");
const menu = document.querySelector(".navbar-menu");

navbarBurger.addEventListener("click", () => {
    navbarBurger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
})