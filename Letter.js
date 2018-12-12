var Letter = function(letter, guessed) {
    this.letter = letter;
    this.guessed = guessed;
    this.display = function() {
        if (this.guessed === true) {
            return this.letter
        } else {
            return "_"
        }
    }
    this.isSame = function(guess) {
        guess = guess.toUpperCase();
        if (letter === guess) {
            console.log(letter + " is " + guess)
            this.guessed = true;
        }
    }
}


module.exports = Letter