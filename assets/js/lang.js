document.getElementById("languageSelector").addEventListener("change", function() {
  var selectedLanguage = this.value;

  if (selectedLanguage === "en") {
    window.location.href = "english.html"; // Замените "english.html" на путь к вашему файлу на английском языке
  } else if (selectedLanguage === "ru") {
    window.location.href = "russian.html"; // Замените "russian.html" на путь к вашему файлу на русском языке
  }
});