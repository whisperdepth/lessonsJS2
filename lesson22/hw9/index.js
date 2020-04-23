const btns = document.querySelectorAll(".pagination__page");
const action = (event) => console.log(event.target.dataset.pageNumber);

btns.forEach((btn) => {
  btn.addEventListener("click", action);
});
