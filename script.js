const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");
const form = document.getElementById("login-form");

existingBtn.style.display = "none";

window.addEventListener("DOMContentLoaded", () => {
  const savedUser = localStorage.getItem("username");
  const savedPass = localStorage.getItem("password");

  if (savedUser !== null && savedPass !== null) {
    existingBtn.style.display = "block";
  }
});


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  alert(`Logged in as ${username}`);

  if (checkbox.checked) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    existingBtn.style.display = "block";
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    existingBtn.style.display = "none";
  }

  form.reset();
});

existingBtn.addEventListener("click", () => {
  const savedUser = localStorage.getItem("username");
  if (savedUser) {
    alert(`Logged in as ${savedUser}`);
  }
});
