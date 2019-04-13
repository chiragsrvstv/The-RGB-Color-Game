var colors = generateColors(6);
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("button");
var easyButton = document.querySelector(".easy-button");
var hardButton = document.querySelector(".hard-button");
var hardSquares = document.querySelectorAll(".hard");
var displayMessage = document.querySelector(".message");

// choosing a random color.
var pickedColor = pickColor();

// displaying the chosed/picked color on top.
var colorDisplay = document.getElementById("color-display");
colorDisplay.textContent = pickedColor;

// defining a function for logic of the game.
function playLogic(){
for(var i=0; i<squares.length; i++){
  //adding initial colors
  squares[i].style.background = colors[i];

  //adding click events
  squares[i].addEventListener("click", function(){
    // grabs the color of the picked square
    var clickedColor = this.style.background;
    if(clickedColor === pickedColor){
      // when right color is chosed, all the blocks display same color
      // and the display message gets changed to 'correct'.
      displayMessage.textContent = "That's correct";
      h1.style.background = pickedColor;
      resetButton.textContent = "Play Again ?";
      for(var i=0; i<squares.length; i++){
        squares[i].style.background = pickedColor;
      }
    }
    else{
      // if the color isn't right the block disappears.
    this.style.background = "#232323";
    displayMessage.textContent = "Try Again";
  }

  });
}
}


function generateColors(number){
  var arr = [];
  for(var i=0; i<number; i++){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  //pick red from 0-255, green from
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  // "rgb[r + g + b]"
  return "rgb(" + r +", " + g + ", "  + b +")";
}

function pickColor(){
  // Math.random is used to generate random decimal nos, Math.floor makes them whole number
  var randomColor = colors[Math.floor(Math.random()*colors.length)];
  return randomColor;
}

playLogic();

resetButton.addEventListener("click", function(){
  colors = generateColors(6);
  pickedColor = pickColor();
  h1.style.background = "#232323";
  displayMessage.textContent = " ";
  resetButton.textContent = "New Colors";
  colorDisplay.textContent = pickedColor;
  playLogic();
});

easyButton.addEventListener("click", function(){
  colors = generateColors(3);
  pickedColor = pickColor();
  squares = document.querySelectorAll(".easy");
  hardSquares.style.background = "#232323";

  colorDisplay.textContent = pickedColor;
  playLogic();
});
