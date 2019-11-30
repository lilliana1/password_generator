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
    // if yes, add special character
    if (specialChar === true) {
    var specialChar = [ "!","#","$","%","&","()","*","+","-",".","/",":",";","<","=",">","?","@"];
    }
    // ask user for lower case
    var lowerChar = confirm("Would you like any lower case?");
    // if yes, add lower case
    if (lowerChar === true) {
      var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    }
    // ask user for upper case
    var upperChar = confirm("Would you like any upper case?");
    // if yes, add upper case
    if (upperChar === true) {
      var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
    }
    // ask user for number 
    var numberChar = confirm("Would you like any numbers?");
    // if yes, add number
    if (numberChar === true) {
      var numberChar = [0,1,2,3,4,5,6,7,8,9];
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
