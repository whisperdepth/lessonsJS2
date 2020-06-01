export const fetchUserData = async (userName) => {
  const response = await fetch(`https://api.github.com/users/${userName}`);
  if (response.status === 200) return await response.json();
  throw new Error("Failed to load data");
};

export const fetchRepositories = async (url) => {
  const response = await fetch(url);
  if (response.status === 200) return await response.json();
  throw new Error("Failed to load data");
};
