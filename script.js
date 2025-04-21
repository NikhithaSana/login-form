document.addEventListener("DOMContentLoaded", () => {
    // Login
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
      loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;
        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");
  
        if (email === storedEmail && password === storedPassword) {
          alert("Login successful!");
          // Redirect or continue
        } else {
          document.getElementById("loginError").textContent = "Invalid username or password";
        }
      });
    }
  
    // Signup
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
      signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;
  
        if (password.length < 6) {
          document.getElementById("signupError").textContent = "Password must be at least 6 characters.";
          return;
        }
  
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        alert("Registration successful! Please login.");
        window.location.href = "index.html";
      });
    }
  
    // Forgot Password
    const forgotForm = document.getElementById("forgotForm");
    if (forgotForm) {
      forgotForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("forgotEmail").value;
        const storedEmail = localStorage.getItem("email");
  
        if (email === storedEmail) {
          const msg = "Your password is: " + localStorage.getItem("password");
          alert(msg);
          document.getElementById("forgotMsg").textContent = "";
        } else {
          document.getElementById("forgotMsg").textContent = "Email not found!";
        }
      });
    }
  });
  