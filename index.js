// Detect button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++)  {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // What we want to happen
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);

    buttonanimation(buttonInnerHTML);
  });
}

// Detect keyboard press
document.addEventListener("keydown", function(event) {
  makeSound(event.key);

  buttonanimation(event.key);
});

// Make sound function
var keyIsDown = false;
function makeSound(key){
  if (!keyIsDown) {
    switch (key) {
      case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;

      case "a":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;

      case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;

      case "d":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;

      case "j":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;

      case "k":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;

      case "l":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;

      case "p":
        var goblin = new Audio('sounds/Goblin Ho Ha.wav');
        goblin.play();
        break;

      case "o":
        var legoBrick = new Audio('sounds/LegoBrick.mp3');
        legoBrick.play();
        break;

      case "m":
        var MetalPipe = new Audio('sounds/Metal Pipe.mp3');
        MetalPipe.play();
        break;


      default:
        console.log("Invalid key pressed");
        break;
    }

    keyIsDown = true;

    // Set timeout to allow for a delay between each time the sound is played
    setTimeout(function() {
      keyIsDown = false;
    }, 75);
    //Delay, do NOT go lower than 30 to preserve your ears
  }
}

// Creates ghosting and a look on pressed keys
function buttonanimation(currentkey){

  // This adds ghosting to the icon
  var activebutton = document.querySelector("." + currentkey)

  activebutton.classList.add("pressed")
  
  // Bellow here it removes the ghosting
  // How long it is until the effect is returned back to normal. Number in milliseconds
  setTimeout(function() {
    activebutton.classList.remove("pressed")
  }, 75);

}
