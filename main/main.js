const plushie = document.getElementById('androidico');
const header = document.querySelector('.heading');
const title = document.querySelector('.header');
const plushieStartSize = 300; // Startgröße um 100px erhöht
const plushieEndSize = 60;
const plushieStartWidth = 300; // Feste Startbreite
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
  plushie.style.transition = 'height 0.3s, left 0.3s, transform 0.3s, top 0.3s, width 0.3s';
  plushie.style.position = 'absolute';
  plushie.style.objectFit = 'contain';
  if(scrollY < scrollThreshold) {
    // Start: weiter rechts und noch weiter unten, feste Breite
    plushie.style.left = '80px';
    plushie.style.transform = 'none';
    plushie.style.top = (title.offsetTop + title.offsetHeight/2 - size/2 + 220) + 'px'; // 220px extra Abstand nach unten
    plushie.style.width = plushieStartWidth + 'px';
  } else {
    // Nach Scroll: mittig im Header, bündig mit Titel unten, Breite automatisch
    plushie.style.left = '50%';
    plushie.style.transform = 'translateX(-50%)';
    plushie.style.top = (title.offsetTop + title.offsetHeight - size - 40) + 'px'; // Endpunkt 40px höher
    plushie.style.width = '';
  }
}

window.addEventListener('scroll', updatePlushiePosition);
window.addEventListener('resize', updatePlushiePosition);
window.addEventListener('load', updatePlushiePosition);
document.addEventListener('DOMContentLoaded', updatePlushiePosition);
