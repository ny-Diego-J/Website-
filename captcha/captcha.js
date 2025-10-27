function checkCaptcha() {
  const response = grecaptcha.getResponse();
  if (!response) {
    alert("Please confirmm the Captcha!");
    return;
  }

  window.location.href = "/main/main.html";
}
