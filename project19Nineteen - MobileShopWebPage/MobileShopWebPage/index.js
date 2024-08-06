  document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.gallery-slider');
    const cardsContainer = document.querySelector('.gallery-container');
    const cardWidth = document.querySelector('.cards').offsetWidth;
    let currentIndex = 0;

    function updateSlider() {
      slider.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
    }

    function nextSlide() {
      currentIndex = Math.min(currentIndex + 1, Math.floor(slider.children.length / 4) - 1);
      updateSlider();
    }

    function prevSlide() {
      currentIndex = Math.max(currentIndex - 1, 0);
      updateSlider();
    }

    document.querySelector('.next-btn').addEventListener('click', nextSlide);
    document.querySelector('.prev-btn').addEventListener('click', prevSlide);
  });
