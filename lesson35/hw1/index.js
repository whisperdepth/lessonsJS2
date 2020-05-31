export const parseUser = (jsonString) => {
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    return null;
  }
};
