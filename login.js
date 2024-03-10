document.addEventListener("DOMContentLoaded", function() {

    //Getting the HTML elements
    const form = document.getElementById("form");
    const messageContainer = document.getElementById("message-box");
    const successMessage = document.querySelector(".success-message");
    const errorMessage = document.querySelector(".error-message");

    //Function for when a user submits the form
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        fetchUsers(username, password);
    });

    //asynchronous function that checks whether username and password matches any data from the URL
    async function fetchUsers(username, password) {
        try {
            //Initiates GET Request and parse the JSON data in the URL
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            
            let userFound = false;
            data.forEach(user => {
                if (user.username === username && user.email === password) {
                    userFound = true;
                }
            });

            //Displays error message if user is not found and hides the success message and vice versa
            if (userFound) {
                console.log("Found");
                errorMessage.style.display = "none";
                successMessage.style.display = "block";
            } else {
                console.log("Not Found");
                errorMessage.style.display = "block";
                successMessage.style.display = "none";
            }
        } catch (error) {
            console.error("The API call was unsuccessful:", error);
            alert("The API call was unsuccessful");
        }
    }
});