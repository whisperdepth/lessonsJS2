/* export const getUsersBlogs1 = (usersArray) => {
  const getUser = (userId) => {
    const user = fetch(
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
}; */


export const getUsersBlogs = async (usersList) => {
  try {
    const requests = usersList.map((userId) =>
      fetch(`https://api.github.com/users/${userId}`)
      .then((response) =>
        response.json()
      )
    );
    const usersData = await Promise.all(requests);
    return usersData.map(({ blog }) => blog);
  } catch (err) {
    throw new Error("Failed to load data");
  }
};

console.log(getUsersBlogs(["google", "facebook", "gaearon"]));
