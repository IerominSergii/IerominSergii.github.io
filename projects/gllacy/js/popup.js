/* script for open, close and work with popup-forms to send the information */
var link = document.querySelector(".feedback");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var overlay = document.querySelector(".modal-overlay");

var userName = popup.querySelector("[name=user-name]");
var userEmail = popup.querySelector("[name=user-email]");
var userMessage = popup.querySelector("[name=user-comment]");
var form = popup.querySelector("form");
var storage = localStorage.getItem("userName");
// var storage

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  overlay.classList.add("modal-overlay-show");
  if (storage) {
    userName.value = storage;
    userEmail.focus();
  } else {
    userName.focus();
  };
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  overlay.classList.remove("modal-overlay-show");
});

form.addEventListener("submit", function(event) {
  if (!userName.value || !userEmail.value || !userMessage.value) {
    event.preventDefault();
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("userName", userName.value);
  };
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      overlay.classList.remove("modal-overlay-show");
      popup.classList.remove("modal-error");
    }
  }
});

overlay.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  overlay.classList.remove("modal-overlay-show");
  popup.classList.remove("modal-error");
});
