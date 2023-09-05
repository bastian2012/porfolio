$(document).ready(function () {
    const $carousel = $('.carousel');
    const slideWidth = $('.carousel-slide').width();
    const totalSlides = $('.carousel-slide').length;
    let currentIndex = 0;

    function nextSlide() {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }

    function updateCarousel() {
        const translateX = -currentIndex * slideWidth;
        $carousel.css('transform', `translateX(${translateX}px)`);
    }

    // Démarrez le carrousel automatique
    const interval = setInterval(nextSlide, 3000); // Change d'image toutes les 3 secondes

    // Arrêtez le carrousel automatique lorsque l'utilisateur survole le carrousel
    $carousel.hover(
        function () {
            clearInterval(interval);
        },
        function () {
            interval = setInterval(nextSlide, 3000);
        }
    );
});
