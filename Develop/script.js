// Assignment code here
var attempts = 5;
function promptConfirm() {
   var promptLength = prompt("Enter the length of the desired password", "0");

        if (promptLength >= 8 && promptLength < 128) {
          alert("Great! Moving onto the next required criteria.");
         }
         else {
           alert("Your password length must be between 8 and 128 characters. Please retry.");
            if (--attempts > 0) 
             promptConfirm()
            }

            var questionsScore = 0;
            var promptQuestions =  [
              { q: "Do you want lowercase values?", a: "t"  }, 
              { q: "Do you want uppercase values?", a: "t"  },
              { q: "Do you want numeric values?", a: "t" },
              { q: "Do you want special characters?", a: "t" }
             ];
             for (i = 0; i < promptQuestions.length; i++) {
              var answer = confirm(promptQuestions[i].q);
              
            
              if (  
                (answer === true && promptQuestions[i].a === 't') ||
                (answer === false && promptQuestions[i].a === 'f')
               ) {    
                questionsScore++;    
                 alert("Your Password Criteria matches the requirements. Moving on.");
               } else {
                  alert("Your Password Must contain lowercase values, uppercase values, and numeric values. Special Characters are optional, but will strengthen your Password.");
                }
              } 
              if (
                questionsScore < 3
              ) {
                  alert("You did not choose enough successful Password criteria. Please go through the options again.")
                }    
            
            if (questionsScore >=3
              
            ) {
            var pass = '';
            var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
                    'abcdefghijklmnopqrstuvwxyz0123456789';
            var strSpecial = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
                   'abcdefghijklmnopqrstuvwxyz0123456789@#?/!%^&*$';
            var answer3 = confirm(promptQuestions[3].q); 
              
                for (i = 1; i <= promptLength; i++) {
                  if (
                   answer3 === true
                  ) {
                   var char = Math.floor(Math.random()
                               * strSpecial.length + 1);
                   pass += strSpecial.charAt(char)

                   } else {
                    var char = Math.floor(Math.random()
                    * str.length + 1);
                    pass += str.charAt(char)
                  }
             }
           return pass;
           // alert("Congratulations, your password is " + pass);
          }       

};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
  var password = promptConfirm();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

generateBtn.addEventListener("click", () => { 
  writePassword();
});





