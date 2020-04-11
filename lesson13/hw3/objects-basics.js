export const addPropertyV1 = (userData, userId) => {
  userData.id = userId;
  return userData;
};

export const addPropertyV2 = (userData, userId) =>
  Object.assign(userData, { id: userId });

export const addPropertyV3 = (userData, userId) =>
  Object.assign({}, userData, { id: userId });

export const addPropertyV4 = (userData, userId) => {
  let copy = { ...userData };
  copy.id = userId;
  return copy;
};
