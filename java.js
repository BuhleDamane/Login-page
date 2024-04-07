alert("Hello Visitor, the username is 'Visitor' & the Password is 'Visitor.com'")

document.getElementById("details").addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();  
let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

  // Check if the username and password match the expected values
  if (username === "Visitor" && password === "Visitor.com") {
    // If correct, alert the user
    alert("Login successful! Username: " + username + ", Password: " + password);
  } else {
    // If incorrect, update the input fields to show an error message
    alert("Enter correct login details.")
  }
  
});