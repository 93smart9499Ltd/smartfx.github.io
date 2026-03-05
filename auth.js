// Get users from storage
function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

// Save users
function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

// SIGN UP
function signup() {
    const username = document.getElementById("su-username").value;
    const email = document.getElementById("su-email").value;
    const fullname = document.getElementById("su-fullname").value;
    const password = document.getElementById("su-password").value;
    const phone = document.getElementById("su-phone").value;
    const country = document.getElementById("su-country").value;

    if (!username || !email || !fullname || !password) {
        alert("Please fill in all required fields");
        return;
    }

    const users = getUsers();

    if (users.find(u => u.username === username || u.email === email)) {
        alert("Username or email already exists");
        return;
    }

    users.push({ username, email, fullname, password, phone, country });
    saveUsers(users);

    alert("Account created successfully!");
    window.location.href = "login.html";
}

// LOGIN
function login() {
    const username = document.getElementById("li-username").value;
    const password = document.getElementById("li-password").value;

    const users = getUsers();
    const user = users.find(
        u => u.username === username && u.password === password
    );

    if (user) {
        localStorage.setItem("loggedInUser", username);
        window.location.href = "profile.html";
    } else {
        alert("Invalid login details");
    }
}

// Get current logged-in user
function getCurrentUser() {
    const username = localStorage.getItem("loggedInUser");
    const users = getUsers();
    return users.find(u => u.username === username);
}

// CHECK LOGIN
function checkLogin() {
    const user = getCurrentUser();
    if (!user) {
        window.location.href = "login.html";
    } else {
        document.getElementById("user").textContent = user.username;
        document.getElementById("fullname").textContent = user.fullname;
        document.getElementById("email").textContent = user.email;
        document.getElementById("phone").textContent = user.phone || "-";
        document.getElementById("country").textContent = user.country || "-";
    }
}

// LOGOUT
function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
    
    
}


