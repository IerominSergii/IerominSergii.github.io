/*script for open, close and work with popup-form to send the message*/
var link = document.querySelector(".map-btn .btn");
var popup = document.querySelector(".modal-content");
var overlay = document.querySelector(".modal-overlay");
var close = popup.querySelector(".modal-content-close");
var userName = popup.querySelector("[name=userName]");
var userEmail = popup.querySelector("[name=userEmail]");
var userMessage = popup.querySelector("[name=userMessage]");
var form = popup.querySelector("form");
var storage = localStorage.getItem("userName");

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
/* if storage */

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  overlay.classList.remove("modal-overlay-show");
  popup.classList.remove("modal-error");
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
    };
  };
});

overlay.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  overlay.classList.remove("modal-overlay-show");
  popup.classList.remove("modal-error");
});
