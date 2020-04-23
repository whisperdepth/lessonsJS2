const inputElem = document.querySelector(".text-input");
const action = () => console.log(inputElem.value);
inputElem.addEventListener("change", action);
