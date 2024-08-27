const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const toTopBtn = document.querySelector('.back__top button');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

toTopBtn.addEventListener("click", function() {
    window.scrollTo({top: 0, behavior: 'smooth'})
});