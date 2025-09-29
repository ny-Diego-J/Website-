let cookies = 0;
let cps = 0;
let cpc = 1; // Cookies pro Klick
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

function clickCookie() {
  cookies += cpc;
  artificialcookies += cpc;
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
    cps = 0;
    cpc = 0;
    cursorCost = 10;
    clickCost = 15;
    artificialcookies = 0;
    for (let i = 1; i <= possibleprestigebuys; ) prs = prs + 1;
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
  cookies += cps;
  artificialcookies += cps;
  savekookies = artificialcookies;
  prssave = prs;
  prestigeCostsave = prestigeCost;
  for (; prestigeCost <= artificialcookies; ) {
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
}, 1000);
if (cookies >= 1000) {
}
