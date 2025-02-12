let scaleFactor = 1;
let currentColor = { r: 255, g: 20, b: 147 };

if (scaleFactor === 1) {
  document.getElementById("sad-cat-image").classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("yes-btn").addEventListener("click", function () {
    const overlay = document.getElementById("response-overlay");
    overlay.classList.remove("hidden");
    overlay.style.display = "flex";

    document.getElementById("yes-btn").remove();
    document.getElementById("no-btn").remove();
    document.querySelector(".container h1").innerHTML = 'No way back now!';

    const gif = document.getElementById("cute-cat-image");
    gif.style.position = "absolute";
    gif.style.left = "64.5%";
    gif.style.top = "50%";
    gif.style.transform = "translate(-50%, -50%)";

    // Alle 3 Sekunden zufällige Positionen für alle Herzen setzen
    setInterval(function () {
      const heartImages = document.querySelectorAll(".heart-image");

      heartImages.forEach(function (img) {
        // Zufällige Positionen innerhalb des Viewports setzen
        const randomTop = Math.random() * (window.innerHeight - 150); // 150 ist die Höhe der Bilder
        const randomLeft = Math.random() * (window.innerWidth - 150); // 150 ist die Breite der Bilder

        img.style.top = `${randomTop}px`;
        img.style.left = `${randomLeft}px`;
      });
    }, 3000); // Alle 3 Sekunden
  });

  async function darkenBodyColor() {
    currentColor.r = Math.max(0, currentColor.r - 10);
    currentColor.g = Math.max(0, currentColor.g - 10);
    currentColor.b = Math.max(0, currentColor.b - 10);
    document.body.style.backgroundColor = `rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`;
  }

  document.getElementById("no-btn").addEventListener("click", async function () {
    const noBtn = document.getElementById("no-btn");
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.abs((Math.random() * document.body.offsetWidth - 100)).toString() + "px";
    noBtn.style.top = Math.abs((Math.random() * document.body.offsetHeight - 100)).toString() + "px";

    switch (scaleFactor) {
      case 1:
        document.querySelector(".container h1").innerHTML =
          "Will you be my Valentine? <br> You should think twice about it!";
        darkenBodyColor();
        break;
      case 2:
        document.querySelector(".container h1").innerHTML =
          "Will you be my Valentine? <br> You sure??";
        darkenBodyColor();
        break;
      case 3:
        document.querySelector(".container h1").innerHTML =
          "Will you be my Valentine? <br> Maybe think about it again! 😞";
        darkenBodyColor();
        break;
      case 4:
        document.querySelector(".container h1").innerHTML =
          "Will you be my Valentine? <br> You sure you love me...??";
        darkenBodyColor();
        break;
      case 5:
        document.querySelector(".container h1").innerHTML =
          "Will you be my Valentine? <br> Really AGAIN!!??!?";
        darkenBodyColor();
        break;
      case 6:
        document.querySelector(".container h1").innerHTML =
          "You don't love me!! 😔😭😭";
        darkenBodyColor();
        document.getElementById("yes-btn").remove();
        document.getElementById("no-btn").remove();
        document.getElementById("sunny-love").remove();
        document.getElementById("potato-love").remove();
        document.getElementById("potato2-love").remove();
        document.getElementById("peace-love.").remove();
        document.getElementById("muscel-love").remove();
        document.getElementById("hitting-love").remove();
        document.getElementById("adventure-love").remove();
        document.getElementById("cute-cat-image").classList.add("hidden");
        document.getElementById("sad-cat-image").classList.remove("hidden");
        
        // Warten für 3 Sekunden
        await new Promise(resolve => setTimeout(resolve, 2500));

        // Hintergrundfarbe auf schwarz ändern
        document.body.style.backgroundColor = "black";
        break;
    }

    scaleFactor += 1;
    const yesButton = document.getElementById("yes-btn");
    // Ab dem zweiten "No"-Klick (scaleFactor >= 2) soll der Yes-Button horizontal zentriert sein.
    if (scaleFactor >= 2) {
      yesButton.style.position = "absolute";
      yesButton.style.left = "50%";
      yesButton.style.top = "55%";
      yesButton.style.transform = `translateX(-50%) scale(${scaleFactor})`;

      const gif = document.getElementById("cute-cat-image"); 
      gif.style.position = "absolute";
      gif.style.left = "58.7%";
      gif.style.top = "42.3%";
      gif.style.transform = "translateX(-50%)";
    } else {
      yesButton.style.transform = `scale(${scaleFactor})`;
    }
    yesButton.style.transition = "transform 0.3s ease";
  });

  document.getElementById("close-overlay").addEventListener("click", function () {
    const overlay = document.getElementById("response-overlay");
    overlay.classList.add("hidden");
    overlay.style.display = "none";
  });

  // Alle Bilder auswählen
  const heartImages = document.querySelectorAll(".heart-image");

  heartImages.forEach(function (img) {
    // Zufällige Positionen innerhalb des Viewports setzen
    const randomTop = Math.random() * (window.innerHeight - 150); // 150 ist die Höhe der Bilder
    const randomLeft = Math.random() * (window.innerWidth - 150); // 150 ist die Breite der Bilder

    img.style.top = `${randomTop}px`;
    img.style.left = `${randomLeft}px`;
  });
});
