function checkCaptcha() {
  const response = grecaptcha.getResponse();
  if (!response) {
    alert("Bitte bestätige das Captcha!");
    return;
  }

  window.location.href = "/main/main.html";
}
