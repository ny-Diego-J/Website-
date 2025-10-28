const queryString = window.location.search;
const element = document.querySelector("bg");

const params = new URLSearchParams(queryString);

const evil = params.get("x");
const u = params.get("u");
let z = params.get("ip");
const plushie = document.getElementById("androidico");
const header = document.querySelector(".heading");
const title = document.querySelector(".header");

async function game() {
  let ip = z || localStorage.getItem("userIP");
  if (!ip) {
    ip = await getIPValue();
  }
  window.location.href = "../Game/game.html?x=" + (evil || "") + "&u=2";
}

async function getIP() {
  let ip = localStorage.getItem("userIP");
  if (ip) {
    console.log("IP aus localStorage:", ip);
    document.getElementById("ip").textContent = ip;
    z = ip;
  } else {
    try {
      const res = await fetch("https://api.ipify.org?format=json");
      const data = await res.json();
      ip = data.ip;
      console.log(u);

      localStorage.setItem("userIP", ip);
      console.log("IP neu gespeichert:", ip);
      document.getElementById("ip").textContent = ip;
      z = ip;
    } catch (err) {
      document.getElementById("ip").textContent = "Fehler";
      console.error(err);
    }
  }

  if (u == 1) {
    console.log("URL-Variable u=1, IP erhalten:", ip);
    console.log("Keine URL-Variable u=1, weiterleiten...");
    window.location.href = "main.html?x=" + evil + "&u=2";
  }
}

async function getIPValue() {
  let ip = localStorage.getItem("userIP");
  if (ip) return ip;

  try {
    const res = await fetch("https://api.ipify.org?format=json");
    const data = await res.json();
    ip = data.ip;
    localStorage.setItem("userIP", ip);
    return ip;
  } catch (err) {
    console.error(err);
    return null;
  }
}
console.log("Evil parameter:", evil);
if (evil == "1") {
  console.log("Evil mode activated");
  document.getElementById("bg").src = "../img/Evil.png";
}

console.log(u);
getIP();

// Animation beim Scrollen
onscroll = function() {
  if (window.scrollY > 200) {
    plushie.style.top = 15 + "px";
    plushie.style.left = 50 + "%";
    plushie.style.width = 100 + "px";
    plushie.style.transform = "translate(-50%, 0%)";
    plushie.style.transition = "top 0.3s, left 0.3s, width 0.3s";
  } else {
    plushie.style.top = 160 + "px";
    plushie.style.left = 20 + "px";
    plushie.style.width = 40 + "%";
    plushie.style.transition = "top 0.3s, left 0.3s, width 0.3s";
    plushie.style.transform = "translate(0%, 0%)";
  }
};
