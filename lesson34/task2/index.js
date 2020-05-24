const baseUrl = "https://5eca703a38df960016511722.mockapi.io/api/v1/users";

export const getUsersList = () => {
  return fetch(baseUrl).then((response) => response.json());
};

export const getUserById = (userId) => {
  return fetch(`${baseUrl}/${userId}`).then((response) => response.json());
};

export const createUser = (obj) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(obj),
  });
};

export const updateUser = (userId, updatedObjData) => {
  return fetch(`${baseUrl}/${userId}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(updatedObjData),
  });
};

const myUser = {
  age: 35,
};

updateUser(6, myUser);
updateUser(5, myUser);
