let scaleFactor = 1;
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("yes-btn").addEventListener("click", function () {
    // Zeige das Overlay
    const overlay = document.getElementById("response-overlay");
    overlay.classList.remove("hidden");
    overlay.style.display = "flex"; // Setze das Display auf flex
  });

  document.getElementById("no-btn").addEventListener("click", function () {
  document.getElementById("no-btn").style.position = "absolute";
  document.getElementById("no-btn").style.left = Math.abs((Math.random() * document.body.offsetWidth - 100)).toString() + "px";
  document.getElementById("no-btn").style.top = Math.abs((Math.random() * document.body.offsetHeight - 100)).toString() + "px";
    switch(scaleFactor)
    {
      case 1:
        document.querySelector(".container h1").innerHTML  = "Will you be my Valentine? <br> You should think twice aboout it!";
        break;
      case 1.5:
        document.querySelector(".container h1").innerHTML  = "Will you be my Valentine? <br> You sure??";
        break;
      case 2:
          document.querySelector(".container h1").innerHTML  = "Will you be my Valentine? <br> Maybe think about it again! 😞";
          break;
      case 2.5:
        document.querySelector(".container h1").innerHTML  = "Will you be my Valentine? <br> You sure you love me...??";
        break;
      case 3:
          document.querySelector(".container h1").innerHTML  = "Will you be my Valentine? <br> Really AGAIN!!??!?";
        break;
      case 3.5:
        document.querySelector(".container h1").innerHTML  = "You don't love me!! 😔😭😭";
        document.getElementById("yes-btn").remove();
        document.getElementById("cute-cat-image").replaceWith("sad-cat-image");
        break;
    }
  
    scaleFactor += 0.5; 
    const yesButton = document.getElementById("yes-btn");
    yesButton.style.transform = `scale(${scaleFactor})`;
    yesButton.style.transition = "transform 0.3s ease";

    
  });

  document.getElementById("close-overlay").addEventListener("click", function () {
    // Verstecke das Overlay
    const overlay = document.getElementById("response-overlay");
    overlay.classList.add("hidden");
    overlay.style.display = "none"; // Setze das Display zurück auf none
  });
});