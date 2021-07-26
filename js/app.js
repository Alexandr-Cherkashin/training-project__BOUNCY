const header = document.querySelector(".header");
const burgerBtn = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burger__menu");
const body = document.querySelector("body");
const navLink = document.querySelectorAll(".burger__menu__link");

window.addEventListener('scroll', function(){
    CheckScroll();
});

window.addEventListener("DOMContentLoaded", function(){
    CheckScroll();
});

function CheckScroll(){
    let scrollPos = window.scrollY;

    if(scrollPos > 40){
        header.classList.add("header__scroll");
    }

    if (scrollPos < 40){
        header.classList.remove("header__scroll");
    };
};

burgerBtn.addEventListener('click', function(){
    burgerBtn.classList.toggle("active");
    burgerMenu.classList.toggle("active");
    body.classList.toggle("lock");
});

navLink.forEach(burgerMenuRemove);

function burgerMenuRemove (item){
    item.addEventListener('click', function(){
        burgerBtn.classList.remove("active");
        burgerMenu.classList.remove("active");
        burgerMenu.classList.remove("active");
        body.classList.remove("lock");
    });
};

