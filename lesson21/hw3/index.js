export function getTitle() {
  const titleElem = document.querySelector(".title").textContent;
  return titleElem;
}

getTitle();

export function getDescription() {
  const descElem = document.querySelector(".about").innerText;
  return descElem;
}

getDescription();

export function getPlans() {
  const plansElem = document.querySelector(".plans").innerHTML;
  return plansElem;
}

getPlans();

export function getGoal() {
  const goalElem = document.querySelector(".goal").outerHTML;
  return goalElem;
}

getGoal();
