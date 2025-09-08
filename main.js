const plushie = document.getElementById('androidico');
const header = document.querySelector('.heading');
const title = document.querySelector('.header');
const plushieStartSize = 200;
const plushieEndSize = 60;
const scrollThreshold = 10; // ab wann das Plushie in die Mitte wandert

function updatePlushiePosition() {
  const headerRect = header.getBoundingClientRect();
  const titleRect = title.getBoundingClientRect();
  const scrollY = window.scrollY;
  let size;
  if(scrollY < scrollThreshold) {
    size = plushieStartSize;
  } else if(scrollY > headerRect.height) {
    size = plushieEndSize;
  } else {
    size = plushieStartSize - (scrollY / headerRect.height) * (plushieStartSize - plushieEndSize);
    size = Math.max(plushieEndSize, size);
  }
  plushie.style.height = size + 'px';
  plushie.style.transition = 'height 0.3s, left 0.3s, transform 0.3s, top 0.3s';
  plushie.style.position = 'absolute';
  if(scrollY < scrollThreshold) {
    // Start: links neben dem Titel, weiter unten
    plushie.style.left = '0';
    plushie.style.transform = 'none';
    plushie.style.top = (title.offsetTop + title.offsetHeight/2 - size/2 + 30) + 'px'; // 30px extra Abstand nach unten
  } else {
    // Nach Scroll: mittig im Header, bündig mit Titel unten
    plushie.style.left = '50%';
    plushie.style.transform = 'translateX(-50%)';
    plushie.style.top = (title.offsetTop + title.offsetHeight - size) + 'px';
  }
}

window.addEventListener('scroll', updatePlushiePosition);
window.addEventListener('resize', updatePlushiePosition);
window.addEventListener('load', updatePlushiePosition);
document.addEventListener('DOMContentLoaded', updatePlushiePosition);
