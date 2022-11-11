const iconMenu = document.querySelector(".icon_menu");
const menu = document.querySelector(".menu");

iconMenu.addEventListener("click", function () {
    menu.classList.toggle("menu_show");
});


ScrollReveal().reveal('.exp_hab', { delay: 1000 });
ScrollReveal().reveal('.portfolio', { delay: 1000 });
ScrollReveal().reveal('.contact', { delay: 1000 });