import { data, container, renderUsers, imgUrl, handleKeyUp } from "./index.js";
let lastOnFocuse = null;
const inputField = document.createElement("input");
inputField.classList.add("input");
const addButton = document.createElement("button");
addButton.classList.add("btnA");
addButton.textContent = "Add";

const handleAddClick = () => {
  if (!inputField.value) return;
  data.accounts.push({
    title: inputField.value,
    image: imgUrl,
    id: Math.random() + "",
  });
  inputField.value = null;
  renderUsers(data.accounts);
};
addButton.addEventListener("click", handleAddClick);

const cancelButton = document.createElement("button");
cancelButton.classList.add("btnC");
cancelButton.textContent = "Cancel";

const handleCancelClick = () => {
  inputField.value = null;
  renderUsers(data.accounts);
};

cancelButton.addEventListener("click", handleCancelClick);

const onBlur = (e) => {
  lastOnFocuse = e.target;
};

export const onKeyUp = (e) => {
  if (data.accounts.length === 0) return;
  if (e.keyCode === 40) {
    const toFocuseBtn = lastOnFocuse || document.querySelector(".btnA");
    toFocuseBtn.focus();
  } else if (e.keyCode === 38) {
    document.querySelector(".input").focus();
  } else if (e.keyCode === 39) {
    document.querySelector(".btnC").focus();
  } else if (e.keyCode == 37) {
    document.querySelector(".btnA").focus();
  }
};

addButton.addEventListener("blur", onBlur);
cancelButton.addEventListener("blur", onBlur);

export const renderAddUser = () => {
  container.removeEventListener("keyup", handleKeyUp);
  container.addEventListener("keyup", onKeyUp);
  container.append(addButton, inputField, cancelButton);
  document.querySelector(".input").focus();
};
