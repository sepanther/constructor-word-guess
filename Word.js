var Letter = require('./Letter')

var Word = function(word) {
    this.letterArr = []
    for (i = 0; i < word.length; i++) {
        var newLetter = new Letter(word[i], false)
        this.letterArr.push(newLetter)
    }
    this.displayWord = function() {
        wordString = ""
        for (i = 0; i < this.letterArr.length; i++) {
            wordString += this.letterArr[i].toString()
        }
        return wordString
    }
    this.updateGuessed = function(char) {
        for (i = 0; i < this.letterArr.length; i++) {
            this.letterArr[i].isSame(char);
        }
    }
    
    

}

module.exports = Word

// var newWord = new Word('MESSI')
// console.log(newWord.displayWord());
// newWord.updateGuessed('m')
// console.log(newWord)
// console.log(newWord.displayWord());
// newWord.updateGuessed('s')
// console.log(newWord.displayWord());