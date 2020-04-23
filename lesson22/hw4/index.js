const inputElem = document.querySelector(".search__input");
const inputText = () => console.log(inputElem.value);
const searchBtnElem = document.querySelector(".search__btn");
searchBtnElem.addEventListener("click", inputText);
