export const getUsersBlogs = (usersArray) => {
  const getUser = async (userId) => {
    const user = await fetch(
      `https://api.github.com/users/${userId}`
    ).then((result) => result.json());
    return user;
  };

  let promisesArray = [];
  for (let i = 0; i < usersArray.length; i++) {
    promisesArray.push(getUser(usersArray[i]));
  }

  return Promise.all(promisesArray).then((responses) =>
    responses.map((response) => response.blog)
  );
};

/* console.log(getUsersBlogs(["google", "facebook", "gaearon"])); */
