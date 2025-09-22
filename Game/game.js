let cookies = 0;
let cps = 0;
let cpc = 1; // Cookies pro Klick
let cursorCost = 10;
let clickCost = 15;

function clickCookie() {
  cookies += cpc;
  update();
}

function buyCursor() {
  if (cookies >= cursorCost) {
    cookies -= cursorCost;
    cps++;
    cursorCost = Math.floor(cursorCost * 1.5);
    document.getElementById("cursorCost").innerText = cursorCost;
    update();
  }
}

function buyClickUpgrade() {
  if (cookies >= clickCost) {
    cookies -= clickCost;
    cpc++;
    clickCost = Math.floor(clickCost * 1.8);
    document.getElementById("clickCost").innerText = clickCost;
    update();
  }
}

function update() {
  document.getElementById("counter").innerText = "Cookies: " + cookies;
  document.getElementById("cps").innerText = cps;
  document.getElementById("cpc").innerText = cpc;
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
  cookies += cps;
  update();
}, 1000);
if (cookies >= 1000) {
    
}