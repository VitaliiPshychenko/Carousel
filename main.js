const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slides = document.querySelector('.container')

next.onclick = function() {
  slides.scrollLeft += 390;
}

prev.onclick = function() {
  slides.scrollLeft -= 390;
}