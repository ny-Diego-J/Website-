const queryString = window.location.search;
const element = document.querySelector("bg");

const params = new URLSearchParams(queryString);

const evil = params.get("x");
const u = params.get("u");
let z = params.get("ip"); // Changed to let
const plushie = document.getElementById("androidico");
const header = document.querySelector(".heading");
const title = document.querySelector(".header");

async function game() {
  let ip = z || getCookie("userIP");
  if (!ip) {
    ip = await getIPValue();
  }
  window.location.href =
    "../Game/game.html?x=" + (evil || "") + "&ip=" + ip + "&u=2";
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
    z = ip; // Update global z
  } else {
    try {
      const res = await fetch("https://api.ipify.org?format=json");
      const data = await res.json();
      ip = data.ip;
      console.log(u);

      setCookie("userIP", ip, 7);
      console.log("IP neu gespeichert:", ip);
      document.getElementById("ip").textContent = ip;
      z = ip; // Update global z
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

async function getIPValue() {
  let ip = getCookie("userIP");
  if (ip) return ip;

  try {
    const res = await fetch("https://api.ipify.org?format=json");
    const data = await res.json();
    ip = data.ip;
    setCookie("userIP", ip, 7);
    return ip;
  } catch (err) {
    console.error(err);
    return null;
  }
}

if (evil == "1") {
  console.log("Evil mode activated");
  document.getElementById("bg").src = "Bild.png";
}
console.log(u);
getIP();

onscroll = function () {
  if (window.scrollY > 200) {
    plushie.style.top = 15 + "px";
    plushie.style.left = 50 + "%";
    plushie.style.width = 100 + "px";
    plushie.style.transform = "translate(-50%, 0%)";
    plushie.style.transition = "top 0.3s, left 0.3s, width 0.3s";
  } else {
    plushie.style.top = 160 + "px";
    plushie.style.left = 20 + "px";
    plushie.style.width = 300 + "px";
    plushie.style.transition = "top 0.3s, left 0.3s, width 0.3s";
    plushie.style.transform = "translate(0%, 0%)";
  }
};
