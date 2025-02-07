// Get the form and error message elements
const signupForm = document.getElementById('signup-form');
const errorMessage = document.getElementById('error-message');

// Function to validate the form input
function validateForm(event) {
    event.preventDefault();  // Prevent form submission to validate first

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Reset the error message
    errorMessage.textContent = '';

    // Simple validations
    if (!name || !email || !password || !confirmPassword) {
        errorMessage.textContent = 'All fields are required.';
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match. Please try again.';
        return;
    }

    // If all validations pass, display success message
    alert('Sign-Up Successful! You can now log in.');
    
    // Redirect to the sign-in page after successful registration
    window.location.href = 'sign-in.html';  // Replace with your actual sign-in page URL
}

// Add event listener to the form
signupForm.addEventListener('submit', validateForm);
