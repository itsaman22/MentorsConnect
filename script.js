
// sliding bar /

let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
const dots = document.querySelectorAll('.dot');

// Function to move to next or previous slide
function moveSlide(direction) {
    slideIndex += direction;

    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    updateSlidePosition();
    updateDots();
}

// Function to show current slide based on dot click
function currentSlide(index) {
    slideIndex = index;
    updateSlidePosition();
    updateDots();
}

// Update slide position using translateX
function updateSlidePosition() {
    slides.style.transform = `translateX(-${slideIndex * 100}vw)`;
}

// Update dots
function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === slideIndex) {
            dot.classList.add('active');
        }
    });
}

// Auto slide every 3 seconds
setInterval(function() {
    moveSlide(1);
}, 3000);


