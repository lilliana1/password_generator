//function to generate password 
function generatePassword() {
    var numChar = prompt("How many characters would you like?")
    if (numChar < 8) {
        alert("Please more than 8 characters");
    }
    if (isNaN(numChar) === true) {
        alert("Please read and follow instructions.");
    }
}
// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
