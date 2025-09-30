// Animated Text Intro
const welcomeText = "Welcome to GastroGlow.";
const welcomeElement = document.querySelector('.welcome-text');
let i = 0;

function typeWriter() {
    if (i < welcomeText.length) {
        welcomeElement.innerHTML += welcomeText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

document.addEventListener('DOMContentLoaded', typeWriter);

// Navbar Scroll Animation
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").classList.add("scrolled");
    } else {
        document.getElementById("navbar").classList.remove("scrolled");
    }
}

// Customer Reviews Slider
let slideIndex = 1;
showSlides(slideIndex);

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;
}
