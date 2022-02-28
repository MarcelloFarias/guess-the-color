const colorDisplay = document.querySelector(".color-display"),
      btn = document.querySelector(".btn"),
      displayMessage = document.querySelector(".display-message");
let squares = document.querySelectorAll(".square");
let colors = [];

function generateColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let color = `rgb(${r}, ${g}, ${b})`;

  return color;
}

function getRandomColor() {
  for (let i = 0; i < 3; i++) {
    colors.push(generateColor());
  }

  let randomIndex = Math.floor(Math.random() * colors.length);
  let raffledColor = colors[randomIndex];
  colorDisplay.innerHTML = raffledColor;

  getRandomBackgrounds(colors, raffledColor);
}

function getRandomBackgrounds(colors, raffledColor) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];

    squares[i].addEventListener("click", function () {
      let clickedColor = squares[i].style.background;

      if (clickedColor === raffledColor) {
        displayMessage.innerHTML = `Correct 🎉, ${raffledColor}`;
        setTimeout(function () {
          reset();
          init();
        }, 1500);
      } else {
        displayMessage.innerHTML = `Try agin 👊, ${clickedColor}`;
      }
    });
  }
}

function reset() {
  for (let i = 0; i < colors.length; i++) {
    colors.pop();
  }

  displayMessage.innerHTML = "";
}

function init() {
  reset();
  getRandomColor();
  console.log(colors);
}

btn.addEventListener("click", function () {
  reset();
  init();
});

init();