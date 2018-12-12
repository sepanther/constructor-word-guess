var Letter = require('./Letter')

var Word = function(word) {
    this.letterArr = []
    for (i = 0; i < word.length; i++) {
        var newLetter = new Letter(word[i], false)
        this.letterArr.push(newLetter)
    }
    this.displayWord = function() {
        wordString = ""
        for (i = 0; i < letterArr.length; i++) {
            wordString.append(letterArr[i].display())
        }
    }
    
    

}