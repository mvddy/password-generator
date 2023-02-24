var generateBtn = document.querySelector("#generate");
var passwordLength = i=8; i<= 128
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    function  generatePassword () {
    console.log("button clicked")
    }
  
 

    function generatePassword() {
        var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        passwordLength = Number(prompt("How many characters will your password be? 8-128"));
        var charType = prompt("Character type: special, numeric, uppercase, lowercase.");
      var chars = "";
      var charTypeLower = chars.toLowerCase();
      if( charType === "lowercase" ) {
        chars = "abcdefghijklmnopqrstuvwxyz";
      } else if( charTypeLower === "uppercase" ) {
        chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      } else if( charTypeLower === "numeric" ) {
        chars = "0123456789";
      } else if( charTypeLower === "special" ) {
        chars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      } 

      var newPassword = "#password";
      for (var i = 0; i < length; i++) {
      console.log(newPassword);

        newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return newPassword;
    }



generateBtn.addEventListener("click", generatePassword);