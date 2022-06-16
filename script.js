
var generateBtn = document.querySelector("#generate");
// Naming Variables

var clickGeneratePassword; 
var confirmLowercase;  
var confirmUppercase
var confirmNumeric;
var specialCharacters; 

// Defining Variables

var Lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var Uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


var Numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var Characters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {


// User Input
clickGeneratePassword = prompt("How many characters would you like your password to be?\n \nChoose a length of at least 8 characters but no more then 128 characters!");
console.log("passsword length" + clickGeneratePassword); 
}
 if (!clickGeneratePassword) {
alert("please enter a number value between 8 and 128");

} else if (clickGeneratePassword < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose a value between 8 and 128");
    console.log("password length" + clickGeneratePassword);

}