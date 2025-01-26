// Toggle between Sign In and Sign Up
const container = document.querySelector('.container');
const btnSignIn = document.querySelector('.btnSign-in');
const btnSignUp = document.querySelector('.btnSign-up');

btnSignIn.addEventListener('click', () => {
    container.classList.add('active');
});

btnSignUp.addEventListener('click', () => {
    container.classList.remove('active');
});

// Handle Sign In
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const rememberMe = document.getElementById("remember_me").checked;

    if (!email || !isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    authenticateUser(email, password).then((isAuthenticated) => {
        if (isAuthenticated) {
            alert("Login successful!");

            if (rememberMe) {
                localStorage.setItem('rememberMe', 'true');
                localStorage.setItem('email', email);
                localStorage.setItem('password', password);
            } else {
                localStorage.setItem('rememberMe', 'false');
                localStorage.removeItem('email');
                localStorage.removeItem('password');
            }

            window.location.href = "mainWindow.html";
        } else {
            alert("Invalid email or password. Please try again.");
        }
    });
});

// Handle Sign Up
document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    if (!fullName) {
        alert("Full Name is required.");
        return;
    }

    if (!email || !isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    alert("Account successfully created!");
    window.location.href = "signIn.html";
});

// Email Validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Simulated Authentication
function authenticateUser(email, password) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const mockUser = { email: "test@example.com", password: "password123" };
            resolve(email === mockUser.email && password === mockUser.password);
        }, 1000);
    });
}

// Remember Me Functionality
window.onload = function () {
    if (localStorage.getItem('rememberMe') === 'true') {
        document.getElementById("loginEmail").value = localStorage.getItem('email');
        document.getElementById("loginPassword").value = localStorage.getItem('password');
        document.getElementById("remember_me").checked = true;
    }
};
