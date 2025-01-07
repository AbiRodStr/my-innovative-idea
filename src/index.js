const dialogs = document.querySelectorAll("dialog");
const showButtons = document.querySelectorAll("dialog + button");

for (let i = 0; i < dialogs.length; i++) {
  showButtons[i].addEventListener("click", () => {
    dialogs[i].showModal();
    let closeButton = dialogs[i].querySelector("button");
    closeButton.addEventListener("click", () => {
      dialogs[i].close();
    });
  });
}
