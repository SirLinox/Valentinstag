document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("yes-btn").addEventListener("click", function () {
    // Zeige das Overlay
    const overlay = document.getElementById("response-overlay");
    overlay.classList.remove("hidden");
    overlay.style.display = "flex"; // Setze das Display auf flex
  });

  document.getElementById("no-btn").addEventListener("click", function () {
    alert("Aww, maybe next time 😢");
  });

  document.getElementById("close-overlay").addEventListener("click", function () {
    // Verstecke das Overlay
    const overlay = document.getElementById("response-overlay");
    overlay.classList.add("hidden");
    overlay.style.display = "none"; // Setze das Display zurück auf none
  });
});