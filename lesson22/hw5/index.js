const btnElem = document.querySelector(".single-use-btn");
const action = () => {
  console.log("clicked");
  btnElem.removeEventListener("click", action);
};

btnElem.addEventListener("click", action);
