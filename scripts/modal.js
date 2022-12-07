// Get the modal
var modal = document.getElementById("settingsBox");

// Get the button that opens the modal
var btn = document.getElementById("settingsButton");

var clickbox = document.getElementById("click-interceptor");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   console.log(event.target);
//   if (event.target != clickbox && event.target != btn) {
//     modal.style.display = "none";
//   }
// }

// Button actions

// var namesPlayButton = document.getElementById("names-play-button");
// namesPlayButton.onclick = function() {
//   namesPlayButton.style.animationPlayState = "playing";
// }

// var namesPauseButton = document.getElementById("names-pause-button");
// namesPauseButton.onclick = function() {
//   namesPauseButton.style.animationPlayState = "paused";
// }


var namesRestartButton = document.getElementById("names-restart-button");
namesRestartButton.onclick = function() {
      namesDiv = document.getElementById("names");
      const names_clone = namesDiv.cloneNode(true);
      namesDiv.parentNode.replaceChild(names_clone, namesDiv);
}




