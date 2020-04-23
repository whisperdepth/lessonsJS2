const checkboxElem = document.querySelector(".task-status");
const action = () => console.log(checkboxElem.checked);
checkboxElem.addEventListener("change", action);
