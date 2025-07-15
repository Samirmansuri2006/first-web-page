// --- Register ---
function registerUser() {
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword').value;

  const msg = document.getElementById('regMsg');

  if (!name || !email || !password) {
    msg.textContent = "All fields are required.";
    msg.style.color = "red";
    return;
  }

  const user = { name, email, password: btoa(password) };

  localStorage.setItem(email, JSON.stringify(user));

  msg.textContent = "Registration successful. You can now log in.";
  msg.style.color = "green";

  document.getElementById('regName').value = "";
  document.getElementById('regEmail').value = "";
  document.getElementById('regPassword').value = "";
}

// --- Login ---
function loginUser() {
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  const msg = document.getElementById('loginMsg');

  const stored = localStorage.getItem(email);
  if (!stored) {
    msg.textContent = "User not found.";
    msg.style.color = "red";
    return;
  }

  const user = JSON.parse(stored);
  if (user.password !== btoa(password)) {
    msg.textContent = "Incorrect password.";
    msg.style.color = "red";
    return;
  }

  // Success: Save session
  sessionStorage.setItem("loggedInUser", email);
  window.location.href = "welcome.html";
}

// --- Welcome Page Access ---
if (window.location.pathname.includes("welcome.html")) {
  const userEmail = sessionStorage.getItem("loggedInUser");

  if (!userEmail) {
    alert("Access denied. Please log in first.");
    window.location.href = "login.html";
  } else {
    const user = JSON.parse(localStorage.getItem(userEmail));
    const name = user?.name || "User";
    document.getElementById("welcomeText").textContent = `Welcome, ${name}`;
  }
}

// --- Logout ---
function logoutUser() {
  sessionStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}
