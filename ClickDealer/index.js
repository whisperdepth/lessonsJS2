// в условии сказано про Json, для простоты использовал сразу объект, все равно Json надо распарсить const obj = JSON.parse(json) и работать уже с объектом
// в условии не сказано, что должно произойти, когда массив пустой, поэтому на свое усмотрение я заблокировал удаление последнего оставшегося элемента

import { renderAddAccount, onKeyUp } from "./addAccount.js";
export const imgUrl = "https://avatars1.githubusercontent.com/u/9919?v=4";
export const data = {
  accounts: [
    {
      title: "user1",
      image: imgUrl,
      id: Math.random() + "",
    },
    {
      title: "user2",
      image: imgUrl,
      id: Math.random() + "",
    },
    {
      title: "user3",
      image: imgUrl,
      id: Math.random() + "",
    },
  ],
};


let lastOnFocuse = null;

export const container = document.querySelector("#root");
const listButton = document.createElement("button");
listButton.classList.add("list-btn");
listButton.textContent = "ADD";

const handleClick = () => {
  container.innerHTML = null;
  renderAddAccount();
};
listButton.addEventListener("click", handleClick);

export const handleKeyUp = (e) => {
  if (data.accounts.length === 0) return;
  if (e.keyCode === 40 && document.activeElement.nextElementSibling) {
    document.activeElement.nextElementSibling.focus();
  } else if (
    e.keyCode === 38 &&
    document.activeElement.previousElementSibling
  ) {
    document.activeElement.previousElementSibling.focus();
  } else if (e.keyCode === 39) {
    document.querySelector(".list-btn").focus();
  } else if (
    e.keyCode === 37 &&
    document.activeElement === document.querySelector(".list-btn")
  ) {
    lastOnFocuse.focus();
  } else if (e.keyCode === 37) {
    if (data.accounts.length < 2) return;
    data.accounts = data.accounts.filter((user) => {
      return user.id !== document.activeElement.dataset.id;
    });

    renderUsers(data.accounts);
  }
};

const handleBlur = (e) => {
  lastOnFocuse = e.target;
};

export const renderUsers = (accounts) => {
  container.innerHTML = null;
  container.removeEventListener("keyup", onKeyUp);
  container.addEventListener("keyup", handleKeyUp);

  const listItems = accounts.map((user) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-item");
    listItem.tabIndex = 0;
    listItem.addEventListener("blur", handleBlur);
    listItem.dataset.id = user.id;

    const userImg = document.createElement("img");
    userImg.classList.add("img");
    userImg.src = user.image;
    userImg.alt = "user avatar";

    const userTitle = document.createElement("span");
    userTitle.textContent = user.title;

    listItem.append(userImg, userTitle);
    return listItem;
  });

  const usersList = document.createElement("ul");
  usersList.classList.add("list");

  usersList.append(...listItems);
  container.append(usersList, listButton);

  document.querySelector(".list-item").focus();
};

renderUsers(data.accounts);
