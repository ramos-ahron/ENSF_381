document.addEventListener("DOMContentLoaded", function() {

    //Getting HTML elements
    const form = document.getElementById("form");
    const successMessage = document.querySelector(".success-message");
    const usernameMessage = document.querySelector(".username-message");
    const passwordMessage = document.querySelector(".password-message");
    const passwordMatchMessage = document.querySelector(".password-match-message");
    const emailMessage = document.querySelector(".email-message");

    //Getting the values from the form
    form.addEventListener("submit", function(event) {
        //prevents the default behaviour when submitting a form from happening
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;
        const email = document.getElementById("email").value;
        checkUser(username, password, confirmPassword, email);
    });

    //Checks which field was inputted incorrectky 
    function checkUser(username, password, confirmPassword, email) {

        try {  
            //initialize the boolean values and the check values
            let userNameValid = false;
            let passwordMatch = false;
            let passwordValid = false;
            let emailValid = false;
            let containsValidCharacters = /^[a-zA-Z0-9_-]+$/;
            let containsLetter = /^[a-zA-Z]+$/;
            let containsLower = /[a-z]/.test(password);
            let containsUpper = /[A-Z]/.test(password);
            let containsSpace = /\s/.test(password);
            let containsNumber = /\d/.test(password);
            let containsSpecialCharacter = /[!@#$%^&*()\-_=+[\]{};:\'",.<>/?\\|]/.test(password);
            if (username.length >= 3 && username.length <= 20 && containsLetter.test(username[0]) && containsValidCharacters.test(username)) {
                userNameValid = true;
            }
            if(password.length >= 8 && containsUpper && containsLower && !containsSpace && containsNumber && containsSpecialCharacter){
                passwordValid = true;
            }  
            if (confirmPassword === password){
                passwordMatch = true;
            }
            if (isValidEmail(email)){
                emailValid = true;
            }

            //If all of the following field values is true then it will unhide the success message, otherwise hide it and display the message for the following incorrect field inputs
            if (userNameValid && passwordMatch && passwordValid && emailValid) {
                usernameMessage.style.display = "none";
                passwordMessage.style.display = "none";
                passwordMatchMessage.style.display = "none";
                emailMessage.style.display = "none";
                successMessage.style.display = "block";
            } else {
                usernameMessage.style.display = "block";
                passwordMessage.style.display = "block";
                passwordMatchMessage.style.display = "block";
                emailMessage.style.display = "block";
                if(userNameValid){
                    usernameMessage.style.display = "none";
                }
                if(passwordValid){
                    passwordMessage.style.display = "none";
                }
                if(passwordMatch){
                    passwordMatchMessage.style.display = "none";
                }
                if(emailValid){
                    emailMessage.style.display = "none";
                }
                successMessage.style.display = "none";
            }

        //Catch error if API could not be called successfully
        } catch (error) {
            console.error("The API call was unsuccessful:", error);
            alert("The API call was unsuccessful");
        }
    }

    //Check if the inputted email is a valid format
    function isValidEmail(email) {
        var emailExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailExpression.test(email);
    }
});