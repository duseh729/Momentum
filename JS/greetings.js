const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.getElementById("greeting");
const logOutInput = document.getElementById("logOutInput");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

let savedUsername = localStorage.getItem(USERNAME_KEY);

userIs();
function userIs() {
  if (savedUsername == null) {
    //show the form
    logOutInput.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
  } else {
    //show the greetings
    loginForm.classList.add(HIDDEN_CLASSNAME);
    logOutInput.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
  }
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings(loginInput.value);
  loginInput.value = "";
  savedUsername = localStorage.getItem(USERNAME_KEY);
  userIs();
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function logOutRun() {
  localStorage.removeItem(USERNAME_KEY);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  logOutInput.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
logOutInput.addEventListener("click", logOutRun);
