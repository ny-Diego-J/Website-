const queryString = window.location.search;

// Create a URLSearchParams object
const params = new URLSearchParams(queryString);

// Get specific parameters by name
const evil = params.get("x"); // 1 ore 0

//function onSubmit(token) {}
if (evil == 1) {
  document.getElementById("background").style.color = "red";
}
function ondklick() {
  //document.getElementById("demo-form").submit();
  if (evil == 1) {
    console.log(evil);
    window.location.href = "../main/main.html?u=1&x=1";
  } else {
    window.location.href = "../main/main.html?u=1";
  }
}
