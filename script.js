// Function to generate password 
function generatePassword() {
    // asks user how many characters 
    var numChar = prompt("How many characters would you like?");
    // alert user if typed less than 8
    if (numChar < 8) {
        alert("Please more than 8 characters");
    }
    // alert user if typed more than 128
    if (numChar > 128) {
        alert("Please be less than 128 characters");
    }
    // alert user if he did not type number
    if (isNaN(numChar) === true) {
        alert("Please read and follow instructions.");
    }
    // ask user for special character
    var specialChar = confirm("Would you like any special character?");
    // 
    if (specialChar === true) {
      
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
