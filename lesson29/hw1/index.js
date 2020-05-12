export const requestUserData = (userId, callback) => {

  if (userId == "broken") {
    callback(null, "Failed to load user data");
    return;
  }


  const data = {
    userId: userId,
    email: `${userId}@example.com`,
  };

  setTimeout(() => callback(data), Math.ceil(Math.random() * 3 * 1000));

  
};

