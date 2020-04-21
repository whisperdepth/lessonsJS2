export function getItemsList() {
  const elementsList = document.querySelectorAll(".technology");
  console.dir(elementsList);
  return elementsList;
}

getItemsList();

export function getItemsArray() {
  const elementsArray = [...document.querySelectorAll(".tool")];
  console.dir(elementsArray);
  return elementsArray;
}

getItemsArray();
