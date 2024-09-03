document.addEventListener('DOMContentLoaded', function() {
    const createStoryBtn = document.getElementById('create-story-btn');
    const archiveBtn = document.getElementById('archive-btn');
    const snackbar = document.getElementById('snackbar');

    function showSnackbar() {
        snackbar.className = "show";
        setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
    }

    createStoryBtn.addEventListener('click', function() {
        let email = prompt("Please enter your email:");
        if (email) {
            // Here you would typically check if the email is registered
            // For now, we'll just simulate this behavior
            if (email.includes('@')) {
                alert("Redirecting to story creation page...");
                // Here you would redirect to the story creation page
            } else {
                alert("Invalid email format. Please try again.");
            }
        } else {
            alert("Email is required to continue.");
        }
    });

    archiveBtn.addEventListener('click', function() {
        alert("Redirecting to login page for archive access...");
        // Here you would redirect to the login page
    });

    // Show welcome message when page loads
    showSnackbar();
});
