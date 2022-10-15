"use strict";

// Initial condition for new game
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Display message for every result
const repplyMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Input guess number event listener and check
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value); // Get value input number.

  // When guess is null
  if (!guess) {
    repplyMessage("Number is Empety!");

    // When guess is correct
  } else if (guess === secretNumber) {
    repplyMessage("Yes, is Correct");
    document.querySelector("body").style.backgroundColor = "#308f13";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    // Check last score and new score
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      repplyMessage(guess > secretNumber ? "Is too high" : "Is too low");
      score--;
      document.querySelector(".score").textContent = score;

      // When the chance to guess is over
    } else {
      document.querySelector(".score").textContent = 0;
      repplyMessage("You Lose");
    }
  }
});

// New game event listener
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  repplyMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
