// carousel
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;
let interval;

function updateCarousel() {
    const width = images[currentIndex].clientWidth;
    carouselImages.style.transform = `translateX(-${currentIndex * width}px)`;
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

function showNextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(showNextImage, 3000);
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateCarousel();
    resetInterval();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
    resetInterval();
});

indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
        currentIndex = parseInt(indicator.getAttribute('data-index'));
        updateCarousel();
        resetInterval();
    });
});

window.addEventListener('resize', updateCarousel);

interval = setInterval(showNextImage, 3000);
updateCarousel();
// end carousel

// services comment 
function showText(id) {
    
    const spans = document.querySelectorAll('.comment-service span');
    spans.forEach(span => span.style.display = 'none');
    
    
    const spanToShow = document.getElementById(id);
    if (spanToShow) {
        spanToShow.style.display = 'block';
        

    }
}


document.addEventListener('DOMContentLoaded', (event) => {
    const spans = document.querySelectorAll('.comment-service span');
    spans.forEach(span => span.style.display = 'none');
});


document.addEventListener("DOMContentLoaded", function() {
    const accordionButtons = document.querySelectorAll(".faq-accordion button");
  
    accordionButtons.forEach(button => {
      button.addEventListener("click", function() {
        const expanded = button.getAttribute("aria-expanded") === "true" || false;
  
        // Close all accordion items
        accordionButtons.forEach(btn => {
          btn.setAttribute("aria-expanded", "false");
          btn.nextElementSibling.style.display = "none";
        });
  
        // Toggle the current accordion item
        if (!expanded) {
          button.setAttribute("aria-expanded", "true");
          button.nextElementSibling.style.display = "block";
        }
      });
    });
  });
  