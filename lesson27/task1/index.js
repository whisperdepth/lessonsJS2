/* localStorage.clear(); */
export const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;  
    try{
        newValue = JSON.parse(value);
      }catch(){
        newValue = value;
      }
    return {
      ...acc,
      [key]: newValue,
    };
  }, {});
};
