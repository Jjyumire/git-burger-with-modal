// modal elements
const open = document.querySelector(".open");
const modalBackdrop = document.querySelector(".modal-backdrop");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
// modal elements

// content elements
const apply = document.querySelector(".apply");
const inputGroup = document.querySelector(".modal-content");
const modalGreeting = document.querySelector(".modal-greeting");
// content elements

// global variable
let timeout;

// global variable

// modal events
const removeModalClasses = () => {
  modal.classList.remove("show-modal");
  modalBackdrop.classList.remove("show-modal-backdrop");
};

const checkContentClasses = () => {
  return (
    inputGroup.classList.contains("hide-content") &&
    modalGreeting.classList.contains("show-content")
  );
};

const removeContentClasses = () => {
  inputGroup.classList.remove("hide-content");
  modalGreeting.classList.remove("show-content");
};

const checkAndClearTimeout = () => {
  if (timeout) {
    clearTimeout(timeout);
    timeout = undefined;
  }
};

open.addEventListener("click", () => {
  modal.classList.add("show-modal");
  modalBackdrop.classList.add("show-modal-backdrop");
});

modalBackdrop.addEventListener("click", () => {
  removeModalClasses();

  if (checkContentClasses()) {
    removeContentClasses();
  }
  checkAndClearTimeout();
});

close.addEventListener("click", () => {
  removeModalClasses();
  if (checkContentClasses()) {
    removeContentClasses();
  }
  checkAndClearTimeout();
});

modal.addEventListener("click", (event) => {
  event.stopPropagation();
});
// modal events

// content events
apply.addEventListener("click", () => {
  inputGroup.classList.add("hide-content");
  modalGreeting.classList.add("show-content");

  timeout = setTimeout(() => {
    removeModalClasses();
    removeContentClasses();
  }, 2000);
});

// content events