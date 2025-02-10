let scaleFactor = 1;
let currentColor = { r: 255, g: 20, b: 147 };

if(scaleFactor == 1) {
  document.getElementById("sad-cat-image").classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("yes-btn").addEventListener("click", function () {
    // Show the overlay
    const overlay = document.getElementById("response-overlay");
    overlay.classList.remove("hidden");
    overlay.style.display = "flex"; // Set display to flex
  });

  function darkenBodyColor() {
    // Darken the color by reducing the RGB values
    currentColor.r = Math.max(0, currentColor.r - 10);  // Change to -10 to darken faster
    currentColor.g = Math.max(0, currentColor.g - 10);  // Change to -10 to darken faster
    currentColor.b = Math.max(0, currentColor.b - 10);  // Change to -10 to darken faster

    document.body.style.backgroundColor = `rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`;
  }

  document.getElementById("no-btn").addEventListener("click", function () {
    document.getElementById("no-btn").style.position = "absolute";
    document.getElementById("no-btn").style.left = Math.abs((Math.random() * document.body.offsetWidth - 100)).toString() + "px";
    document.getElementById("no-btn").style.top = Math.abs((Math.random() * document.body.offsetHeight - 100)).toString() + "px";

    switch(scaleFactor) {
      case 1:
        document.querySelector(".container h1").innerHTML  = "Will you be my Valentine? <br> You should think twice about it!";
        darkenBodyColor();
        break;
      case 2:
        document.querySelector(".container h1").innerHTML  = "Will you be my Valentine? <br> You sure??";
        darkenBodyColor();
        break;
      case 3:
        document.querySelector(".container h1").innerHTML  = "Will you be my Valentine? <br> Maybe think about it again! 😞";
        darkenBodyColor();
        break;
      case 4:
        document.querySelector(".container h1").innerHTML  = "Will you be my Valentine? <br> You sure you love me...??";
        darkenBodyColor();
        break;
      case 5:
        document.querySelector(".container h1").innerHTML  = "Will you be my Valentine? <br> Really AGAIN!!??!?";
        darkenBodyColor();
        break;
      case 6:
        document.querySelector(".container h1").innerHTML  = "You don't love me!! 😔😭😭";
        document.getElementById("yes-btn").remove();
        document.getElementById("no-btn").remove();
        document.getElementById("cute-cat-image").classList.add("hidden");
        document.getElementById("sad-cat-image").classList.remove("hidden");
        darkenBodyColor();
        break;
    }

    scaleFactor += 1;
    const yesButton = document.getElementById("yes-btn");
    yesButton.style.transform = `scale(${scaleFactor})`;
    yesButton.style.transition = "transform 0.3s ease";
  });

  document.getElementById("close-overlay").addEventListener("click", function () {
    // Hide the overlay
    const overlay = document.getElementById("response-overlay");
    overlay.classList.add("hidden");
    overlay.style.display = "none"; // Reset display to none
  });
});