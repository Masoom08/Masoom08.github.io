document.addEventListener("DOMContentLoaded", function () {

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Form validation logic
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        const name = form.querySelector('input[name="name"]');
        const email = form.querySelector('input[name="email"]');
        const message = form.querySelector('textarea[name="message"]');

        // Clear previous error messages
        clearErrors();

        // Validate name, email, and message fields
        if (!name.value) {
            showError(name, "Name is required.");
            event.preventDefault();
        }
        if (!email.value || !validateEmail(email.value)) {
            showError(email, "Please provide a valid email.");
            event.preventDefault();
        }
        if (!message.value) {
            showError(message, "Message is required.");
            event.preventDefault();
        }
    });

    // Helper function to display error messages
    function showError(input, message) {
        const errorElement = document.createElement('div');
        errorElement.className = 'error';
        errorElement.innerText = message;
        input.parentElement.appendChild(errorElement);
        input.classList.add('input-error');
    }

    // Helper function to clear all error messages
    function clearErrors() {
        document.querySelectorAll('.error').forEach(error => error.remove());
        document.querySelectorAll('.input-error').forEach(input => input.classList.remove('input-error'));
    }

    // Email validation helper function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    console.log("Portfolio scripts loaded successfully");
});
