import { fetchUserData, fetchRepositories } from "./src/scripts/gateways.js";
import { renderUserData } from "./src/scripts/userRender.js";
import { renderRepos, listElem } from "./src/scripts/reposRender.js";
import { showSpinner, hideSpinner } from "./src/scripts/spinner.js";

const defaultUser = {
  avatar_url: "https://avatars3.githubusercontent.com/u10001",
  name: null,
  location: null,
};

renderUserData(defaultUser);

const showUserBtnElem = document.querySelector(".name-form__btn");
const userNameInputElem = document.querySelector(".name-form__input");

const onSearchUser = async () => {
  listElem.innerHTML = null;
  showSpinner();
  const userName = userNameInputElem.value;

  try {
    const userData = await fetchUserData(userName);
    renderUserData(userData);
    const reposList = await fetchRepositories(userData.repos_url);
    renderRepos(reposList);
  } catch (e) {
    alert(e.message);
  } finally {
    hideSpinner();
  }
};

showUserBtnElem.addEventListener("click", onSearchUser);
