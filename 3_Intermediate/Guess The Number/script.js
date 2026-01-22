
// Generating a random number between 1 and 100
function generateRandom() { return parseInt((Math.random() * 100) + 1); }

let randomNumber = generateRandom()

// Guessing the number Started
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowORhi = document.querySelector('.low-OR-high')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuesses = 1

let playGame = true // Check for game continuation

if(playGame) {
    submit.addEventListener('click', (e) => {

        // Stops the default behaviour of form
        e.preventDefault();
        const guess = parseInt(userInput.value);

        console.log(guess);
        validateGuess(guess);

    });
}


function validateGuess(guess) {
    // to check if user giving valid number or not

    if (guess === '' || isNaN(guess)) {
        alert("Please! enter a Valid Number!!!");
    } else if(guess > 100) {
        alert("Please! enter number less than or equal to '100'.");
    } else if(guess < 1) {
        alert("Please! enter number greater than or equal '1'.");
    } else {
        prevGuess.push(guess);
        if (numGuesses === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. Random Number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    // to check if value entered is high, low or matched

    if (guess === randomNumber) {
        displayMessage(`Hooray!! You guessed the Random Number ${randomNumber} in ${numGuesses - 1} guesses.`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is TOOO Low!!`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is TOOO High!!`);
    }
}

function displayGuess(guess) {
    // to display guesses + cleanup guesses

    userInput.value = ""
    guessSlot.innerHTML += `${guess}  `;

    numGuesses++;
    remaining.innerHTML = `${11 - numGuesses}`;
}

function displayMessage(message) {
    // to display message using DOM

    lowORhi.innerHTML = `${message}`;
}

function endGame() {
    // end game

    userInput.value = ''                        // Input Clean
    userInput.setAttribute('disabled', '')      // Input Disabled
    submit.setAttribute('disabled', '')         // Submit Disabled

    p.classList.add('button')
    p.innerHTML = `<h2 id="new-game">Start New Game</h2>`
    p.style.cursor = "pointer";
    startOver.appendChild(p)

    playGame = false // flag false to end game
    newGame()
}

function newGame() {
    // new game

    const startBtn = document.getElementById("new-game")

    startBtn.addEventListener('click', () => {

        // Generate new Random Number
        randomNumber = generateRandom()

        // Previous Guesses Flushed
        prevGuess = []
        guessSlot.innerHTML = ''
        
        // Remaining Guesses Flushed
        numGuesses = 1
        remaining.innerHTML = `10`
        
        // Message Flushed
        lowORhi.innerHTML = ''

        // Remove Start Button
        startOver.removeChild(p)

        userInput.removeAttribute('disabled', '')   // Input Enable
        submit.removeAttribute('disabled', '')      // Submit Enable

        playGame = true // flag true to start new game
    });
}
