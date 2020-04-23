const btnElem1 = document.querySelector(".btn");
const btnElem2 = document.querySelector(".btn").nextElementSibling;

const handleClick = (event) => console.log(event.target.textContent);
btnElem1.addEventListener("click", handleClick);
btnElem2.addEventListener("click", handleClick);
