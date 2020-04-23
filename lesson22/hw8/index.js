const checkboxElem = document.querySelector(".task-status");
const action = (event) => console.log(event.target.checked);

checkboxElem.addEventListener("change", action);
