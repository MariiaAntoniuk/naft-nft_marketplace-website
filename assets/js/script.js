'use strict';

const elemToggleFunc = function (elem){
    elem.classList.toggle("active");
}

const navbar = document.querySelector("[data-navbar]");
const navbarToggleBtn = document.querySelector("[data-navbar-toggle-btn]");

navbarToggleBtn.addEventListener("click", function () {
    elemToggleFunc(navbar);
});

const whishlistBtn = document.querySelectorAll("[data-whishlist-btn]");

for (let i = 0; i < whishlistBtn.length; i++){
    whishlistBtn[i].addEventListener("click", function (){
      elemToggleFunc(this);
    });
}

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function (){
    if(this.window.scrollY >= 800){
        goTopBtn.classList.add("active");
    }else{
        goTopBtn.classList.remove("active");
    }
});