let randomNumber = Math.floor(Math.random()*100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessField = document.querySelector(".guessField");
const guessSubmit = document.querySelector(".guessSubmit");

let guessCount = 1;
let resetButton;

function checkGuess() {
    const userGuess = Number(guessField.value);
    if(guessCount === 1){
        guesses.textContent = "Previous Guesses: \n";
    }
    guesses.textContent = `${guesses.textContent} ${userGuess}`;

    if(userGuess === randomNumber){
        lastResult.textContent = "Congratulations! You got it correct!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        setGameOver();
    } else if (guessCount === 10){
        lastResult.textContent = "Game Over! The correct number was " + randomNumber;
        lastResult.style.backgroundColor = "red";
        lowOrHi.textContent = "";
        setGameOver(); // Need to make this
    } else {
        if(userGuess < randomNumber){
            lowOrHi.textContent = "Guess is too low!";
        } else {
            lowOrHi.textContent = "Guess is too high!";
        }
    }

    guessCount++;
    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function resetGame(){
    guessCount = 1;
    const resetResultParas = document.querySelector(".resultParas");
    resetResultParas.textContent = "";

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "white";

    randomNumber = Math.floor(Math.random() * 100) + 1;
}

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Reset Game";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
}

