var Letter = function(letter, guessed) {
    this.letter = letter;
    this.guessed = guessed;
    this.toString = function() {
        if (this.guessed === true) {
            return this.letter
        } else {
            return "_"
        }
    }
    this.isSame = function(guess) {
        // guess = guess.toUpperCase();
        if (this.letter.toUpperCase() === guess.toUpperCase()) {
            this.guessed = true;
        }
    }
}


module.exports = Letter