// Register Form Handling
document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("registerEmail").value;
      const password = document.getElementById("registerPassword").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const error = document.getElementById("registerError");

      if (password.length < 6) {
        error.textContent = "Password must be at least 6 characters.";
        return;
      }

      if (password !== confirmPassword) {
        error.textContent = "Passwords do not match.";
        return;
      }

      // Store credentials in localStorage
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

      alert("Registration successful! You can now log in.");
      window.location.href = "index.html";
    });
  }
});
