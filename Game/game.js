let cookies = 0;
let aps = 0;
let apc = 1; // Cookies pro Klick
let cursorCost = 10;
let clickCost = 15;
let prs = 1; // Prestige level
let artificialcookies = 0; // Artificial cookies from prestige
prestigeCost = (1000 * prs) / 4 + 1000; // Cost for next prestige level
let prestigelevel = 0; // Prestige level
let possibleprestigebuys = 0; // Possible prestige buys
let savekookies = 0; // Cookies at last prestige
let prssave = 0; // Prestige level at last prestige
let prestigeCostsave = 0; // Prestige cost at last prestige
const queryString = window.location.search;
const element = document.querySelector("bg");
const params = new URLSearchParams(queryString);


const evil = params.get("x");
const u = params.get("u");
const z = params.get("ip");


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




function clickCookie() {
  cookies += apc;
  artificialcookies += apc;
  update();
}

function buyCursor() {
  if (cookies >= cursorCost) {
    cookies -= cursorCost;
    aps++;
    cursorCost = Math.floor(cursorCost * 1.5);
    document.getElementById("cursorCost").innerText = cursorCost;
    update();
  }
}

function buyClickUpgrade() {
  if (cookies >= clickCost) {
    cookies -= clickCost;
    apc++;
    clickCost = Math.floor(clickCost * 1.8);
    document.getElementById("clickCost").innerText = clickCost;
    update();
  }
}

function prestige() {
  if (cookies <= prestigeCost - 1) {
    alert(
      "You need " +
      prestigeCost +
      " cookies to prestige! You currently have " +
      cookies +
      " cookies."
    );
    return;
  } else {
    cookies = 0;
    aps = 0;
    apc = 0;
    cursorCost = 10;
    clickCost = 15;
    artificialcookies = 0;
    for (let i = 1; i <= possibleprestigebuys;) prs = prs + 1;
  }
}

function update() {
  document.getElementById("counter").innerText = "Androids: " + cookies;
  document.getElementById("aps").innerText = aps;
  document.getElementById("apc").innerText = apc;
}

function toggleShop() {
  const shop = document.getElementById("shop");
  const toggleBtn = document.getElementById("shop-toggle");
  if (shop.classList.contains("hidden")) {
    shop.classList.remove("hidden");
    toggleBtn.innerText = "🛒 Shop verbergen";
  } else {
    shop.classList.add("hidden");
    toggleBtn.innerText = "🛒 Shop anzeigen";
  }
}

setInterval(() => {
  document.getElementById("ip").textContent = z;
  console.log("IP aus Cookie:", z);
  cookies = cookies + aps;
  artificialcookies += aps;
  savekookies = artificialcookies;
  prssave = prs;
  prestigeCostsave = prestigeCost;
  for (; prestigeCost <= artificialcookies;) {
    artificialcookies -= prestigeCost;
    possibleprestigebuys++;
    prssave++;
    prestigeCostsave = (1000 * prssave) / 4 + 1000;
  }
  document.getElementById("prestiger").innerText = prestigeCost;
  console.log("Possible prestige buys: " + possibleprestigebuys);
  console.log("Artificial cookies: " + artificialcookies);
  console.log("Prestige cost: " + prestigeCost);
  console.log("Prestige level: " + prs);
  console.log("Cookies: " + cookies);
  update();
  if (prestigelevel >= 10) {
    window.location.href = "../intro/intro.html?x=1";
  }

}, 1000);
