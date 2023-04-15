let pictureList = [
  "images/warriors.png",
  "images/warriors2.png",
  "images/64Two.png",
  "images/deluxe.png",
  "images/royale.png",
  "images/76.png", ];

function changeImage() {
  let val = parseInt(document.getElementById("game").value);
  document.getElementById("imageSelect").src = pictureList[val];
}

let game = document.getElementById("game");
  
game.addEventListener("click", changeImage);