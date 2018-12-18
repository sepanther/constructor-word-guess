var Word = require('./Word')
var inquirer = require('inquirer')


//Initialize variables
var wordPool = ['JavaScript', 'Python', 'HTML']
var secretWord = ''
var wordObj;
var guessedLetters = []
var guessesLeft = 8;

// console.log(secretWord)

function startGame() {
    inquirer.prompt([
        {
            name: 'playGame',
            type: 'confirm',
            message: 'Would you like to play a game?'
        }
    ]).then(function(answer) {
        if (answer.playGame === true) {
            console.log("yay let's play")
            chooseWord();
            guessLetter();
        }
    })
};

function chooseWord() {
    secretWord = wordPool[Math.floor(Math.random() * wordPool.length)]
    wordObj = new Word(secretWord)
}

function guessLetter() {
    console.log(secretWord)
    console.log(wordObj.displayWord());
    inquirer.prompt([
        {
            name: 'guess',
            type: 'input',
            message: 'Guess any letter: '
        }
    ]).then(function(answer) {
        if (!guessedLetters.includes(guess)) {
            var guess = answer.guess
            guessedLetters.push(guess)
            console.log("Guessed Letters: " + guessedLetters)
            wordObj.updateGuessed(guess);
            console.log(wordObj.displayWord());
        } else {
            console.log("You already guessed that letter. Guess again.")
            guessLetter();
        }
        

    })
};

startGame();