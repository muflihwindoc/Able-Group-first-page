const carousel = document.querySelector('.carousel');
const cards = Array.from(document.querySelectorAll('.card'));
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
let cardWidth = cards[0].offsetWidth + 20; 


function initCarousel() {
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        carousel.appendChild(clone);
    });
    cardWidth = cards[0].offsetWidth + 20;
    moveCarousel(); 
}

function moveCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    carousel.style.transition = "transform 0.3s linear";
    currentIndex++;
    if (currentIndex >= cards.length) {
        setTimeout(() => {
            carousel.style.transition = "none";
            currentIndex = 1;
            carousel.style.transform = `translateX(5)`;
        }, 500);
    }
}

prevBtn.addEventListener('click', () => {
    currentIndex = Math.max(0, currentIndex - 1);
    moveCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex++;
    moveCarousel();
});

// Autoplay for continuous movement
let autoplayInterval = setInterval(() => {
    moveCarousel();
}, 3000); // Every 3 seconds

// Resize listener to adjust the carousel position on resize
window.addEventListener('resize', () => {
    cardWidth = cards[0].offsetWidth + 20; // Update card width
    moveCarousel();
});

// Initialize the carousel
initCarousel();
