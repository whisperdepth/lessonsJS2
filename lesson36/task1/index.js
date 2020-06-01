export const fetchUser = async (userName) => {
  try {
    const response = await fetch(`https//:api.github.com/users/${userName}`);
    if (!response.ok) return null;

    const userData = await response.json();
    return userData;
  }catch(e){
      throw new Error("Failed to fetch user")
  }
};
