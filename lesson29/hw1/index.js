export const requestUserData = (userId, callback) => {

  if (userId == "broken") {
    callback(null, "failed to load userdata");
    return;
  }


  const data = {
    userId: userId,
    email: `${userId}@example.com`,
  };

  setTimeout(() => callback(data), Math.ceil(Math.random() * 3));

  
};

/* const callback = (error) => {
  if (error) {
    console.log(error);
  }
};

requestUserData("broken", callback); */
