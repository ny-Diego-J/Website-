const queryString = window.location.search;

// Create a URLSearchParams object
const params = new URLSearchParams(queryString);

// Get specific parameters by name
const evil = params.get("x"); // 1 ore 0

if (evil == 1) {
  console.log(evil);
}
console.log(evil);
var y = 0;
var o = Math.floor(Math.random() * 10) + 1;
function mainloop1() {
  if (y <= 9) {
    var x = "/gif/tile05.png";
    x = "/gif/tile0" + y + ".png";

    document.getElementById("androidgif").src = x;
    y = y + 1;
  } else {
    if (y < 19) {
      var x = "/gif/tile05.png";
      x = "/gif/tile" + y + ".png";

      document.getElementById("androidgif").src = x;
      y = y + 1;
    } else {
      y = y + 1;
    }
  }
  if (y == 21) {
    if (evil == 1) {
      console.log(evil);
      y = 10;
    } else {
      y = 0;
    }
  }
}
function redirect() {
  if (o == 50) {
    if (evil == 1) {
      console.log(evil);
      o = o + 1;
      window.location.href = "../captcha/captcha.html?x=1";
      console.log(o);
    } else {
      window.location.href = "../captcha/captcha.html";
      console.log(o);
    }
  } else {
    o = o + 1;
    console.log(o);
  }
}
setInterval(mainloop1, 100);
setInterval(redirect, 100);
