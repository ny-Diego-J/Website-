const img = document.getElementById("androidico");
const startY = 200;   
const endY = 20;      
const startX = 20;    
const endX = window.innerWidth / 2; 
const startScale = 1; 
const endScale = 0.4; 
const scrollStart = 0;   
const scrollEnd = 300;   

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;


  let t = (scrollY - scrollStart) / (scrollEnd - scrollStart);
  t = Math.min(Math.max(t, 0), 1);

 
  const top = startY + (endY - startY) * t;
  const left = startX + (endX - startX) * t;
  const scale = startScale + (endScale - startScale) * t;

  img.style.top = top + "px";
  img.style.left = left + "px";
  img.style.transform = `translateX(-50%) scale(${scale})`;
});
