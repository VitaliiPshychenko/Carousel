const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slides = document.querySelector('.container')



function changeDisable() {
  if (slides.scrollLeft === 0) {
    prev.classList.add('disabled');
  } else if (slides.scrollLeft === slides.scrollWidth - 390) {
    next.classList.add('disabled');
  } else {
    prev.classList.remove('disabled');
    next.classList.remove('disabled');
  }
}

next.addEventListener('click', () => {
  slides.scrollLeft += 390;
  changeDisable();
})

prev.addEventListener('click', () => {
  slides.scrollLeft -= 390;
  changeDisable();
})
