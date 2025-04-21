// Reset Password
document.addEventListener("DOMContentLoaded", () => {
    const resetForm = document.getElementById("resetForm");
  
    if (resetForm) {
      resetForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const email = document.getElementById("resetEmail").value;
        const newPassword = document.getElementById("newPassword").value;
        const confirmNewPassword = document.getElementById("confirmNewPassword").value;
        const storedEmail = localStorage.getItem("email");
        const error = document.getElementById("resetError");
  
        if (email !== storedEmail) {
          error.textContent = "Email not found.";
          return;
        }
  
        if (newPassword.length < 6) {
          error.textContent = "Password must be at least 6 characters.";
          return;
        }
  
        if (newPassword !== confirmNewPassword) {
          error.textContent = "Passwords do not match.";
          return;
        }
  
        localStorage.setItem("password", newPassword);
        alert("Password reset successful!");
        window.location.href = "index.html";
      });
    }
  });
  