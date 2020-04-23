const inputElem = document.querySelector(".text-input");
const action = (event) => console.log(event.target.value);
inputElem.addEventListener("change", action);