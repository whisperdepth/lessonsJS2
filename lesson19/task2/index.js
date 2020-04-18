export function getOwnProps(obj) {
    let arr = []
  if(obj.hasOwnProperty(prop)){
      arr.push(prop);
  }
  return arr;
}
