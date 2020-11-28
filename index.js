// Detecting Button Press

var numberOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
        // we don't use () this in event listener while adding function because if we do it,it will call the function imediatly when we open the page
        // we can write (direct function without its name) instead of function name it is called anonymous function
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        });}

// Detecting Keyboard Press
document.addEventListener("keydown",function(event){ //event triggered the key press
  makeSound(event.key);//key is a property
});//keydown is an event it is written in all small

function makeSound(key)
{  switch (key) {
    case "w"://w is class for mouse click and key for keyboard
      var tom1 = new Audio("sounds/tom-1.mp3"); //audio is object Audio is constructor function
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    default:console.log(buttonInnerHTML);}

}
