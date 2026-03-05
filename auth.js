// Demo credentials
const validUser = {
    username: "admin",
    password: "1234"
};

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validUser.username && password === validUser.password) {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("username", username);
        window.location.href = "profile.html";
    } else {
        alert("Invalid login details");
    }
}

function checkLogin() {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html";
    } else {
        document.getElementById("user").textContent =
            localStorage.getItem("username");
    }
}

function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}

