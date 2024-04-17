// JavaScript pentru animații și alte funcționalități


// Obținem toate imaginile din slideshow
const slides = document.querySelectorAll('.slide');

// Inițializăm indexul slide-ului curent
let currentSlide = 0;

// Setăm intervalul de timp între schimbările de imagini (în milisecunde)
const intervalTime = 5000; // 5 secunde

// Funcția pentru a trece la următoarea imagine din slideshow
const nextSlide = () => {
    // Ascundem slide-ul curent
    slides[currentSlide].style.display = 'none';
    // Trecem la următorul slide
    currentSlide = (currentSlide + 1) % slides.length;
    // Afișăm următorul slide
    slides[currentSlide].style.display = 'block';
};

// Pornim slideshow-ul
const startSlideshow = () => {
    // Setăm intervalul pentru a apela funcția nextSlide la fiecare intervalTime milisecunde
    setInterval(nextSlide, intervalTime);
};

// Pornim slideshow-ul când se încarcă complet pagina
window.addEventListener('load', startSlideshow);

document.getElementById('prevBtn').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'block';
});

window.onscroll = function() {scrollFunction()};


