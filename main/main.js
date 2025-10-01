const queryString = window.location.search;
const element = document.querySelector("bg");


const params = new URLSearchParams(queryString);

const evil = params.get("x");
const u = params.get("u");
const z = params.get("ip");
const plushie = document.getElementById("androidico");
const header = document.querySelector(".heading");
const title = document.querySelector(".header");
function game() {
  window.location.href = "../Game/game.html?x=" + evil + "&ip=" + z + "&u=2";
}

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

async function getIP() {
  let ip = getCookie("userIP");
  if (ip) {
    console.log("IP aus Cookie:", ip);
    document.getElementById("ip").textContent = ip;
  } else {
    try {
      const res = await fetch("https://api.ipify.org?format=json");
      const data = await res.json();
      ip = data.ip;
      console.log(u);


      setCookie("userIP", ip, 7);
      console.log("IP neu gespeichert:", ip);
      document.getElementById("ip").textContent = ip;

    } catch (err) {
      document.getElementById("ip").textContent = "Fehler";
      console.error(err);
    }
  }
  if (u == 1) {
    console.log("URL-Variable u=1, IP erhalten:", ip);
    console.log("Keine URL-Variable u=1, weiterleiten...");
    window.location.href = "main.html?x=" + evil + "&ip=" + ip + "&u=2";
  }
}
if (evil == "1") {
  console.log("Evil mode activated");
  document.getElementById("bg").src = "android.png";
}
console.log(u);
getIP();

const plushieStartSize = 300;
const plushieEndSize = 60;
const plushieStartWidth = 300;
const scrollThreshold = 10;

let plushieStartTop;
var k = 0;
function introinmain() {
  k = k + 10;
  getElementById("header").style.left = 0;
  k;
}
const headerHeight = header.offsetHeight;
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

plushie.style.height = size + "px";
plushie.style.position = "absolute";
plushie.style.objectFit = "contain";
plushie.style.transition =
  "height 0.3s, left 0.3s, transform 0.3s, top 0.3s, width 0.3s";

if (scrollY < scrollThreshold) {
  plushie.style.left = "80px";
  plushie.style.transform = "none";
  plushie.style.top = plushieStartTop + "px";
  plushie.style.width = plushieStartWidth + "px";
} else {
  plushie.style.left = "50%";
  plushie.style.transform = "translateX(-50%)";
  plushie.style.top = title.offsetTop + title.offsetHeight - size - 30 + "px";
  plushie.style.width = "";
}

window.addEventListener("load", () => {
  plushieStartTop = plushie.offsetTop;
  updatePlushiePosition();
});
window.addEventListener("scroll", updatePlushiePosition);
window.addEventListener("resize", updatePlushiePosition);
document.addEventListener("DOMContentLoaded", updatePlushiePosition);