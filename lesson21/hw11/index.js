export function squaredNumbers() {
  /* const numbersElem1 = document.querySelector(".number");
  const dataNum1 = numbersElem1.dataset.number;
  numbersElem1.dataset.squaredNumber = dataNum1 * dataNum1;

  const numbersElem2 = document.querySelector(".number").nextElementSibling;
  const dataNum2 = numbersElem2.dataset.number;
  numbersElem2.dataset.squaredNumber = dataNum2 * dataNum2;

  const numbersElem3 = document.querySelector(".list").lastElementChild;
  const dataNum3 = numbersElem3.dataset.number;
  numbersElem3.dataset.squaredNumber = dataNum3 * dataNum3; */

  const numbersElems = document.querySelectorAll(".number");
  for (let numbersElem in numbersElems) {
    const dataNum = numbersElem.dataset.number;
    numbersElem.dataset.squaredNumber = dataNum * dataNum;
  }
}

squaredNumbers();
