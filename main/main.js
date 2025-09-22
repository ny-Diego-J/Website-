const plushie = document.getElementById('androidico');
const header = document.querySelector('.heading');
const title = document.querySelector('.header');

const plushieStartSize = 300; 
const plushieEndSize = 60;    
const plushieStartWidth = 300;
const scrollThreshold = 10;   

let plushieStartTop;
var k= 0;
function introinmain() {
k = k + 10;
getElementById("header").style.left = 0;k}

function updatePlushiePosition() {
  const headerHeight = header.offsetHeight;
  const scrollY = window.scrollY;
}
  
  let size;
  if (scrollY < scrollThreshold) {
    size = plushieStartSize;
  } else if (scrollY > headerHeight) {
    size = plushieEndSize;
  } else {
    const progress = scrollY / headerHeight;
    size = plushieStartSize - progress * (plushieStartSize - plushieEndSize);
    size = Math.max(plushieEndSize, size);
  }

  
  plushie.style.height = size + 'px';
  plushie.style.position = 'absolute';
  plushie.style.objectFit = 'contain';
  plushie.style.transition = 'height 0.3s, left 0.3s, transform 0.3s, top 0.3s, width 0.3s';

  
  if (scrollY < scrollThreshold) {
    
    plushie.style.left = '80px';
    plushie.style.transform = 'none';
    plushie.style.top = plushieStartTop + 'px';
    plushie.style.width = plushieStartWidth + 'px';
  } else {
    
    plushie.style.left = '50%';
    plushie.style.transform = 'translateX(-50%)';
    plushie.style.top = (title.offsetTop + title.offsetHeight - size - 30) + 'px';
    plushie.style.width = ''; 
  }

window.addEventListener('load', () => {
  plushieStartTop = plushie.offsetTop; 
  updatePlushiePosition();
});

setInterval(introinmain,100)
window.addEventListener('scroll', updatePlushiePosition);
window.addEventListener('resize', updatePlushiePosition);
document.addEventListener('DOMContentLoaded', updatePlushiePosition);
