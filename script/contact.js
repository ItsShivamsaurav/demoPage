document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Simulate sending a message
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Show a success message
    document.getElementById("success-message").textContent = "Thank you, " + name + ". Your message has been sent.";
    document.getElementById("contact-form").reset(); // Reset form fields
});
