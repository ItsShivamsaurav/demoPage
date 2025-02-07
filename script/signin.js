// Get the form and error message elements
const signInForm = document.getElementById('sign-in-form');
const errorMessage = document.getElementById('error-message');

// Dummy credentials for validation (you can replace this with actual database checks)
const validEmail = 'user@example.com';
const validPassword = 'password123';

// Function to validate the form input
function validateForm(event) {
    event.preventDefault();  // Prevent form submission to validate first

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Reset the error message
    errorMessage.textContent = '';

    // Check if email and password match the valid credentials
    if (email === validEmail && password === validPassword) {
        alert('Sign-In Successful! Welcome to EduOnline.');
        // Redirect to the homepage or dashboard after successful sign-in
        window.location.href = 'homepage.html';  // Replace with your actual homepage URL
    } else {
        errorMessage.textContent = 'Invalid email or password. Please try again.';
    }
}

// Add event listener to the form
signInForm.addEventListener('submit', validateForm);
