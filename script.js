const carousel = document.querySelector('.album');
const images = document.querySelectorAll('.album img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let index = 0;

function showImage(idx) {
  if (idx < 0) index = images.length - 1;
  else if (idx >= images.length) index = 0;
  else index = idx;

  const offset = -index * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
  showImage(index - 1);
});

nextBtn.addEventListener('click', () => {
  showImage(index + 1);
});

showImage(index);
