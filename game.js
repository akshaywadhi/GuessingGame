let displayResult = function (message) {
  document.querySelector(".result").textContent = message;
};

let attempts = 20;

let number = Math.trunc(Math.random() * 20) + 1;

let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayResult("Please Enter Number!");
  } else if (number === guess) {
    displayResult("Correct Number!🍻");
    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.backgroundColor = "green";
    if (attempts > highScore) {
      highScore = attempts;
      document.querySelector(".score").textContent = highScore;
    }
  } else if (number !== guess) {
    if (attempts > 1) {
      displayResult(guess > number ? "Too High!" : "Too Low!");
      attempts--;
      document.querySelector(".attempts").textContent = attempts;
    } else {
      displayResult("You Lost The Game, Try Again!");
      document.querySelector(".attempts").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  attempts = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  displayResult("Start Guessing...");
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".attempts").textContent = attempts;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
