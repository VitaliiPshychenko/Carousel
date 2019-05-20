const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slides = document.querySelector('.container')



function addDisable() {
  if (slides.scrollLeft === 0) {
    prev.classList.add('disabled');
  }

  else if (slides.scrollLeft === 910) {
    next.classList.add('disabled');
  }

  else {
    prev.classList.remove('disabled');
    next.classList.remove('disabled');
  }
}

next.onclick = function() {
  slides.scrollLeft += 390;
  addDisable();
}

prev.onclick = function() {
  slides.scrollLeft -= 390;
  addDisable();
}
