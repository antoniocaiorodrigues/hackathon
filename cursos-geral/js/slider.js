let currentSlide = 0;
const slides = document.querySelectorAll('.slider li');
const totalSlides = slides.length;

function showSlide(index) {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Initialize slider
showSlide(currentSlide);
