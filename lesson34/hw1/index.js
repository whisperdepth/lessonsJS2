const baseUrl = "https://5eca703a38df960016511722.mockapi.io/api/v1/users";

export const getUsersList = () => {
  return fetch(baseUrl).then((response) => response.json());
};

export const getUserById = (userId) => {
  return fetch(`${baseUrl}/${userId}`).then((response) => response.json());
};

export const createUser = (user) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(user),
  });
};

export const updateUser = (userId, updatedUserData) => {
  return fetch(`${baseUrl}/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(updatedUserData),
  });
};

export const deleteUser = (userId) => {
  return fetch(`${baseUrl}/${userId}`, {
    method: "DELETE",
  });
};
