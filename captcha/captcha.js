 function checkCaptcha() {
      const response = grecaptcha.getResponse();
      if (!response) {
        alert("Bitte bestätige das Captcha!");
        return;
      }

      // Wenn Captcha erfolgreich:
      window.location.href = "intro/intro.html";
    }