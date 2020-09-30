// Assignment Code
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;


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

generateBtn.addEventListener("click", function () {
  ps = writePassword();
  document.getElementById("password").placeholder = ps;
});

// Write password to the #password input
function writePassword() {
  enter = parseInt(prompt('How many characters would you like your password to contain?'));

  if (!enter) {
    alert('This needs a value');
  } else {
    confirmCharacter = confirm('Click OK to confirm including special characters.');
    confirmNumber = confirm('Click OK to confirm including numeric characters.');
    confirmLowercase = confirm('Click OK to confirm including lowercase characters.');
    confirmUppercase = confirm('Click OK to confirm including uppercase characters.');
  };

  if (!confirmCharacter && !confirmNumber && !confirmLowercase && !confirmUppercase) {
    choices = alert('You must choose a criteria!');
  } else if (confirmCharacter && confirmNumber && confirmLowercase && confirmUppercase) {
    choices = character.concat(number, alpha, alpha2);
  } else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = character.concat(number, alpha2);
  } else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number, alpha);
  } else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = character.concat(alpha, alpha2);
  } else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(alpha, alpha2);
  } else if (confirmCharacter && confirmNumber) {
    choices = character.concat(number);
  } else if (confirmCharacter && confirmLowercase) {
    choices = character.concat(alpha);
  } else if (confirmCharacter && confirmUppercase) {
    choices = character.concat(alpha2);
  } else if (confirmLowercase && confirmNumber) {
    choices = alpha.concat(number);
  } else if (confirmLowercase && confirmUppercase) {
    choices = alpha.concat(alpha2);
  } else if (confirmNumber && confirmUppercase) {
    choices = number.concat(alpha2);
  } else if (confirmCharacter) {
    choices = character;
  } else if (confirmNumber) {
    choices = number;
  } else if (confirmLowercase) {
    choices = alpha;
  } else if (confirmUppercase) {
    choices = space.concat(alpha2);
  };

  // var password = [];
  var password = generatePassword();

  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }

  var ps = password.join("");
  UserInput(ps);
  return ps;
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);