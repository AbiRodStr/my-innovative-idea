const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button#empowering");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});
