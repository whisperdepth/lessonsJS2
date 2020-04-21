export function createButton(buttonText) {
  const buttonElem = document.createElement("button");
  buttonElem.innerText = buttonText;
  document.querySelector("body").append(buttonElem);
}

