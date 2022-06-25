// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  // Prompt to choose lengths of characters
  var digits = prompt ("Please choose the lengths of your password between 8 to 128 characters");

  // Characters need to be in between of 8 - 128
  if (digits < 8 || digits > 128) {
      alert ("Please choose between 8 to 128 characters" )
      writePassword ()

  } else {
  
    // User to select password character types
  var upperConf = confirm ("Please click OK to include uppercases in your password");
  var lowerConf = confirm ("Please click OK to include lowercases in your password"); 
  var numericConf = confirm ("Please click OK to include numeric in your password");
  var specialConf = confirm ("Please click OK to include special characters in your password");


  function generatePassword(){
    // Store assword character types in variables
  var choice = "";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var numeric = "01234567890123456789";
  var special = "!#$%&'()*+-/:;<=>?@[\]^_`{|}~";


  var passwordLength = digits;
  var pwd = "";
    // Various scenarios to meet user's selections
  for (var i=0; i<passwordLength; i++){
    if (upperConf) {
      if (lowerConf == false && numericConf == false && specialConf == false) {
        choice = upper;
        var calc = Math.floor (Math.random()*choice.length);
        pwd += choice.substring(calc,calc+1);
      
      } else if (lowerConf) {
        if (numericConf == false && specialConf == false) {
          choice = upper.concat(lower);
          var calc = Math.floor (Math.random()*choice.length);
          pwd += choice.substring(calc,calc+1);

        } else if (numericConf && specialConf == false) {
          choice = upper.concat(lower).concat(numeric);
          var calc = Math.floor (Math.random()*choice.length);
          pwd += choice.substring(calc,calc+1);

        } else if (numericConf == false && specialConf) {
          choice = upper.concat(lower).concat(special);
          var calc = Math.floor (Math.random()*choice.length);
          pwd += choice.substring(calc,calc+1);

        } else if (numericConf && specialConf) {
          choice = upper.concat(lower).concat(numeric).concat(special);
          var calc = Math.floor (Math.random()*choice.length);
          pwd += choice.substring(calc,calc+1);

        }

      } else if (numericConf) {
        if (lowerConf == false && specialConf == false) {
          choice = upper.concat(numeric);
          var calc = Math.floor (Math.random()*choice.length);
          pwd += choice.substring(calc,calc+1);

        } else if (lowerConf == false && specialConf) {
          choice = upper.concat(numeric).concat(special);
          var calc = Math.floor (Math.random()*choice.length);
          pwd += choice.substring(calc,calc+1);
        }

      } else if (specialConf && lowerConf == false && numericConf == false) {
          choice = upper.concat(special);
          var calc = Math.floor (Math.random()*choice.length);
          pwd += choice.substring(calc,calc+1);

      }}
    
    else if (lowerConf && upperConf == false) {
      if (numericConf == false && specialConf == false) {
        choice = lower;
        var calc = Math.floor (Math.random()*choice.length);
        pwd += choice.substring(calc,calc+1);

      } else if (numericConf) {
        if (specialConf == false) {
          choice = lower.concat(numeric);
          var calc = Math.floor (Math.random()*choice.length);
          pwd += choice.substring(calc,calc+1);

        } else if (specialConf) {
          choice = lower.concat(numeric).concat(special);
          var calc = Math.floor (Math.random()*choice.length);
          pwd += choice.substring(calc,calc+1);

        }
      
      } else if (numericConf == false && specialConf) {
        choice = lower.concat(special);
        var calc = Math.floor (Math.random()*choice.length);
        pwd += choice.substring(calc,calc+1);

      }}

    else if (numericConf && upperConf == false && lowerConf == false) {
      if (specialConf == false) {
        choice = numeric;
        var calc = Math.floor (Math.random()*choice.length);
        pwd += choice.substring(calc,calc+1);

      } else if (specialConf) {
        choice = numeric.concat(special);
        var calc = Math.floor (Math.random()*choice.length);
        pwd += choice.substring(calc,calc+1);

      }}

    else if (specialConf && upperConf == false && lowerConf == false && numericConf == false) {
      choice = special;
      var calc = Math.floor (Math.random()*choice.length);
      pwd += choice.substring(calc,calc+1);

    }

  }

  return pwd

};

  // Write password to the #password input

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // At least one password character type needs to be chosen

  if (upperConf == false && lowerConf == false && numericConf == false && specialConf == false) {
    alert ("Please select at lease one character type!");
    writePassword ()
  }


  }}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

