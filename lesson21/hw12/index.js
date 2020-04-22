export function getSection(num){
   const sectionElem = document.querySelector(`span[data-number="${num}"]`);
   const parent = sectionElem.closest(".box");
   const result = parent.dataset.section;
   return result;
}
