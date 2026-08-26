document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("password-modal");
    const overlay = document.getElementById("modal-overlay");
    const passwordInput = document.getElementById("password-input");
    const submitButton = document.getElementById("submit-password");
    const errorMessage = document.getElementById("error-message");

    const correctPassword = "rubyredshoes"; // Replace with your actual password
    let failedAttempts = 0;
    const maxAttempts = 3;
    const cooldownTime = 30; // Cooldown time in seconds

    function lockout() {
        submitButton.disabled = true;
        passwordInput.disabled = true;
        errorMessage.textContent = `Too many failed attempts. Please wait ${cooldownTime} seconds.`;

        let remainingTime = cooldownTime;
        const countdownInterval = setInterval(() => {
            remainingTime--;
            errorMessage.textContent = `Too many failed attempts. Please wait ${remainingTime} seconds.`;
            if (remainingTime <= 0) {
                clearInterval(countdownInterval);
                submitButton.disabled = false;
                passwordInput.disabled = false;
                errorMessage.textContent = "";
                failedAttempts = 0;
            }
        }, 1000);
    }

    submitButton.addEventListener("click", function () {
        if (submitButton.disabled) return;

        if (passwordInput.value === correctPassword) {
            modal.style.display = "none";
            overlay.style.display = "none"; // Hide overlay
        } else {
            failedAttempts++;
            if (failedAttempts >= maxAttempts) {
                lockout();
            } else {
                errorMessage.textContent = `Incorrect password. You have ${
                    maxAttempts - failedAttempts
                } attempts remaining.`;
            }
        }
        passwordInput.value = "";
    });

    // Show modal and overlay on page load
    modal.style.display = "block";
    overlay.style.display = "block";

    passwordInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter" && !submitButton.disabled) {
            submitButton.click();
        }
    });
});




document.onkeydown = function(e) {
if(event.keyCode == 123) {
return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
return false;
}
}