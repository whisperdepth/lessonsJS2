const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

const renderListItems = (listItems) => {
  const listElem = document.querySelector(".list");

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

const listItemElems = document.querySelectorAll(".list__item");
const checkBoxElems = document.querySelectorAll(".list__item-checkbox");
console.log(listItemElems);

const swithCheckBox = (event) => {
    if (event.target.checked) return event.target.closest(".list__item").classList.add("list__item_done");
    event.target.closest(".list__item").classList.remove("list__item_done");
};

checkBoxElems.forEach((listItemElem) => {
  listItemElem.addEventListener("change", swithCheckBox);
});
