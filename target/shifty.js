(function() {
  var char, cp, inputWord, isConsonant, isLetter, isVowel, shift, shiftyWord;

  cp = require('child_process');

  isLetter = function(charCode) {
    return (64 < charCode && charCode < 91);
  };

  isVowel = function(charCode) {
    return charCode === 65 || charCode === 69 || charCode === 73 || charCode === 79 || charCode === 85;
  };

  isConsonant = function(charCode) {
    return isLetter(charCode) && !isVowel(charCode);
  };

  shift = function(char) {
    var charCode;

    charCode = char.charCodeAt(0);
    if (charCode === 90) {
      charCode = 65;
    } else {
      if (isConsonant(charCode)) {
        charCode++;
      }
    }
    return String.fromCharCode(charCode);
  };

  inputWord = process.argv[2].toUpperCase();

  shiftyWord = ((function() {
    var _i, _len, _results;

    _results = [];
    for (_i = 0, _len = inputWord.length; _i < _len; _i++) {
      char = inputWord[_i];
      _results.push(shift(char));
    }
    return _results;
  })()).join('');

  console.log("Shifty word: " + shiftyWord);

  cp.exec("grep -i '^" + shiftyWord + "$' /usr/share/dict/words", function(error, result) {
    if (error != null) {
      return console.log(inputWord + " is not a shifty word");
    } else {
      return console.log(inputWord + " shifted successfully to " + result.slice(0, result.indexOf('\n')));
    }
  });

}).call(this);
