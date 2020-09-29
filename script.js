// Assignment Code
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase


number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
space = [];

var choices;
var toUpper = function (x) {
  return x.toUpperCase();
}
alpha2 = alpha.map(toUpper);
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  enter = parseInt(prompt('How many characters would you like your password to contain?'))

  if (!enter) {
    alert('This needs a value');
  } else {
    confirmCharacter = confirm('Click OK to confirm including special characters.');
    confirmNumber = confirm('Click OK to confirm including numeric characters.');
    confirmLowercase = confirm('Click OK to confirm including lowercase characters.');
    confirmUppercase = confirm('Click OK to confirm including uppercase characters.');
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


confirmCharacter = confirm('Click OK to confirm including special characters.');