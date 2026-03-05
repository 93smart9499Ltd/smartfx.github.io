// Get all users
function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

// Save users
function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// CREATE ACCOUNT
function signup() {
  const username = document.getElementById("su-username").value.trim();
  const password = document.getElementById("su-password").value.trim();

  if (!username || !password) {
    alert("Please fill all fields");
    return;
  }

  const users = getUsers();

  if (users.find(u => u.username === username)) {
    alert("Username already exists");
    return;
  }

  users.push({ username, password });
  saveUsers(users);

  alert("Account created successfully");
  window.location.href = "login.html";
}

// LOGIN
function login() {
  const username = document.getElementById("li-username").value.trim();
  const password = document.getElementById("li-password").value.trim();

  const users = getUsers();
  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (user) {
    localStorage.setItem("loggedInUser", username);
    window.location.href = "profile.html";
  } else {
    alert("Incorrect login details");
  }
}

// CHECK LOGIN (protect profile)
function checkLogin() {
  const user = localStorage.getItem("loggedInUser");

  if (!user) {
    window.location.href = "login.html";
  } else {
    document.getElementById("username").textContent = user;
  }
}

// LOGOUT
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
} 
