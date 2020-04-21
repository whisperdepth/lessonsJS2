export function createButton(buttonText) {
  const buttonElem = document.createElement("button");
  buttonElem.textContent = buttonText;
  document.querySelector("body").append(buttonElem);
}

