// script.js
let currentIndex = 0;
const cards = document.querySelectorAll('.carousel-container .card');
const totalCards = cards.length;

// Fonction pour déplacer le carrousel
function moveSlide(direction) {
    currentIndex += direction;

    // Si l'index est supérieur au nombre de cartes, on revient à la première carte
    if (currentIndex >= totalCards) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalCards - 1;
    }

    // Calcule la translation
    const offset = -currentIndex * (cards[0].offsetWidth + 10); // 10 est la marge entre les cartes
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}px)`;
}

