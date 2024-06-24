let randomNumber = parseInt(Math.random()*100 +1)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField').value;
const guessedValues = document.querySelector('.guesses');
const remaningGuess = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const restartGame = document.querySelector('.resultParas');


const p = document.createElement('p');


let previousGuess = [];
let guessNum = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click' , function(e){
        e.preventDefault();
        const guess = parseInt(userInput);
        validateGuess(guess) ;
    })
}





function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter the valid number...");
    }else if(guess < 1 && guess > 100){
        alert("Please enter the number between 1 to 100...");
    }else{
            previousGuess.push(guess);
            if (guessNum === 11) {
                displayGuess(guess);
                displayMessage(`Game Over...The Random Number was ${randomNumber}`);
                endGame();
            }else{
                displayGuess(guess);
                checkGuess(guess);
            }
    }
}


function checkGuess(guess){
    if (guess === randomNumber) {
        displayMessage(`you guessed it right`);
        endGame();
    } else if(guess < randomNumber){
        displayMessage(`your guessed number is toooo low `);
    } else if(guess > randomNumber){
        displayMessage(`your guessed number is toooo High `);
    }
}


function displayGuess(guess){
    userInput.value = "";
    guessedValues.innerHTML += `${guess},`;
    guessNum++;
    remaningGuess.innerHTML = `${11 - guessNum}`;
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}


function endGame(){
    userInput.innerHTML = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id=newGame>Start New Game</h2>`;
    restartGame.appendChild(p);
    playGame = false;
    startNewGame();
}

function startNewGame(){
    
    const newGameButton = document.getElementById('newGame');
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        previousGuess= [];
        guessNum = 1;
        guessedValues.innerHTML = "";
        remaningGuess.innerHTML = `${11 - guessNum}`;
        userInput.removeAttribute('disabled');
        restartGame.removeChild(p);

        playGame = true;
    })
}