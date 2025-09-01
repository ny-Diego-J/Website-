const img = document.getElementById("androidico");
const header = document.querySelector(".topnav");

function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
function lerp(a, b, t) { return a + (b - a) * t; }

function computeTargets() {
  const headerH = header ? header.offsetHeight : 80;

  // Startposition (links unter dem Header)
  const start = { top: headerH + 80, left: 20, scale: 1 };

  // Bildgröße auslesen
  const rect = img.getBoundingClientRect();
  const imgW = rect.width || 240;
  const imgH = rect.height || 240;

  // Zielposition (zentriert im Header)
  const endScale = 0.4;
  const end = {
    top: headerH / 2 - (imgH * endScale) / 2 + 4,
    left: (window.innerWidth / 2) - (imgW * endScale) / 2,
    scale: endScale
  };

  return { start, end };
}

let targets = computeTargets();

function update() {
  const scrollStart = 0;
  const scrollEnd = 300; // nach 300px ist das Bild im Header
  let t = (window.scrollY - scrollStart) / (scrollEnd - scrollStart);
  t = clamp(t, 0, 1);

  const { start, end } = targets;
  const top = lerp(start.top, end.top, t);
  const left = lerp(start.left, end.left, t);
  const scale = lerp(start.scale, end.scale, t);

  img.style.top = top + "px";
  img.style.left = left + "px";
  img.style.transform = `scale(${scale})`;
}

window.addEventListener("resize", () => {
  targets = computeTargets();
  update();
});

window.addEventListener("scroll", update, { passive: true });
window.addEventListener("load", () => {
  targets = computeTargets();
  update();
});
