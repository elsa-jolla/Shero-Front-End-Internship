const row = document.querySelector('.product-row');
  const items = document.querySelectorAll('.product-col1');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  let index = 0;
  const itemsPerSlide = 2;
  const totalSlides = Math.ceil(items.length / itemsPerSlide);

  function updateCarousel() {
    const shiftPercent = index * (100 / itemsPerSlide);
    row.style.transform = `translateX(-${shiftPercent}%)`;
  }

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % totalSlides;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateCarousel();
  });


document.getElementById('menu-toggle').addEventListener('click', function () {
  document.querySelector('.nav-menu').classList.toggle('active');
});

