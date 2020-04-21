export function finishList() {
  const listElem1 = document.createElement("li");
  listElem1.textContent = "1";
  document.querySelector(".list").prepend(listElem1);
  const listElem4 = document.createElement("li");
  listElem4.textContent = "4";
  document.querySelector(".special").before(listElem4)
  const listElem6 = document.createElement("li");
  listElem6.textContent = "6";
  document.querySelector(".special").after(listElem6);
  const listElem8 = document.createElement("li");
  listElem8.textContent = "8";
  document.querySelector(".list").append(listElem8);
}
