cp = require('child_process')

isLetter = (charCode) ->
  return 64 < charCode < 90

isVowel = (charCode) ->
  return charCode in [65, 69, 73, 79, 85]

isConsonant = (charCode) ->
  return isLetter(charCode) and not isVowel(charCode)

shift = (char) ->
  charCode = char.charCodeAt(0)
  charCode-- if isConsonant(charCode)
  return String.fromCharCode(charCode)

inputWord = process.argv[2].toUpperCase()
shiftyWord = (shift(char) for char in inputWord).join('')

cp.exec "grep -i '^#{ shiftyWord }$' /usr/share/dict/words", (error, result) ->
  if error?
    console.log(inputWord + " is not a shifty word")
  else
    console.log(inputWord + " shifted successfully to " + result.slice(0, result.indexOf('\n')))