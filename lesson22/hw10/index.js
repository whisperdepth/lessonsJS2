const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

const renderListItems = (listItems) => {
  const listElem = document.querySelector(".list");
  listElem.innerHTML = null;

  const listItemsElems = listItems
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      const checkBoxElem = document.createElement("input");
      checkBoxElem.setAttribute("type", "checkbox");
      checkBoxElem.checked = done;
      checkBoxElem.classList.add("list__item-checkbox");
      listItemElem.append(checkBoxElem, text);

      return listItemElem;
    });

  listElem.append(...listItemsElems);

  const switсhCheckBox = (event) => {
    const currentListItem = event.target.closest(".list__item");
    tasks.forEach((task) => {
      if (task.text == currentListItem.innerText) {
        task.done = event.target.checked;
      }
    });

    renderListItems(tasks);
  };

  const checkBoxElems = document.querySelectorAll(".list__item-checkbox");
  checkBoxElems.forEach((listItem) => {
    listItem.addEventListener("change", switсhCheckBox);
  });
};

const createBtnElem = document.querySelector(".create-task-btn");
const createListItem = () => {
  const inputElem = document.querySelector(".task-input");
  if (inputElem.value == "") return;
  tasks.push({ text: `${inputElem.value}`, done: false });
  inputElem.value = null;

  renderListItems(tasks);
};

createBtnElem.addEventListener("click", createListItem);

renderListItems(tasks);
