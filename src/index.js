const button = document.querySelector("button#empowering");
const showButton = document.querySelector("button#empowering + button");
const closeButton = document.querySelector("button#empowering button");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

const  = document.querySelector("dialog#academic");
const showButton = document.querySelector("dialog#academic + button");
const closeButton = document.querySelector("dialog#academic button");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});
