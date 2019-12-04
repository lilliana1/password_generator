  //variables declared
  var specialChar = [ "!","#","$","%","&","()","*","+","-",".","/",":",";","<","=",">","?","@"];
  var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
  var numberChar = ["0","1","2","3","4","5","6","7","8","9"];
  //password is empty 
  var password = [];
  //passwordFlat every selection into one array
  var passwordFlat = [];
  //newPassword is the creating of the password depending on the numChar that user wrote
  var newPassword = [];

// Function to generate password 
function generatePassword() {
  // erase newPassword
  newPassword = [];
  // erase password
  password = [];
  // asks user how many characters 
  var numChar = prompt("How many characters would you like?");
  // alert user if typed less than 8
  if (numChar < 8) {
      alert("Please more than 8 characters");
      // if user puts number < 8, print Must be 8 to 128 characters
      return ("Must be 8 to 128 characters");
  }
  // alert user if typed more than 128
  if (numChar > 128) {
      alert("Please be less than 128 characters");
      // if user puts number > 128, print Must be 8 to 128 characters
      return ("Must be 8 to 128 characters");
  }
  // alert user if he did not type number
  if (isNaN(numChar) === true) {
      alert("Please read and follow instructions.");
      // if user does not put a number, print Insert integer number ex. 8,9,10...
      return ("Insert integer number ex. 8,9,10...");
  }
  // ask user for special character
  var specialCharQuestion = confirm("Would you like any special character?");
  // if yes, add special character
  if (specialCharQuestion === true) {
    password.push(specialChar);
  }
  // ask user for lower case
  var lowerCharQuestion = confirm("Would you like any lower case?");
  // if yes, add lower case
  if (lowerCharQuestion === true) {
    password.push(lowerChar);
  }
  // ask user for upper case
  var upperCharQuestion = confirm("Would you like any upper case?");
  // if yes, add upper case
  if (upperCharQuestion === true) {
    password.push(upperChar);
  }
  // ask user for number 
  var numberCharQuestion = confirm("Would you like any numbers?");
  // if yes, add number
  if (numberCharQuestion === true) {
    password.push(numberChar);
  }
  //make into one array
  passwordFlat = password.flat();
  
  console.log(passwordFlat);
  
  //for loop 
  for (var i = 0; i < numChar; i++) {
  // Randomly chooses password and push it to newPassword
  console.log(Math.floor(Math.random() * passwordFlat.length));
  
  newPassword.push(passwordFlat[Math.floor(Math.random() * passwordFlat.length)]);
  }
  //remove copybtn class
  copyBtn.classList.remove("inactive");
  //add copybtn class to change color once the password is generated
  copyBtn.classList.add("active");
  

  //join makes the string w/out space 
  return newPassword.join("");
}

// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copyToClipboard");


// Write password to the #password input
  function writePassword() {
    var passwordFinal = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = passwordFinal;
    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
}

//function that makes the button copy to clipboard
  function copyToClipboard() {
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");
    //alerts what you just copied 
    alert(copyText.value + " copied to clipboard")
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

