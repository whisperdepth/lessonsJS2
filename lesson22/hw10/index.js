const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];
const listElem = document.querySelector(".list");

const renderListItems = (listItems) => {
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
};

renderListItems(tasks);

const lisItemElems = document.querySelectorAll(".list__item");
const checkBoxElems = document.querySelectorAll(".list__item-checkbox");

const swithCheckBox = (event) => {
  const sorting = () =>
    lisItemElems.forEach((lisItemElem) => {
      if (lisItemElem.classList.contains("list__item_done")) {
        lisItemElem.remove();
        listElem.append(lisItemElem);
      }
    });

  if (event.target.checked) {
    event.target.closest(".list__item").classList.add("list__item_done");
    sorting();
    return;
  }
  event.target.closest(".list__item").classList.remove("list__item_done");
  sorting();
};

checkBoxElems.forEach((listItemElem) => {
  listItemElem.addEventListener("change", swithCheckBox);
});

const createBtnElem = document.querySelector(".create-task-btn");
const createTask = () => {
  const listItemElem = document.createElement("li");
  listItemElem.classList.add("list__item");

  const checkBoxElem = document.createElement("input");
  checkBoxElem.setAttribute("type", "checkbox");
  checkBoxElem.classList.add("list__item-checkbox");

  const inputElem = document.querySelector(".task-input");
  if (inputElem.value == "") return;
  listItemElem.append(checkBoxElem, inputElem.value);
  inputElem.value = "";
  listElem.prepend(listItemElem);
  listItemElem.addEventListener("change", swithCheckBox);
};

createBtnElem.addEventListener("click", createTask);
