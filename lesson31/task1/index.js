export const requestUserData = (id) => {
  const request = new Promise((resolve, reject) => {
    if (id == "broken") {
      setTimeout(() => {
        reject(new Error("User not found"));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({
          name: John,
          age: 17,
          userId: id,
          email: `${id}@example.com`,
        });
      }, 1000);
    }
  });

  return request;
};
