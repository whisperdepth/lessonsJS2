export function getTitle() {
  const titleElem = document.querySelector(".title").textContent;
  return titleElem;
}


export function getDescription() {
  const descElem = document.querySelector(".about").innerText;
  return descElem;
}


export function getPlans() {
  const plansElem = document.querySelector(".plans").innerHTML;
  return plansElem;
}


export function getGoal() {
  const goalElem = document.querySelector(".goal").outerHTML;
  return goalElem;
}

