var hangman;

function Hangman() {
  this.words = ["perro", "gato", "conejo", "zorro", "caballo", "vaca", "camello"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype._getWord = function() {
  return this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
};

Hangman.prototype._checkIfLetter = function(keyCode) {
  return keyCode >= 65 && keyCode <= 90;
};

Hangman.prototype._checkClickedLetters = function(key) {
  return !this.letters.includes(key);
};

Hangman.prototype._addCorrectLetter = function(i) {
  return this.guessedLetter += this.secretWord[i].toUpperCase();
};

Hangman.prototype._addWrongLetter = function(letter) {
  return this.errorsLeft--;

};

Hangman.prototype._checkGameOver = function() {
  if (this.errorsLeft === 0) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype._checkWinner = function() {
  return this.secretWord.length === this.guessedLetter.length;
};

var word, canvas;
document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
  word = hangman._getWord();
  canvas = new HangmanCanvas(word);
  canvas._createBoard();
  canvas._drawLines();

};



document.onkeydown = function(e) {
  if (hangman._checkIfLetter(e.keyCode)) {
    var letter = String.fromCharCode(e.keyCode);
    if (hangman._checkClickedLetters(letter)) {
      if (hangman.secretWord.includes(letter)) {
  
};
