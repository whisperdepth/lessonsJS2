export function getTitle() {
  const titleElem = document.querySelector(".title").textContent;
  console.dir(titleElem);
  return titleElem;
}

getTitle();

export function getDescription() {
  const descElem = document.querySelector(".about").innerText;
  console.dir(descElem);
  return descElem;
}

getDescription();

export function getPlans() {
  const plansElem = document.querySelector(".plans").innerHTML;
  console.dir(plansElem);
  return plansElem;
}

getPlans();

export function getGoal() {
  const goalElem = document.querySelector(".goal").outerHTML;
  console.dir(goalElem);
  return goalElem;
}

getGoal();
