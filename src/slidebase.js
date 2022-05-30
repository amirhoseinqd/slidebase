const slides = document.getElementsByClassName("slide");
const nextSlide = document.getElementById("nextSlide");
const previousSlide = document.getElementById("previousSlide");
let currentSlide = 0;

nextSlide.addEventListener("click", () => {
    slideChange(currentSlide + 1);
})

previousSlide.addEventListener("click", () => {
    slideChange(currentSlide - 1);
})

function slideChange(targetSlide) {
    if (targetSlide >= slides.length) {
        targetSlide = 0;
    }

    if (targetSlide < 0) {
        targetSlide = slides.length - 1;
    }

    slides[currentSlide].classList.remove("active");
    slides[targetSlide].classList.add("active");

    currentSlide = targetSlide;
}




