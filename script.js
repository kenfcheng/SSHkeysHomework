// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password Length and acceptable values

const values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefhijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

// Generating Password Prompts:
function generatePassword() {
  let passwordLength = prompt("Enter Number of Characters for Password");

  const special = confirm("Do you want special characters?");

  const numbers = confirm("Would you like numbers in password?");

  const upperCase = confirm("Do you want upper cases?");

  const lowerCase = confirm("Do you want lower cases?");
}

// Minimums
const minimumCount = 0;

const minimumSpecial = "";
const minimumNumbers = "";
const minimumUpperCase = "";
const minimumLowerCase = "";

const functionArray = {
  getNumbers: function() {
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
  }
}
